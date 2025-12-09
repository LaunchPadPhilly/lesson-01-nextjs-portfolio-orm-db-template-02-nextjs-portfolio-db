"use client";
import { useState } from "react";
import TechnologyInput from "./TechnologyInput";

export default function ProjectForm({ isOpen, onSubmit, onCancel } = {}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [projectUrl, setProjectUrl] = useState(null);
  const [githubUrl, setGithubUrl] = useState(null);
  const [technologies, setTechnologies] = useState([]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImageUrl(null);
    setProjectUrl(null);
    setGithubUrl(null);
    setTechnologies([]);
    setErrors({});
  };

  const validate = () => {
    const err = {};

    if (!title.trim()) err.title = "Title is required";
    if (!description.trim()) err.description = "Description is required";
    if (technologies.length === 0)
      err.technologies = "At least one technology is required";

    const isValid = (url) => {
      try { new URL(url); return true; } 
      catch { return false; }
    };

    if (imageUrl && !isValid(imageUrl)) err.imageUrl = "Please enter a valid URL";

    if (projectUrl && !isValid(projectUrl)) err.projectUrl = "Invalid URL";
    if (githubUrl && !isValid(githubUrl)) err.githubUrl = "Invalid URL";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true)
    
    if (!validate()) return;

    // Only SEND the collected data up to the parent — no fetch here
    const formData = {
      title,
      description,
      imageUrl: imageUrl || "",
      projectUrl: projectUrl || "",
      githubUrl: githubUrl || "",
      technologies: technologies || []
    };

    onSubmit?.(formData); // send the data to the parent
    resetForm();          // clear form
  };

  return (
    <div className="p-6 bg-white border rounded">
      <h2 className="text-xl font-bold mb-4">Add New Project</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Title */}
        <div>
          <label htmlFor="title">Project Title</label>
          <input
            id="title"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`border p-2 rounded w-full ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`border p-2 rounded w-full ${
              errors.description ? "border-red-500" : ""
            }`}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            id="imageUrl"
            placeholder="Image URL"
            value={imageUrl || ""}
            onChange={(e) => setImageUrl(e.target.value || null)}
            className="border p-2 rounded w-full"
          />
          {errors.imageUrl && (
            <p className="text-red-500">{errors.imageUrl}</p>
          )}
        </div>

        {/* Project URL */}
        <div>
          <label htmlFor="projectUrl">Project URL</label>
          <input
            id="projectUrl"
            placeholder="Project URL"
            value={projectUrl || ""}
            onChange={(e) => setProjectUrl(e.target.value || null)}
            className="border p-2 rounded w-full"
          />
          {errors.projectUrl && (
            <p className="text-red-500">{errors.projectUrl}</p>
          )}
        </div>

        {/* GitHub URL */}
        <div>
          <label htmlFor="githubUrl">GitHub URL</label>
          <input
            id="githubUrl"
            placeholder="GitHub URL"
            value={githubUrl || ""}
            onChange={(e) => setGithubUrl(e.target.value || null)}
            className="border p-2 rounded w-full"
          />
          {errors.githubUrl && (
            <p className="text-red-500">{errors.githubUrl}</p>
          )}
        </div>

        {/* Technologies */}
        <div>
          <TechnologyInput
            technologies={technologies}
            onChange={setTechnologies}
          />

          {errors.technologies && (
            <p className="text-red-500">{errors.technologies}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            name="Create Project"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {loading ? "Creating Project..." : "Create Project"}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
