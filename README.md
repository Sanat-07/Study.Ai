# 📚 AI StudyBook

> Empowering students and professionals by transforming learning into an interactive experience.

AI StudyBook is a modern web application that leverages artificial intelligence to enhance the learning experience through intelligent study tools, interactive quizzes, and personalized study schedules.

![AI StudyBook Landing Page](https://img.shields.io/badge/React-18.2.0-blue?logo=react) ![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css)

## ✨ Features

### 🎯 Core Functionality
- **📝 Instant Summaries** - Upload documents or paste text to get concise, accurate summaries in seconds
- **❓ AI Quiz Generator** - Automatically turn study materials into interactive quizzes
- **🗂️ Smart Flashcards** - Create digital flashcards with spaced repetition for efficient memorization
- **🗺️ Mind Maps** - Visualize complex topics with AI-generated mind maps
- **🤖 AI Tutor** - Get personalized assistance and explanations from an AI tutor
- **📊 Progress Tracking** - Monitor your learning progress with detailed analytics

### 🎨 User Experience
- **Smooth Scrolling** - Seamless navigation with smooth scroll animations
- **Interactive Background** - Dynamic particle effects for an engaging interface
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Mode Ready** - Built with dark mode support (configurable)

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Sanat-07/Study.Ai.git
cd Study.Ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **TypeScript 5.2** - Type-safe JavaScript
- **Vite 5.2** - Fast build tool and dev server
- **React Router 6.22** - Client-side routing

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Framer Motion 11** - Animation library

### UI Components
- **shadcn/ui** - Re-usable component collection
- **Recharts** - Charting library for analytics
- **React Hook Form** - Form validation
- **Sonner** - Toast notifications

## 📁 Project Structure

```
Study.Ai/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── BookSidebar.tsx
│   │   ├── BookTopMenu.tsx
│   │   ├── InteractiveBackground.tsx
│   │   ├── Layout.tsx
│   │   └── Sidebar.tsx
│   ├── pages/              # Page components
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── UploadPage.tsx
│   │   ├── BookDetailsPage.tsx
│   │   ├── ReaderPage.tsx
│   │   ├── SummaryPage.tsx
│   │   ├── QuizPage.tsx
│   │   ├── MindMapPage.tsx
│   │   ├── TutorPage.tsx
│   │   ├── ProgressPage.tsx
│   │   ├── LibraryPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── SettingsPage.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```


## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🌐 Pages

### Public Pages
- **Landing Page** (`/`) - Marketing page with features and pricing
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration
- **Pricing** (`/pricing`) - Pricing plans and features

### Protected Pages (Dashboard)
- **Dashboard** (`/dashboard`) - Main dashboard with book overview
- **Upload** (`/upload`) - Upload new study materials
- **Library** (`/library`) - Browse uploaded books
- **Book Details** (`/book/:id`) - Individual book information
- **Reader** (`/book/:id/reader`) - Read book content
- **Summary** (`/book/:id/summary`) - AI-generated summaries
- **Quiz** (`/book/:id/quiz`) - Interactive quizzes
- **Mind Map** (`/book/:id/mindmap`) - Visual mind maps
- **AI Tutor** (`/book/:id/tutor`) - Chat with AI tutor
- **Progress** (`/progress`) - Learning analytics
- **Profile** (`/profile`) - User profile settings
- **Settings** (`/settings`) - Application settings

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] Real authentication system
- [ ] AI model integration for summaries and quizzes
- [ ] Database for user data and books
- [ ] File upload functionality
- [ ] Payment integration for premium plans
- [ ] Mobile app (React Native)

## 👥 Team

- **Sanat Bogenbaev** - CEO, Co-founder
- **Oralxhan Seilxhan** - CTO, Co-founder
- **We need a ML Engineer aaaaaaaa**

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For collaboration inquiries, please contact the team.

## 📞 Contact

- **GitHub**: [@Sanat-07](https://github.com/Sanat-07)
- **Email**: bgenbaevsanat@gmail.com

---

<div align="center">
  <strong>Built with ❤️ by the AI Study Team</strong>
</div>
