import { getRewards, getClasses, getUsers } from '@/lib/cosmic'
import PrincipalDashboard from '@/components/PrincipalDashboard'

export default async function PrincipalPage() {
  const [rewards, classes, users] = await Promise.all([
    getRewards(),
    getClasses(),
    getUsers()
  ])

  return <PrincipalDashboard 
    rewards={rewards}
    classes={classes}
    users={users}
  />
}