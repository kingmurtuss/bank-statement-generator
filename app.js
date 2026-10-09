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
    ifsc: 'HDFC0000364'
  },
  icici: {
    name: 'ICICI Bank',
    accent: '#ff8f1f',
    bg: '#fff5eb',
    ifsc: 'ICIC0000001'
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

// Realistic transaction descriptions based on actual bank statement patterns
const upiTransactions = [
  { name: 'SHIVA SHANKER', upi: '6300162105-3@YBL', bank: 'ICIC0', amount: 3000 },
  { name: 'RAHUL KUMAR KUSUHA', upi: '7036464577@UPI', bank: 'HDFC0', amount: 3665, note: 'AUGUST MONTH EMI' },
  { name: 'BHARAT CONNECT CRED', upi: 'SV2512112247303', bank: 'YESB0', amount: 2380 },
  { name: 'CHIKALASRIKANTH143OK', upi: 'CHIKALASRIKANTH143@OKAXIS', bank: 'SBIN0', amount: 100 },
  { name: 'MR DANISH KHAN', upi: 'Q252629144@YBL', bank: 'YESB0', amount: 70 },
  { name: 'SRINIDHI MEDICAL', upi: 'PAYTMQR6UR6MC@PTYS', bank: 'YESB0', amount: 43 },
  { name: 'BALRAM KIRANA', upi: 'PAYTMQR6FQPEN@PTYS', bank: 'YESB0', amount: 525 },
  { name: 'POSHALA ARAVIND', upi: 'PAYTM.S1ZUZA2@PTYS', bank: 'YESB0', amount: 320 },
  { name: 'VANGETI SANTHOSHA', upi: 'VANGETI123@UPI', bank: 'HDFC0', amount: 20 },
  { name: 'DEEPAK SHARMA', upi: 'DEEPAK456@YBL', bank: 'YESB0', amount: 500 },
  { name: 'PRIYA NAIR', upi: 'PRIYA789@OKAXIS', bank: 'SBIN0', amount: 2500, note: 'RENT PAYMENT' },
  { name: 'AMIT PATEL', upi: 'AMIT234@UPI', bank: 'HDFC0', amount: 1200 },
  { name: 'NEHA GUPTA', upi: 'NEHA567@PTYS', bank: 'YESB0', amount: 450, note: 'GIFT' },
  { name: 'ROHAN SINGH', upi: 'ROHAN890@YBL', bank: 'ICIC0', amount: 300 },
  { name: 'ANJALI VERMA', upi: 'ANJALI321@OKAXIS', bank: 'SBIN0', amount: 800, note: 'PERSONAL LOAN' },
  { name: 'VIKRAM REDDY', upi: 'VIKRAM654@UPI', bank: 'HDFC0', amount: 1500 },
  { name: 'SNEHA KAPOOR', upi: 'SNEHA111@PTYS', bank: 'YESB0', amount: 250 },
  { name: 'ARJUN NAIR', upi: 'ARJUN222@YBL', bank: 'ICIC0', amount: 700 },
  { name: 'ZARA KHAN', upi: 'ZARA333@OKAXIS', bank: 'SBIN0', amount: 1800 },
  { name: 'RAVI KUMAR', upi: 'RAVI444@UPI', bank: 'HDFC0', amount: 950 }
];

const cashDeposits = [
  { name: 'RAJENDRANAGAR', amount: 11000 },
  { name: 'CASH DEPOSIT-KUKATPALLY', amount: 8500 },
  { name: 'CASH DEPOSIT-HYDERABAD', amount: 15000 },
  { name: 'CASH DEPOSIT-ATTAPUR', amount: 5000 },
  { name: 'CASH DEPOSIT-RANGAREDDYGUDA', amount: 12000 }
];

const billPayments = [
  { description: 'BILL PAYMENT-JIOPOSTPAID-ID:', amount: 599, provider: 'JIO' },
  { description: 'BILL PAYMENT-AIRTEL-ID:', amount: 899, provider: 'AIRTEL' },
  { description: 'BILL PAYMENT-ELECTRICITY-BOARD:', amount: 2100, provider: 'TSSPDCL' },
  { description: 'BILL PAYMENT-WATER-SUPPLY:', amount: 850, provider: 'MUNICIPAL' },
  { description: 'BILL PAYMENT-INSURANCE-PREMIUM:', amount: 5000, provider: 'LIC' }
];

const cardTransactions = [
  { merchant: 'AMAZON.IN', category: 'E-COMMERCE', amount: 2890 },
  { merchant: 'FLIPKART', category: 'E-COMMERCE', amount: 4150 },
  { merchant: 'SWIGGY', category: 'FOOD DELIVERY', amount: 680 },
  { merchant: 'ZOMATO', category: 'FOOD DELIVERY', amount: 520 },
  { merchant: 'UBER', category: 'TRANSPORT', amount: 380 },
  { merchant: 'OLA CABS', category: 'TRANSPORT', amount: 420 },
  { merchant: 'NETFLIX', category: 'SUBSCRIPTION', amount: 649 },
  { merchant: 'BIGMART HYPERMARKET', category: 'RETAIL', amount: 5400 },
  { merchant: 'WALMART', category: 'RETAIL', amount: 3200 },
  { merchant: 'CAFE COFFEE DAY', category: 'FOOD & BEVERAGE', amount: 450 },
  { merchant: 'APOLLO PHARMACY', category: 'PHARMACY', amount: 1850 }
];

const neftTransactions = [
  { name: 'SALARY CREDIT', description: 'SALARY CREDIT-ACME SOFTWARE SOLUTIONS', amount: 75000 },
  { name: 'RENT PAYMENT', description: 'NEFT-RENT DEPOSIT-LANDLORD', amount: 15000 },
  { name: 'FREELANCE PAYMENT', description: 'NEFT RECEIVED-PROJECT PAYMENT', amount: 12500 },
  { name: 'LOAN REPAYMENT', description: 'NEFT-PERSONAL LOAN-BANK TRANSFER', amount: 8000 }
];

const atmTransactions = [
  { description: 'ATM WITHDRAWAL-HDFC BANK ATM', amount: 10000 },
  { description: 'ATM WITHDRAWAL-KOTAK BANK ATM', amount: 5000 },
  { description: 'ATM WITHDRAWAL-AXIS BANK ATM', amount: 8000 },
  { description: 'ATM WITHDRAWAL-ICICI BANK ATM', amount: 3000 }
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

function generateUPIDescription(transaction, referenceNumber) {
  return `UPI-${transaction.name}-${transaction.upi}-${transaction.bank}${referenceNumber}`;
}

function generateNEFTDescription(transaction, referenceNumber) {
  return `${transaction.description}-${referenceNumber}`;
}

function generateCardDescription(merchant, amount) {
  return `DEBIT CARD PURCHASE-${merchant}`;
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
    const dayOfWeek = currentDate.getDay();

    // Salary on 1st of month (credit)
    if (dayOfMonth === 1) {
      const salaryAmount = 75000;
      currentBalance += salaryAmount;
      transactions.push({
        date: dateKey,
        description: 'SAL-ACME SOFTWARE-HR/PAYROLL-0000000000001234',
        type: 'credit',
        amount: salaryAmount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // Rent on 5th (debit)
    if (dayOfMonth === 5) {
      const rentAmount = 15000;
      currentBalance -= rentAmount;
      transactions.push({
        date: dateKey,
        description: 'NEFT-RENT PAYMENT-LANDLORD-0000000000005678',
        type: 'debit',
        amount: rentAmount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // Bill payments
    if (dayOfMonth === 7) {
      const jio = 599;
      currentBalance -= jio;
      transactions.push({
        date: dateKey,
        description: 'BILL PAYMENT-JIO POSTPAID-9876543210-0000000000002345',
        type: 'debit',
        amount: jio,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    if (dayOfMonth === 10) {
      const electricity = 2100;
      currentBalance -= electricity;
      transactions.push({
        date: dateKey,
        description: 'BILL PAYMENT-ELECTRICITY-TSSPDCL-0000000000003456',
        type: 'debit',
        amount: electricity,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // Insurance on 15th
    if (dayOfMonth === 15) {
      const insurance = 5000;
      currentBalance -= insurance;
      transactions.push({
        date: dateKey,
        description: 'INSURANCE PREMIUM-LIC POLICY-0000000000004567',
        type: 'debit',
        amount: insurance,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // Cash deposits on random days
    if ((dayOfMonth % 7 === 0) && Math.random() > 0.5) {
      const cashDeposit = cashDeposits[Math.floor(Math.random() * cashDeposits.length)];
      const refNumber = Math.random().toString().slice(2, 11);
      currentBalance += cashDeposit.amount;
      transactions.push({
        date: dateKey,
        description: `CASH DEPOSIT-${refNumber}-${cashDeposit.name}`,
        type: 'credit',
        amount: cashDeposit.amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // UPI transactions (multiple per day)
    if (dayOfMonth % 2 === 0 || dayOfMonth % 3 === 0) {
      const upiCount = 1 + Math.floor(Math.random() * 2);
      
      for (let j = 0; j < upiCount; j++) {
        const upiTx = upiTransactions[Math.floor(Math.random() * upiTransactions.length)];
        const variance = 0.9 + Math.random() * 0.2;
        const amount = Math.round(upiTx.amount * variance);
        const refNumber = Math.random().toString().slice(2, 12);
        
        currentBalance -= amount;
        
        const description = `UPI-${upiTx.name}-${upiTx.upi}-${refNumber}`;
        
        transactions.push({
          date: dateKey,
          description: description,
          type: 'debit',
          amount: amount,
          balance: Number(currentBalance.toFixed(2))
        });
      }
    }

    // Debit card purchases
    if ((dayOfMonth % 3 === 0) && Math.random() > 0.4) {
      const cardTx = cardTransactions[Math.floor(Math.random() * cardTransactions.length)];
      const variance = 0.85 + Math.random() * 0.3;
      const amount = Math.round(cardTx.amount * variance);
      
      currentBalance -= amount;
      transactions.push({
        date: dateKey,
        description: `DEBIT CARD PURCHASE-${cardTx.merchant}`,
        type: 'debit',
        amount: amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    // ATM withdrawals
    if ((dayOfMonth % 5 === 0) && Math.random() > 0.6) {
      const atmTx = atmTransactions[Math.floor(Math.random() * atmTransactions.length)];
      const variance = 0.9 + Math.random() * 0.2;
      const amount = Math.round(atmTx.amount * variance);
      
      currentBalance -= amount;
      transactions.push({
        date: dateKey,
        description: atmTx.description,
        type: 'debit',
        amount: amount,
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
      <td class="description-cell">${entry.description}</td>
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

  // Header with bank details
  doc.setFillColor(31, 111, 235);
  doc.rect(0, 0, 210, 35, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(bankProfile.name, 14, 15);
  doc.setFontSize(10);
  doc.text('Account Statement', 14, 24);

  // Account details
  doc.setTextColor(28, 35, 43);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Account Holder: ${statement.holderName}`, 14, 48);
  doc.text(`Account Number: ${statement.accountNumber}`, 14, 55);
  doc.text(`IFSC Code: ${statement.ifscCode}`, 14, 62);
  
  doc.text(`Period: ${statement.startDate} to ${statement.endDate}`, 120, 48);
  doc.text(`Opening Balance: ${formatMoney(statement.openingBalance)}`, 120, 55);
  doc.text(`Closing Balance: ${formatMoney(statement.closingBalance)}`, 120, 62);

  // Divider line
  doc.setDrawColor(200, 200, 200);
  doc.line(14, 70, 196, 70);

  // Table headers
  let y = 80;
  const colX = [14, 45, 105, 145, 175];
  const headers = ['Date', 'Description', 'Type', 'Amount', 'Balance'];

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  headers.forEach((header, index) => {
    doc.text(header, colX[index], y);
  });

  doc.line(14, y + 2, 196, y + 2);

  // Table rows
  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);

  statement.transactions.slice(0, 40).forEach((entry) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
      
      // Repeat headers on new page
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      headers.forEach((header, index) => {
        doc.text(header, colX[index], y);
      });
      doc.line(14, y + 2, 196, y + 2);
      y += 8;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
    }

    const displayType = entry.type === 'credit' ? 'CR' : 'DR';
    const amountStr = entry.type === 'credit' ? `+${entry.amount.toFixed(2)}` : `-${entry.amount.toFixed(2)}`;
    const balanceStr = entry.balance.toFixed(2);
    const descStr = String(entry.description).slice(0, 50);

    doc.text(formatShortDate(entry.date), colX[0], y);
    doc.text(descStr, colX[1], y);
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
