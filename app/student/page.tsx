import { getRewards, getSyllabusItems, getQueries, getNotifications } from '@/lib/cosmic'
import StudentDashboard from '@/components/StudentDashboard'

export default async function StudentPage() {
  const [rewards, syllabusItems, queries, notifications] = await Promise.all([
    getRewards(),
    getSyllabusItems(),
    getQueries(),
    getNotifications()
  ])

  return <StudentDashboard 
    rewards={rewards}
    syllabusItems={syllabusItems}
    queries={queries}
    notifications={notifications}
  />
}