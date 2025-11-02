'use client'

interface SidebarItem {
  id: string
  label: string
  icon: string
}

interface SidebarProps {
  items: SidebarItem[]
  activeTab: string
  onTabChange: (tab: string) => void
  role: string
}

export default function Sidebar({ items, activeTab, onTabChange, role }: SidebarProps) {
  const getRoleColor = () => {
    switch(role) {
      case 'student': return 'bg-primary-600'
      case 'lecturer': return 'bg-green-600'
      case 'parent': return 'bg-orange-600'
      case 'principal': return 'bg-secondary-600'
      default: return 'bg-gray-600'
    }
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className={`p-4 ${getRoleColor()}`}>
        <h2 className="text-white text-xl font-bold">Educent Pro</h2>
      </div>
      <nav className="p-4 space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
              activeTab === item.id 
                ? 'bg-primary-50 text-primary-600' 
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}