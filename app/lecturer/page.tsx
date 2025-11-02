import { getRewards, getQueries, getClasses, getUsers } from '@/lib/cosmic'
import LecturerDashboard from '@/components/LecturerDashboard'

export default async function LecturerPage() {
  const [rewards, queries, classes, users] = await Promise.all([
    getRewards(),
    getQueries(),
    getClasses(),
    getUsers()
  ])

  const students = users.filter(u => u.metadata?.role?.key === 'student')

  return <LecturerDashboard 
    rewards={rewards}
    queries={queries}
    classes={classes}
    students={students}
  />
}