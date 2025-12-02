# Components Folder

This folder is where you'll create your **reusable components**.

## Required Components

### 1. Navbar Component (`Navbar.js`)

Create a navigation bar that will appear on all pages.

**What it should include:**
- Your site logo or name
- Links to all pages (Home, About, Projects, Contact)
- Responsive design (works on mobile)

**Example structure:**
```javascript
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      {/* Your navigation code here */}
    </nav>
  )
}
```

**Remember to:**
- Use the `Link` component from `next/link` (not `<a>` tags)
- Import this component in `app/layout.js`
- Add it above `{children}` in the layout

---

### 2. Footer Component (`Footer.js`)

Create a footer that will appear on all pages.

**What it should include:**
- Copyright notice with your name
- Current year
- Optional: social links, site map

**Example structure:**
```javascript
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-8">
      {/* Your footer code here */}
    </footer>
  )
}
```

**Remember to:**
- Import this component in `app/layout.js`
- Add it after `{children}` in the layout

---

## Tips

1. **Keep components simple** - Each component should do one thing well
2. **Use consistent styling** - Match your site's color scheme
3. **Test on mobile** - Use browser DevTools to check responsive design
4. **Make it reusable** - These components appear on every page!

## Need Help?

Check the README.md in the root folder for more examples and resources!
