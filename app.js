const bankProfiles = {
  kotak: {
    name: 'Kotak Mahindra Bank',
    accent: '#D92F32',
    bg: '#fff4f4',
    ifsc: 'KKBK0001234',
    logo: 'KOTAK',
    branch: 'HYDERABAD KUKATPALLY'
  },
  hdfc: {
    name: 'HDFC Bank',
    accent: '#0047AB',
    bg: '#eef5ff',
    ifsc: 'HDFC0000364',
    logo: 'HDFC',
    branch: 'HYDERABAD KUKATPALLY'
  },
  icici: {
    name: 'ICICI Bank',
    accent: '#ff8f1f',
    bg: '#fff5eb',
    ifsc: 'ICIC0001234',
    logo: 'ICICI',
    branch: 'HYDERABAD KUKATPALLY'
  },
  sbi: {
    name: 'State Bank of India',
    accent: '#0b8a68',
    bg: '#eefcf6',
    ifsc: 'SBIN0001234',
    logo: 'SBI',
    branch: 'HYDERABAD KUKATPALLY'
  },
  axis: {
    name: 'Axis Bank',
    accent: '#7f3fbf',
    bg: '#f5f0ff',
    ifsc: 'UTIB0001234',
    logo: 'AXIS',
    branch: 'HYDERABAD KUKATPALLY'
  }
};

const upiNames = [
  'RAJARAM MO', 'WENDYS T2', 'HATTI FOOD', 'HASEENA BE', 'DURGA BHAV', 'POSHALA AR',
  'PhonePe', 'MEENAKSHI', 'RAM MOHAN', 'ANJANEYULU', 'BUDHA RAM', 'DILIP SING',
  'NANDURAM J', 'Passport S', 'SRIKANTH P', 'DANISH', 'SIDDHI OMK', 'Jio Rechar',
  'Tapadia Di', 'VR RAGHAVE', 'SOUTHEE EN', 'MD SAMEER', 'MUDHAVATA', 'MOHAMMED F',
  'CITY PETRO', 'DEVKATTENA', 'BANSAL PHA', 'NAGESH', 'RELIANCE J', 'MR M VIKAS',
  'MAHALAXMI', 'Netflix', 'ADITYA KIR', 'SRINIDHI M', 'VASU RAM', 'FIL MORE'
];

const banks = ['YES BANK', 'AXIS BANK', 'HDFC BANK', 'State Bank', 'Kotak Mahi', 'BANK OF IN', 'FEDERAL BA', 'INDUSIND B'];
const bankTags = ['@ybl', '@okb', '@ibl', '@upi', '@axl', '@pti', '@kot', '@hdf'];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function buildUPIText() {
  const name = randomItem(upiNames);
  const bank = randomItem(banks);
  const tag = randomItem(bankTags);
  const ref = `${Math.floor(Math.random() * 900000000000) + 100000000000}`;
  const amount = Math.floor(Math.random() * 3000) + 20;
  return {
    description: `UPI/${name}/${ref}${tag}/Payment fr/${bank}/${ref}`,
    amount,
    type: 'debit'
  };
}

function buildCashDepositText() {
  const amount = [500, 600, 900, 1500, 2000, 3000, 4000, 6000, 15000][Math.floor(Math.random() * 9)];
  return {
    description: `CASH DEPOSIT-OVER COUNTER-SELF`,
    amount,
    type: 'credit'
  };
}

function buildVisaText() {
  return {
    description: `VISA DEBIT CARD PURCHASE-RETAIL`,
    amount: [50, 80, 130, 200, 270, 360, 537][Math.floor(Math.random() * 7)],
    type: 'debit'
  };
}

function buildATMText() {
  const amount = [1000, 5000, 10000][Math.floor(Math.random() * 3)];
  return {
    description: `ATM CASH WITHDRAWAL`,
    amount,
    type: 'debit'
  };
}

