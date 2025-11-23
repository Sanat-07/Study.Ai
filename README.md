<div align="center">

# 📚 AI StudyBook

### Transform Your Learning Experience with AI-Powered Study Tools

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**[Live Demo](#) • [Documentation](#) • [Report Bug](https://github.com/Sanat-07/Study.Ai/issues) • [Request Feature](https://github.com/Sanat-07/Study.Ai/issues)**

</div>

---

## 🌟 Overview

**AI StudyBook** is a cutting-edge educational platform that leverages artificial intelligence to revolutionize the way students and professionals learn. By combining intelligent study tools, interactive quizzes, personalized AI tutoring, and advanced analytics, we empower learners to master any subject efficiently and effectively.

### ✨ Why AI StudyBook?

- 🚀 **10x Faster Learning** - AI-generated summaries save hours of reading time
- 🎯 **Personalized Experience** - Adaptive learning paths tailored to your style
- 📊 **Data-Driven Insights** - Track progress and identify knowledge gaps
- 🤖 **24/7 AI Tutor** - Get instant help whenever you need it
- 🎨 **Beautiful Interface** - Modern, responsive design with smooth animations

---

## 🎯 Key Features

<table>
<tr>
<td width="50%">

### 📝 **Instant Summaries**
Upload any document or paste text to receive concise, AI-generated summaries in seconds. Perfect for lengthy textbooks, research papers, and articles.

### ❓ **AI Quiz Generator**
Automatically convert your study materials into interactive quizzes with multiple-choice, true/false, and open-ended questions.

### 🗂️ **Smart Flashcards**
Create digital flashcards with spaced repetition algorithms that optimize memorization and long-term retention.

</td>
<td width="50%">

### 🗺️ **Mind Maps**
Visualize complex topics and their relationships with AI-generated mind maps that make connections clear and memorable.

### 🤖 **AI Tutor**
Chat with an intelligent AI tutor that provides personalized explanations, answers questions, and guides you through difficult concepts.

### 📊 **Progress Analytics**
Monitor your learning journey with detailed statistics, performance metrics, and personalized recommendations.

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `18.x` or higher ([Download](https://nodejs.org/))
- **npm** `9.x` or higher (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sanat-07/Study.Ai.git
cd Study.Ai

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The application will be available at **`http://localhost:5173`** 🎉

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

Production files will be generated in the `dist/` directory.

---

## 🛠️ Technology Stack

### **Core Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 18.2.0 | UI library for building interactive interfaces |
| [TypeScript](https://www.typescriptlang.org/) | 5.2.2 | Type-safe JavaScript for robust code |
| [Vite](https://vitejs.dev/) | 5.2.0 | Lightning-fast build tool and dev server |
| [React Router](https://reactrouter.com/) | 6.22.3 | Client-side routing and navigation |

### **Styling & UI**

| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.1 | Utility-first CSS framework |
| [Radix UI](https://www.radix-ui.com/) | Various | Accessible, unstyled component primitives |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | Beautiful, customizable component library |
| [Framer Motion](https://www.framer.com/motion/) | 11.0.20 | Production-ready animation library |
| [Lucide React](https://lucide.dev/) | 0.363.0 | Beautiful & consistent icon library |

### **Additional Libraries**

- **Recharts** - Data visualization and charting
- **React Hook Form** - Performant form validation
- **Sonner** - Elegant toast notifications
- **date-fns** - Modern date utility library
- **Embla Carousel** - Lightweight carousel library

---

## 📁 Project Structure

```
Study.Ai/
│
├── 📂 src/
│   ├── 📂 components/              # Reusable React components
│   │   ├── 📂 ui/                 # shadcn/ui component library
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ... (50+ components)
│   │   ├── BookSidebar.tsx        # Book navigation sidebar
│   │   ├── BookTopMenu.tsx        # Book header menu
│   │   ├── InteractiveBackground.tsx  # Animated particle background
│   │   ├── Layout.tsx             # Main layout wrapper
│   │   └── Sidebar.tsx            # Dashboard sidebar
│   │
│   ├── 📂 pages/                  # Page components
│   │   ├── LandingPage.tsx        # Marketing landing page
│   │   ├── LoginPage.tsx          # User authentication
│   │   ├── RegisterPage.tsx       # User registration
│   │   ├── PricingPage.tsx        # Pricing plans
│   │   ├── DashboardPage.tsx      # Main dashboard
│   │   ├── UploadPage.tsx         # File upload interface
│   │   ├── BookDetailsPage.tsx    # Book information
│   │   ├── ReaderPage.tsx         # Book reader
│   │   ├── SummaryPage.tsx        # AI summaries
│   │   ├── QuizPage.tsx           # Interactive quizzes
│   │   ├── MindMapPage.tsx        # Mind map visualization
│   │   ├── TutorPage.tsx          # AI tutor chat
│   │   ├── ProgressPage.tsx       # Analytics dashboard
│   │   ├── LibraryPage.tsx        # Book library
│   │   ├── ProfilePage.tsx        # User profile
│   │   └── SettingsPage.tsx       # App settings
│   │
│   ├── App.tsx                    # Main application component
│   ├── main.tsx                   # Application entry point
│   └── globals.css                # Global styles & animations
│
├── 📂 public/                     # Static assets
├── index.html                     # HTML template
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── postcss.config.js              # PostCSS configuration
└── package.json                   # Project dependencies
```

---

## 🎨 Features Deep Dive

### 🌊 Smooth Scroll Navigation

Seamless navigation experience with smooth scrolling to sections:

```typescript
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### 🎭 Dynamic Navbar

Navbar with glassmorphism effect that activates on scroll:

```typescript
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### ✨ Scroll Animations

Elements fade in elegantly as they enter the viewport using IntersectionObserver:

```typescript
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
```

### 🎨 Interactive Background

Particle system with mouse interaction for an engaging visual experience.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload on `localhost:5173` |
| `npm run build` | Compile TypeScript and build optimized production bundle |
| `npm run preview` | Preview production build locally before deployment |
| `npm run lint` | Run ESLint to check code quality and style |

---

## 🌐 Application Routes

### **Public Routes**

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | LandingPage | Marketing homepage with features showcase |
| `/login` | LoginPage | User authentication and sign-in |
| `/register` | RegisterPage | New user registration |
| `/pricing` | PricingPage | Pricing plans and feature comparison |

### **Protected Routes** (Requires Authentication)

| Route | Component | Description |
|-------|-----------|-------------|
| `/dashboard` | DashboardPage | Main dashboard with book overview |
| `/upload` | UploadPage | Upload new study materials |
| `/library` | LibraryPage | Browse and manage uploaded books |
| `/book/:id` | BookDetailsPage | Individual book information |
| `/book/:id/reader` | ReaderPage | Read book content |
| `/book/:id/summary` | SummaryPage | AI-generated summaries |
| `/book/:id/quiz` | QuizPage | Interactive quizzes |
| `/book/:id/mindmap` | MindMapPage | Visual mind maps |
| `/book/:id/tutor` | TutorPage | Chat with AI tutor |
| `/progress` | ProgressPage | Learning analytics and insights |
| `/profile` | ProfilePage | User profile and preferences |
| `/settings` | SettingsPage | Application settings |

---

## 🗺️ Roadmap

### **Phase 1: Foundation** ✅
- [x] Modern React + TypeScript setup
- [x] Responsive UI with Tailwind CSS
- [x] Client-side routing
- [x] Component library integration

### **Phase 2: Backend Integration** 🚧
- [ ] RESTful API development
- [ ] User authentication & authorization
- [ ] Database schema design
- [ ] File upload & storage system

### **Phase 3: AI Features** 📋
- [ ] AI model integration for summaries
- [ ] Quiz generation algorithm
- [ ] Mind map generation
- [ ] AI tutor chatbot

### **Phase 4: Premium Features** 📋
- [ ] Payment gateway integration
- [ ] Subscription management
- [ ] Advanced analytics
- [ ] Collaborative study groups

### **Phase 5: Mobile** 📋
- [ ] React Native mobile app
- [ ] iOS & Android deployment
- [ ] Offline mode support

---

## 👥 Team

<table>
<tr>
<td align="center">
<img src="https://github.com/Sanat-07.png" width="100px;" alt="Sanat Bogenbaev"/><br />
<sub><b>Sanat Bogenbaev</b></sub><br />
<sub>CEO & Co-founder</sub><br />
<a href="https://github.com/Sanat-07">GitHub</a>
</td>
<td align="center">
<img src="https://github.com/Oralkhan-coder.png" width="100px;" alt="Oralxhan Seilxhan"/><br />
<sub><b>Oralxhan Seilxhan</b></sub><br />
<sub>CTO & Co-founder</sub><br />
<a href="https://github.com/Oralkhan-coder">GitHub</a>
</td>
</tr>
</table>

---

## 🤝 Contributing

This is currently a private project. For collaboration inquiries or partnership opportunities, please reach out to the team.

### Development Guidelines

If you're part of the development team:

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

---

## 📄  License

This project is **private and proprietary**. All rights reserved.

© 2025 AI StudyBook. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 📞  Contact

<div align="center">

[![Email](https://img.shields.io/badge/EMAIL-bgenbaevsanat@gmail.com-gray?style=for-the-badge&logo=gmail)](mailto:bgenbaevsanat@gmail.com)
[![Support](https://img.shields.io/badge/SUPPORT-bgenbaevsanat@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:bgenbaevsanat@gmail.com)
[![Website](https://img.shields.io/badge/WEBSITE-Study.Ai-gray?style=for-the-badge&logo=google-chrome&logoColor=white)](https://github.com/Sanat-07/Study.Ai)
[![GitHub](https://img.shields.io/badge/GITHUB-Sanat--07/Study.Ai-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sanat-07/Study.Ai)

---

### 🌟 Star us on GitHub if you find this project helpful!

</div>

---

<div align="center">

**Built with ❤️ by the AI StudyBook Team**

*Empowering learners worldwide through intelligent technology*

</div>
