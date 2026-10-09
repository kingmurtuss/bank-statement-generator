const bankProfiles = {
  kotak: {
    name: 'Kotak Mahindra Bank',
    accent: '#D92F32',
    bg: '#fff4f4',
    ifsc: 'KKBK0001234'
  },
  hdfc: {
    name: 'HDFC Bank',
    accent: '#0047AB',
    bg: '#eef5ff',
    ifsc: 'HDFC0001234'
  },
  icici: {
    name: 'ICICI Bank',
    accent: '#ff8f1f',
    bg: '#fff5eb',
    ifsc: 'ICIC0001234'
  },
  sbi: {
    name: 'State Bank of India',
    accent: '#0b8a68',
    bg: '#eefcf6',
    ifsc: 'SBIN0001234'
  },
  axis: {
    name: 'Axis Bank',
    accent: '#7f3fbf',
    bg: '#f5f0ff',
    ifsc: 'UTIB0001234'
  }
};

const descriptors = [
  'Salary Credit',
  'UPI Transfer',
  'ATM Withdrawal',
  'Bill Payment',
  'Rent Deposit',
  'Shopping Expense',
  'Client Payment',
  'Fuel Refill',
  'Internet Bill',
  'Insurance Premium',
  'MRT Cash Deposit',
  'Investment Return',
  'Food Purchase',
  'Mobile Recharge',
  'Grocery Purchase'
];

const moneyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2
});

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric'
});

const summaryFormatter = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric'
});

function toDateString(date) {
  return date.toISOString().slice(0, 10);
}

function formatMoney(value) {
  return moneyFormatter.format(value);
}

function formatShortDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return dateFormatter.format(date);
}

function getDateDifferenceInDays(startDate, endDate) {
  const start = new Date(startDate + 'T00:00:00');
  const end = new Date(endDate + 'T00:00:00');
  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}

function createTransactionEntries(startDate, endDate, openingBalance) {
  const transactions = [];
  let currentBalance = Number(openingBalance);
  const diffDays = getDateDifferenceInDays(startDate, endDate);

  for (let i = 0; i <= diffDays; i += 1) {
    const currentDate = new Date(startDate + 'T00:00:00');
    currentDate.setDate(currentDate.getDate() + i);

    const dateKey = toDateString(currentDate);
    const dayOfMonth = currentDate.getDate();
    const dayMode = (dayOfMonth % 4 + i) % 3;

    const txCount = dayMode === 0 ? 1 : dayMode === 1 ? 2 : 3;

    for (let j = 0; j < txCount; j += 1) {
      const baseIndex = ((i + 1) * (j + 2)) % descriptors.length;
      const descriptor = descriptors[baseIndex];
      const isCredit = (i + j) % 3 !== 0;
      const amount = Number((((dayOfMonth * (j + 5)) % 4700) + 1500).toFixed(2));
      const transactionAmount = isCredit ? amount : amount * 0.8 + 180;
      const finalAmount = Number(transactionAmount.toFixed(2));

      if (isCredit) {
        currentBalance += finalAmount;
      } else {
        currentBalance -= finalAmount;
      }

      transactions.push({
        date: dateKey,
        description: descriptor,
        type: isCredit ? 'credit' : 'debit',
        amount: finalAmount,
        balance: Number(currentBalance.toFixed(2))
      });
    }
  }

  return transactions;
}

function updateBankTheme(bankKey) {
  const profile = bankProfiles[bankKey] || bankProfiles.kotak;
  const badge = document.getElementById('bankBadge');
  badge.textContent = profile.name;
  badge.style.background = profile.bg;
  badge.style.borderColor = profile.accent + '33';
  badge.style.color = profile.accent;

  document.documentElement.style.setProperty('--primary', profile.accent);
  document.documentElement.style.setProperty('--primary-soft', profile.accent + '20');
}

function renderStatementData(transactions, openingBalance) {
  const tableBody = document.getElementById('transactionTableBody');
  tableBody.innerHTML = '';

  let credits = 0;
  let debits = 0;

  transactions.forEach((entry) => {
    const row = document.createElement('tr');

    const amountClass = entry.type === 'credit' ? 'amount-credit' : 'amount-debit';
    const typeClass = entry.type === 'credit' ? 'type-credit' : 'type-debit';

    const formattedAmount = entry.type === 'credit' ? `+${formatMoney(entry.amount)}` : `-${formatMoney(entry.amount)}`;

    if (entry.type === 'credit') {
      credits += entry.amount;
    } else {
      debits += entry.amount;
    }

    row.innerHTML = `
      <td>${formatShortDate(entry.date)}</td>
      <td>${entry.description}</td>
      <td><span class="type-pill ${typeClass}">${entry.type}</span></td>
      <td class="${amountClass}">${formattedAmount}</td>
      <td>${formatMoney(entry.balance)}</td>
    `;

    tableBody.appendChild(row);
  });

  const closingBalance = Number(openingBalance) + credits - debits;
  const openingValue = document.getElementById('openingValue');
  const creditValue = document.getElementById('creditValue');
  const debitValue = document.getElementById('debitValue');
  const closingValue = document.getElementById('closingValue');

  openingValue.textContent = formatMoney(Number(openingBalance));
  creditValue.textContent = formatMoney(credits);
  debitValue.textContent = formatMoney(debits);
  closingValue.textContent = formatMoney(closingBalance);

  document.getElementById('closingValue').textContent = formatMoney(closingBalance);
}

