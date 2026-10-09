# bank-statement-generator

A clean, web-based bank statement generator that lets users:

- choose a bank template such as Kotak, HDFC, ICICI, SBI, or Axis
- enter account holder details, account number, IFSC code, date range, and opening balance
- generate realistic daily transactional records with accurate running balances
- preview the statement in the browser
- download the result as a PDF

## Features

- Responsive dashboard UI
- Automatically generated transaction history
- Opening balance, total credit, total debit, and closing balance summary
- Bank-brand color templates
- PDF output for student project/demo use

## Run locally

Since this is a frontend app, you can open it directly in a browser or serve it locally:

```bash
cd /path/to/bank-statement-generator
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project files

- `index.html` — main page layout
- `styles.css` — page styling and responsive dashboard
- `app.js` — form logic, transaction generation, and PDF export

## Notes

This project is designed to look professional for a college assignment or demonstration while keeping setup simple. It does not require a backend or database.

For a classroom verification, the project can be shared as a GitHub repository and the app can be opened locally to generate and download a statement PDF.
