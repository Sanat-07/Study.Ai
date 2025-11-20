import { Bell, Lock, Database, Palette, Globe } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="ml-64 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-3">Settings</h1>
          <p className="text-gray-400">
            Configure your AI StudyBook experience
          </p>
        </div>

        {/* Notifications */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-2xl">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div>
                <div className="mb-1">Email Notifications</div>
                <div className="text-sm text-gray-400">Receive updates via email</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-500" />
            </label>

            <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div>
                <div className="mb-1">Daily Study Reminders</div>
                <div className="text-sm text-gray-400">Get reminded to maintain your streak</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-500" />
            </label>

            <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div>
                <div className="mb-1">Quiz Completion Alerts</div>
                <div className="text-sm text-gray-400">Get notified when quizzes are ready</div>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-blue-500" />
            </label>

            <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div>
                <div className="mb-1">Weekly Progress Reports</div>
                <div className="text-sm text-gray-400">Summary of your weekly activity</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-500" />
            </label>

            <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div>
                <div className="mb-1">New Feature Announcements</div>
                <div className="text-sm text-gray-400">Stay updated on new features</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-500" />
            </label>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-2xl">Privacy & Security</h2>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div>
                <div className="mb-1">Two-Factor Authentication</div>
                <div className="text-sm text-gray-400">Add an extra layer of security</div>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-blue-500" />
            </label>

            <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div>
                <div className="mb-1">Share Anonymous Usage Data</div>
                <div className="text-sm text-gray-400">Help us improve the platform</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-500" />
            </label>

            <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div>
                <div className="mb-1">Allow AI Training on My Data</div>
                <div className="text-sm text-gray-400">Improve AI accuracy (optional)</div>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-blue-500" />
            </label>

            <button className="w-full p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
              <div className="mb-1">Manage Connected Accounts</div>
              <div className="text-sm text-gray-400">Google, Microsoft, etc.</div>
            </button>

            <button className="w-full p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
              <div className="mb-1">Download My Data</div>
              <div className="text-sm text-gray-400">Export all your information</div>
            </button>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-green-400" />
            </div>
            <h2 className="text-2xl">Data Management</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span>Storage Used</span>
                <span className="text-blue-400">245 MB / 10 GB</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '2.45%' }}></div>
              </div>
            </div>

            <button className="w-full p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
              <div className="mb-1">Clear Cache</div>
              <div className="text-sm text-gray-400">Free up 45 MB of space</div>
            </button>

            <button className="w-full p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
              <div className="mb-1">Delete Old Quizzes</div>
              <div className="text-sm text-gray-400">Remove quizzes older than 90 days</div>
            </button>

            <button className="w-full p-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg transition-colors text-left">
              <div className="mb-1 text-red-400">Delete All Data</div>
              <div className="text-sm text-red-400/70">Permanently remove all your books and progress</div>
            </button>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-orange-400" />
            </div>
            <h2 className="text-2xl">Appearance</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-400 mb-3 block">Theme</label>
              <div className="grid grid-cols-3 gap-3">
                <button className="p-4 bg-white/5 border-2 border-blue-500 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="w-full h-12 bg-gray-900 rounded mb-2"></div>
                  <div className="text-sm">Dark</div>
                </button>
                <button className="p-4 bg-white/5 border-2 border-transparent rounded-lg hover:bg-white/10 transition-colors">
                  <div className="w-full h-12 bg-white rounded mb-2"></div>
                  <div className="text-sm">Light</div>
                </button>
                <button className="p-4 bg-white/5 border-2 border-transparent rounded-lg hover:bg-white/10 transition-colors">
                  <div className="w-full h-12 bg-gradient-to-r from-gray-900 to-white rounded mb-2"></div>
                  <div className="text-sm">Auto</div>
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Accent Color</label>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-blue-500 rounded-lg border-2 border-white"></button>
                <button className="w-10 h-10 bg-purple-500 rounded-lg border-2 border-transparent hover:border-white/30"></button>
                <button className="w-10 h-10 bg-green-500 rounded-lg border-2 border-transparent hover:border-white/30"></button>
                <button className="w-10 h-10 bg-orange-500 rounded-lg border-2 border-transparent hover:border-white/30"></button>
                <button className="w-10 h-10 bg-pink-500 rounded-lg border-2 border-transparent hover:border-white/30"></button>
              </div>
            </div>
          </div>
        </div>

        {/* Language & Region */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl">Language & Region</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Language</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
                <option value="en" className="bg-gray-900">English</option>
                <option value="es" className="bg-gray-900">Español</option>
                <option value="fr" className="bg-gray-900">Français</option>
                <option value="de" className="bg-gray-900">Deutsch</option>
                <option value="zh" className="bg-gray-900">中文</option>
                <option value="ja" className="bg-gray-900">日本語</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Time Zone</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
                <option value="utc" className="bg-gray-900">UTC</option>
                <option value="est" className="bg-gray-900">Eastern Time (ET)</option>
                <option value="cst" className="bg-gray-900">Central Time (CT)</option>
                <option value="pst" className="bg-gray-900">Pacific Time (PT)</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Date Format</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
                <option value="mdy" className="bg-gray-900">MM/DD/YYYY</option>
                <option value="dmy" className="bg-gray-900">DD/MM/YYYY</option>
                <option value="ymd" className="bg-gray-900">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
