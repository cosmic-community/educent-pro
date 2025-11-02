import { getUsers, getRewards, getClasses } from '@/lib/cosmic'
import AdminDashboard from '@/components/AdminDashboard'

export default async function AdminPage() {
  const [users, rewards, classes] = await Promise.all([
    getUsers(),
    getRewards(),
    getClasses()
  ])

  return <AdminDashboard 
    users={users}
    rewards={rewards}
    classes={classes}
  />
}