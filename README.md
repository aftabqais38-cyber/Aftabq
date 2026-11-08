# Aspire College Taunsa Campus — Information & Admissions Portal

Official web portal and full-stack admissions system for **Aspire College Taunsa Campus** (Affiliated with BISE Dera Ghazi Khan, Center Code: 4210).

Built with **React (TypeScript)**, **Vite**, **Tailwind CSS**, and an **Express.js API backend** adhering strictly to the collegiate editorial design system defined in [`DESIGN.md`](./DESIGN.md).

---

## Project Structure

```
aspire_college_information_portal/
├── client/                      # Frontend Application (React + Vite + TypeScript)
│   ├── src/
│   │   ├── components/          # Modular UI components
│   │   │   ├── Navbar.tsx       # Institutional header & sticky utility nav
│   │   │   ├── Hero.tsx         # Admissions open alert, stats & dual CTAs
│   │   │   ├── AboutSection.tsx # Vision, Mission, & Principal's verified message
│   │   │   ├── AcademicPrograms.tsx # Intermediate programs & scholarships card
│   │   │   ├── ProgramModal.tsx # Syllabus & evaluation scheme modal
│   │   │   ├── FacilitiesSection.tsx # 6 campus facility showcases
│   │   │   ├── WhyChooseSection.tsx  # 6 institutional pillars
│   │   │   ├── AdmissionsSection.tsx # Guidelines & live inquiry submission form
│   │   │   ├── GallerySection.tsx    # Filterable campus life & event photo gallery
│   │   │   ├── ContactSection.tsx    # Direct inquiry form & Google Maps view
│   │   │   └── Footer.tsx       # BISE accreditation, quick links, newsletter
│   │   ├── data/
│   │   │   └── portalData.ts    # Centralized campus information & content
│   │   ├── services/
│   │   │   └── api.ts           # Client API layer for admissions & contacts
│   │   ├── types/
│   │   │   └── index.ts         # TypeScript data definitions
│   │   ├── App.tsx              # Root component assembly
│   │   ├── main.tsx             # Entry point
│   │   └── index.css            # Tailwind directives & glassmorphic styles
│   ├── tailwind.config.js       # Design tokens & color system
│   ├── vite.config.ts           # Vite config with API proxy
│   └── package.json
├── server/                      # Backend API (Express.js)
│   ├── data/
│   │   ├── inquiries.json       # Persisted student admission applications
│   │   └── contacts.json        # Persisted campus contact inquiries
│   ├── server.js                # Express REST API routes & validation
│   └── package.json
├── code.html                    # Original Stitch HTML prototype
├── DESIGN.md                    # Institutional design tokens & typography rules
├── screen.png                   # High-res prototype screenshot
├── package.json                 # Root script runner for concurrent dev
└── README.md
```

---

## Quick Start Guide

### 1. Run Both Client & Backend Simultaneously

From the project root:

```bash
npm run dev
```

- **Frontend Client**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`

### 2. Run Independently

#### Run Backend Server:
```bash
cd server
npm run dev
```

#### Run Frontend Client:
```bash
cd client
npm run dev
```

### 3. Production Build

```bash
cd client
npm run build
```

---

## Backend REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service health check and college affiliation info |
| `POST` | `/api/admissions` | Submit a student inquiry (generates `#ASP-TN-XXXX` reference code) |
| `GET` | `/api/admissions` | Retrieve list of all admission inquiries |
| `GET` | `/api/admissions/:code` | Look up application details by reference code |
| `POST` | `/api/contact` | Submit general message to campus administration desk |

---

## Design System Tokens

- **Aspire Crimson Red (`#93000B` / `#B91C1C`)**: Primary institutional actions, buttons, and alert pulses.
- **Midnight Navy (`#0B1C30` / `#0F172A`)**: High-contrast typography and bedrock containers.
- **Warm Amber Honor (`#6E3900` / `#D97706`)**: Merit distinctions and scholarship badges.
- **Headlines Font**: `Outfit`
- **Body & Controls Font**: `Plus Jakarta Sans`
