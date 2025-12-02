import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // TODO: Implement GET request to return all projects
    // Instructions for students:
    // 1. Use prisma.project.findMany() to get all projects
    // 2. Return the projects as JSON using NextResponse.json()
    // 3. Handle any errors that might occur
    
    // Example implementation (students should write this):
    // const projects = await prisma.project.findMany({
    //   orderBy: { createdAt: 'desc' }
    // });
    // return NextResponse.json(projects);

    return NextResponse.json({ message: "TODO: Implement GET /api/projects" }, { status: 501 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // TODO: Implement POST request to create a new project
    // Instructions for students:
    // 1. Parse the request body to get project data
    // 2. Use prisma.project.create() to create a new project
    // 3. Return the created project as JSON
    // 4. Validate required fields before creating
    
    // Example implementation (students should write this):
    // const body = await request.json();
    // const { title, description, imageUrl, projectUrl, githubUrl, technologies } = body;
    // 
    // const project = await prisma.project.create({
    //   data: {
    //     title,
    //     description,
    //     imageUrl,
    //     projectUrl,
    //     githubUrl,
    //     technologies
    //   }
    // });
    // return NextResponse.json(project, { status: 201 });

    return NextResponse.json({ message: "TODO: Implement POST /api/projects" }, { status: 501 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}