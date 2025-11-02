'use client'

import { useState } from 'react'
import type { Reward, Class, User } from '@/types'
import Sidebar from '@/components/Sidebar'

interface PrincipalDashboardProps {
  rewards: Reward[]
  classes: Class[]
  users: User[]
}

export default function PrincipalDashboard({ 
  rewards, 
  classes,
  users 
}: PrincipalDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'faculty', label: 'Faculty', icon: '👨‍🏫' },
    { id: 'students', label: 'Students', icon: '🎓' },
    { id: 'policies', label: 'Policies', icon: '📋' },
    { id: 'reports', label: 'Reports', icon: '📈' }
  ]

  const lecturers = users.filter(u => u.metadata?.role?.key === 'lecturer')
  const students = users.filter(u => u.metadata?.role?.key === 'student')
  const verifiedRewards = rewards.filter(r => r.metadata?.status?.key === 'lecturer_verified')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar 
          items={sidebarItems} 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          role="principal"
        />
        
        <div className="flex-1">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Principal Dashboard</h1>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Welcome, Principal</span>
                <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                  P
                </div>
              </div>
            </div>
          </header>
          
          <main className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Total Students</span>
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div className="text-2xl font-bold">{students.length}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Faculty Members</span>
                      <span className="text-2xl">👨‍🏫</span>
                    </div>
                    <div className="text-2xl font-bold">{lecturers.length}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Active Classes</span>
                      <span className="text-2xl">🏫</span>
                    </div>
                    <div className="text-2xl font-bold">{classes.length}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Pending Rewards</span>
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">{verifiedRewards.length}</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Reward Approval Queue</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 px-4">Student</th>
                          <th className="py-2 px-4">Type</th>
                          <th className="py-2 px-4">Streak Days</th>
                          <th className="py-2 px-4">Status</th>
                          <th className="py-2 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {verifiedRewards.map((reward) => (
                          <tr key={reward.id} className="border-b hover:bg-gray-50">
                            <td className="py-2 px-4">{reward.title}</td>
                            <td className="py-2 px-4">{reward.metadata?.evidence?.type}</td>
                            <td className="py-2 px-4">{reward.metadata?.streak_days}</td>
                            <td className="py-2 px-4">
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                {reward.metadata?.status?.value}
                              </span>
                            </td>
                            <td className="py-2 px-4">
                              <button className="px-3 py-1 bg-secondary-500 text-white rounded text-sm hover:bg-secondary-600 mr-2">
                                Recommend
                              </button>
                              <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
                                Reject
                              </button>
                            </td>
                          </tr>
                        ))}
                        {verifiedRewards.length === 0 && (
                          <tr>
                            <td colSpan={5} className="text-center py-4 text-gray-500">
                              No rewards pending approval
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Attendance Overview</h2>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                      [Attendance Heatmap Visualization]
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Average Grade</span>
                          <span className="text-sm font-semibold">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Attendance Rate</span>
                          <span className="text-sm font-semibold">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab !== 'overview' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4 capitalize">{activeTab}</h2>
                <p className="text-gray-600">This section is under development.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}