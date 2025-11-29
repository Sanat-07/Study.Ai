import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>,
)
