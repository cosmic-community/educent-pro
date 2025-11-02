import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Educent Pro
            </h3>
            <p className="text-sm text-gray-600">
              Comprehensive educational management platform for modern institutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/institute-request" className="text-sm text-gray-600 hover:text-primary-600">
                  Institute Integration
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Portals</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/student" className="text-sm text-gray-600 hover:text-primary-600">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/lecturer" className="text-sm text-gray-600 hover:text-primary-600">
                  Lecturer Portal
                </Link>
              </li>
              <li>
                <Link href="/principal" className="text-sm text-gray-600 hover:text-primary-600">
                  Principal Portal
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-sm text-gray-600 hover:text-primary-600">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <p className="text-sm text-gray-600">
              support@educentpro.com<br />
              1-800-EDUCENT
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2024 Educent Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}