function updateDateRange() {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const rangeText = `${summaryFormatter.format(new Date(startDate + 'T00:00:00'))} - ${summaryFormatter.format(new Date(endDate + 'T00:00:00'))}`;
  document.getElementById('dateRangeLabel').textContent = rangeText;
}

function generateStatementDataFromForm() {
  const holderName = document.getElementById('holderName').value;
  const accountNumber = document.getElementById('accountNumber').value;
  const ifscCode = document.getElementById('ifscCode').value;
  const bankKey = document.getElementById('bankTemplate').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const openingBalance = Number(document.getElementById('openingBalance').value);

  if (!holderName || !accountNumber || !ifscCode || !startDate || !endDate) {
    return;
  }

  const transactions = createTransactionEntries(startDate, endDate, openingBalance);
  renderStatementData(transactions, openingBalance);
  updateDateRange();
  updateBankTheme(bankKey);

  document.getElementById('ifscCode').value = ifscCode.toUpperCase();
  document.getElementById('accountNumber').value = accountNumber.replace(/\D/g, '').slice(0, 16);

  const bankProfile = bankProfiles[bankKey] || bankProfiles.kotak;
  const state = {
    holderName,
    accountNumber,
    ifscCode: ifscCode.toUpperCase(),
    bankName: bankProfile.name,
    startDate,
    endDate,
    openingBalance,
    transactions,
    closingBalance: openingBalance + transactions.filter((t) => t.type === 'credit').reduce((sum, item) => sum + item.amount, 0) - transactions.filter((t) => t.type === 'debit').reduce((sum, item) => sum + item.amount, 0)
  };

  window.latestStatement = state;
}

function downloadStatementPdf() {
  const statement = window.latestStatement;
  if (!statement) {
    generateStatementDataFromForm();
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const bankProfile = bankProfiles[document.getElementById('bankTemplate').value] || bankProfiles.kotak;

  doc.setFillColor(31, 111, 235);
  doc.rect(0, 0, 210, 42, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(bankProfile.name, 14, 20);
  doc.setFontSize(10);
  doc.text('Account Statement', 14, 28);

  doc.setTextColor(28, 35, 43);
  doc.setFontSize(12);
  doc.text(`Account Holder: ${statement.holderName}`, 14, 56);
  doc.text(`Account Number: ${statement.accountNumber}`, 14, 64);
  doc.text(`IFSC: ${statement.ifscCode}`, 14, 72);
  doc.text(`Period: ${statement.startDate} to ${statement.endDate}`, 110, 56);
  doc.text(`Opening Balance: ${formatMoney(statement.openingBalance)}`, 110, 64);
  doc.text(`Closing Balance: ${formatMoney(statement.closingBalance)}`, 110, 72);

  doc.setDrawColor(220, 220, 220);
  doc.line(14, 82, 196, 82);

  let y = 92;
  const colX = [14, 42, 103, 142, 175];
  const headers = ['Date', 'Narration', 'Type', 'Amt', 'Bal'];

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  headers.forEach((header, index) => {
    doc.text(header, colX[index], y);
  });

  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);

  statement.transactions.slice(0, 28).forEach((entry) => {
    if (y > 250) {
      doc.addPage();
      y = 18;
    }

    const displayType = entry.type === 'credit' ? 'CR' : 'DR';
    const amountStr = entry.type === 'credit' ? `+${entry.amount.toFixed(2)}` : `-${entry.amount.toFixed(2)}`;
    const balanceStr = entry.balance.toFixed(2);

    doc.text(formatShortDate(entry.date), colX[0], y);
    doc.text(String(entry.description).slice(0, 18), colX[1], y);
    doc.text(displayType, colX[2], y);
    doc.text(amountStr, colX[3], y);
    doc.text(balanceStr, colX[4], y);
    y += 6;
  });

  doc.save(`${statement.accountNumber}_statement.pdf`);
}

document.getElementById('statement-form').addEventListener('submit', (event) => {
  event.preventDefault();
  generateStatementDataFromForm();
});

document.getElementById('downloadPdf').addEventListener('click', () => {
  downloadStatementPdf();
});

document.getElementById('bankTemplate').addEventListener('change', () => {
  updateBankTheme(document.getElementById('bankTemplate').value);
});

['startDate', 'endDate'].forEach((id) => {
  document.getElementById(id).addEventListener('change', () => {
    updateDateRange();
    if (document.getElementById('openingBalance').value) {
      generateStatementDataFromForm();
    }
  });
});

document.getElementById('openingBalance').addEventListener('input', () => {
  if (document.getElementById('startDate').value && document.getElementById('endDate').value) {
    generateStatementDataFromForm();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  updateBankTheme('kotak');
  updateDateRange();
  generateStatementDataFromForm();
});
