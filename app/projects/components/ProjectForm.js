// TODO: Students will implement this component
// This is a learning exercise - students should build this form component from scratch
// The tests will guide the implementation requirements

// Component Requirements:
// 1. Create a form component that accepts { onSubmit, onCancel, isOpen } props
// 2. Manage form state for: title, description, imageUrl, projectUrl, githubUrl, technologies
// 3. Implement form validation:
//    - title: required
//    - description: required
//    - technologies: required (at least one)
//    - URLs: validate format if provided
// 4. Handle form submission and loading states
// 5. Display validation errors to user
// 6. Reset form after successful submission
// 7. Only render when isOpen is true
// 8. Include TechnologyInput component for managing technologies

// Learning Objectives:
// - React state management with useState
// - Form validation patterns
// - Conditional rendering
// - Event handling
// - Error state management
// - Component composition

// Hints:
// - Use 'use client' directive for client-side functionality
// - Import TechnologyInput from './TechnologyInput'
// - Use regex for URL validation: /^https?:\/\/.+\..+/
// - Handle async form submission with try/catch
// - Use loading state to prevent double submission

export default function ProjectForm({ onSubmit, onCancel, isOpen }) {
  // TODO: Implement this component
  return null;
}