'use client'

import { useState } from 'react'
import type { User, Reward, Class } from '@/types'

interface AdminDashboardProps {
  users: User[]
  rewards: Reward[]
  classes: Class[]
}

export default function AdminDashboard({ users, rewards, classes }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'rewards', label: 'Rewards', icon: '🏆' },
    { id: 'institute', label: 'Institute Requests', icon: '🏢' },
    { id: 'audit', label: 'Audit Logs', icon: '📋' },
    { id: 'fraud', label: 'Fraud Cases', icon: '🚨' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'backups', label: 'Backups', icon: '💾' }
  ]

  const principalRecommended = rewards.filter(r => r.metadata?.status?.key === 'principal_recommended')
  const activeUsers = users.filter(u => u.metadata?.status?.key === 'active')

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-gray-900 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex-1">
        <header className="bg-white border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">System Administration</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Admin</span>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-600">Live Users</div>
                  <div className="text-2xl font-bold">{activeUsers.length}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-600">Active Sockets</div>
                  <div className="text-2xl font-bold">0</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-600">Pending Rewards</div>
                  <div className="text-2xl font-bold text-orange-600">{principalRecommended.length}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-600">Fraud Alerts</div>
                  <div className="text-2xl font-bold text-red-600">0</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-600">DB Lag</div>
                  <div className="text-2xl font-bold text-green-600">12ms</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Universal Activity Feed</h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
                    <span className="text-xs text-gray-500">10:45 AM</span>
                    <div className="flex-1">
                      <span className="text-sm"><strong>Admin</strong> approved reward for Emma Wilson</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
                    <span className="text-xs text-gray-500">10:30 AM</span>
                    <div className="flex-1">
                      <span className="text-sm"><strong>Principal</strong> recommended reward</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">User Management</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Name</th>
                      <th className="text-left py-2 px-4">Email</th>
                      <th className="text-left py-2 px-4">Role</th>
                      <th className="text-left py-2 px-4">Status</th>
                      <th className="text-left py-2 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="py-2 px-4">{user.metadata?.display_name}</td>
                        <td className="py-2 px-4">{user.metadata?.email}</td>
                        <td className="py-2 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.metadata?.role?.key === 'admin' ? 'bg-red-100 text-red-800' :
                            user.metadata?.role?.key === 'principal' ? 'bg-purple-100 text-purple-800' :
                            user.metadata?.role?.key === 'lecturer' ? 'bg-green-100 text-green-800' :
                            user.metadata?.role?.key === 'student' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {user.metadata?.role?.value}
                          </span>
                        </td>
                        <td className="py-2 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.metadata?.status?.key === 'active' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {user.metadata?.status?.value}
                          </span>
                        </td>
                        <td className="py-2 px-4">
                          <button className="text-sm text-blue-600 hover:underline mr-2">Edit</button>
                          <button className="text-sm text-red-600 hover:underline">Freeze</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'rewards' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Final Reward Approval</h2>
              <div className="space-y-4">
                {principalRecommended.map((reward) => (
                  <div key={reward.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{reward.title}</h3>
                        <p className="text-sm text-gray-600">
                          Streak: {reward.metadata?.streak_days} days
                        </p>
                        <p className="text-sm text-gray-600">
                          Evidence: {reward.metadata?.evidence?.description}
                        </p>
                      </div>
                      <div className="space-x-2">
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                          Approve
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {principalRecommended.length === 0 && (
                  <p className="text-gray-500 text-center py-8">No rewards pending final approval</p>
                )}
              </div>
            </div>
          )}

          {!['dashboard', 'users', 'rewards'].includes(activeTab) && (
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-semibold mb-4 capitalize">{activeTab.replace('-', ' ')}</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}