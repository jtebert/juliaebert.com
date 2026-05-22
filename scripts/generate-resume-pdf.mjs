#!/usr/bin/env node
// Requires the dev server to be running: npm run dev
// Usage: npm run generate-pdf [-- [filename]]
// Default filename: ebert-julia.resume.pdf

import puppeteer from 'puppeteer-core';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PDF_DIR = resolve(__dirname, '../public/pdfs');
const CHROME_PATH = '/usr/bin/google-chrome';
const URL = 'http://localhost:3000/dev/print-resume';
const FILENAME = process.argv[2] || 'ebert-julia.resume.pdf';
const OUTPUT_PATH = resolve(PDF_DIR, FILENAME);

async function generatePDF() {
  console.log(`Connecting to Chrome at ${CHROME_PATH}...`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    console.log(`Loading ${URL}...`);
    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });

    console.log(`Generating PDF...`);
    await page.pdf({
      path: OUTPUT_PATH,
      printBackground: false,
      preferCSSPageSize: true,
    });

    console.log(`Saved to ${OUTPUT_PATH}`);
  } finally {
    await browser.close();
  }
}

generatePDF().catch(err => {
  console.error(err.message);
  process.exit(1);
});
