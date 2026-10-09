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

const upiNames = [
  'RAJARAM MO', 'WENDYS T2', 'HATTI FOOD', 'HASEENA BE', 'DURGA BHAV', 'POSHALA AR',
  'PhonePe', 'MEENAKSHI', 'RAM MOHAN', 'ANJANEYULU', 'BUDHA RAM', 'DILIP SING',
  'NANDURAM J', 'Passport S', 'SRIKANTH P', 'DANISH', 'SIDDHI OMK', 'Jio Rechar',
  'Tapadia Di', 'VR RAGHAVE', 'SOUTHEE EN', 'MD SAMEER', 'MUDHAVATA', 'MOHAMMED F',
  'CITY PETRO', 'DEVKATTENA', 'BANSAL PHA', 'NAGESH', 'RELIANCE J', 'MR M VIKAS',
  'MAHALAXMI', 'Netflix', 'ADITYA KIR', 'SRINIDHI M', 'VASU RAM', 'FIL MORE',
  'Rajaram Mo', 'ZUNAIRA SU', 'GAJULA VEN', 'Balram Kir', 'Karkale Sa', 'KHUSHBUPAL',
  'MAIRAJ MOH', 'BIGTREE EN', 'RUDHRA MAN', 'Shiva Shan', 'KISHORE AM', 'Redbus Ind',
  'NAGESH V S', 'PUKALE SHU', 'SUDHRA MAN', 'RUDHRA MAN', 'SHANKAR KA', 'SADDULA RE',
  'AKASH ENTE', 'SULIGE MAN', 'PAVAN PADM', 'MR K NIKHI', 'ASHAMMAGAR', 'SAMADHAN F',
  'ZEPTO LTD', 'M Jyothi', 'RAGHAVE', 'Zepto Mark', 'MR CH PRAH', '7601078284', 'MR BABITAD'
];

const banks = ['YES BANK', 'AXIS BANK', 'HDFC BANK', 'State Bank', 'Kotak Mahi', 'BANK OF IN', 'FEDERAL BA', 'INDUSIND B'];
const bankTags = ['@ybl', '@okb', '@ibl', '@upi', '@axl', '@pti', '@kot', '@hdf'];

const cashDepositPatterns = [
  'Credit trxn CAM/13162HAR/CASH DEP-Self/17-04-26/8187',
  'Credit trxn CAM/13161SRY/CASH DEP-Self/02-05-26/3172',
  'Credit trxn CAM/49991ORY/CASH DEP-Self/22-05-26/2189',
  'Credit trxn CAM/13162HAR/CASH DEP-Self/13-06-26/9140',
  'Credit trxn CAM/49991ORY/CASH DEP-Self/14-06-26/298',
  'Credit trxn CAM/13161SRY/CASH DEP-Self/11-06-26/2089'
];

const atmPatterns = [
  'ATM trxn NFS/CASH WDL/614215011054/HIT02219/HYDERABAD/22-05-261539',
  'ATM trxn NFS/CASH WDL/616721019123/P3DCHB30/HYDERABAD/16-06-262127'
];

const visaPatterns = [
  'VISA trxn VSI/GOOGLEPLAY /202604160127/610619229459/',
  'VISA trxn VSI/GOOGLEPLAY /202606160127/616719707874/',
  'VISA trxn VPS/FILMORE /202605181510/613809149333/HYDERABAD',
  'VISA trxn VPS/BPCL ROYAL /202605222038/614215780975/Hyderabad'
];

const neftPatterns = [
  'NEFT-IN22617434134294-ZEPTO LTD-ZEPTO LTD-ZEPTO LTD-0104SLNEFTPL-ICIC0099999',
  'NEFT-AXISP00803641387-CODEFORCE PRIVATE LIMITED -1062026057-918020052698589-UTIB0000515'
];

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
    description: `UPI/${name}/${ref}${tag}/Payment fr/${bank}/${ref}/IBL${Math.random().toString(16).slice(2, 30)}`,
    amount,
    type: 'debit'
  };
}

function buildCashDepositText(dateString) {
  const pattern = randomItem(cashDepositPatterns);
  const amount = [500, 600, 900, 1500, 2000, 3000, 4000, 6000, 15000][Math.floor(Math.random() * 9)];
  return {
    description: `${pattern}`,
    amount,
    type: 'credit'
  };
}

function buildVisaText() {
  return {
    description: randomItem(visaPatterns),
    amount: [50, 80, 130, 200, 270, 360, 537, 945, 1585.5][Math.floor(Math.random() * 9)],
    type: 'debit'
  };
}

function buildATMText() {
  const amount = [10, 25, 40, 49, 50, 60, 100, 200, 1000, 3000, 5000][Math.floor(Math.random() * 11)];
  return {
    description: randomItem(atmPatterns),
    amount,
    type: 'debit'
  };
}

function buildNEFTText() {
  const amount = [175, 3109, 360, 6900, 13600, 17384][Math.floor(Math.random() * 6)];
  return {
    description: randomItem(neftPatterns),
    amount,
    type: Math.random() > 0.4 ? 'credit' : 'debit'
  };
}

