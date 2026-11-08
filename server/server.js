import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

// Ensure data files exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function readJsonFile(filePath, defaultValue = []) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), 'utf-8');
      return defaultValue;
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return defaultValue;
  }
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
    return false;
  }
}

// Middleware
app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    campus: 'Aspire College Taunsa Campus',
    board: 'BISE Dera Ghazi Khan (Center #4210)',
    timestamp: new Date().toISOString()
  });
});

// GET all admission inquiries
app.get('/api/admissions', (req, res) => {
  const inquiries = readJsonFile(INQUIRIES_FILE);
  res.json(inquiries);
});

// POST submit admission inquiry
app.post('/api/admissions', (req, res) => {
  const { studentName, fatherName, phone, marks, totalMarks, program, message } = req.body;

  if (!studentName || !fatherName || !phone || !program) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: Student Name, Father Name, Phone, and Program are mandatory.'
    });
  }

  const inquiries = readJsonFile(INQUIRIES_FILE);
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const referenceCode = `ASP-TN-${randomNum}`;

  const newRecord = {
    id: `adm_${Date.now()}_${randomNum}`,
    referenceCode,
    studentName: studentName.trim(),
    fatherName: fatherName.trim(),
    phone: phone.trim(),
    marks: marks ? marks.trim() : 'N/A',
    totalMarks: totalMarks || '1100',
    program: program.trim(),
    message: message ? message.trim() : '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  inquiries.unshift(newRecord);
  writeJsonFile(INQUIRIES_FILE, inquiries);

  console.log(`✓ New Admission Inquiry Registered: ${referenceCode} for ${studentName} (${program})`);

  res.status(201).json({
    success: true,
    referenceCode,
    message: 'Admission inquiry registered successfully in Taunsa Campus Admissions Registry.',
    data: newRecord
  });
});

// GET admission inquiry by reference code
app.get('/api/admissions/:code', (req, res) => {
  const { code } = req.params;
  const inquiries = readJsonFile(INQUIRIES_FILE);
  const found = inquiries.find(
    i => i.referenceCode.toUpperCase() === code.toUpperCase()
  );

  if (!found) {
    return res.status(404).json({
      success: false,
      message: `No application record found for code ${code}`
    });
  }

  res.json({ success: true, data: found });
});

// POST contact message
app.post('/api/contact', (req, res) => {
  const { fullName, phone, message } = req.body;
  const contacts = readJsonFile(CONTACTS_FILE);

  const contactRecord = {
    id: `cnt_${Date.now()}`,
    fullName: fullName || 'Anonymous',
    phone: phone || 'N/A',
    message: message || '',
    createdAt: new Date().toISOString()
  };

  contacts.unshift(contactRecord);
  writeJsonFile(CONTACTS_FILE, contacts);

  console.log(`✓ New Contact Message received from ${fullName} (${phone})`);

  res.json({
    success: true,
    message: 'Message delivered to Aspire College Taunsa administration.'
  });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  Aspire College Taunsa — Express API Server`);
  console.log(`  Listening on: http://localhost:${PORT}`);
  console.log(`  Health Check: http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});
