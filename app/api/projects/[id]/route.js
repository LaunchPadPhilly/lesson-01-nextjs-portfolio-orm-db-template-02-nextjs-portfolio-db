import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    // Validate that id is a number
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }

    // TODO: Implement GET request to return a specific project
    // Instructions for students:
    // 1. Use prisma.project.findUnique() to get the project by id
    // 2. Return 404 if project is not found
    // 3. Return the project as JSON if found
    
    // Example implementation (students should write this):
    // const project = await prisma.project.findUnique({
    //   where: { id: id }
    // });
    //
    // if (!project) {
    //   return NextResponse.json(
    //     { error: 'Project not found' },
    //     { status: 404 }
    //   );
    // }
    //
    // return NextResponse.json(project);

    return NextResponse.json({ message: `TODO: Implement GET /api/projects/${id}` }, { status: 501 });
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }

    // TODO: Implement PUT request to update a specific project
    // Instructions for students:
    // 1. Parse the request body to get updated project data
    // 2. Use prisma.project.update() to update the project
    // 3. Return 404 if project is not found
    // 4. Return the updated project as JSON
    
    // Example implementation (students should write this):
    // const body = await request.json();
    // const { title, description, imageUrl, projectUrl, githubUrl, technologies } = body;
    //
    // const project = await prisma.project.update({
    //   where: { id: id },
    //   data: {
    //     title,
    //     description,
    //     imageUrl,
    //     projectUrl,
    //     githubUrl,
    //     technologies
    //   }
    // });
    //
    // return NextResponse.json(project);

    return NextResponse.json({ message: `TODO: Implement PUT /api/projects/${id}` }, { status: 501 });
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }

    // TODO: Implement DELETE request to delete a specific project
    // Instructions for students:
    // 1. Use prisma.project.delete() to delete the project
    // 2. Return 404 if project is not found
    // 3. Return a success message as JSON
    
    // Example implementation (students should write this):
    // await prisma.project.delete({
    //   where: { id: id }
    // });
    //
    // return NextResponse.json({ message: 'Project deleted successfully' });

    return NextResponse.json({ message: `TODO: Implement DELETE /api/projects/${id}` }, { status: 501 });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}