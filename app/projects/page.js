"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectForm from "./components/ProjectForm";

export default function ProjectsPage() {
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  const [formOpen, setFormOpen] = useState(false); // false | project object

  // ------------------------------------------
  // Fetch all projects
  // ------------------------------------------
  async function refreshProjects() {
    try {
      const res = await fetch("/api/projects", { cache: "no-store" });
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
  }

  useEffect(() => {
    refreshProjects();
  }, []);

  // ------------------------------------------
  // Delete project
  // ------------------------------------------
  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (!res.ok) return;

      setProjects(prev => prev.filter(p => p.id !== id));

      if (window.location.pathname === `/projects/${id}`) {
        router.push("/projects");
      }
    } catch (err) {
      console.error(err);
    }
  }

  // ------------------------------------------
  // Submit handler for ProjectForm
  // Handles both CREATE & UPDATE
  // ------------------------------------------
  async function handleFormSubmit(formData, existingProject) {
    const isEditing = !!existingProject;

    const url = isEditing
      ? `/api/projects/${existingProject.id}`
      : `/api/projects`;

    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        console.error("Failed to save project");
        return;
      }

      // refresh list to avoid duplicates
      await refreshProjects();

      setFormOpen(false);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }

  // ********************************************
  // RENDER
  // ********************************************
  return (
    <>
      <h1 className="glitch-title text-5xl md:text-6xl font-extrabold text-white text-center mb-4">
        Projects
      </h1>

      {/* Create button */}
      <div className="text-center mt-10">
        <button
          className="mt-6 text-white px-4 py-2 border border-white rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200"
          onClick={() => setFormOpen(true)}
        >
          Create Project
        </button>
      </div>

      {/* FORM MODAL */}
      <ProjectForm
        isOpen={!!formOpen}
        project={typeof formOpen === "object" ? formOpen : null}
        onCancel={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
      />

      {/* FEATURED PROJECTS */}
      <div className="mb-12 space-y-8">
        {projects
          .filter((p) => p.featured)
          .map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="grid md:grid-cols-2 gap-8 p-6 rounded-2xl backdrop-blur-sm bg-white/6 border border-white/8 hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden"
            >
              <Link
                href={`/projects/${project.id}`}
                className="relative overflow-hidden rounded-xl shadow-lg block"
              >
                {project.imageUrl ? (
                  <Image
                    width={500}
                    height={300}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-72 object-cover block"
                  />
                ) : (
                  <div className="w-full h-72 bg-gray-800 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="rgb-overlay pointer-events-none absolute inset-0" aria-hidden />
              </Link>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {project.title}
                </h2>

                <p className="text-white/80 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies?.slice(0, 3).map((t, i) => (
                    <span key={i} className="tag-graffiti px-3 py-1 rounded-full text-sm font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <Link href={`/projects/${project.id}`} className="btn-ghost">
                  View
                </Link>
              </div>
            </motion.article>
          ))}
      </div>

      {/* ALL PROJECTS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter((p) => !p.featured)
          .map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="project-card relative rounded-xl overflow-hidden border border-white/6 bg-white/4 shadow-lg"
            >
              <Link href={`/projects/${project.id}`} className="block">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={300}
                    height={500}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 3).map((t, i) => (
                      <span key={i} className="tag-graffiti px-3 py-1 rounded-full text-sm font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projects/${project.id}`} className="btn-ghost">
                    View
                  </Link>
                </div>
              </Link>

              {/* ACTION BUTTONS */}
              <div className="p-4 flex gap-2">
                <button
                  className="btn-ghost bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded"
                  onClick={() => setFormOpen(project)}
                >
                  Edit
                </button>

                <button
                  className="btn-ghost bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(project.id)}
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </>
  );
}
