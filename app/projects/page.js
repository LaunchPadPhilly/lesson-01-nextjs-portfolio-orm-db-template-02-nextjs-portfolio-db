<<<<<<< HEAD
export default function Projects() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">My Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Project Card Example - Duplicate this 3 times */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <p className="text-white font-bold text-xl">Project Image Here</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Project Title</h3>
              <p className="text-gray-600 mb-4">
                Write a brief description of your project here.
              </p>
              <div className="flex gap-2">
                <span className="text-sm bg-gray-200 px-3 py-1 rounded">Tech 1</span>
                <span className="text-sm bg-gray-200 px-3 py-1 rounded">Tech 2</span>
              </div>
            </div>
          </div>

          {/* TODO: Add 2 more project cards */}
          
        </div>

=======
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  // TODO: Students will implement the following:
  // 1. Convert this server component to a client component
  // 2. Add state management for projects, loading, and form visibility
  // 3. Implement API fetch functions to get projects from the database
  // 4. Add project creation functionality using the ProjectForm component
  // 5. Handle loading and error states

  // For now, show placeholder content
  const placeholderProjects = [];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header - students will add "Add New Project" button here */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h1 className="text-5xl font-bold">My Projects</h1>
          {/* TODO: Add "Add New Project" button that shows/hides the form */}
        </div>

        {/* TODO: Add ProjectForm component here */}
        {/* The form should be conditionally rendered based on showForm state */}

        {/* Projects Grid */}
        {placeholderProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {placeholderProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <p className="text-white font-bold text-xl">No Image</p>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.technologies?.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-sm bg-gray-200 px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 3 && (
                      <span className="text-sm text-gray-500 px-3 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href={`/projects/${project.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State - Students will enhance this */
          <div className="text-center py-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">No projects yet</h2>
              <p className="text-gray-600 mb-6">
                Get started by setting up your database and implementing the API routes!
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="font-bold text-blue-900 mb-2">🚀 Getting Started:</h3>
              <ol className="text-blue-800 space-y-1 list-decimal list-inside text-left">
                <li>Set up your Neon database</li>
                <li>Implement the API routes</li>
                <li>Add project creation functionality</li>
                <li>Convert this page to use database data</li>
              </ol>
            </div>
          </div>
        )}

        {/* Project Ideas */}
>>>>>>> solution
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-yellow-900 mb-2">💡 Project Ideas:</h3>
          <ul className="text-yellow-800 space-y-1">
            <li>• Past school projects</li>
            <li>• Personal coding projects</li>
            <li>• Design work or creative projects</li>
            <li>• Future projects you want to build (coming soon!)</li>
          </ul>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
}

// Learning Objectives for Students:
// 1. Understand server vs client components
// 2. Learn React state management patterns
// 3. Implement API integration
// 4. Handle async operations and error states
// 5. Build interactive user interfaces
// 6. Practice component composition
>>>>>>> solution
