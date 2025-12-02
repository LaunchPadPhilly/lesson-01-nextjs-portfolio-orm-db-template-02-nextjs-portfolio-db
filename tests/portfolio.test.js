import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import fs from 'fs'
import path from 'path'

describe('Week 1 Portfolio - File Structure Tests', () => {
  it('should have all required page files', () => {
    const requiredPages = [
      'app/page.js',
      'app/about/page.js',
      'app/projects/page.js',
      'app/contact/page.js',
    ]

    requiredPages.forEach(pagePath => {
      const fullPath = path.join(process.cwd(), pagePath)
      const exists = fs.existsSync(fullPath)
      expect(exists, `Missing required file: ${pagePath}`).toBe(true)
    })
  })

  it('should have layout.js file', () => {
    const layoutPath = path.join(process.cwd(), 'app/layout.js')
    expect(fs.existsSync(layoutPath)).toBe(true)
  })

  it('should have components folder', () => {
    const componentsPath = path.join(process.cwd(), 'app/components')
    expect(fs.existsSync(componentsPath)).toBe(true)
  })
})

describe('Week 1 Portfolio - Component Tests', () => {
  it('should have Navbar component file', () => {
    const navbarPath = path.join(process.cwd(), 'app/components/Navbar.js')
    const exists = fs.existsSync(navbarPath)
    
    if (!exists) {
      console.warn('⚠️  Navbar.js not found. Create it in app/components/')
    }
    
    expect(exists, 'Navbar component is required').toBe(true)
  })

  it('should have Footer component file', () => {
    const footerPath = path.join(process.cwd(), 'app/components/Footer.js')
    const exists = fs.existsSync(footerPath)
    
    if (!exists) {
      console.warn('⚠️  Footer.js not found. Create it in app/components/')
    }
    
    expect(exists, 'Footer component is required').toBe(true)
  })
<<<<<<< HEAD
=======

  it('should have ProjectForm component file', () => {
    const projectFormPath = path.join(process.cwd(), 'app/projects/components/ProjectForm.js')
    const exists = fs.existsSync(projectFormPath)
    
    if (!exists) {
      console.warn('⚠️  ProjectForm.js not found. Create it in app/projects/components/')
    }
    
    expect(exists, 'ProjectForm component is required for project creation').toBe(true)
  })

  it('should have TechnologyInput component file', () => {
    const technologyInputPath = path.join(process.cwd(), 'app/projects/components/TechnologyInput.js')
    const exists = fs.existsSync(technologyInputPath)
    
    if (!exists) {
      console.warn('⚠️  TechnologyInput.js not found. Create it in app/projects/components/')
    }
    
    expect(exists, 'TechnologyInput component is required for technology selection').toBe(true)
  })
>>>>>>> solution
})

describe('Week 1 Portfolio - Code Quality Tests', () => {
  it('should use Link component from next/link (not <a> tags)', () => {
    const pageFiles = [
      'app/page.js',
      'app/about/page.js',
      'app/projects/page.js',
      'app/contact/page.js',
    ]

    pageFiles.forEach(file => {
      const fullPath = path.join(process.cwd(), file)
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf-8')
        
        // Check if file has navigation links
        const hasLinks = content.includes('href=') || content.includes('to=')
        
        if (hasLinks) {
          // Should import Link from next/link
          const hasLinkImport = content.includes("from 'next/link'") || 
                                content.includes('from "next/link"')
          
          if (!hasLinkImport) {
            console.warn(`⚠️  ${file} should use Link component from 'next/link'`)
          }
        }
      }
    })
  })

  it('should use Image component from next/image for images', () => {
    const pageFiles = [
      'app/page.js',
      'app/about/page.js',
      'app/projects/page.js',
      'app/contact/page.js',
    ]

    pageFiles.forEach(file => {
      const fullPath = path.join(process.cwd(), file)
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf-8')
        
        // Check if file has image tags
        const hasImgTag = content.includes('<img')
        
        if (hasImgTag) {
          console.warn(`⚠️  ${file} should use <Image> component instead of <img> tag`)
          
          // Should import Image from next/image
          const hasImageImport = content.includes("from 'next/image'") || 
                                  content.includes('from "next/image"')
          
          expect(hasImageImport, `${file} should import Image from 'next/image'`).toBe(true)
        }
      }
    })
  })

  it('should export default function from each page', () => {
    const pageFiles = [
      'app/page.js',
      'app/about/page.js',
      'app/projects/page.js',
      'app/contact/page.js',
    ]

    pageFiles.forEach(file => {
      const fullPath = path.join(process.cwd(), file)
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf-8')
        
        const hasExportDefault = content.includes('export default function') ||
                                 content.includes('export default')
        
        expect(hasExportDefault, `${file} must have 'export default'`).toBe(true)
      }
    })
  })
})

