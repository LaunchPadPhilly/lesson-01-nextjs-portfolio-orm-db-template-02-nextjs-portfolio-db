/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectForm from '../app/projects/components/ProjectForm.js'
import TechnologyInput from '../app/projects/components/TechnologyInput.js'

describe('ProjectForm Component', () => {
  const mockOnSubmit = vi.fn()
  const mockOnCancel = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders project form when open', () => {
    render(
      <ProjectForm 
        isOpen={true} 
        onSubmit={mockOnSubmit} 
        onCancel={mockOnCancel} 
      />
    )
    
    expect(screen.getByText('Add New Project')).toBeInTheDocument()
    expect(screen.getByLabelText(/Project Title/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Description/)).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(
      <ProjectForm 
        isOpen={false} 
        onSubmit={mockOnSubmit} 
        onCancel={mockOnCancel} 
      />
    )
    
    expect(screen.queryByText('Add New Project')).not.toBeInTheDocument()
  })

  it('shows validation errors for required fields', async () => {
    render(
      <ProjectForm 
        isOpen={true} 
        onSubmit={mockOnSubmit} 
        onCancel={mockOnCancel} 
      />
    )
    
    const submitButton = screen.getByRole('button', { name: /Create Project/ })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Title is required')).toBeInTheDocument()
      expect(screen.getByText('Description is required')).toBeInTheDocument()
      expect(screen.getByText('At least one technology is required')).toBeInTheDocument()
    })
    
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it('validates URL format', async () => {
    render(
      <ProjectForm 
        isOpen={true} 
        onSubmit={mockOnSubmit} 
        onCancel={mockOnCancel} 
      />
    )
    
    const imageUrlInput = screen.getByLabelText(/Image URL/)
    fireEvent.change(imageUrlInput, { target: { value: 'not-a-url' } })
    
    const submitButton = screen.getByRole('button', { name: /Create Project/ })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid URL')).toBeInTheDocument()
    })
  })

  it('calls onSubmit with form data when valid', async () => {
    const mockTechnologies = ['React', 'JavaScript']
    
    render(
      <ProjectForm 
        isOpen={true} 
        onSubmit={mockOnSubmit} 
        onCancel={mockOnCancel} 
      />
    )
    
    // Fill required fields
    fireEvent.change(screen.getByLabelText(/Project Title/), {
      target: { value: 'Test Project' }
    })
    fireEvent.change(screen.getByLabelText(/Description/), {
      target: { value: 'Test description' }
    })
    
    // Add technologies (this is a simplified test)
    const techInput = screen.getByPlaceholderText(/Type a technology/)
    fireEvent.change(techInput, { target: { value: 'React' } })
    fireEvent.click(screen.getByRole('button', { name: /Add/ }))
    
    const submitButton = screen.getByRole('button', { name: /Create Project/ })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        title: 'Test Project',
        description: 'Test description',
        imageUrl: '',
        projectUrl: '',
        githubUrl: '',
        technologies: ['React']
      })
    })
  })

  it('calls onCancel when cancel button is clicked', () => {
    render(
      <ProjectForm 
        isOpen={true} 
        onSubmit={mockOnSubmit} 
        onCancel={mockOnCancel} 
      />
    )
    
    const cancelButton = screen.getByRole('button', { name: /Cancel/ })
    fireEvent.click(cancelButton)
    
    expect(mockOnCancel).toHaveBeenCalled()
  })
})

