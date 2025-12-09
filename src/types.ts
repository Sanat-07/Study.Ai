export interface Book {
    id: string;
    title: string;
    author: string;
    progress: number;
    totalSize: string;
    dateAdded: string;
    coverColor: string; // Tailwind class for gradient
    type: 'PDF' | 'EPUB' | 'TXT' | 'IMAGE';
}

export interface Flashcard {
    id: string;
    front: string;
    back: string;
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: { id: string; text: string }[];
    correctId: string;
}

export interface MindMapNode {
    id: string;
    label: string;
    x: number;
    y: number;
    color: string;
    children?: string[]; // IDs of children
}

export interface UserStats {
    booksCompleted: number;
    averageScore: number;
    totalStudyTime: string;
    dayStreak: number;
}
