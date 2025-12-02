export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">TODO: Add Your Profile</h2>
          <div className="space-y-4 text-gray-600">
            <p>✏️ Add a profile photo using the next/image component</p>
            <p>✏️ Write a paragraph about who you are</p>
            <p>✏️ List your skills or interests</p>
            <p>✏️ Share your goals or what you're learning</p>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-2">💡 Example Structure:</h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Profile photo (circular, 300x300px)</li>
            <li>• Bio paragraph (3-5 sentences)</li>
            <li>• Skills section with badges</li>
            <li>• Education or experience timeline</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
