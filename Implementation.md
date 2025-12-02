# 🚀 Implementation Guide - Complete All Tests

This guide provides **exact code implementations** needed to pass all automated tests for the Week 2 Portfolio Database project.

## 📋 Quick Overview

**What you'll implement:**
1. **Database Schema** - Prisma Project model (✅ Already done)
2. **API Routes** - 5 endpoints for CRUD operations
3. **Database Connection** - Environment setup
4. **Seed Data** - Sample projects for development

**Total time needed:** ~2-3 hours

---

## 🗄️ Step 1: Set Up Your Database (MUST DO FIRST!)

### 1.1: Get Your Neon Database URL

1. **Go to [neon.tech](https://neon.tech)** and create a free account
2. **Create a new project** called "portfolio-db"
3. **Copy your connection string** - it looks like:
   ```
   postgresql://username:password@ep-example.us-east-1.aws.neon.tech/portfolio_db?sslmode=require
   ```

### 1.2: Create Environment File

1. **Copy `.env.example` to `.env.local`** in your project root
2. **Add your database URL:**

```bash
# .env.local
DATABASE_URL="postgresql://username:password@ep-example.us-east-1.aws.neon.tech/portfolio_db?sslmode=require"
```

⚠️ **Replace with your actual Neon connection string!**

### 1.3: Initialize Database

Run these commands in order:

```bash
# Generate Prisma client
npm run db:generate

# Create database tables
npm run db:push

# Add sample data
npm run db:seed
```

✅ **Test:** Run `npm run db:studio` and you should see your Project table with sample data.

---

## 📡 Step 2: Implement API Routes

Now you'll implement the backend API endpoints that your frontend will use to interact with the database. This is where you'll learn how to build a RESTful API.

### 2.1: Understanding API Routes in Next.js

API routes in Next.js follow this pattern:
- `app/api/projects/route.js` → Handles `/api/projects` (GET all, POST new)
- `app/api/projects/[id]/route.js` → Handles `/api/projects/1` (GET one, PUT update, DELETE)

### 2.2: Learning Objectives

By implementing these API routes, you'll learn:
- **RESTful API principles** - How HTTP methods map to operations
- **Database operations** - Using Prisma to query and modify data
- **Error handling** - Proper status codes and error responses
- **Data validation** - Checking required fields and formats
- **Async programming** - Working with promises and async/await

### 2.3: API Endpoints to Implement

**You need to implement 5 endpoints:**

1. **GET /api/projects** - Return all projects (newest first)
   - Use `prisma.project.findMany()` with `orderBy: { createdAt: 'desc' }`
   - Return JSON array of projects

2. **POST /api/projects** - Create a new project
   - Parse request body with `await request.json()`
   - Validate required fields: title, description, technologies
   - Use `prisma.project.create()` to save to database
   - Return created project with 201 status

3. **GET /api/projects/[id]** - Get specific project
   - Extract ID from params and convert to integer
   - Use `prisma.project.findUnique()` to find by ID
   - Return 404 if project not found

4. **PUT /api/projects/[id]** - Update existing project
   - Parse request body and validate fields
   - Use `prisma.project.update()` with proper error handling
   - Handle Prisma P2025 error (record not found) → return 404

5. **DELETE /api/projects/[id]** - Remove project
   - Use `prisma.project.delete()` with ID
   - Handle Prisma P2025 error → return 404
   - Return success message

### 2.4: Implementation Guidelines

**Error Handling Patterns:**
```javascript
// Always wrap database operations in try/catch
try {
  const result = await prisma.project.findMany();
  return NextResponse.json(result);
} catch (error) {
  console.error('Database error:', error);
  return NextResponse.json(
    { error: 'Something went wrong' },
    { status: 500 }
  );
}
```

**Validation Pattern:**
```javascript
// Check required fields before database operations
if (!title || !description || !technologies?.length) {
  return NextResponse.json(
    { error: 'Missing required fields' },
    { status: 400 }
  );
}
```

**ID Validation Pattern:**
```javascript
// Always validate and convert IDs
const id = parseInt(params.id);
if (isNaN(id)) {
  return NextResponse.json(
    { error: 'Invalid ID' },
    { status: 400 }
  );
}
```

### 2.5: Testing Your Implementation

**Step 1: Start your dev server**
```bash
npm run dev
```

**Step 2: Test in browser**
- Visit `http://localhost:3000/api/projects`
- Should return JSON array of projects

**Step 3: Use browser DevTools**
- Open Network tab to see requests/responses
- Check status codes and response data

**Step 4: Test with form (later)**
- After implementing frontend components
- Create projects through your UI

---

## 🧪 Step 3: Test Your Implementation

### 3.1: Test API Routes Manually

Start your dev server:
```bash
npm run dev
```

**Test in browser:**
1. **GET all projects:** `http://localhost:3000/api/projects`
   - Should return JSON array of projects
2. **GET one project:** `http://localhost:3000/api/projects/1`
   - Should return single project JSON

**Test with curl (optional):**
```bash
# Test POST (create project)
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Project","description":"A test project","technologies":["React"]}'
```

### 3.2: Run Automated Tests

```bash
# Run all tests
npm test

# Run just database tests
npm test -- --run tests/db.test.js

# Run just API tests  
npm test -- --run tests/api.test.js
```

**Expected results:**
- ✅ All database tests pass
- ✅ All API tests pass (requires dev server running)
- ✅ All portfolio structure tests pass

---

## 🐛 Troubleshooting Common Issues

### Issue 1: "fetch failed" in API tests

**Cause:** Development server not running

**Solution:**
```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Run tests
npm test
```

### Issue 2: "Prisma Client not found"

**Solution:**
```bash
npm run db:generate
```

### Issue 3: "An operation failed because it depends on one or more records that were required but not found"

**Cause:** Database is empty or not seeded

**Solution:**
```bash
npm run db:seed
```

### Issue 4: "Environment variable not found"

**Cause:** Missing or incorrect `.env.local` file

**Solution:**
1. Make sure `.env.local` exists in project root
2. Check `DATABASE_URL` is correct
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Issue 5: Tests pass but form doesn't work

**Cause:** Frontend not connecting to API

**Solution:**
1. Check Projects page at `http://localhost:3000/projects`
2. Make sure you see actual project data (not "No projects found")
3. Try adding a new project with the form

---

## 📝 Implementation Checklist

### Database Setup
- [ ] Neon database created
- [ ] `.env.local` file created with correct DATABASE_URL
- [ ] `npm run db:generate` completed successfully
- [ ] `npm run db:push` completed successfully  
- [ ] `npm run db:seed` completed successfully
- [ ] Can see data in `npm run db:studio`

### API Implementation
- [ ] GET `/api/projects` returns array of projects
- [ ] POST `/api/projects` creates new projects
- [ ] GET `/api/projects/[id]` returns single project
- [ ] PUT `/api/projects/[id]` updates projects
- [ ] DELETE `/api/projects/[id]` deletes projects
- [ ] All endpoints handle errors properly

### Testing
- [ ] Development server runs without errors
- [ ] All automated tests pass
- [ ] Projects page shows database data
- [ ] Can create new projects with form
- [ ] Individual project pages work

---

## ✅ Verification Steps

### 1. Database Verification
```bash
npm run db:studio
```
- Should open browser showing Project table
- Should see at least 3 sample projects

### 2. API Verification
Visit in browser while dev server is running:
- `http://localhost:3000/api/projects` → Should return JSON array
- `http://localhost:3000/api/projects/1` → Should return single project JSON

### 3. Frontend Verification
- `http://localhost:3000/projects` → Should show project cards from database
- Click "Add New Project" → Should show working form
- Fill form and submit → Should add project to list
- Click "View Details" → Should show individual project page

### 4. Test Verification
```bash
npm test
```
- All tests should pass (46/46)
- No failed tests or errors

---

## 🎯 Final Tips

### Before Submitting
1. **Run full test suite:** `npm test` - all tests must pass
2. **Check live functionality:** Form should work in browser
3. **Verify deployment:** Make sure Vercel build succeeds
4. **Test responsiveness:** Check mobile view in DevTools

### Common Gotchas
- ⚠️ **Environment variables:** Restart dev server after changing `.env.local`
- ⚠️ **Database connection:** Use exact connection string from Neon (including `?sslmode=require`)
- ⚠️ **Required fields:** API validates title, description, and technologies
- ⚠️ **Error handling:** PUT/DELETE return 404 for non-existent projects

### Getting Help
- **Console errors:** Check browser DevTools Console tab
- **API errors:** Check terminal where `npm run dev` is running  
- **Database errors:** Verify connection with `npm run db:studio`
- **Test failures:** Read the error message - it tells you what's missing

---

## 🎉 Success!

When all tests pass, you'll see:
```
✓ tests/portfolio.test.js (16 tests)
✓ tests/api.test.js (13 tests) 
✓ tests/db.test.js (17 tests)
✓ tests/form.test.js (15 tests)

Test Files  4 passed (4)
Tests  61 passed (61)
```

**Your portfolio is now a full-stack application with:**
- ✅ PostgreSQL database
- ✅ RESTful API endpoints
- ✅ Interactive project creation form
- ✅ Dynamic project pages
- ✅ Complete CRUD functionality

Ready for deployment to Vercel! 🚀