function buildBillPaymentText() {
  const bills = [
    { description: 'JIO MOBILE RECHARGE', amount: 599 },
    { description: 'AIRTEL MOBILE RECHARGE', amount: 403 },
    { description: 'ELECTRICITY BILL PAYMENT', amount: 2100 },
    { description: 'INSURANCE PREMIUM DEBIT', amount: 5000 }
  ];
  const bill = randomItem(bills);
  return {
    description: bill.description,
    amount: bill.amount,
    type: 'debit'
  };
}

function toDateString(date) {
  return date.toISOString().slice(0, 10);
}

function formatMoney(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(value);
}

function formatShortDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);
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

    // Salary on 1st
    if (dayOfMonth === 1) {
      const salary = [65000, 75000, 82000, 90000, 95000][Math.floor(Math.random() * 5)];
      currentBalance += salary;
      transactions.push({
        date: dateKey,
        description: 'SAL-SALARY CREDIT-EMPLOYER',
        type: 'credit',
        amount: salary,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // Rent
    if (dayOfMonth === 5 || dayOfMonth === 20) {
      const rent = 15000;
      currentBalance -= rent;
      transactions.push({
        date: dateKey,
        description: 'NEFT-RENT PAYMENT-LANDLORD',
        type: 'debit',
        amount: rent,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // Utilities
    if (dayOfMonth === 7 || dayOfMonth === 15) {
      const bill = buildBillPaymentText();
      currentBalance -= bill.amount;
      transactions.push({
        date: dateKey,
        description: bill.description,
        type: bill.type,
        amount: bill.amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // UPI
    if (dayOfMonth % 3 === 0 && dayOfMonth % 5 !== 0) {
      const upi = buildUPIText();
      currentBalance -= upi.amount;
      transactions.push({
        date: dateKey,
        description: upi.description,
        type: upi.type,
        amount: upi.amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // Cash deposit
    if (dayOfMonth % 6 === 0) {
      const cash = buildCashDepositText();
      currentBalance += cash.amount;
      transactions.push({
        date: dateKey,
        description: cash.description,
        type: cash.type,
        amount: cash.amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // ATM
    if (dayOfMonth % 9 === 0) {
      const atm = buildATMText();
      currentBalance -= atm.amount;
      transactions.push({
        date: dateKey,
        description: atm.description,
        type: atm.type,
        amount: atm.amount,
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

    if (entry.type === 'credit') credits += entry.amount;
    else debits += entry.amount;

    row.innerHTML = `
      <td>${formatShortDate(entry.date)}</td>
      <td class="description-cell">${entry.description}</td>
      <td><span class="type-pill ${typeClass}">${entry.type}</span></td>
      <td class="${amountClass}">${formattedAmount}</td>
      <td>${formatMoney(entry.balance)}</td>
    `;

    tableBody.appendChild(row);
  });

  const closingBalance = Number(openingBalance) + credits - debits;
  document.getElementById('openingValue').textContent = formatMoney(Number(openingBalance));
  document.getElementById('creditValue').textContent = formatMoney(credits);
  document.getElementById('debitValue').textContent = formatMoney(debits);
  document.getElementById('closingValue').textContent = formatMoney(closingBalance);
}

function updateDateRange() {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const rangeText = `${new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(startDate + 'T00:00:00'))} - ${new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(endDate + 'T00:00:00'))}`;
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

  if (!holderName || !accountNumber || !ifscCode || !startDate || !endDate) return;

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
  if (!statement) generateStatementDataFromForm();

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4', margin: [10, 10, 10, 10] });
  const bankProfile = bankProfiles[document.getElementById('bankTemplate').value] || bankProfiles.kotak;

  // ===== HEADER SECTION =====
  // Bank Name & Logo Box
  doc.setFillColor(245, 245, 245);
  doc.rect(10, 10, 190, 20, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(20, 20, 20);
  doc.text(bankProfile.name, 15, 22);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text('Account Statement', 15, 27);

  // ===== ACCOUNT INFORMATION =====
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Account Details', 15, 38);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(50, 50, 50);

  const infoY = 45;
  const colWidth = 95;
  
  doc.text(`Account Holder: ${statement.holderName}`, 15, infoY);
  doc.text(`Account Number: ${statement.accountNumber}`, 15, infoY + 6);
  doc.text(`IFSC Code: ${statement.ifscCode}`, 15, infoY + 12);
  doc.text(`Branch: ${bankProfile.branch}`, 15, infoY + 18);

  doc.text(`Statement Period: ${statement.startDate} to ${statement.endDate}`, 110, infoY);
  doc.text(`Opening Balance: ${formatMoney(statement.openingBalance)}`, 110, infoY + 6);
  doc.text(`Closing Balance: ${formatMoney(statement.closingBalance)}`, 110, infoY + 12);
  doc.text(`Generated: ${new Date().toLocaleDateString('en-GB')}`, 110, infoY + 18);

  // ===== SUMMARY BOX =====
  const summaryY = 72;
  doc.setFillColor(235, 245, 255);
  doc.rect(10, summaryY, 190, 18, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  
  const summary = statement.transactions.filter((t) => t.type === 'credit').reduce((sum, item) => sum + item.amount, 0);
  const debits = statement.transactions.filter((t) => t.type === 'debit').reduce((sum, item) => sum + item.amount, 0);
  
  doc.text(`Total Credits: ${formatMoney(summary)}`, 15, summaryY + 6);
  doc.text(`Total Debits: ${formatMoney(debits)}`, 70, summaryY + 6);
  doc.text(`Net: ${formatMoney(summary - debits)}`, 140, summaryY + 6);

  // ===== TABLE HEADER =====
  const tableY = 95;
  doc.setFillColor(240, 240, 240);
  doc.rect(10, tableY, 190, 7, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(0, 0, 0);

  const columns = [
    { label: 'Date', x: 15, width: 20 },
    { label: 'Transaction Details', x: 37, width: 95 },
    { label: 'Debit', x: 134, width: 25 },
    { label: 'Credit', x: 162, width: 25 },
    { label: 'Balance', x: 175, width: 25 }
  ];

  columns.forEach(col => {
    doc.text(col.label, col.x, tableY + 5);
  });

  // ===== TRANSACTION TABLE =====
  let y = tableY + 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(0, 0, 0);

  const rowsPerPage = 28;
  let currentRow = 0;

  statement.transactions.forEach((entry, index) => {
    if (currentRow >= rowsPerPage) {
      // New page
      doc.addPage();
      y = 20;
      currentRow = 0;

      // Repeat header on new page
      doc.setFillColor(240, 240, 240);
      doc.rect(10, y, 190, 7, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      columns.forEach(col => {
        doc.text(col.label, col.x, y + 5);
      });
      y += 10;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
    }

    // Alternate row colors
    if (currentRow % 2 === 0) {
      doc.setFillColor(255, 255, 255);
    } else {
      doc.setFillColor(250, 250, 250);
    }
    doc.rect(10, y - 2, 190, 5, 'F');

    // Date
    doc.text(formatShortDate(entry.date), 15, y + 1);

    // Description (truncated if too long)
    const desc = entry.description.substring(0, 45);
    doc.text(desc, 37, y + 1);

    // Debit/Credit columns
    if (entry.type === 'debit') {
      doc.text(entry.amount.toFixed(2), 134, y + 1);
    } else {
      doc.text(entry.amount.toFixed(2), 162, y + 1);
    }

    // Balance
    doc.setFont('helvetica', 'bold');
    doc.text(entry.balance.toFixed(2), 175, y + 1);
    doc.setFont('helvetica', 'normal');

    y += 5;
    currentRow++;
  });

  // ===== FOOTER =====
  const pageCount = doc.internal.pages.length - 1;
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(100, 100, 100);
    
    const pageHeight = doc.internal.pageSize.height;
    doc.text(`Page ${i} of ${pageCount}`, 200, pageHeight - 5, { align: 'right' });
    doc.text('This is a computer generated statement. No signature required.', 15, pageHeight - 5);
    doc.text(bankProfile.name + ' | ' + statement.accountNumber, 110, pageHeight - 5, { align: 'center' });
  }

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
