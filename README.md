# 📱 Agora Swipe (Frontend Client)

A mobile-first, Tinder-style swiping interface built to browse, filter, and save second-hand items scraped from [Agora.co.il](https://www.agora.co.il/).

Designed to work seamlessly as a **Telegram Mini App** or in any modern web browser.

> 🔗 **Note:** This is the **Frontend** repository. The **FastAPI Web Scraper Backend** can be found [here](https://github.com/orishor/agora-scraper).

---

## 🚧 Status: Work In Progress

This project is currently under active development.

### 📋 Roadmap

- [ ] UI overhaul with smoother Framer Motion swipe animations.
- [ ] Full integration with the MongoDB-powered backend.
- [ ] Add a dedicated **Saved Items** gallery.
- [ ] Improve mobile responsiveness and performance.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

---

## 🚀 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/agora-swipe.git
cd agora-swipe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root (and make sure it's included in your `.gitignore`).

Example:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

# Future frontend secrets can be added here
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 📲 Running as a Telegram Mini App (Optional)

If you're developing the Telegram Mini App locally, expose your development server using **ngrok**:

```bash
ngrok http 3000
```

Use the generated HTTPS URL as your Mini App URL in Telegram.

---

## 📁 Project Structure

```text
.
├── app/                # Next.js App Router
├── components/         # Reusable UI components
├── public/             # Static assets
├── styles/             # Global styles
├── .env.local          # Environment variables (not committed)
└── README.md
```

---

## 📌 Notes

- This frontend communicates with the FastAPI backend for item retrieval and swipe actions.
- Optimized for mobile-first browsing and Telegram Mini Apps.
- Works in any modern browser during development.