describe('TechnologyInput Component', () => {
  const mockOnChange = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders technology input field', () => {
    render(
      <TechnologyInput 
        technologies={[]} 
        onChange={mockOnChange} 
      />
    )
    
    expect(screen.getByPlaceholderText(/Type a technology/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Add/ })).toBeInTheDocument()
  })

  it('displays predefined technology buttons', () => {
    render(
      <TechnologyInput 
        technologies={[]} 
        onChange={mockOnChange} 
      />
    )
    
    expect(screen.getByRole('button', { name: 'JavaScript' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'React' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next.js' })).toBeInTheDocument()
  })

  it('adds technology when typing and clicking add', () => {
    render(
      <TechnologyInput 
        technologies={[]} 
        onChange={mockOnChange} 
      />
    )
    
    const input = screen.getByPlaceholderText(/Type a technology/)
    fireEvent.change(input, { target: { value: 'Vue.js' } })
    
    const addButton = screen.getByRole('button', { name: /Add/ })
    fireEvent.click(addButton)
    
    expect(mockOnChange).toHaveBeenCalledWith(['Vue.js'])
  })

  it('adds technology when pressing Enter', () => {
    render(
      <TechnologyInput 
        technologies={[]} 
        onChange={mockOnChange} 
      />
    )
    
    const input = screen.getByPlaceholderText(/Type a technology/)
    fireEvent.change(input, { target: { value: 'Angular' } })
    fireEvent.keyPress(input, { key: 'Enter' })
    
    expect(mockOnChange).toHaveBeenCalledWith(['Angular'])
  })

  it('adds predefined technology when quick button clicked', () => {
    render(
      <TechnologyInput 
        technologies={[]} 
        onChange={mockOnChange} 
      />
    )
    
    const jsButton = screen.getByRole('button', { name: 'JavaScript' })
    fireEvent.click(jsButton)
    
    expect(mockOnChange).toHaveBeenCalledWith(['JavaScript'])
  })

  it('displays selected technologies with remove buttons', () => {
    render(
      <TechnologyInput 
        technologies={['React', 'JavaScript']} 
        onChange={mockOnChange} 
      />
    )
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getAllByLabelText(/Remove/).length).toBe(2)
  })

  it('removes technology when remove button clicked', () => {
    render(
      <TechnologyInput 
        technologies={['React', 'JavaScript']} 
        onChange={mockOnChange} 
      />
    )
    
    const removeButtons = screen.getAllByLabelText(/Remove/)
    fireEvent.click(removeButtons[0]) // Remove first technology
    
    expect(mockOnChange).toHaveBeenCalledWith(['JavaScript'])
  })

  it('prevents duplicate technologies', () => {
    render(
      <TechnologyInput 
        technologies={['React']} 
        onChange={mockOnChange} 
      />
    )
    
    const input = screen.getByPlaceholderText(/Type a technology/)
    fireEvent.change(input, { target: { value: 'React' } })
    
    const addButton = screen.getByRole('button', { name: /Add/ })
    fireEvent.click(addButton)
    
    expect(mockOnChange).not.toHaveBeenCalled()
  })

  it('disables predefined buttons for already selected technologies', () => {
    render(
      <TechnologyInput 
        technologies={['JavaScript']} 
        onChange={mockOnChange} 
      />
    )
    
    const jsButton = screen.getByRole('button', { name: 'JavaScript' })
    expect(jsButton).toBeDisabled()
  })
})

describe('Form Integration Tests', () => {
  it('should show error state styling when validation fails', async () => {
    const mockOnSubmit = vi.fn()
    const mockOnCancel = vi.fn()
    
    render(
      <ProjectForm 
        isOpen={true} 
        onSubmit={mockOnSubmit} 
        onCancel={mockOnCancel} 
      />
    )
    
    const submitButton = screen.getByRole('button', { name: /Create Project/ })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      const titleInput = screen.getByLabelText(/Project Title/)
      expect(titleInput).toHaveClass('border-red-500')
    })
  })

  it('should show loading state during submission', async () => {
    const mockOnSubmit = vi.fn(() => new Promise(resolve => setTimeout(resolve, 100)))
    const mockOnCancel = vi.fn()
    
    render(
      <ProjectForm 
        isOpen={true} 
        onSubmit={mockOnSubmit} 
        onCancel={mockOnCancel} 
      />
    )
    
    // Fill required fields
    fireEvent.change(screen.getByLabelText(/Project Title/), {
      target: { value: 'Test Project' }
    })
    fireEvent.change(screen.getByLabelText(/Description/), {
      target: { value: 'Test description' }
    })
    
    // Add a technology
    const techInput = screen.getByPlaceholderText(/Type a technology/)
    fireEvent.change(techInput, { target: { value: 'React' } })
    fireEvent.click(screen.getByRole('button', { name: /Add/ }))
    
    const submitButton = screen.getByRole('button', { name: /Create Project/ })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Creating Project...')).toBeInTheDocument()
      expect(submitButton).toBeDisabled()
    })
  })
})