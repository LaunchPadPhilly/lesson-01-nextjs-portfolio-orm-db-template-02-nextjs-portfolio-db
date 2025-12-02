# 🎓 Student Guide: Week 2 Full-Stack Portfolio Project

**Assignment:** Build Your Personal Portfolio Website with Database  
**Due Date:** Friday, December 6, 2025 at 11:59 PM  
**Points:** 100 points  
**Competencies:** TS.2.3.1, TS.2.3.2, TS.1.2.1, TS.3.1.2, TS.3.1.3, TS.3.2.2, TS.3.2.3, TS.3.3.2, TS.4.1.1, TS.4.2.1, TS.4.2.2

## 🎯 What You're Building

A **full-stack personal portfolio website** that showcases who you are as a developer:

✨ **Home** - Your introduction and welcome message  
👤 **About** - Your story, skills, and background  
💼 **Projects** - Dynamic showcase of your work powered by a database  
📧 **Contact** - How people can reach you
🛠️ **API Routes** - RESTful endpoints to manage your projects
🗄️ **PostgreSQL Database** - Store and manage your project data

By the end of this week, you'll have a **real full-stack web application** on the internet with database functionality!

## 📋 Quick Start Checklist

Before you begin, make sure you have:

- [ ] **Node.js installed** (v20 or higher) - [Download here](https://nodejs.org/)
- [ ] **VS Code installed** - [Download here](https://code.visualstudio.com/)
- [ ] **Git installed** - [Download here](https://git-scm.com/)
- [ ] **GitHub account created** - [Sign up here](https://github.com/)
- [ ] **Accepted the GitHub Classroom assignment** (link from your instructor)

**Don't have these yet?** Follow the setup instructions in class or ask your instructor!

## 🚀 Step 1: Accept the Assignment & Clone (10 minutes)

### 1.1: Accept GitHub Classroom Assignment

1. **Click the assignment link** from your instructor
   - You'll see: "Accept this assignment"
   - Click the green button

2. **Wait for your repository to be created** (30 seconds)
   - You'll see a loading animation
   - When done, you'll get a link to YOUR repository
   - It will look like: `github.com/YOUR-CLASS/week2-portfolio-YOUR-NAME` (or similar)

3. **Click the repository link**
   - This opens YOUR copy of the starter code
   - Bookmark this page - you'll use it all week!

### 1.2: Clone to Your Computer

**What is "cloning"?** Copying the code from GitHub to your computer so you can work on it.

**Option A: Using VS Code (Easiest)**

1. Copy your repository URL (click green "Code" button → copy HTTPS link)
2. Open VS Code
3. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
4. Type "Git: Clone" and press Enter
5. Paste your repository URL
6. Choose where to save it (Desktop or Documents folder)
7. Click "Open" when it finishes

**Option B: Using Terminal/Command Prompt**

```bash
# Navigate to where you want to save your project
cd Desktop

# Clone your repository (replace with YOUR url)
git clone https://github.com/YOUR-CLASS/week2-portfolio-YOUR-NAME.git

# Go into the folder
cd week2-portfolio-YOUR-NAME

# Open in VS Code
code .
```

**✅ Success Check:** You should see all the project files in VS Code!

## 🛠️ Step 2: Install & Run (10 minutes)

### 2.1: Install Dependencies

**What are dependencies?** The tools and libraries Next.js needs to work (like React and Tailwind).

**In VS Code:**

1. Open the **Terminal** (View → Terminal, or press `` Ctrl+` ``)
2. Type this command and press Enter:
   ```bash
   npm install or (npm i)
   ```
3. **Wait 1-2 minutes** while it downloads everything
4. You'll see a progress bar, then "added XXX packages"

**⚠️ Common Issue:** "npm: command not found"  
**Solution:** You need to install Node.js first! [Download here](https://nodejs.org/)

### 2.2: Start the Development Server

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  
 ✓ Starting...
 ✓ Ready in 1.2s
```

### 2.3: Open in Browser

1. Hold `Ctrl` (Windows) or `Cmd` (Mac) and click `http://localhost:3000`
2. Or manually type it in your browser
3. You should see the **starter homepage**!

**🎉 You're running Next.js!**

## 📁 Step 3: Understanding Your Project (15 minutes)

### File Structure Tour

Here's what each folder does:

```
week2-portfolio-YOUR-NAME/
├── 📄 README.md          ← Instructions (read this first!)
├── 📦 package.json       ← Project settings (includes new Prisma dependencies)
├── 📁 app/               ← WHERE YOU'LL WORK! 
│   ├── layout.js         ← Shared layout (add Navbar/Footer here)
│   ├── page.js           ← Homepage (customize this!)
│   ├── globals.css       ← Styles (already set up)
│   ├── api/              ← NEW! API routes for database operations
│   │   └── projects/     ← Project API endpoints (YOU'LL IMPLEMENT)
│   ├── about/
│   │   └── page.js       ← About page (add your bio!)
│   ├── projects/
│   │   ├── page.js       ← Projects page (fetch from database!)
│   │   └── [id]/         ← NEW! Dynamic project detail pages
│   ├── contact/
│   │   └── page.js       ← Contact page (add your info!)
│   └── components/       ← Create Navbar.js and Footer.js here
├── 📁 prisma/            ← NEW! Database configuration
│   ├── schema.prisma     ← Database schema (YOU'LL DEFINE)
│   └── seed.js          ← Seed data (YOU'LL CREATE)
├── 📁 public/            ← Put your images here
├── 📁 tests/             ← Automated tests (includes database tests!)
└── .env.example          ← NEW! Environment variables template
```

### Where to Write Your Code

**Frontend (You'll implement these):**
1. **`app/page.js`** - Your homepage
2. **`app/about/page.js`** - About page
3. **`app/projects/page.js`** - Projects page (fetch from API)
4. **`app/projects/[id]/page.js`** - Individual project details
5. **`app/contact/page.js`** - Contact page
6. **`app/components/Navbar.js`** - Create this (navigation bar)
7. **`app/components/Footer.js`** - Create this (footer)
8. **`app/layout.js`** - Import your Navbar and Footer here

**Backend (NEW! You'll implement these):**
9. **`prisma/schema.prisma`** - Database schema (Project model)
10. **`prisma/seed.js`** - Sample project data
11. **`app/api/projects/route.js`** - GET all projects, POST new project
12. **`app/api/projects/[id]/route.js`** - GET/PUT/DELETE individual project

**Configuration files (Already set up, but you'll need one):**
- `.env.local` - Your database connection string (you'll create this)

**Don't edit these:**
- `package.json`
- `next.config.js`
- `tailwind.config.js`
- Anything in `tests/` folder
- `.env.example` (use this as a template)

## 🗄️ Step 4: Set Up Your Database (20 minutes) **NEW REQUIREMENT!**

Before building your portfolio, you need to set up a PostgreSQL database to store your project data.

### 4.1: Create a Free Neon Database

**What is Neon?** A free PostgreSQL database hosting service that's perfect for student projects.

1. **Go to [neon.tech](https://neon.tech)**

2. **Sign up for a free account**
   - Click "Sign up"
   - Use your GitHub account (easiest) or email
   - No credit card required!

3. **Create your first database**
   - After signing up, click "Create Project"
   - **Project name:** `portfolio-db` (or whatever you prefer)
   - **Database name:** Leave default or use `portfolio_db`
   - **Region:** Choose closest to you
   - Click "Create Project"

4. **Get your database connection string**
   - After creation, you'll see a "Connection Details" section
   - **IMPORTANT:** Click "Show password" and copy the full connection string
   - It looks like: `postgresql://username:password@ep-example.us-east-1.aws.neon.tech/portfolio_db?sslmode=require`
   - **Save this somewhere safe** - you'll need it in the next step!

### 4.2: Configure Your Environment Variables

1. **Create your environment file**
   - In VS Code, copy `.env.example` to create `.env.local`
   - **Right-click** `.env.example` → "Copy"
   - **Right-click** in the file explorer → "Paste"
   - **Rename** the copy to `.env.local`

2. **Add your database URL**
   - Open `.env.local`
   - Replace the placeholder with your actual Neon database URL:
   ```
   DATABASE_URL="postgresql://username:password@ep-example.us-east-1.aws.neon.tech/portfolio_db?sslmode=require"
   ```
   - **Important:** Use your actual connection string from Neon!

3. **Test your database connection**
   ```bash
   npm run db:generate
   ```
   - This should run without errors
   - If you get errors, double-check your `DATABASE_URL`

### 4.3: Generate Prisma Client

**What is Prisma?** An ORM (Object-Relational Mapping) tool that makes working with databases easier.

```bash
npm run db:generate
```

**✅ Success Check:** You should see "Generated Prisma Client" without errors.

## ✏️ Step 5: Implement Your Database Schema (30 minutes) **NEW REQUIREMENT!**

Now you'll define what data your portfolio will store.

### 5.1: Review Your Project Model

1. **Open `prisma/schema.prisma`**

2. **Review the Project model** (already implemented for you):

```prisma
model Project {
  id           Int      @id @default(autoincrement())
  title        String
  description  String
  imageUrl     String?
  projectUrl   String?
  githubUrl    String?
  technologies String[]
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

**Note:** This model is already implemented in your starter code! You can customize it if needed.

**What each field means:**
- `id` - Unique identifier (auto-incremented)
- `title` - Project name (required)
- `description` - What the project does (required)
- `imageUrl` - Screenshot/image (optional)
- `projectUrl` - Live demo link (optional)
- `githubUrl` - Source code link (optional)
- `technologies` - Array of tech used (required)
- `createdAt` - When created (auto-set)
- `updatedAt` - When last modified (auto-updated)

### 5.2: Push Your Schema to the Database

```bash
npm run db:push
```

**What this does:** Creates the `Project` table in your Neon database with the fields you defined.

**✅ Success Check:** You should see "🚀 Your database is now in sync with your schema."

### 5.3: Create Seed Data

1. **Open `prisma/seed.js`**

2. **Customize the example data** (already uncommented for you):

```javascript
await prisma.project.createMany({
  data: [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js and Tailwind CSS.",
      imageUrl: "/project1.jpg",
      projectUrl: "https://your-portfolio.vercel.app",
      githubUrl: "https://github.com/yourusername/portfolio",
      technologies: ["Next.js", "Tailwind CSS", "React", "Prisma"]
    },
    {
      title: "Task Manager App",
      description: "A full-stack task management application with user authentication.",
      imageUrl: "/project2.jpg",
      projectUrl: "https://task-manager.vercel.app",
      githubUrl: "https://github.com/yourusername/task-manager",
      technologies: ["React", "Node.js", "PostgreSQL", "Prisma"]
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard using external APIs.",
      imageUrl: "/project3.jpg",
      projectUrl: "https://weather-dash.vercel.app",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      technologies: ["JavaScript", "CSS", "Weather API", "Chart.js"]
    }
  ]
});
```

**Customize this data:**
- Replace URLs with your actual project links
- Add your own project descriptions
- Use your own technology stacks
- Add more projects if you have them!

3. **Run the seed script**:
```bash
npm run db:seed
```

**✅ Success Check:** You should see "Seeding finished." - Your database now has sample projects!

## 📋 Prisma Quick Reference (Keep This Handy!)

### Essential Prisma Commands

**When you first set up your database:**
```bash
npm run db:generate  # Generate Prisma client (run this after any schema changes)
npm run db:push      # Create tables in your database
npm run db:seed      # Add sample data to your database
```

**For ongoing development:**
```bash
npm run db:studio    # Open Prisma Studio (visual database browser)
npm run db:generate  # Regenerate client after schema changes
```

### Important: When to Run Commands

1. **After changing `prisma/schema.prisma`**: Always run `npm run db:generate` then `npm run db:push`
2. **After updating seed data**: Run `npm run db:seed`
3. **If you get "Prisma Client not found" errors**: Run `npm run db:generate`
4. **To view/edit your data visually**: Run `npm run db:studio` (opens in browser)

### 🔧 Prisma Troubleshooting

**Problem: "Prisma Client not found"**
```bash
# Solution:
npm run db:generate
```

**Problem: "Database not in sync"**
```bash
# Solution:
npm run db:push
```

**Problem: "No data in database"**
```bash
# Solution:
npm run db:seed
```

**Problem: "Environment variable not found"**
- Check your `.env.local` file exists
- Make sure `DATABASE_URL` is set correctly
- Restart your dev server: `npm run dev`

## 🛠️ Step 6: Implement Your API Routes (45 minutes) **NEW REQUIREMENT!**

Now you'll build the backend API that your frontend will use to get project data.

### 6.1: Implement GET /api/projects (Get All Projects)

1. **Open `app/api/projects/route.js`**

2. **Replace the TODO in the GET function**:

```javascript
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
```

**What this does:** Gets all projects from the database, newest first.

### 6.2: Implement POST /api/projects (Create New Project)

**Replace the TODO in the POST function**:

```javascript
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, description, imageUrl, projectUrl, githubUrl, technologies } = body;

    // Validate required fields
    if (!title || !description || !technologies) {
      return NextResponse.json(
        { error: 'Title, description, and technologies are required' },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        projectUrl,
        githubUrl,
        technologies
      }
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
```

### 6.3: Implement GET /api/projects/[id] (Get One Project)

1. **Open `app/api/projects/[id]/route.js`**

2. **Replace the TODO in the GET function**:

```javascript
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }

    const project = await prisma.project.findUnique({
      where: { id: id }
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}
```

### 6.4: Test Your API

**Test with your browser:**
1. Make sure your dev server is running: `npm run dev`
2. Go to `http://localhost:3000/api/projects`
3. You should see your projects as JSON data!
4. Try `http://localhost:3000/api/projects/1` to see one project

**✅ Success Check:** Your API returns project data without errors.

### 6.5: 🔍 Explore Your Data with Prisma Studio (BONUS!)

**Want to see your database visually?** Prisma Studio is a web-based database browser:

```bash
npm run db:studio
```

This opens a browser tab where you can:
- ✅ View all your projects in a table format
- ✅ Add, edit, or delete records visually
- ✅ Understand your data structure better
- ✅ Debug data issues easily

**Very helpful for development!** Keep this tab open while working on your project.

## ✏️ Step 7: Update Your Frontend to Use the Database (30 minutes)

Now you'll update your projects page to fetch data from your API instead of using placeholder data.

### 7.1: Using the Project Creation Interface

Your projects page now includes a **project creation interface** that allows you to add new projects directly from the browser! Here's how to use it:

1. **Open `app/projects/page.js`** - This page is already set up as a client component with form functionality

2. **The projects page now includes:**
   - A "Add New Project" button in the top right
   - A project creation form that slides down when clicked
   - Automatic fetching and display of projects from your database
   - Form validation and error handling

3. **To add a new project:**
   - Visit `/projects` in your browser
   - Click the "Add New Project" button
   - Fill out the form with your project details
   - Add technologies using the technology input (type custom ones or use quick-add buttons)
   - Click "Create Project" to save to the database

4. **The form includes these fields:**
   - **Project Title*** (required)
   - **Description*** (required)  
   - **Technologies Used*** (required) - Add multiple technologies with the tag interface
   - **Image URL** (optional) - Link to a screenshot of your project
   - **Live Demo URL** (optional) - Link to where people can see your project
   - **GitHub URL** (optional) - Link to your source code

### 7.2: Form Components Explained

The projects page uses two custom components:

1. **ProjectForm** (`app/projects/components/ProjectForm.js`):
   - Handles the entire project creation flow
   - Includes validation for required fields and URL formats
   - Shows loading states during submission
   - Automatically resets after successful creation

2. **TechnologyInput** (`app/projects/components/TechnologyInput.js`):
   - Specialized component for managing technology tags
   - Includes quick-add buttons for common technologies (React, Next.js, etc.)
   - Allows typing custom technologies
   - Prevents duplicate entries

### 7.3: Understanding the Technology Input Component

The **TechnologyInput** component provides a user-friendly way to add multiple technologies to a project:

**Features:**
- **Type and add custom technologies**: Users can type any technology name and press Enter or click "Add"
- **Quick-add buttons**: Common technologies like JavaScript, React, Next.js are available as clickable buttons
- **Visual tags**: Selected technologies appear as blue tags with remove (×) buttons
- **Duplicate prevention**: Can't add the same technology twice
- **Form validation**: Requires at least one technology to be selected

**How it works:**
```javascript
// Technologies are stored as an array of strings
technologies: ['React', 'Next.js', 'Tailwind CSS']

// The component calls onChange when technologies are updated
onChange={(newTechnologies) => setFormData({...formData, technologies: newTechnologies})}
```

### 7.4: Testing the Project Creation Interface

1. **Make sure your dev server is running**: `npm run dev`
2. **Make sure your database is set up** and API routes are implemented
3. **Visit http://localhost:3000/projects**
4. **You should see:**
   - Your existing projects from the seed data
   - A "Add New Project" button in the top-right corner
5. **Click "Add New Project"** and test the form:
   - Try submitting without required fields (should show validation errors)
   - Add some technologies using both custom input and quick-add buttons
   - Submit a complete project and see it appear in the list
6. **Click "View Details"** on any project to see individual project pages

**✅ Success Check:** You can create new projects using the form interface and they appear in your project list.

## ✏️ Step 8: Customize Your Portfolio (This is the fun part!)

Now that your database is working, let's customize the rest of your portfolio!

### 8.1: Start with the Homepage (30 minutes)

**Open:** `app/page.js`

**Your tasks:**

1. **Change the heading** to include your name
   ```javascript
   <h1 className="text-6xl font-bold mb-6">
     Hi, I'm [Your Name]!
   </h1>
   ```

2. **Write your introduction** (2-3 sentences about yourself)

3. **Add navigation links** to your other pages
   ```javascript
   import Link from 'next/link'
   
   <Link href="/about" className="...">
     About Me
   </Link>
   ```

4. **Choose your colors** - Change `bg-blue-500` to other colors:
   - `bg-purple-500` - Purple
   - `bg-green-500` - Green  
   - `bg-pink-500` - Pink
   - `bg-red-500` - Red

**💾 Save often!** Press `Ctrl+S` (Windows) or `Cmd+S` (Mac) after changes.

**👀 Check your browser** - Changes appear instantly (hot reload magic!)

### 4.2: Create Your Navbar Component (30 minutes)

**Why?** So your navigation appears on ALL pages automatically.

**Step 1: Create the file**

1. In VS Code, right-click on `app/components/` folder
2. Click "New File"
3. Name it: `Navbar.js`

**Step 2: Add this code:**

```javascript
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Your name or logo */}
          <Link href="/" className="text-2xl font-bold hover:text-blue-400">
            Your Name
          </Link>
          
          {/* Navigation links */}
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
            <Link href="/projects" className="hover:text-blue-400">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
```

**Step 3: Add to your layout**

**Open:** `app/layout.js`

**Add these lines:**

```javascript
import './globals.css'
import Navbar from './components/Navbar'  // ← Add this line

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />  {/* ← Add this line */}
        
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
```

**✅ Test it:** Visit any page - you should see your navigation bar!

### 4.3: Create Your Footer Component (15 minutes)

**Follow the same steps:**

1. Create `app/components/Footer.js`
2. Add this code:

```javascript
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-8 mt-auto">
      <p className="text-gray-400">
        © 2025 Your Name. Built with Next.js
      </p>
    </footer>
  )
}
```

3. Import in `layout.js`:
```javascript
import Footer from './components/Footer'

// Inside the body tag, after {children}:
<Footer />
```

### 4.4: Fill Out Your About Page (30 minutes)

**Open:** `app/about/page.js`

**Add:**

1. **Profile photo** (see Step 5 for adding images)
2. **Bio paragraph** - Who are you? What are you learning?
3. **Skills section** - What technologies do you know?
4. **Goals** - What do you want to build?

**Example structure:**

```javascript
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        
        <div className="flex gap-8 items-center mb-8">
          {/* Profile photo */}
          <Image 
            src="/profile.jpg"
            alt="My photo"
            width={300}
            height={300}
            className="rounded-full"
          />
          
          {/* Bio */}
          <div>
            <p className="text-lg text-gray-700">
              Write about yourself here! What are you passionate about?
              What are you learning? What are your goals?
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              HTML & CSS
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              JavaScript
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
              Next.js
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### 4.5: Add Project Cards (30 minutes)

**Open:** `app/projects/page.js`

**Add at least 3 project cards.** These can be:
- Past school projects
- Personal coding projects
- Future projects you want to build (mark as "Coming Soon!")

**Example project card:**

```javascript
<div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
  {/* Project image */}
  <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
    <p className="text-white font-bold">Project Screenshot</p>
  </div>
  
  {/* Project details */}
  <div className="p-6">
    <h3 className="text-2xl font-bold mb-2">Project Name</h3>
    <p className="text-gray-600 mb-4">
      Brief description of what this project does.
    </p>
    <div className="flex gap-2">
      <span className="text-sm bg-gray-200 px-3 py-1 rounded">HTML</span>
      <span className="text-sm bg-gray-200 px-3 py-1 rounded">CSS</span>
    </div>
  </div>
</div>
```

### 4.6: Add Contact Information (15 minutes)

**Open:** `app/contact/page.js`

**Add your:**
- Email address (or use a placeholder)
- LinkedIn URL (if you have one)
- GitHub username
- Any other social links

**Example:**

```javascript
<div className="flex items-center gap-4">
  <span className="text-3xl">📧</span>
  <div>
    <p className="font-bold">Email</p>
    <p className="text-gray-600">your.email@example.com</p>
  </div>
</div>
```

## 🖼️ Step 5: Adding Images (20 minutes)

### 5.1: Get Your Images Ready

You need:
1. **Profile photo** - Your headshot (300x300px or larger)
2. **Project screenshots** - At least 3 images

**Don't have photos yet?** Use these placeholders:

**Profile photo:**
```
https://ui-avatars.com/api/?name=Your+Name&size=300
```

**Project images:**
```
https://placehold.co/600x400/blue/white?text=Project+1
https://placehold.co/600x400/green/white?text=Project+2
https://placehold.co/600x400/purple/white?text=Project+3
```

### 5.2: Add Images to public/ Folder

1. **Save your images** to the `public/` folder
2. **Name them simply:** `profile.jpg`, `project1.jpg`, etc.
3. **Keep them under 1MB each**

### 5.3: Use the Image Component

**Always use this:**
```javascript
import Image from 'next/image'

<Image 
  src="/profile.jpg"  // Note: starts with / not public/
  alt="Description for screen readers"
  width={300}
  height={300}
/>
```

**Never use this:**
```javascript
<img src="/profile.jpg" />  ❌ DON'T USE!
```

**Why?** The Next.js Image component automatically optimizes your images to load faster!

## ✅ Step 9: Test Your Work (25 minutes) **UPDATED WITH DATABASE TESTS!**

### 9.1: Run All Automated Tests

**In your terminal:**

```bash
npm test
```

**This now checks:**
- ✅ All 4 pages exist
- ✅ Navbar and Footer components created  
- ✅ Using Link and Image components correctly
- ✅ **NEW:** Database schema is correctly implemented
- ✅ **NEW:** API routes return proper responses
- ✅ **NEW:** Database operations work correctly
- ✅ **NEW:** Seed data can be created
- ✅ No missing files

**If tests fail:** Read the error message! It tells you what's missing.

### 9.2: Test Individual Components

You can also run specific test files:

```bash
# Test just the database functionality
npm test -- --run tests/db.test.js

# Test just the API routes
npm test -- --run tests/api.test.js

# Test just the file structure
npm test -- --run tests/portfolio.test.js
```

### 6.2: Check for Console Errors

**In your browser:**

1. Press `F12` to open Developer Tools
2. Click "Console" tab
3. Look for red error messages
4. Fix any errors you see

**Common errors:**
- "Module not found" → Check your import paths
- "Image not found" → Check your image is in public/
- "Link is not defined" → Did you import Link?

### 6.3: Test Responsive Design

**In browser DevTools:**

1. Click the device toggle icon (top left)
2. Try different devices:
   - iPhone SE (mobile)
   - iPad (tablet)
   - Desktop
3. Make sure nothing looks broken

**Things to check:**
- Text is readable (not too small)
- Images scale properly
- Navigation works on mobile
- No horizontal scrolling

### 9.4: Manual Testing Checklist

**Frontend Tests:**
- [ ] Homepage loads and looks good
- [ ] Navigation links work on all pages
- [ ] All 4 pages are accessible
- [ ] Images load correctly
- [ ] Profile photo appears on About page
- [ ] Footer appears on all pages
- [ ] No spelling mistakes
- [ ] Site looks good on mobile

**NEW: Database & API Tests:**
- [ ] Projects page shows actual database data (not placeholder)
- [ ] At least 3 project cards display from database
- [ ] Project cards show correct titles and descriptions
- [ ] "View Details" links work on project cards
- [ ] Individual project pages load (e.g., `/projects/1`)
- [ ] Individual project pages show full project details
- [ ] API endpoint `/api/projects` returns JSON data
- [ ] API endpoint `/api/projects/1` returns single project
- [ ] Database connection is working (no connection errors)

## 💾 Step 7: Save Your Work with Git (10 minutes)

### Why Use Git?

Git saves "snapshots" of your work so you can:
- See what changed
- Go back if you mess something up
- Share your code with GitHub

### How to Commit Your Changes

**After making changes:**

```bash
# See what files you changed
git status

# Add all your changes
git add .

# Save a snapshot with a message
git commit -m "Describe what you changed"

# Send to GitHub
git push
```

**💡 Good commit messages:**
- ✅ "Add profile photo to About page"
- ✅ "Create Navbar component"
- ✅ "Style Projects page with Tailwind"
- ❌ "update" (too vague!)
- ❌ "changes" (not helpful!)

**How often to commit?**
- Every 30 minutes of work
- After completing a feature
- Before taking a break
- At end of each day

## 🚀 Step 8: Deploy to Vercel (20 minutes)

### Why Deploy?

Deployment puts your website **on the internet** so anyone can see it!

### 8.1: Push Your Code to GitHub

**Make sure all your work is saved:**

```bash
git add .
git commit -m "Complete portfolio project"
git push
```

**✅ Verify:** Go to your GitHub repository page and refresh. You should see all your changes!

### 8.2: If you don't have an account, Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access GitHub
5. You're in!

### 8.3: Deploy Your Site

**In Vercel:**

1. Click "**Add New...**" → "**Project**"
2. Find your `week2-portfolio-YOUR-NAME` repository
3. Click "**Import**"
4. **Don't change any settings** - defaults are perfect!
5. Click "**Deploy**"
6. **Wait 2-3 minutes** ⏳

### 8.4: Get Your Live URL

**When deployment finishes:**

1. You'll see **"Congratulations!"** 🎉
2. Click on the preview image
3. **Your site is LIVE!**
4. Copy the URL (looks like: `your-portfolio-xyz.vercel.app`)
5. **Share it with everyone!**

**🔥 Pro Tip:** Every time you push to GitHub, Vercel automatically rebuilds your site!



## 📤 Step 9: Submit Your Work (5 minutes)

### What to Submit in Beacon/LMS:

1. **GitHub Repository URL**
   - Example: `https://github.com/YOUR-CLASS/week2-portfolio-YOUR-NAME`

2. **Live Vercel URL**
   - Example: `https://your-portfolio-xyz.vercel.app`

3. **Screenshot of your homepage**
   - Take a full-page screenshot
   - Save as JPG or PNG

### Submission Checklist

Before submitting, verify:

- [ ] All 4 pages work (Home, About, Projects, Contact)
- [ ] Navigation appears on all pages
- [ ] Footer appears on all pages
- [ ] At least 1 image on About page
- [ ] At least 3 project cards
- [ ] Contact information present
- [ ] Deployed to Vercel successfully
- [ ] Live URL works when clicked
- [ ] GitHub repository is up to date
- [ ] No console errors in browser

### Grading Breakdown

**Automated Tests (70 points):**
- Database Schema: 25 points
- API Routes: 35 points  
- File Structure: 15 points
- Database Connection: 10 points
- Seed Data: 10 points
- Build Process: 5 points

**Manual Review (30 points):**
- Frontend Integration: 10 points (Projects page uses database data)
- Content Quality: 5 points  
- Visual Design: 5 points
- Responsive Design: 5 points
- Deployment: 5 points

**Total: 100 points**

**NEW REQUIREMENTS FOR FULL CREDIT:**
- ✅ Neon database set up and connected
- ✅ Prisma schema implemented with Project model  
- ✅ API routes fully functional (GET/POST/PUT/DELETE)
- ✅ Frontend pages fetch data from API
- ✅ Seed data created and working
- ✅ All tests passing



## 🆘 Troubleshooting Common Issues

### Issue 1: "Port 3000 already in use"

**Problem:** Another program is using port 3000

**Solution:**
```bash
# Kill the process
# Mac/Linux:
lsof -ti:3000 | xargs kill

# Windows:
netstat -ano | findstr :3000
# Note the PID number, then:
taskkill /PID [number] /F
```

### Issue 2: "Module not found" Error

**Problem:** Missing dependencies

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue 3: Images Not Loading

**Check these:**
- [ ] Image is in `public/` folder
- [ ] Using `/image.jpg` not `public/image.jpg`
- [ ] File name matches exactly (case-sensitive!)
- [ ] Using `<Image>` not `<img>`

**Example:**
```javascript
// ✅ CORRECT
<Image src="/profile.jpg" alt="My photo" width={300} height={300} />

// ❌ WRONG
<img src="public/profile.jpg" />
```

### Issue 4: "Git push rejected"

**Problem:** GitHub has changes you don't have locally

**Solution:**
```bash
git pull origin main
git push origin main
```

### Issue 5: Tests Failing

**Check:**
1. Did you create `Navbar.js` in the `components/` folder?
2. Did you create `Footer.js` in the `components/` folder?
3. Are you using `Link` from `next/link`?
4. Are you using `Image` from `next/image`?
5. Do all 4 page files exist?

**Run tests locally to see details:**
```bash
npm test
```

### Issue 6: Vercel Build Failing

**Most common causes:**

1. **Build errors** - Run `npm run build` locally first
2. **Missing files** - Make sure you pushed everything to GitHub
3. **Import errors** - Check all import paths are correct

**How to debug:**
1. Click "View Build Logs" in Vercel
2. Read the error message
3. Fix the issue locally
4. Push to GitHub again
5. Vercel will automatically try again

### Issue 7: Changes Not Showing on Live Site

**Solution:**
1. Make sure you saved the file (`Ctrl+S`)
2. Make sure you committed and pushed to GitHub
3. Wait 1-2 minutes for Vercel to rebuild
4. Hard refresh the page (`Ctrl+Shift+R`)

### Issue 8: Database Connection Errors **NEW!**

**Problem:** "Invalid `prisma.project.findMany()` invocation" or connection timeouts

**Solutions:**
1. **Check your `.env.local` file**:
   ```bash
   # Make sure DATABASE_URL is correct
   DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
   ```

2. **Regenerate Prisma client**:
   ```bash
   npm run db:generate
   ```

3. **Test your connection**:
   ```bash
   npm run db:push
   ```

### Issue 9: API Routes Returning 501 "Not Implemented" **NEW!**

**Problem:** Your API endpoints return TODO messages instead of actual data

**Solution:** 
- You need to implement the API functions! Check Step 6 in this guide
- Make sure you replaced all the TODO comments with actual database code

### Issue 10: "Projects page shows no projects" **NEW!**

**Problem:** Projects page shows "No projects found" even after seeding

**Check these:**
1. **Did you run the seed script?**
   ```bash
   npm run db:seed
   ```

2. **Did you implement the API route?**
   - Open `app/api/projects/route.js`
   - Make sure the GET function has actual database code, not TODO comments

3. **Did you update the frontend?**
   - Open `app/projects/page.js`
   - Make sure you're fetching from the API, not using empty array

### Issue 11: "prisma.project is not a function" **NEW!**

**Problem:** Database model not found

**Solution:**
1. **Make sure you created the Project model** in `prisma/schema.prisma`
2. **Push the schema to database**:
   ```bash
   npm run db:push
   ```
3. **Regenerate the Prisma client**:
   ```bash
   npm run db:generate
   ```

### Issue 12: Environment Variables Not Working **NEW!**

**Problem:** Database URL not being read from `.env.local`

**Solutions:**
1. **File name must be exactly** `.env.local` (not `.env` or `.env.example`)
2. **Restart your development server** after changing environment variables:
   ```bash
   # Stop the server (Ctrl+C), then restart:
   npm run dev
   ```
3. **Check the file is in the project root**, not in a subfolder

### Issue 13: "Cannot read properties of undefined" Prisma Error **NEW!**

**Problem:** You get `TypeError: Cannot read properties of undefined (reading '__internal')` when running seed script

**This is a known Prisma version compatibility issue. Here's how to fix it:**

1. **Check your Prisma version:**
   ```bash
   npm list prisma @prisma/client
   ```

2. **If you see version 7.x or higher, downgrade to stable v5:**
   ```bash
   npm install prisma@^5.22.0 @prisma/client@^5.22.0
   ```

3. **Regenerate the Prisma client:**
   ```bash
   npm run db:generate
   ```

4. **Test the fix:**
   ```bash
   npm run db:seed
   ```

**Why this happens:** Prisma v7+ introduced breaking changes that can cause runtime errors in educational setups. Version 5.x is more stable and widely used in production.

## 💡 Tips for Success

### Design Tips

1. **Choose a color palette and stick to it**
   - Primary color for buttons/links
   - Neutral colors for backgrounds
   - Use online tools: [coolors.co](https://coolors.co)

2. **Use whitespace** - Don't cram everything together
   - Add padding: `p-8`, `p-12`
   - Add margin: `mb-8`, `mt-12`

3. **Make text readable**
   - Use `text-lg` or `text-xl` for body text
   - Good contrast (dark text on light background)
   - Not too wide (use `max-w-4xl`)

4. **Consistent spacing**
   - Same gaps between sections
   - Same padding on cards
   - Same sizes for headings

### Coding Tips

1. **Save often** - Press `Ctrl+S` constantly
2. **Test after every change** - Don't make 10 changes at once
3. **Commit frequently** - Every 30 minutes
4. **Read error messages** - They tell you what's wrong!
5. **Use DevTools** - Check console for errors
6. **Ask for help** - Don't struggle for more than 15 minutes

### Time Management

**Suggested schedule:**

- **Monday:** Set up project, customize homepage (2 hours)
- **Tuesday:** Create Navbar/Footer, style pages (2 hours)
- **Wednesday:** Add images, content to all pages (2 hours)
- **Thursday:** Test everything, fix issues (1.5 hours)
- **Friday:** Deploy to Vercel, submit (0.5 hours)

**Total time:** 8 hours over the week



## 🎓 Learning Objectives

By completing this project, you will:

✅ **Understand Next.js fundamentals**
- File-based routing
- Components and layouts
- Image optimization

✅ **Master Tailwind CSS**
- Utility classes
- Responsive design
- Color systems

✅ **Build reusable components**
- Navigation bars
- Footers
- Cards

✅ **Use modern development tools**
- Git for version control
- GitHub for collaboration
- Vercel for deployment

✅ **Create professional web applications**
- Clean code structure
- Responsive design
- Live on the internet!



## 📚 Additional Resources

### Next.js Documentation
- [Next.js Official Docs](https://nextjs.org/docs)
- [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image)
- [Next.js Link Component](https://nextjs.org/docs/api-reference/next/link)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

### Free Image Resources
- [Unsplash](https://unsplash.com) - Free stock photos
- [Pexels](https://pexels.com) - Free stock photos
- [UI Avatars](https://ui-avatars.com) - Generated profile pictures

### Getting Help
- **Office Hours:** [Check your schedule]
- **Class Slack:** [Your Slack channel]
- **Email Instructor:** [Instructor email]
- **Stack Overflow:** Search your error messages
- **Next.js Discord:** [discord.gg/nextjs](https://discord.gg/nextjs)



## ✅ Final Pre-Submission Checklist

**Before you hit submit, check ALL of these:**

### Technical Requirements
- [ ] All 4 pages exist and are accessible
- [ ] Navbar component created and imported in layout
- [ ] Footer component created and imported in layout
- [ ] Using `Link` from next/link (not `<a>` tags)
- [ ] Using `Image` from next/image (not `<img>` tags)
- [ ] All images have `alt` attributes
- [ ] No console errors in browser (F12 → Console)
- [ ] Tests pass locally (`npm test`)
- [ ] Project builds successfully (`npm run build`)

### Content Requirements
- [ ] Homepage has your name and introduction
- [ ] About page has profile photo
- [ ] About page has bio paragraph (3+ sentences)
- [ ] Projects page has at least 3 project cards
- [ ] Each project has title and description
- [ ] Contact page has email or contact method
- [ ] Footer has your name and year
- [ ] No spelling or grammar errors

### Design Requirements
- [ ] Consistent color scheme across all pages
- [ ] Professional appearance (not default blue/gray)
- [ ] Good contrast (readable text)
- [ ] Proper spacing (not cramped)
- [ ] Hover effects on navigation links
- [ ] Responsive on mobile (test in DevTools)
- [ ] Responsive on tablet
- [ ] Responsive on desktop

### Deployment
- [ ] Code pushed to GitHub
- [ ] Latest commit shows on GitHub
- [ ] Deployed to Vercel
- [ ] Live URL works
- [ ] All pages accessible on live site
- [ ] Images load on live site
- [ ] No broken links on live site

### Submission
- [ ] GitHub URL submitted in LMS
- [ ] Vercel URL submitted in LMS
- [ ] Screenshot uploaded
- [ ] Submitted before deadline



## 🎉 Congratulations!

You've just built and deployed a real website to the internet! 

**Share your portfolio with:**
- Family and friends
- Future employers
- Your social media
- Your LinkedIn profile

**Keep improving it:**
- Add more projects as you build them
- Update your skills
- Refine the design
- Add new features (blog, resume, etc.)

**Need help?** Don't wait until the last minute!  
**Proud of your work?** Share it with #portfolios in Slack!

**Last Updated:** November 2025  
**Version:** 1.0  
**For:** week 2 - Next.js Portfolio Project