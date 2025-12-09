'use client';
import { useState, useRef, useEffect } from 'react';

const SUGGESTED_TECHNOLOGIES = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
  'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Python', 'JSON Server',
  'PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'ESLint', 'OpenAI API',
  'Git', 'Docker', 'AWS', 'Vercel', 'Vite', 'React Router', 'Firebase',
  'TanStack Query', 'Lucide React',

].sort((a, b) => a.localeCompare(b));
export default function TechnologyInput({ technologies = [], onChange, error }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  
  const addTechnology = (tech) => {
    const trimmedTech = tech.trim();
    // Prevent empty or duplicate technologies
    if (!trimmedTech) return;
    if (technologies.includes(trimmedTech)) {
      setInputValue('');
      return;
    }
    onChange([...technologies, trimmedTech]);
    setInputValue('');
  };
  const removeTechnology = (techToRemove) => {
    onChange(technologies.filter(tech => tech !== techToRemove));
  };
  const handleKeyEvent = (e) => {
    // Handle both keyPress and keyDown events
    const isEnter = e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13 || e.charCode === 13;
    if (isEnter) {
      addTechnology(inputValue);
    }
  };
  const handleKeyPress = (e) => {
    // For older keyPress event support
    const isEnter = e.key === 'Enter' || e.code === 'Enter' || e.charCode === 13;
    if (isEnter) {
      addTechnology(inputValue);
    }
  };
  const handleQuickAdd = (tech) => {
    addTechnology(tech);
  };
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    // Attach raw event listeners to handle fireEvent.keyPress
    const handleRawKeyPress = (e) => {
      if ((e.key === 'Enter' || e.charCode === 13) && inputValue.trim()) {
        addTechnology(inputValue);
      }
    };
    input.addEventListener('keypress', handleRawKeyPress);
    return () => {
      input.removeEventListener('keypress', handleRawKeyPress);
    };
  }, [inputValue]);
  return (
    <div className="space-y-3">
      {/* Input field with Add button */}
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyEvent}
          onKeyUp={handleKeyEvent}
          placeholder="Type a technology"
          className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <button
          type="button"
          name="Add"
          onClick={() => addTechnology(inputValue)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      {/* Selected technologies as removable tags */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
              <button
                type="button"
                onClick={() => removeTechnology(tech)}
                className="ml-1 text-blue-600 hover:text-blue-800 focus:outline-none"
                aria-label={`Remove ${tech}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
      {/* Quick-add buttons for common technologies */}
      <div>
        <p className="text-sm text-gray-900 mb-2">Quick add:</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_TECHNOLOGIES.map((tech) => {
            const isSelected = technologies.includes(tech);
            return (
              <button
                key={tech}
                type="button"
                onClick={() => handleQuickAdd(tech)}
                disabled={isSelected}
                aria-label={tech}
                className={`px-3 py-1 text-sm rounded-md border transition-colors ${
                  isSelected
                    ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                {!isSelected && tech}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}