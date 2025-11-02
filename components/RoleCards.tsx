'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const roles = [
  {
    title: 'Student',
    description: 'Access your courses, assignments, and track your progress',
    color: 'bg-primary-500',
    hoverColor: 'hover:bg-primary-600',
    lightColor: 'bg-primary-50',
    href: '/student',
    icon: '🎓'
  },
  {
    title: 'Lecturer',
    description: 'Manage classes, track attendance, and review assignments',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    lightColor: 'bg-green-50',
    href: '/lecturer',
    icon: '👨‍🏫'
  },
  {
    title: 'Parent',
    description: 'Monitor your child\'s academic progress and attendance',
    color: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600',
    lightColor: 'bg-orange-50',
    href: '/parent',
    icon: '👪'
  },
  {
    title: 'Principal',
    description: 'Oversee institutional metrics and approve rewards',
    color: 'bg-secondary-500',
    hoverColor: 'hover:bg-secondary-600',
    lightColor: 'bg-secondary-50',
    href: '/principal',
    icon: '🏫'
  }
]

export default function RoleCards() {
  return (
    <div id="portals" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {roles.map((role, index) => (
        <motion.div
          key={role.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href={role.href}>
            <div className={`${role.lightColor} border-2 border-transparent hover:border-current rounded-xl p-6 cursor-pointer transition-all`}>
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{role.description}</p>
              <div className={`inline-flex items-center text-sm font-medium ${role.color} text-white px-3 py-1 rounded-full`}>
                Access Portal
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}