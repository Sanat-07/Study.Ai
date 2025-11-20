import { User, Save, Camera } from 'lucide-react';

export function ProfilePage() {
  return (
    <div className="ml-64 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-3">Profile & Settings</h1>
          <p className="text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
          <h2 className="text-2xl mb-6">Profile Information</h2>

          <div className="flex items-start gap-8 mb-8">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-blue-400" />
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Camera className="w-5 h-5" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Student"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Email</label>
                <input
                  type="email"
                  defaultValue="john.student@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Date of Birth</label>
                <input
                  type="date"
                  defaultValue="2000-01-15"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Location</label>
                <input
                  type="text"
                  defaultValue="New York, USA"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>

        {/* Study Preferences */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
          <h2 className="text-2xl mb-6">Study Preferences</h2>

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
              <label className="text-sm text-gray-400 mb-2 block">Default Quiz Difficulty</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
                <option value="easy" className="bg-gray-900">Easy</option>
                <option value="medium" className="bg-gray-900" selected>Medium</option>
                <option value="hard" className="bg-gray-900">Hard</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Summary Detail Level</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
                <option value="brief" className="bg-gray-900">Brief</option>
                <option value="moderate" className="bg-gray-900" selected>Moderate</option>
                <option value="detailed" className="bg-gray-900">Detailed</option>
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
                  <span>Quiz completion notifications</span>
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
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
          <h2 className="text-2xl mb-6">Appearance</h2>

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
                <option value="es" className="bg-gray-900">Español</option>
                <option value="fr" className="bg-gray-900">Français</option>
                <option value="de" className="bg-gray-900">Deutsch</option>
              </select>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 mb-6">
          <h2 className="text-2xl mb-6">Subscription</h2>

          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-lg mb-1">Pro Plan</div>
              <div className="text-sm text-gray-400">Unlimited books, AI features, and priority support</div>
            </div>
            <div className="text-right">
              <div className="text-2xl mb-1">$9.99<span className="text-sm text-gray-400">/mo</span></div>
              <div className="text-sm text-green-400">Active</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
              Manage Subscription
            </button>
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
              View Billing History
            </button>
          </div>
        </div>

        {/* Account Management */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl mb-6">Account Management</h2>

          <div className="space-y-4">
            <button className="w-full px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
              Change Password
            </button>
            <button className="w-full px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
              Export My Data
            </button>
            <button className="w-full px-6 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg transition-colors text-left text-red-400">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
