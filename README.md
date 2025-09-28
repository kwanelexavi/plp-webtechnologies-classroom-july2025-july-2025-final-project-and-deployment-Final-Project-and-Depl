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

## Live Demo

🌐 **Live Website**: https://dlalabrothes.netlify.app

---
