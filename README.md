# 🎨 Week 1: Next.js Portfolio Project

## 📚 Learning Objectives

By completing this project, you will demonstrate:

- **TS.2.3.1** - Structure HTML content using React components
- **TS.2.3.2** - Style with CSS using Tailwind utility classes
- **TS.1.2.1** - Write sequential statements in JavaScript/JSX

## 🎯 Project Goal

Build a personal portfolio website with **4 pages** that showcases who you are as a developer.

Your portfolio will include:
- 🏠 **Home** - Your introduction and navigation
- 👤 **About** - Your bio and skills
- 💼 **Projects** - Showcase of your work
- 📧 **Contact** - How to reach you

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js** (v20 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

### Installation Steps

1. **Accept the GitHub Classroom assignment**
   - Click the assignment link provided by your instructor
   - This creates your own copy of the starter code

2. **Clone your repository**
   ```bash
   git clone [your-repository-url]
   cd week1-portfolio-starter
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You should see the starter template!

## ✅ Requirements

### Must Have (Required for Passing)

- [ ] **4 working pages** (Home, About, Projects, Contact)
- [ ] **Navigation component** in layout that appears on all pages
- [ ] **Footer component** in layout that appears on all pages
- [ ] **Profile image** on About page using next/image
- [ ] **3 project cards** on Projects page (placeholders OK)
- [ ] **Contact information** on Contact page
- [ ] **Tailwind CSS styling** throughout
- [ ] **Responsive design** that works on mobile, tablet, and desktop
- [ ] **Working navigation** with Link components (no `<a>` tags)
- [ ] **Deployed to Vercel** with live URL

### Should Have (For Full Credit)

- [ ] Custom color scheme (not default blue/gray)
- [ ] Smooth hover effects on navigation and buttons
- [ ] Professional typography (good font sizes and spacing)
- [ ] All images have descriptive `alt` text
- [ ] No console errors in browser
- [ ] Meaningful Git commits (not just "update")

### Could Have (Extra Credit)

- [ ] Custom favicon
- [ ] Animated elements (with Tailwind transitions)
- [ ] Additional pages (Blog, Resume, etc.)
- [ ] Social media icons with links
- [ ] Dark mode toggle

## 📁 Project Structure

```
week1-portfolio-starter/
├── app/
│   ├── components/          # Your reusable components
│   │   ├── Navbar.js        # TODO: Create navigation component
│   │   └── Footer.js        # TODO: Create footer component
│   ├── about/
│   │   └── page.js          # TODO: Build About page
│   ├── projects/
│   │   └── page.js          # TODO: Build Projects page
│   ├── contact/
│   │   └── page.js          # TODO: Build Contact page
│   ├── layout.js            # Root layout (add Navbar/Footer here)
│   ├── page.js              # Homepage (customize this)
│   └── globals.css          # Global styles (already set up)
├── public/                  # Put your images here
│   └── .gitkeep
├── tests/
│   └── portfolio.test.js    # Automated tests (don't modify)
├── .gitignore
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md                # You're reading this!
```

## 🎨 Design Guidelines

### Color Palette Ideas

Choose one and customize:

**Professional Blue:**
- Primary: `bg-blue-600`
- Secondary: `bg-blue-100`
- Accent: `bg-blue-400`
- Text: `text-gray-900`

**Creative Purple:**
- Primary: `bg-purple-600`
- Secondary: `bg-purple-100`
- Accent: `bg-pink-400`
- Text: `text-gray-900`

**Modern Green:**
- Primary: `bg-green-600`
- Secondary: `bg-green-100`
- Accent: `bg-teal-400`
- Text: `text-gray-900`

### Typography Scale

- **Hero Heading:** `text-6xl` or `text-7xl`
- **Page Titles:** `text-4xl` or `text-5xl`
- **Section Headings:** `text-2xl` or `text-3xl`
- **Body Text:** `text-base` or `text-lg`
- **Small Text:** `text-sm`

## 🧪 Testing Your Work

Run the automated tests:

```bash
npm test
```

This checks:
- ✅ All 4 pages exist and load
- ✅ Navigation component exists
- ✅ Footer component exists
- ✅ Link components used (not `<a>` tags)
- ✅ Image components used (not `<img>` tags)
- ✅ No console errors

## 🚢 Deployment Instructions

### Step 1: Push to GitHub

```bash
# Save your work
git add .
git commit -m "Complete portfolio project"
git push
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your `week1-portfolio-starter` repository
5. Click "Deploy"
6. Wait 2-3 minutes
7. 🎉 Your site is live!

### Step 3: Submit Your Work

Submit the following in the assignment:
1. ✅ Your GitHub repository URL
2. ✅ Your live Vercel deployment URL
3. ✅ Screenshot of your homepage

## 📖 Resources

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Image Component](https://nextjs.org/docs/api-reference/next/image)
- [Link Component](https://nextjs.org/docs/api-reference/next/link)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Getting Unstuck
- Check the browser console for errors (F12)
- Read error messages carefully
- Google the exact error message
- Ask a classmate
- Ask your instructor
- Check the example solution (available after due date)

## 🏆 Grading Rubric

| Category | Points | What We're Looking For |
|----------|--------|------------------------|
| **Technical Implementation** | 50 | All routes work, components in layout, proper use of Link/Image |
| **Content & Design** | 30 | Complete content, professional design, responsive |
| **Code Quality** | 10 | Clean code, organized files, no errors |
| **Deployment** | 10 | Pushed to GitHub, deployed to Vercel |
| **TOTAL** | 100 | |

## 💡 Tips for Success

1. **Start simple** - Get the basic structure working first, then make it pretty
2. **Test often** - Check your work in the browser after every change
3. **Use the DevTools** - F12 is your friend! Check for errors
4. **Commit frequently** - Save your progress with Git every 30 minutes
5. **Mobile first** - Test on mobile view from the start
6. **Ask questions** - Don't struggle alone for more than 15 minutes

## 🆘 Common Issues & Solutions

### Port 3000 already in use
```bash
# Kill the process using port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill

# Windows:
netstat -ano | findstr :3000
taskkill /PID [the-pid-number] /F
```

### Images not loading
- Make sure images are in the `public/` folder
- Use `/image.jpg` not `public/image.jpg` in src
- Check file names match exactly (case-sensitive!)

### Styles not applying
- Make sure className is in quotes: `className="text-xl"`
- Check for typos in Tailwind class names
- Restart dev server if styles seem cached

### Git push rejected
```bash
# Pull latest changes first
git pull origin main

# Then push
git push origin main
```

## 🎓 What You'll Learn

By completing this project, you'll gain practical experience with:

- ✨ Building multi-page websites with Next.js
- 🎨 Styling with Tailwind CSS utility classes
- 🧩 Creating reusable React components
- 🖼️ Optimizing images with next/image
- 🔗 Client-side navigation with Link component
- 📱 Responsive web design principles
- 🌐 Deploying web applications to production
- 📚 Using Git for version control

## 📅 Timeline Recommendation

- **Day 1-2:** Set up project, create all 4 pages, basic navigation
- **Day 3:** Create Navbar and Footer components, add to layout
- **Day 4:** Style all pages with Tailwind, add images
- **Day 5:** Test responsiveness, deploy to Vercel, polish

## 🎉 When You're Done

1. Pat yourself on the back! You just built a real website! 🎊
2. Share your portfolio URL with family and friends
3. Add it to your LinkedIn profile
4. Use it to showcase future projects
5. Keep improving it throughout the course

---

**Questions?** Ask in the class Slack channel or come to office hours!

**Ready to start?** Run `npm run dev` and start building! 🚀
