import { User, Save, Camera, Target, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';
import { storageService } from '@/shared/services/storage.service';

export function ProfilePage() {
  const [user, setUser] = useState({ id: '1', email: 'student@email.com', fullName: 'Student' });

  useEffect(() => {
    const userData = storageService.getUser();
    if (userData) setUser(userData);
  }, []);

  return (
    <div className="ml-64 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Profile Settings</h1>
          <p className="text-gray-400">Manage your account and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-8">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center overflow-hidden group-hover:border-blue-500/50 transition-colors">
                <User className="w-16 h-16 text-gray-400" />
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
                <Camera className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{user.fullName}</h2>
              <p className="text-gray-400 text-lg">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Full Name</label>
              <input
                type="text"
                defaultValue={user.fullName}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Location</label>
              <input
                type="text"
                placeholder="Your location"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Date of Birth</label>
              <input
                type="date"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Study Preferences */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Study Preferences
          </h2>
          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Daily Study Goal (minutes)</label>
              <input
                type="number"
                defaultValue="60"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Quiz Difficulty</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
                <option value="easy" className="bg-gray-900">Easy</option>
                <option value="medium" className="bg-gray-900" selected>Medium</option>
                <option value="hard" className="bg-gray-900">Hard</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-3 block">Notifications</label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-500" />
                  <span>Daily study reminders</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-500" />
                  <span>Quiz completion alerts</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-blue-500" />
                  <span>Weekly progress reports</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Appearance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Theme</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
                <option value="dark" className="bg-gray-900" selected>Dark</option>
                <option value="light" className="bg-gray-900">Light</option>
                <option value="auto" className="bg-gray-900">Auto</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Language</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
                <option value="en" className="bg-gray-900" selected>English</option>
                <option value="kz" className="bg-gray-900">Қазақша</option>
                <option value="ru" className="bg-gray-900">Русский</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
