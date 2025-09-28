# 📦 Final Assignment: Build, Organize, and Deploy a Multipage Website

# Dlala Brothers NGO Website

## 🌍 Project Overview
This is a **simple multi-page static site** for the Dlala Brothers NGO, built entirely with **vanilla HTML, CSS, and JavaScript**.  
All pages share a **common header/footer**, a **global stylesheet** (`styles.css`), and a **behavior script** (`script.js`) for consistent styling and interactivity.

---

## 📂 Core Files
- **`index.html`** – Home page featuring:
  - Hero section
  - Impact statistics
  - Testimonials
  - Call-to-action (CTA)
- **`about.html`**, **`programs.html`**, **`get-involved.html`**, **`contact.html`** – Secondary pages that reuse shared layout blocks.
- **`styles.css`** – Global design system with:
  - CSS variables
  - Layout components
  - Page templates
  - Responsive rules
- **`script.js`** – Adds interactivity:
  - Dark/light theme toggling
  - Navigation state handling
  - Testimonial slider
  - Animated counters
  - Lazy loading
  - Mobile menu

---

## ⚙️ Development Workflow
- No build tooling required.
- Open `index.html` (or any other page) directly in your browser.
- For live development, use **Live Server** (VS Code extension) or a similar tool to enable **automatic reloads**.

---

## 🏗️ Architectural Notes
- **Navigation**  
  Uses `data-page` attributes on `<body>` and nav links to highlight the active page.
  
- **Themes**  
  - Controlled via `data-theme` attribute on `<html>`.  
  - Implements CSS variables for both **light and dark modes**.  
  - User preference is saved in `localStorage`.

- **Shared Components**  
  - Hero blocks, cards, and grids are styled through reusable classes in `styles.css`.  
  - Semantic HTML structure ensures accessibility and maintainability.

- **JavaScript Safety**  
  `script.js` checks if elements exist before attaching event listeners, ensuring the script runs **safely on every page**.

---

## 📡 Data & Integrations
- Purely **static site**:  
  - **No backend**  
  - **No database**  
  - **No external APIs**
- All content is stored in the HTML files.  
- Replace placeholder links (`#`) with **real URLs** when available.

---

## Live Demo

🌐 **Live Website**: https://dlalabrothes.netlify.app

---




## 🌐🎯 Part 1: Planning and Organizing a Multipage Website

Before you write any code, take time to plan:

* Define your website's purpose (portfolio, product showcase, blog, etc.)
* Outline 3–5 pages (e.g., Home, About, Services, Contact, Gallery)
* Sketch or describe the layout of each page
* Map out internal navigation (how pages link to one another)

**Goal:** Show intentional structure and user journey across the site.

---

## 🌍💻 Part 2: Build the Website Using HTML5, CSS, and JavaScript

Using your plan, begin building:

* Use HTML5 for semantic structure
* Apply CSS for responsive layout, styling, and animations
* Use JavaScript to add interactivity (menus, forms, toggles, dynamic content)

Each page should:

* Be mobile-responsive
* Share a consistent layout/header/footer
* Include at least one interactive element (e.g., form validation, toggle menu, animation on scroll)

**Goal:** Integrate everything you’ve learned in a cohesive, functioning project.

---

## 🛠️🚀 Part 3: Best Practices for Code Organization

Before deployment, refactor your project to follow production-friendly practices:

* Organize files in folders (`/css`, `/js`, `/images`, etc.)
* Write clean, modular, and commented code
* Use meaningful file names and relative paths
* Validate your HTML/CSS and test on different screen sizes

**Goal:** Prepare your codebase to be readable, maintainable, and scalable.

---

## 🌐🚀 Part 4: Introduction to Hosting and Deployment

Once your project is complete, choose a method to **host your site online**.

You can use:

* **GitHub Pages** (great for portfolios and static sites)
* **Netlify** (powerful CI/CD features and easy form support)
* **Vercel** (lightning-fast deployment for frontend projects)

Deploy your project and confirm that:

* All links and scripts work
* It loads properly on mobile and desktop
* It has a clear, shareable URL

**Goal:** Publish your work online and make it accessible to the world.

---

## Deliverables

1. A GitHub repository containing:

   * Your complete project code, properly organized
   * A `README.md` file explaining your project purpose, structure, and live URL
2. A live deployed website (hosted via GitHub Pages, Netlify, or Vercel)

---

## Outcome

* Clarity and thoroughness of planning documentation
* Proper use of HTML5, CSS, and JavaScript across multiple pages
* Responsive and accessible design
* Clean, well-organized, and commented code
* Successful live deployment with a working link
* Evidence of following best practices
