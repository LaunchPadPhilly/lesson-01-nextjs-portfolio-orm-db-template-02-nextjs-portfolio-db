import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'A Next.js portfolio website showcasing my projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* TODO: Import and add your Navbar component here */}
        
        <main className="flex-grow">
          {children}
        </main>
        
        {/* TODO: Import and add your Footer component here */}
      </body>
    </html>
  )
}
