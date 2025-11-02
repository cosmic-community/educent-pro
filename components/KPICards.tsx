'use client'

import { motion } from 'framer-motion'

interface KPIData {
  label: string
  value: string
  icon: string
  color: string
}

interface KPICardsProps {
  data: KPIData[]
}

export default function KPICards({ data }: KPICardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((kpi, index) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${kpi.color} rounded-lg flex items-center justify-center text-2xl text-white`}>
              {kpi.icon}
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
              <div className="text-sm text-gray-600">{kpi.label}</div>
            </div>
          </div>
          {kpi.label === 'Attendance Streak' && (
            <div className="mt-4">
              <div className="flex items-center space-x-1">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          )}
          {kpi.label === 'Syllabus Progress' && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-secondary-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: kpi.value }}
                />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}