describe('Week 1 Portfolio - Content Tests', () => {
  it('layout.js should have html and body tags', () => {
    const layoutPath = path.join(process.cwd(), 'app/layout.js')
    if (fs.existsSync(layoutPath)) {
      const content = fs.readFileSync(layoutPath, 'utf-8')
      
      expect(content.includes('<html'), 'layout.js must include <html> tag').toBe(true)
      expect(content.includes('<body'), 'layout.js must include <body> tag').toBe(true)
      expect(content.includes('{children}'), 'layout.js must include {children}').toBe(true)
    }
  })

  it('should have metadata in layout.js', () => {
    const layoutPath = path.join(process.cwd(), 'app/layout.js')
    if (fs.existsSync(layoutPath)) {
      const content = fs.readFileSync(layoutPath, 'utf-8')
      
      const hasMetadata = content.includes('metadata') || content.includes('title')
      expect(hasMetadata, 'layout.js should export metadata').toBe(true)
    }
  })
})

describe('Week 1 Portfolio - Deployment Readiness', () => {
  it('should have .gitignore file', () => {
    const gitignorePath = path.join(process.cwd(), '.gitignore')
    expect(fs.existsSync(gitignorePath)).toBe(true)
  })

  it('should have package.json with required scripts', () => {
    const packagePath = path.join(process.cwd(), 'package.json')
    expect(fs.existsSync(packagePath)).toBe(true)
    
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
    
    expect(packageJson.scripts.dev).toBeDefined()
    expect(packageJson.scripts.build).toBeDefined()
    expect(packageJson.scripts.start).toBeDefined()
  })

  it('should have next.config.js', () => {
    const configPath = path.join(process.cwd(), 'next.config.js')
    expect(fs.existsSync(configPath)).toBe(true)
  })
})

// Summary Test - Runs last
describe('Week 1 Portfolio - Completion Summary', () => {
  it('should pass all basic requirements', () => {
    const errors = []
    const warnings = []

    // Check all required files
    const requiredFiles = [
      'app/page.js',
      'app/about/page.js',
      'app/projects/page.js',
      'app/contact/page.js',
      'app/layout.js',
      'app/components/Navbar.js',
      'app/components/Footer.js',
<<<<<<< HEAD
=======
      'app/projects/components/ProjectForm.js',
      'app/projects/components/TechnologyInput.js',
>>>>>>> solution
    ]

    requiredFiles.forEach(file => {
      const fullPath = path.join(process.cwd(), file)
      if (!fs.existsSync(fullPath)) {
        errors.push(`Missing: ${file}`)
      }
    })

    if (errors.length > 0) {
      console.log('\n❌ Missing Required Files:')
      errors.forEach(err => console.log(`   - ${err}`))
    }

    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:')
      warnings.forEach(warn => console.log(`   - ${warn}`))
    }

    if (errors.length === 0 && warnings.length === 0) {
      console.log('\n✅ All basic requirements met!')
      console.log('   Next steps:')
      console.log('   1. Customize your content')
      console.log('   2. Add images to public/ folder')
      console.log('   3. Test responsive design')
      console.log('   4. Deploy to Vercel')
    }

    expect(errors.length, 'Should have all required files').toBe(0)
  })
})
