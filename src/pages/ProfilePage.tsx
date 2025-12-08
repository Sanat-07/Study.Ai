import { User, Save, Camera, Target, Settings, Mail, MapPin, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { storageService } from '@/shared/services/storage.service';

export function ProfilePage() {
  const [user, setUser] = useState({ id: '1', email: 'student@email.com', fullName: 'Student' });

  useEffect(() => {
    const userData = storageService.getUser();
    if (userData) setUser(userData);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      <div className="max-w-4xl mx-auto pt-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Profile Settings</h1>
          <p className="text-gray-500">Manage your account and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 mb-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-white/30 transition-colors">
                <span className="text-4xl font-bold text-gray-500">{user.fullName[0]}</span>
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white text-black hover:bg-gray-200 rounded-full flex items-center justify-center shadow-lg transition-colors">
                <Camera className="w-5 h-5" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">{user.fullName}</h2>
              <p className="text-gray-500 text-lg mb-4">{user.email}</p>
              <div className="flex justify-center md:justify-start gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20">Pro Member</span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/20">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-gray-400" />
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-500 mb-2 block font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input
                  type="text"
                  defaultValue={user.fullName}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-2 block font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-2 block font-medium">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input
                  type="text"
                  placeholder="Your location"
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-2 block font-medium">Date of Birth</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input
                  type="date"
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Study Preferences */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-gray-400" />
            Study Preferences
          </h2>
          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-500 mb-2 block font-medium">Daily Study Goal (minutes)</label>
              <input
                type="number"
                defaultValue="60"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-2 block font-medium">Quiz Difficulty</label>
              <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white cursor-pointer appearance-none">
                <option value="easy" className="bg-[#1A1A1A]">Easy</option>
                <option value="medium" className="bg-[#1A1A1A]" selected>Medium</option>
                <option value="hard" className="bg-[#1A1A1A]">Hard</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-3 block font-medium">Notifications</label>
              <div className="space-y-3 bg-[#1A1A1A] p-4 rounded-xl border border-white/5">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" defaultChecked className="peer sr-only" />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Daily study reminders</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" defaultChecked className="peer sr-only" />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Quiz completion alerts</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Weekly progress reports</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-400" />
            Appearance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-500 mb-2 block font-medium">Theme</label>
              <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white cursor-pointer appearance-none">
                <option value="dark" className="bg-[#1A1A1A]" selected>Dark</option>
                <option value="light" className="bg-[#1A1A1A]">Light</option>
                <option value="auto" className="bg-[#1A1A1A]">Auto</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-2 block font-medium">Language</label>
              <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white cursor-pointer appearance-none">
                <option value="en" className="bg-[#1A1A1A]" selected>English</option>
                <option value="kz" className="bg-[#1A1A1A]">Қазақша</option>
                <option value="ru" className="bg-[#1A1A1A]">Русский</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pb-8">
          <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
