'use client'

import { useState } from 'react'
import type { Reward, Query, Class, User } from '@/types'
import Sidebar from '@/components/Sidebar'
import RewardVerification from '@/components/RewardVerification'
import QueryManagement from '@/components/QueryManagement'

interface LecturerDashboardProps {
  rewards: Reward[]
  queries: Query[]
  classes: Class[]
  students: User[]
}

export default function LecturerDashboard({ 
  rewards, 
  queries, 
  classes,
  students 
}: LecturerDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard')

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'attendance', label: 'Attendance (QR)', icon: '📱' },
    { id: 'classes', label: 'Classes', icon: '🏫' },
    { id: 'paper-generator', label: 'Paper Generator', icon: '📄' },
    { id: 'rewards', label: 'Reward Verification', icon: '🏆' },
    { id: 'queries', label: 'Student Queries', icon: '❓' },
    { id: 'ai-feedback', label: 'AI Feedback', icon: '🤖' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ]

  const pendingRewards = rewards.filter(r => r.metadata?.status?.key === 'pending')
  const pendingQueries = queries.filter(q => q.metadata?.status?.key === 'pending')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar 
          items={sidebarItems} 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          role="lecturer"
        />
        
        <div className="flex-1">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Lecturer Dashboard</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Welcome, Professor</span>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                    L
                  </div>
                </div>
              </div>
            </div>
          </header>
          
          <main className="p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Total Classes</span>
                      <span className="text-2xl">🏫</span>
                    </div>
                    <div className="text-2xl font-bold">{classes.length}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Total Students</span>
                      <span className="text-2xl">👥</span>
                    </div>
                    <div className="text-2xl font-bold">{students.length}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Pending Rewards</span>
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">{pendingRewards.length}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Pending Queries</span>
                      <span className="text-2xl">❓</span>
                    </div>
                    <div className="text-2xl font-bold text-primary-600">{pendingQueries.length}</div>
                  </div>
                </div>
                
                <RewardVerification rewards={rewards} />
                <QueryManagement queries={queries} />
              </div>
            )}
            
            {activeTab === 'rewards' && (
              <RewardVerification rewards={rewards} />
            )}
            
            {activeTab === 'queries' && (
              <QueryManagement queries={queries} />
            )}
            
            {activeTab === 'paper-generator' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">Question Paper Generator</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                        <option>Mathematics</option>
                        <option>Science</option>
                        <option>English</option>
                        <option>History</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Topics</label>
                      <input
                        type="text"
                        placeholder="Enter topics (comma separated)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm">Easy</span>
                      <input type="range" min="1" max="5" className="flex-1" />
                      <span className="text-sm">Hard</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of MCQs</label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        defaultValue="10"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Short Answer Questions</label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        defaultValue="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Generate Paper
                  </button>
                </form>
              </div>
            )}
            
            {!['dashboard', 'rewards', 'queries', 'paper-generator'].includes(activeTab) && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4 capitalize">{activeTab.replace('-', ' ')}</h2>
                <p className="text-gray-600">This section is under development.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}