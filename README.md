# AI StudyBook

AI StudyBook is a web application that helps users study by providing tools to analyze and interact with their books.

## Features

- **Book Upload:** Users can upload their books in various formats.
- **Library:** A personal library to manage and organize uploaded books.
- **Progress Tracking:** Monitor your study progress and performance.
- **AI-Powered Tools:**
    - **Summaries:** Generate concise summaries of your books.
    - **Quizzes:** Create quizzes based on the book's content to test your knowledge.
    - **Mind Maps:** Visualize the book's concepts with interactive mind maps.
    - **AI Tutor:** Chat with an AI tutor to get answers and explanations about the book.
- **Reader:** A built-in reader to view your books.
- **User Authentication:** Secure user authentication using Google OAuth.

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **UI Components:** Radix UI
- **Routing:** React Router
- **Data Fetching:** TanStack Query
- **Authentication:** Google OAuth

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Sanat-07/Study.Ai.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

`VITE_GOOGLE_CLIENT_ID`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run lint`

Lints the codebase and reports any issues.

### `npm run preview`

Runs a local preview of the production build.