function buildSalaryText(dateString) {
  const salaryValues = [65000, 75000, 82000, 90000, 95000];
  return {
    description: `SALARY CREDIT-ACME SOFTWARE SOLUTIONS P-${dateString}`,
    amount: salaryValues[Math.floor(Math.random() * salaryValues.length)],
    type: 'credit'
  };
}

function buildRentText(dateString) {
  return {
    description: `NEFT-RENT DEPOSIT-LANDLORD ACCOUNT-${dateString}`,
    amount: 15000,
    type: 'debit'
  };
}

function buildUtilityBillText(dateString) {
  const bills = [
    { description: 'BILL PAYMENT-JIO POSTPAID-9876543210-0000000000002345', amount: 599 },
    { description: 'BILL PAYMENT-ELECTRICITY-TSSPDCL-0000000000003456', amount: 2100 },
    { description: 'BILL PAYMENT-AIRTEL PREDIRECT-0000000000003456', amount: 403 },
    { description: 'BILL PAYMENT-INSURANCE-PREMIUM-LIC POLICY', amount: 5000 },
    { description: 'BILL PAYMENT-WATER-SUPPLY-0000000000008765', amount: 850 },
    { description: 'BILL PAYMENT-NETFLIX-MANDATE EXE-AXIS BANK', amount: 199 }
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

    if (dayOfMonth === 1) {
      const salary = buildSalaryText(dateKey);
      currentBalance += salary.amount;
      transactions.push({
        date: dateKey,
        description: salary.description,
        type: salary.type,
        amount: salary.amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    if (dayOfMonth === 5 || dayOfMonth === 15 || dayOfMonth === 25) {
      const rent = buildRentText(dateKey);
      currentBalance -= rent.amount;
      transactions.push({
        date: dateKey,
        description: rent.description,
        type: rent.type,
        amount: rent.amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    if (dayOfMonth === 7 || dayOfMonth === 10 || dayOfMonth === 21) {
      const utility = buildUtilityBillText(dateKey);
      currentBalance -= utility.amount;
      transactions.push({
        date: dateKey,
        description: utility.description,
        type: utility.type,
        amount: utility.amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

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

    if (dayOfMonth % 6 === 0 || dayOfMonth % 7 === 0) {
      const cash = buildCashDepositText(dateKey);
      if (cash.type === 'credit') {
        currentBalance += cash.amount;
      } else {
        currentBalance -= cash.amount;
      }
      transactions.push({
        date: dateKey,
        description: cash.description,
        type: cash.type,
        amount: cash.amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    if (dayOfMonth % 8 === 0 && Math.random() > 0.35) {
      const card = buildVisaText();
      currentBalance -= card.amount;
      transactions.push({
        date: dateKey,
        description: card.description,
        type: card.type,
        amount: card.amount,
        balance: Number(currentBalance.toFixed(2))
      });
    }

    if (dayOfMonth % 9 === 0 && Math.random() > 0.55) {
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

    if (dayOfMonth % 11 === 0) {
      const neft = buildNEFTText();
      if (neft.type === 'credit') {
        currentBalance += neft.amount;
      } else {
        currentBalance -= neft.amount;
      }
      transactions.push({
        date: dateKey,
        description: neft.description,
        type: neft.type,
        amount: neft.amount,
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
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const bankProfile = bankProfiles[document.getElementById('bankTemplate').value] || bankProfiles.kotak;

  doc.setFillColor(31, 111, 235);
  doc.rect(0, 0, 210, 35, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(bankProfile.name, 14, 15);
  doc.setFontSize(10);
  doc.text('Account Statement', 14, 24);

  doc.setTextColor(28, 35, 43);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`Account Holder: ${statement.holderName}`, 14, 48);
  doc.text(`Account Number: ${statement.accountNumber}`, 14, 55);
  doc.text(`IFSC: ${statement.ifscCode}`, 14, 62);
  doc.text(`Period: ${statement.startDate} to ${statement.endDate}`, 120, 48);
  doc.text(`Opening Balance: ${formatMoney(statement.openingBalance)}`, 120, 55);
  doc.text(`Closing Balance: ${formatMoney(statement.closingBalance)}`, 120, 62);

  doc.setDrawColor(200, 200, 200);
  doc.line(14, 70, 196, 70);

  let y = 80;
  const colX = [14, 42, 103, 142, 175];
  const headers = ['Date', 'Narration', 'Type', 'Amt', 'Bal'];

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  headers.forEach((header, index) => doc.text(header, colX[index], y));
  doc.line(14, y + 2, 196, y + 2);

  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);

  statement.transactions.slice(0, 40).forEach((entry) => {
    if (y > 270) {
      doc.addPage();
      y = 18;
      doc.setFont('helvetica', 'bold');
      headers.forEach((header, index) => doc.text(header, colX[index], y));
      doc.line(14, y + 2, 196, y + 2);
      y += 8;
      doc.setFont('helvetica', 'normal');
    }

    const displayType = entry.type === 'credit' ? 'CR' : 'DR';
    const amountStr = entry.type === 'credit' ? `+${entry.amount.toFixed(2)}` : `-${entry.amount.toFixed(2)}`;
    const balanceStr = entry.balance.toFixed(2);
    const label = String(entry.description).slice(0, 40);

    doc.text(formatShortDate(entry.date), colX[0], y);
    doc.text(label, colX[1], y);
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
