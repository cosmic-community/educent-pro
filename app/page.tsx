import Link from 'next/link'
import RoleCards from '@/components/RoleCards'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Choose Your Portal
            </h2>
            <RoleCards />
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Comprehensive Educational Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Educent Pro brings together students, teachers, parents, and administrators
              in a unified platform designed for modern education.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2">Digital Learning</h3>
                <p className="text-gray-600">
                  AI-powered study assistance and comprehensive syllabus tracking
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Reward System</h3>
                <p className="text-gray-600">
                  Complete workflow for achievement recognition and rewards
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">
                  Live attendance tracking and comprehensive performance metrics
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}