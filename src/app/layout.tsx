import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Header'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const libreBaskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  subsets: ['latin'], 
  variable: '--font-libre' 
})

export const metadata: Metadata = {
  title: 'Tomorrow Foundation | Defending Constitutional Rights & Supporting Rural Communities',
  description: 'Tomorrow Foundation is dedicated to defending constitutional rights, educating citizens, and supporting rural communities and agriculture for a strong America.',
  keywords: 'Tomorrow Foundation, constitutional rights, rural communities, patriotic nonprofit, American values, agriculture support',
  icons: {
    icon: '/media/favicon.png',
    apple: '/media/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <footer className="bg-navy-900 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-12">
              <Image
                src="/media/logo-icon_only.png"
                alt="Tomorrow Foundation Logo"
                width={70}
                height={70}
                className="w-auto h-16 mb-4"
              />
              <h2 className="text-2xl font-bold text-gold-400 mb-2">Tomorrow Foundation</h2>
              <p className="text-gray-400 text-center max-w-2xl">
                American values forged the greatest nation in history. It's up to us to keep it that way.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gold-400">Our Mission</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    Defending Constitutional Rights
                  </li>
                  <li className="text-gray-400">
                    Educating Citizens about their Rights
                  </li>
                  <li className="text-gray-400">
                    Supporting Rural Communities and Agriculture
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Link href="/focus-areas">Focus Areas</Link>
                  </li>
                  <li className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Link href="/get-involved">Get Involved</Link>
                  </li>
                  <li className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gold-400">Connect With Us</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    <span className="font-medium text-white">Phone:</span> (555) 123-4567
                  </li>
                  <li className="text-gray-400">
                    <span className="font-medium text-white">Email:</span> info@tomorrowfoundation.org
                  </li>
                  <li className="flex space-x-4 mt-6">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110" aria-label="Facebook">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110" aria-label="Instagram">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110" aria-label="Twitter">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Tomorrow Foundation. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms of Use</Link>
                <Link href="/sitemap" className="hover:text-white transition-colors duration-300">Sitemap</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 