'use client'

import { useState } from 'react'
import type { Reward, SyllabusItem, Query, Notification } from '@/types'
import Sidebar from '@/components/Sidebar'
import KPICards from '@/components/KPICards'
import RewardTracker from '@/components/RewardTracker'
import SyllabusTracker from '@/components/SyllabusTracker'
import NotificationBell from '@/components/NotificationBell'

interface StudentDashboardProps {
  rewards: Reward[]
  syllabusItems: SyllabusItem[]
  queries: Query[]
  notifications: Notification[]
}

export default function StudentDashboard({ 
  rewards, 
  syllabusItems, 
  queries, 
  notifications 
}: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard')

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'study-buddy', label: 'AI Study Buddy', icon: '🤖' },
    { id: 'assignments', label: 'Assignments', icon: '📝' },
    { id: 'syllabus', label: 'Syllabus', icon: '📚' },
    { id: 'rewards', label: 'Rewards', icon: '🏆' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ]

  const completedTopics = syllabusItems.filter(item => item.metadata?.published).length
  const totalTopics = syllabusItems.length
  const progressPercentage = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0

  const kpiData = [
    { 
      label: 'Attendance Streak', 
      value: '15 Days', 
      icon: '🔥',
      color: 'bg-orange-500'
    },
    { 
      label: 'Overall Grade', 
      value: 'A+', 
      icon: '📈',
      color: 'bg-green-500'
    },
    { 
      label: 'AI Questions', 
      value: '42', 
      icon: '🤔',
      color: 'bg-primary-500'
    },
    { 
      label: 'Syllabus Progress', 
      value: `${Math.round(progressPercentage)}%`, 
      icon: '📊',
      color: 'bg-secondary-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar 
          items={sidebarItems} 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          role="student"
        />
        
        <div className="flex-1">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
              <div className="flex items-center space-x-4">
                <input
                  type="search"
                  placeholder="Search..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <NotificationBell notifications={notifications} />
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                </div>
              </div>
            </div>
          </header>
          
          <main className="p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <KPICards data={kpiData} />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">AI Study Buddy Quick Access</h2>
                    <div className="space-y-4">
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                        <option>Mathematics</option>
                        <option>Science</option>
                        <option>English</option>
                        <option>History</option>
                      </select>
                      <button className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                        Ask Gemini
                      </button>
                    </div>
                  </div>
                  
                  <RewardTracker rewards={rewards} />
                </div>
                
                <SyllabusTracker items={syllabusItems} />
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Raise a Query</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <select className="px-4 py-2 border border-gray-300 rounded-lg">
                        <option>Select Subject</option>
                        <option>Mathematics</option>
                        <option>Science</option>
                        <option>English</option>
                      </select>
                      <select className="px-4 py-2 border border-gray-300 rounded-lg">
                        <option>Select Lecturer</option>
                        <option>Prof. Michael Chen</option>
                        <option>Dr. Sarah Johnson</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Type your query here..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      Submit Query
                    </button>
                  </form>
                </div>
              </div>
            )}
            
            {activeTab !== 'dashboard' && (
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