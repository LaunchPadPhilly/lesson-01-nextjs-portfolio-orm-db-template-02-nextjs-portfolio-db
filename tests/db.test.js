import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Database Schema and Operations', () => {
  // Clean up test data before and after each test
  beforeEach(async () => {
    await prisma.project.deleteMany({
      where: {
        title: { contains: "Test DB" }
      }
    });
  });

  afterEach(async () => {
    await prisma.project.deleteMany({
      where: {
        title: { contains: "Test DB" }
      }
    });
  });

  describe('Project Model Schema', () => {
    it('should create a project with all required fields', async () => {
      const projectData = {
        title: "Test DB Project",
        description: "A test project for database validation",
        technologies: ["Next.js", "Prisma"]
      };

      const project = await prisma.project.create({
        data: projectData
      });

      expect(project.id).toBeDefined();
      expect(typeof project.id).toBe('number');
      expect(project.title).toBe(projectData.title);
      expect(project.description).toBe(projectData.description);
      expect(project.technologies).toEqual(projectData.technologies);
      expect(project.createdAt).toBeInstanceOf(Date);
      expect(project.updatedAt).toBeInstanceOf(Date);
    });

    it('should create a project with optional fields', async () => {
      const projectData = {
        title: "Test DB Project with Images",
        description: "A test project with all optional fields",
        imageUrl: "/test-image.jpg",
        projectUrl: "https://test-project.com",
        githubUrl: "https://github.com/test/project",
        technologies: ["React", "TypeScript"]
      };

      const project = await prisma.project.create({
        data: projectData
      });

      expect(project.imageUrl).toBe(projectData.imageUrl);
      expect(project.projectUrl).toBe(projectData.projectUrl);
      expect(project.githubUrl).toBe(projectData.githubUrl);
    });

    it('should handle null optional fields correctly', async () => {
      const projectData = {
        title: "Test DB Project Minimal",
        description: "A test project with minimal data",
        technologies: ["JavaScript"]
      };

      const project = await prisma.project.create({
        data: projectData
      });

      expect(project.imageUrl).toBeNull();
      expect(project.projectUrl).toBeNull();
      expect(project.githubUrl).toBeNull();
    });

    it('should auto-generate id as incrementing integer', async () => {
      const project1 = await prisma.project.create({
        data: {
          title: "Test DB Project 1",
          description: "First test project",
          technologies: ["HTML"]
        }
      });

      const project2 = await prisma.project.create({
        data: {
          title: "Test DB Project 2",
          description: "Second test project",
          technologies: ["CSS"]
        }
      });

      expect(typeof project1.id).toBe('number');
      expect(typeof project2.id).toBe('number');
      expect(project2.id).toBeGreaterThan(project1.id);
    });

    it('should automatically set createdAt and updatedAt timestamps', async () => {
      const beforeCreate = new Date();
      
      const project = await prisma.project.create({
        data: {
          title: "Test DB Project Timestamps",
          description: "Testing timestamp functionality",
          technologies: ["Node.js"]
        }
      });

      const afterCreate = new Date();

      expect(project.createdAt.getTime()).toBeGreaterThanOrEqual(beforeCreate.getTime());
      expect(project.createdAt.getTime()).toBeLessThanOrEqual(afterCreate.getTime());
      expect(project.updatedAt.getTime()).toBeGreaterThanOrEqual(project.createdAt.getTime());
    });

    it('should update updatedAt timestamp on record modification', async () => {
      const project = await prisma.project.create({
        data: {
          title: "Test DB Project Update",
          description: "Testing update functionality",
          technologies: ["Vue.js"]
        }
      });

      const originalUpdatedAt = project.updatedAt;
      
      // Wait a bit to ensure different timestamp
      await new Promise(resolve => setTimeout(resolve, 10));

      const updatedProject = await prisma.project.update({
        where: { id: project.id },
        data: { title: "Test DB Project Updated" }
      });

      expect(updatedProject.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt.getTime());
      expect(updatedProject.createdAt.getTime()).toBe(project.createdAt.getTime());
    });
  });

  describe('Database Queries', () => {
    beforeEach(async () => {
      // Create test data for query tests
      await prisma.project.createMany({
        data: [
          {
            title: "Test DB Query Project 1",
            description: "First query test project",
            technologies: ["React", "Node.js"]
          },
          {
            title: "Test DB Query Project 2",
            description: "Second query test project",
            technologies: ["Vue.js", "Express"]
          },
          {
            title: "Test DB Query Project 3",
            description: "Third query test project",
            technologies: ["Angular", "NestJS"]
          }
        ]
      });
    });

    it('should fetch all projects with findMany', async () => {
      const projects = await prisma.project.findMany({
        where: {
          title: { contains: "Test DB Query" }
        }
      });

      expect(projects.length).toBe(3);
      expect(projects.every(p => p.title.includes("Test DB Query"))).toBe(true);
    });

    it('should fetch projects ordered by creation date (newest first)', async () => {
      const projects = await prisma.project.findMany({
        where: {
          title: { contains: "Test DB Query" }
        },
        orderBy: { createdAt: 'desc' }
      });

      expect(projects.length).toBe(3);
      
      for (let i = 0; i < projects.length - 1; i++) {
        expect(projects[i].createdAt.getTime()).toBeGreaterThanOrEqual(
          projects[i + 1].createdAt.getTime()
        );
      }
    });

    it('should fetch a single project with findUnique', async () => {
      const allProjects = await prisma.project.findMany({
        where: { title: { contains: "Test DB Query" } }
      });
      
      const firstProject = allProjects[0];
      
      const foundProject = await prisma.project.findUnique({
        where: { id: firstProject.id }
      });

      expect(foundProject).not.toBeNull();
      expect(foundProject.id).toBe(firstProject.id);
      expect(foundProject.title).toBe(firstProject.title);
    });

    it('should return null for findUnique with non-existent id', async () => {
      const project = await prisma.project.findUnique({
        where: { id: 99999 }
      });

      expect(project).toBeNull();
    });

    it('should update a project record', async () => {
      const project = await prisma.project.create({
        data: {
          title: "Test DB Update Original",
          description: "Original description",
          technologies: ["JavaScript"]
        }
      });

      const updatedProject = await prisma.project.update({
        where: { id: project.id },
        data: {
          title: "Test DB Update Modified",
          description: "Updated description",
          technologies: ["TypeScript"]
        }
      });

      expect(updatedProject.title).toBe("Test DB Update Modified");
      expect(updatedProject.description).toBe("Updated description");
      expect(updatedProject.technologies).toEqual(["TypeScript"]);
      expect(updatedProject.id).toBe(project.id);
    });

    it('should delete a project record', async () => {
      const project = await prisma.project.create({
        data: {
          title: "Test DB Delete Project",
          description: "This will be deleted",
          technologies: ["React"]
        }
      });

      await prisma.project.delete({
        where: { id: project.id }
      });

      const deletedProject = await prisma.project.findUnique({
        where: { id: project.id }
      });

      expect(deletedProject).toBeNull();
    });
  });

  describe('Data Validation', () => {
    it('should enforce required fields (title)', async () => {
      await expect(
        prisma.project.create({
          data: {
            description: "Missing title",
            technologies: ["JavaScript"]
          }
        })
      ).rejects.toThrow();
    });

    it('should enforce required fields (description)', async () => {
      await expect(
        prisma.project.create({
          data: {
            title: "Missing description",
            technologies: ["JavaScript"]
          }
        })
      ).rejects.toThrow();
    });

    it('should enforce required fields (technologies)', async () => {
      await expect(
        prisma.project.create({
          data: {
            title: "Missing technologies",
            description: "This project has no tech stack"
          }
        })
      ).rejects.toThrow();
    });

    it('should accept empty array for technologies', async () => {
      const project = await prisma.project.create({
        data: {
          title: "Test DB Empty Tech Stack",
          description: "Project with empty technologies array",
          technologies: []
        }
      });

      expect(project.technologies).toEqual([]);
    });

    it('should handle string array for technologies correctly', async () => {
      const technologies = ["React", "Next.js", "Tailwind CSS", "Prisma"];
      
      const project = await prisma.project.create({
        data: {
          title: "Test DB Multiple Technologies",
          description: "Project with multiple technologies",
          technologies: technologies
        }
      });

      expect(project.technologies).toEqual(technologies);
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.technologies.length).toBe(4);
    });
  });
});