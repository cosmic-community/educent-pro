'use client'

import type { Reward } from '@/types'
import toast from 'react-hot-toast'

interface RewardVerificationProps {
  rewards: Reward[]
}

export default function RewardVerification({ rewards }: RewardVerificationProps) {
  const pendingRewards = rewards.filter(r => r.metadata?.status?.key === 'pending')

  const handleVerify = async (rewardId: string) => {
    toast.success('Reward verified successfully!')
  }

  const handleReject = async (rewardId: string) => {
    toast.error('Reward rejected')
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Reward Verification Queue</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Student</th>
              <th className="py-2 px-4">Streak Days</th>
              <th className="py-2 px-4">Evidence</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingRewards.map((reward) => (
              <tr key={reward.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{reward.title}</td>
                <td className="py-3 px-4">{reward.metadata?.streak_days} days</td>
                <td className="py-3 px-4">
                  <div className="max-w-xs">
                    <p className="text-sm text-gray-600 truncate">
                      {reward.metadata?.evidence?.description}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    {reward.metadata?.status?.value}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleVerify(reward.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 mr-2"
                  >
                    Verify
                  </button>
                  <button
                    onClick={() => handleReject(reward.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 mr-2"
                  >
                    Reject
                  </button>
                  <button className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600">
                    Request Info
                  </button>
                </td>
              </tr>
            ))}
            {pendingRewards.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-500">
                  No rewards pending verification
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}