'use client'

import { useState } from 'react'
import type { SyllabusItem } from '@/types'

interface SyllabusTrackerProps {
  items: SyllabusItem[]
}

export default function SyllabusTracker({ items }: SyllabusTrackerProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setCheckedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const groupedItems = items.reduce((acc, item) => {
    const subject = item.metadata?.subject?.value || 'Other'
    if (!acc[subject]) {
      acc[subject] = []
    }
    acc[subject].push(item)
    return acc
  }, {} as Record<string, SyllabusItem[]>)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Syllabus Tracker</h2>
      <div className="space-y-4">
        {Object.entries(groupedItems).map(([subject, subjectItems]) => (
          <div key={subject} className="border-l-4 border-primary-500 pl-4">
            <h3 className="font-medium text-gray-900 mb-2">{subject}</h3>
            <div className="space-y-2">
              {subjectItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(item.id)}
                    onChange={() => toggleItem(item.id)}
                    className="h-4 w-4 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className={`text-sm ${
                    checkedItems.includes(item.id) ? 'line-through text-gray-400' : 'text-gray-700'
                  }`}>
                    {item.metadata?.chapter || item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-semibold">
            {checkedItems.length} / {items.length} completed
          </span>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(checkedItems.length / items.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}