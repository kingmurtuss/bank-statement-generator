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

// Realistic transaction data with proper descriptions
const transactionData = [
  // Salary credits (monthly)
  { description: 'SALARY CREDIT-ACME SOFTWARE SOLUTIONS P', amount: 75000, type: 'credit', frequency: 'monthly' },
  { description: 'SALARY CREDIT-PAYROLL SERVICES PVT LTD', amount: 85000, type: 'credit', frequency: 'monthly' },
  
  // Regular payments and bills
  { description: 'DEBIT CARD PURCHASE-WALMART SUPER CENTER', amount: 3200, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-BIGMART HYPERMARKET', amount: 5400, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-AMAZON.IN E-COMMERCE', amount: 2890, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-FLIPKART E-COMMERCE', amount: 4150, type: 'debit', frequency: 'variable' },
  
  // Utility payments
  { description: 'BILL PAYMENT-ELECTRICITY BOARD KARNATAKA', amount: 2100, type: 'debit', frequency: 'monthly' },
  { description: 'BILL PAYMENT-JALGAON WATER SUPPLY BOARD', amount: 850, type: 'debit', frequency: 'monthly' },
  { description: 'BILL PAYMENT-AIRTEL BROADBAND', amount: 1299, type: 'debit', frequency: 'monthly' },
  { description: 'BILL PAYMENT-JIO MOBILE RECHARGE', amount: 399, type: 'debit', frequency: 'monthly' },
  { description: 'BILL PAYMENT-VI MOBILE RECHARGE', amount: 649, type: 'debit', frequency: 'monthly' },
  
  // Insurance and financial services
  { description: 'INSURANCE PREMIUM-LIC LIFE INSURANCE', amount: 5000, type: 'debit', frequency: 'monthly' },
  { description: 'INSURANCE PREMIUM-HDFC GENERAL INSURANCE', amount: 3500, type: 'debit', frequency: 'quarterly' },
  { description: 'MUTUAL FUND INVESTMENT-DIRECT DEBIT', amount: 10000, type: 'debit', frequency: 'monthly' },
  { description: 'DIVIDEND RECEIVED-APOLLO HOSPITALS', amount: 1850, type: 'credit', frequency: 'quarterly' },
  { description: 'INTEREST RECEIVED-SAVING ACCOUNT CREDIT', amount: 240, type: 'credit', frequency: 'monthly' },
  
  // Transfers and payments
  { description: 'NEFT-ROHIT SHARMA-PERSONAL TRANSFER', amount: 5000, type: 'debit', frequency: 'variable' },
  { description: 'NEFT-PRIYA NAIR-PERSONAL TRANSFER', amount: 8000, type: 'debit', frequency: 'variable' },
  { description: 'NEFT-RENT DEPOSIT-LANDLORD ACCOUNT', amount: 15000, type: 'debit', frequency: 'monthly' },
  { description: 'NEFT RECEIVED-FREELANCE PROJECT PAYMENT', amount: 12500, type: 'credit', frequency: 'variable' },
  { description: 'UPI-TRANSFER-MOBILE PAY', amount: 350, type: 'debit', frequency: 'variable' },
  { description: 'UPI-TRANSFER-FUEL STATION', amount: 2000, type: 'debit', frequency: 'variable' },
  
  // Cash transactions
  { description: 'ATM WITHDRAWAL-KOTAK MAHINDRA BANK', amount: 10000, type: 'debit', frequency: 'variable' },
  { description: 'ATM WITHDRAWAL-HDFC BANK ATM', amount: 5000, type: 'debit', frequency: 'variable' },
  { description: 'CASH DEPOSIT-OVER THE COUNTER', amount: 8000, type: 'credit', frequency: 'variable' },
  { description: 'CHEQUE DEPOSIT-CHQ NO 123456', amount: 25000, type: 'credit', frequency: 'variable' },
  
  // Shopping and lifestyle
  { description: 'DEBIT CARD PURCHASE-CAFE COFFEE DAY', amount: 450, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-METRO CINEMA HALL', amount: 600, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-URBAN COMPANY SALON', amount: 1200, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-SWIGGY FOOD DELIVERY', amount: 680, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-ZOMATO FOOD DELIVERY', amount: 520, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-UBER RIDE BOOKING', amount: 380, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-OYO HOTEL BOOKING', amount: 4200, type: 'debit', frequency: 'variable' },
  
  // Online subscriptions
  { description: 'ONLINE PURCHASE-NETFLIX SUBSCRIPTION', amount: 649, type: 'debit', frequency: 'monthly' },
  { description: 'ONLINE PURCHASE-AMAZON PRIME MEMBERSHIP', amount: 999, type: 'debit', frequency: 'quarterly' },
  { description: 'ONLINE PURCHASE-MEDIUM SUBSCRIPTION', amount: 500, type: 'debit', frequency: 'monthly' },
  
  // Medical and health
  { description: 'DEBIT CARD PURCHASE-APOLLO PHARMACY', amount: 1850, type: 'debit', frequency: 'variable' },
  { description: 'DEBIT CARD PURCHASE-FORTIS HOSPITAL', amount: 3500, type: 'debit', frequency: 'variable' },
  
  // Travel
  { description: 'ONLINE PURCHASE-MAKE MY TRIP FLIGHT', amount: 12800, type: 'debit', frequency: 'variable' },
  { description: 'ONLINE PURCHASE-IRCTC RAILWAY TICKET', amount: 2450, type: 'debit', frequency: 'variable' },
  { description: 'ONLINE PURCHASE-CLEARTRIP HOTEL BOOKING', amount: 8900, type: 'debit', frequency: 'variable' },
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

  // Track recurring transactions
  const processedTransactions = [];

  for (let i = 0; i <= diffDays; i += 1) {
    const currentDate = new Date(startDate + 'T00:00:00');
    currentDate.setDate(currentDate.getDate() + i);

    const dateKey = toDateString(currentDate);
    const dayOfMonth = currentDate.getDate();
    const dayOfWeek = currentDate.getDay();

    // Add salary on 1st of month
    if (dayOfMonth === 1) {
      const salaryTx = transactionData.find(t => t.frequency === 'monthly' && t.type === 'credit');
      if (salaryTx) {
        currentBalance += salaryTx.amount;
        processedTransactions.push({
          date: dateKey,
          description: salaryTx.description,
          type: salaryTx.type,
          amount: salaryTx.amount,
          balance: Number(currentBalance.toFixed(2))
        });
      }
    }

    // Add utility bills on specific days
    if (dayOfMonth === 5) {
      const electricityTx = transactionData.find(t => t.description.includes('ELECTRICITY'));
      if (electricityTx) {
        currentBalance -= electricityTx.amount;
        processedTransactions.push({
          date: dateKey,
          description: electricityTx.description,
          type: electricityTx.type,
          amount: electricityTx.amount,
          balance: Number(currentBalance.toFixed(2))
        });
      }
    }

    if (dayOfMonth === 10) {
      const waterTx = transactionData.find(t => t.description.includes('WATER'));
      if (waterTx) {
        currentBalance -= waterTx.amount;
        processedTransactions.push({
          date: dateKey,
          description: waterTx.description,
          type: waterTx.type,
          amount: waterTx.amount,
          balance: Number(currentBalance.toFixed(2))
        });
      }
    }

    // Add rent on 15th
    if (dayOfMonth === 15) {
      const rentTx = transactionData.find(t => t.description.includes('RENT'));
      if (rentTx) {
        currentBalance -= rentTx.amount;
        processedTransactions.push({
          date: dateKey,
          description: rentTx.description,
          type: rentTx.type,
          amount: rentTx.amount,
          balance: Number(currentBalance.toFixed(2))
        });
      }
    }

    // Add insurance on specific days
    if (dayOfMonth === 8) {
      const insuranceTx = transactionData.find(t => t.description.includes('LIC'));
      if (insuranceTx) {
        currentBalance -= insuranceTx.amount;
        processedTransactions.push({
          date: dateKey,
          description: insuranceTx.description,
          type: insuranceTx.type,
          amount: insuranceTx.amount,
          balance: Number(currentBalance.toFixed(2))
        });
      }
    }

    // Random variable transactions on some days
    if (dayOfMonth % 3 === 0 || dayOfMonth % 5 === 0) {
      const randomCount = 1 + Math.floor(Math.random() * 2);
      
      for (let j = 0; j < randomCount; j++) {
        const variableTxs = transactionData.filter(t => t.frequency === 'variable');
        const randomTx = variableTxs[Math.floor(Math.random() * variableTxs.length)];
        
        // Add some variation to amounts
        const variance = 0.85 + Math.random() * 0.3;
        const amount = Math.round(randomTx.amount * variance);

        if (randomTx.type === 'credit') {
          currentBalance += amount;
        } else {
          currentBalance -= amount;
        }

        processedTransactions.push({
          date: dateKey,
          description: randomTx.description,
          type: randomTx.type,
          amount: amount,
          balance: Number(currentBalance.toFixed(2))
        });
      }
    }
  }

  return processedTransactions;
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
