import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProjectDetail({ params }) {
  const { id } = params;

  // TODO: Fetch the specific project from your API
  // Instructions for students:
  // 1. Use fetch() to get data from /api/projects/[id]
  // 2. Handle 404 responses by calling notFound()
  // 3. Parse the JSON response
  // 4. Display the project details
  
  // Example implementation (students should write this):
  // const response = await fetch(`http://localhost:3000/api/projects/${id}`);
  // 
  // if (!response.ok) {
  //   if (response.status === 404) {
  //     notFound();
  //   }
  //   throw new Error('Failed to fetch project');
  // }
  // 
  // const project = await response.json();

  // For now, return placeholder until students implement the API
  const project = null;

  if (!project) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Project Not Implemented</h1>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 max-w-md mx-auto">
            <h2 className="font-bold text-blue-900 mb-4">🚀 To view project details:</h2>
            <ol className="text-blue-800 space-y-2 list-decimal list-inside text-left">
              <li>Implement the GET /api/projects/[id] endpoint</li>
              <li>Create and seed your database with projects</li>
              <li>Update this page to fetch from the API</li>
            </ol>
          </div>
          <Link 
            href="/projects" 
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // This code will run once students implement the API
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Projects
        </Link>

        {/* Project header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project image */}
        {project.imageUrl && (
          <div className="mb-8">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Project content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">About This Project</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Additional sections students can add */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Technical Details</h3>
              <p className="text-gray-700">
                Add more details about your project implementation, challenges you faced, 
                and what you learned while building it.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded hover:bg-green-700 transition-colors"
                  >
                    View Live Project
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-800 text-white text-center px-4 py-3 rounded hover:bg-gray-900 transition-colors"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Project info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Project Info</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Created:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
                <p><strong>Last Updated:</strong> {new Date(project.updatedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}