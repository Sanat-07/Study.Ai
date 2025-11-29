import { User } from '../types/auth';

export interface FileMetadata {
    id: string;
    name: string;
    type: 'pdf' | 'epub' | 'txt' | 'docx' | 'pptx' | 'image' | 'url' | 'github';
    size: string;
    status: 'uploading' | 'processing' | 'success' | 'error';
    progress: number;
    uploadedAt: string;
}

const STORAGE_KEYS = {
    FILES: 'study_ai_files',
    USER: 'study_ai_user',
};

export const storageService = {
    saveFile: (file: FileMetadata) => {
        const files = storageService.getFiles();
        const updatedFiles = [file, ...files];
        localStorage.setItem(STORAGE_KEYS.FILES, JSON.stringify(updatedFiles));
    },

    getFiles: (): FileMetadata[] => {
        const stored = localStorage.getItem(STORAGE_KEYS.FILES);
        return stored ? JSON.parse(stored) : [];
    },

    saveUser: (user: User) => {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    },

    getUser: (): User | null => {
        const stored = localStorage.getItem(STORAGE_KEYS.USER);
        return stored ? JSON.parse(stored) : null;
    },

    getStats: () => {
        const files = storageService.getFiles();
        const user = storageService.getUser();

        // Mock stats based on files
        const booksUploaded = files.length;
        const quizzesTaken = Math.floor(booksUploaded * 1.5); // Mock logic
        const studyHours = Math.floor(booksUploaded * 2.5); // Mock logic

        return {
            booksUploaded,
            quizzesTaken,
            studyHours,
            streak: 0 // Hardcoded for now
        };
    },

    clear: () => {
        localStorage.removeItem(STORAGE_KEYS.FILES);
        localStorage.removeItem(STORAGE_KEYS.USER);
    }
};
