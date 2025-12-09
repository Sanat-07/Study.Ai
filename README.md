<div align="center">

# 📚 Study.ai

### AI-Powered Learning Platform for Modern Students

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Transform your notes, PDFs, and videos into flashcards, quizzes, and practice tests — instantly.**

</div>

---

## 🌟 What is Study.ai?

**Study.ai** revolutionizes how you study by leveraging artificial intelligence to transform any learning material into interactive study tools. Upload your documents, paste your notes, or import from GitHub — and watch as AI instantly creates flashcards, quizzes, mind maps, and personalized study plans.

### ✨ Why Study.ai?

- **⚡ 10x Faster** - Auto-generate flashcards in seconds vs. hours of manual work
- **🎯 Smarter Studying** - AI adapts to your learning style and knowledge gaps
- **📊 Track Progress** - Real-time analytics show exactly what you've mastered
- **🤖 24/7 AI Tutor** - Get instant help with concepts you don't understand
- **🎨 Beautiful UX** - Modern dark mode design with smooth animations

---

## 🚀 Quick Start

### Prerequisites

Ensure you have:
- **Node.js** 18.x or higher
- **npm** 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Sanat-07/Study.Ai.git
cd Study.Ai

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be live at **http://localhost:5173** 🎉

### Build for Production

```bash
npm run build      # Create optimized build
npm run preview    # Preview production build
```

---

## 🎯 Key Features

### 📝 Auto Flashcards
Extract Q&A from any material automatically. Spaced repetition algorithm optimizes memorization.

### ❓ Smart Quizzes
Generate adaptive quizzes with multiple-choice, fill-in-the-blank, and written questions.

### 🗺️ Mind Maps
Visualize complex topics and their connections with AI-generated mind maps.

### 🤖 AI Tutor
Chat with an intelligent tutor that explains concepts, answers questions, and guides you through problems.

### 📊 Analytics Dashboard
Track study time, quiz scores, mastery levels, and progress over time with beautiful charts.

### 🌓 Dark/Light Mode
Seamlessly switch between elegant dark mode (`#0A0A0A`) and clean light mode.

### 📚 Multi-Format Support
Import from PDFs, TXT files, URLs, or GitHub repositories.

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Routing** | React Router v6 |
| **Forms** | React Hook Form |
| **Charts** | Recharts |
| **Auth** | React OAuth Google |
| **State** | TanStack Query |

---

## 📁 Project Structure

```
Study.Ai/
├── src/
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── landing/             # Landing page sections
│   │   ├── layout/              # Header, Footer
│   │   ├── study/               # Study mode components
│   │   └── theme-provider.tsx  # Dark/Light theme manager
│   │
│   ├── pages/
│   │   ├── LandingPage.tsx     # Marketing page
│   │   ├── DashboardPage.tsx   # Main dashboard
│   │   ├── UploadPage.tsx      # Material upload
│   │   ├── QuizPage.tsx        # Interactive quizzes
│   │   ├── NotesPage.tsx       # Note-taking
│   │   ├── MindMapPage.tsx     # Mind maps
│   │   ├── StatisticsPage.tsx  # Analytics
│   │   └── auth/               # Login, Register
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── globals.css
│
├── public/
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🎨 Design System

### Color Palette

```css
/* Dark Mode (Primary) */
--background: #0A0A0A
--card: #111111
--primary: #0066FF
--foreground: #FFFFFF
--muted: #9CA3AF

/* Glassmorphism */
backdrop-blur + opacity effects on Header
```

### Typography
- **Headings**: Inter, bold
- **Body**: System UI fonts
- **Code**: Monospace

---

## 📜 Available Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

---

## 🌐 Routes

### Public Routes
- `/` - Landing Page
- `/login` - Sign In
- `/register` - Sign Up

### Protected Routes (Auth Required)
- `/dashboard` - Main Dashboard
- `/upload` - Upload Materials
- `/library` - Book Library
- `/book/:id` - Book Details
- `/book/:id/quiz` - Quiz Mode
- `/book/:id/notes` - Note Editor
- `/book/:id/mindmap` - Mind Map View
- `/book/:id/statistics` - Progress Stats
- `/book/:id/profile` - User Profile (in study context)
- `/progress` - Global Progress
- `/profile` - User Settings

---

## 🗺️ Roadmap

### ✅ Phase 1: Foundation (Complete)
- Modern React + TypeScript setup
- Responsive dark mode UI
- Component library (shadcn/ui)
- Client-side routing

### 🚧 Phase 2: Core Features (In Progress)
- File upload system
- AI flashcard generation
- Quiz generation
- Mind map visualization
- Progress tracking

### 📋 Phase 3: Backend Integration
- User authentication
- Database (MongoDB)
- RESTful API
- Cloud storage

### 📋 Phase 4: AI Enhancement
- GPT-4 integration
- Custom AI tutor
- Adaptive learning paths
- Voice explanations

### 📋 Phase 5: Mobile & Premium
- React Native app
- Premium subscriptions
- Offline mode
- Study groups

---

## 👥 Team

<table>
<tr>
<td align="center">
<img src="https://github.com/Sanat-07.png" width="100px;" alt="Sanat"/><br />
<sub><b>Sanat Bogenbaev</b></sub><br />
<sub>CEO & Co-founder</sub><br />
<a href="https://github.com/Sanat-07">GitHub</a>
</td>
<td align="center">
<img src="https://github.com/Oralkhan-coder.png" width="100px;" alt="Oralxhan"/><br />
<sub><b>Oralxhan Seilxhan</b></sub><br />
<sub>CTO & Co-founder</sub><br />
<a href="https://github.com/Oralkhan-coder">GitHub</a>
</td>
</tr>
</table>

---

## 🤝 Contributing

This is a private project. For collaboration inquiries:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request

---

## 📄 License

**Private & Proprietary** - All rights reserved.

---

## 📞 Contact

<div align="center">

[![Email](https://img.shields.io/badge/EMAIL-bgenbaevsanat@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:bgenbaevsanat@gmail.com)
[![GitHub](https://img.shields.io/badge/GITHUB-Sanat--07-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sanat-07/Study.Ai)

---

### ⭐ Star us on GitHub if this helps you rter!

</div>

---

<div align="center">

**Built with ❤️ by the Study.ai Team**

*Empowering learners worldwide through intelligent technology*

© 2025 Study.ai. All rights reserved.

</div>
