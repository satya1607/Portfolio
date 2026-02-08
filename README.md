# Full Stack Java Developer Portfolio 🚀

A modern, professional, and fully responsive portfolio website for a Full Stack Java Software Developer. Built with HTML, CSS, JavaScript, and Tailwind CSS with stunning animations and dark mode support.

## 🎯 Features

### ✨ Core Sections
- **Home (Landing Page)** - Eye-catching hero section with call-to-action buttons
- **About Me** - Professional bio with social media links
- **Projects** - Showcase of featured projects with tech tags
- **Skills** - Organized technical skills in categories (Backend, Frontend, Database & Tools)
- **Experience & Education** - Timeline of work experience and educational background
- **Contact** - Functional contact form with validation

### 🎨 Design Features
- **Fully Responsive Design** - Mobile-first approach with breakpoints at 640px, 768px, and 1024px+
- **Dark/Light Mode Toggle** - Professional theme switching with local storage persistence
- **Smooth Animations** - Fade-in, slide-in, and custom animations on scroll
- **Sticky Navigation Bar** - Fixed navbar with smooth scrolling to sections
- **Clean Typography** - Google Fonts (Poppins, Playfair Display, Inter) for modern look
- **Professional Color Scheme** - Blue and purple gradients for modern aesthetic
- **Hover Effects** - Interactive elements with smooth transitions

### ⚡ Technical Features
- **Smooth Scroll Behavior** - CSS scroll-behavior for smooth scrolling
- **Intersection Observer API** - Efficient animation triggering on scroll
- **Form Validation** - Client-side validation with notifications
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **Performance Optimized** - Lightweight, no external dependencies except Tailwind CDN
- **Browser Compatible** - Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## 📁 Folder Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # Custom CSS with animations and styling
├── script.js           # JavaScript for interactivity and dark mode
├── README.md           # Documentation (this file)
└── assets/
    └── resume.pdf      # Resume/CV file for download
```

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive features and DOM manipulation
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Professional typography

### Features & APIs
- **Intersection Observer API** - For scroll-triggered animations
- **LocalStorage API** - For theme persistence
- **FormData API** - For form handling
- **Performance API** - For performance monitoring

## 🚀 Getting Started

### 1. Clone or Download the Repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Open the Portfolio
Simply open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

### 3. Or Use a Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server

# Using Live Server in VS Code
# Install Live Server extension and click "Go Live"
```

Then visit `http://localhost:8000` in your browser.

## ✏️ Customization Guide

### 1. Update Personal Information
Edit `index.html` and replace:
- `Jai Kumar` with your name
- Email, phone, and location in the contact section
- Social media links in footer
- Project descriptions and links

### 2. Add Your Profile Image
Replace the placeholder user icon with your photo:
```html
<!-- In the Home section -->
<img src="assets/profile.jpg" alt="Profile" class="rounded-full">
```

### 3. Update Projects
Modify the project cards with your actual projects:
```html
<div class="project-card">
    <img src="assets/project1.jpg" alt="Project Name">
    <h3>Your Project Name</h3>
    <p>Your project description</p>
    <a href="https://github.com/yourrepo">View Code</a>
</div>
```

### 4. Update Skills
Modify the skill tags in the Skills section to match your expertise.

### 5. Update Resume
Replace `assets/resume.pdf` with your actual resume file.

### 6. Customize Colors
Edit `style.css` and modify the color variables:
```css
:root {
    --color-primary: #3b82f6;      /* Blue */
    --color-secondary: #8b5cf6;    /* Purple */
    --color-accent: #10b981;       /* Green */
}
```

Or modify Tailwind classes in `index.html` (e.g., change `from-blue-600` to `from-red-600`).

## 🎨 Dark Mode

Features include:
- Automatic theme detection based on system preferences
- Manual toggle button in navbar
- Persistent theme preference using LocalStorage
- Smooth transitions between themes

## 📱 Responsive Design

The portfolio is optimized for:
- **Mobile** (< 640px) - Single column layout, optimized touch targets
- **Tablet** (640px - 1024px) - Two-column layout
- **Desktop** (> 1024px) - Full multi-column layout

## 📝 Form Handling

The contact form includes:
- Client-side validation (name, email, subject, message)
- Email format validation using regex
- Success/error notifications
- Form reset after submission
- Console logging for demonstration

**Note:** Currently, form submissions are logged to browser console. For backend integration:
1. Set up a backend API (Node.js, Python, etc.)
2. Update the form submission handler in `script.js`
3. Use Fetch API or Axios to send data to your server

Example backend integration:
```javascript
fetch('https://your-api.com/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```

## 🎬 Animations

### Implemented Animations
- **Fade In** - Elements appear with opacity transition
- **Fade In Left/Right** - Elements slide in from sides with fade
- **Slide In Left/Right** - Elements slide in horizontally
- **Slide In Up/Down** - Elements slide in vertically
- **Pulse** - Continuous pulsing effect
- **Staggered Delays** - Sequential animations for multiple elements

### How to Add More
Add animation classes to HTML elements:
```html
<div class="fade-in">Fades in</div>
<div class="slide-in-left">Slides in from left</div>
<div class="slide-in-right">Slides in from right</div>
```

## ♿ Accessibility Features

- Semantic HTML5 structure
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators for interactive elements
- Color contrast compliance
- Skip navigation links (can be added)

## 🌐 SEO Optimization

To improve search engine visibility:

1. Update meta tags in `<head>`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="java, developer, web development">
<meta name="author" content="Your Name">
```

2. Add schema.org structured data for better SEO

3. Optimize images with proper alt tags

4. Use descriptive heading tags

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 JavaScript Features Breakdown

### 1. Theme Toggle
- Switches between light and dark modes
- Saves preference to LocalStorage
- Updates icon visibility

### 2. Mobile Menu
- Hamburger menu for mobile devices
- Closes when a link is clicked
- Keyboard navigation (ESC to close)

### 3. Smooth Scrolling
- Smooth scroll to sections when clicking nav links
- Accounts for fixed navbar height

### 4. Active Link Highlighting
- Highlights current section in navbar
- Updates as user scrolls

### 5. Form Validation
- Validates all fields are filled
- Validates email format
- Shows notification on success/error
- Logs form data to console

### 6. Animations on Scroll
- Observes elements as they come into view
- Triggers animations using Intersection Observer API
- Efficient performance with minimal repaints

## 📞 Contact & Support

- **Email:** jai.kumar@example.com
- **Phone:** +91 98765 43210
- **GitHub:** [Your GitHub Profile]
- **LinkedIn:** [Your LinkedIn Profile]
- **Twitter:** [Your Twitter Profile]

## 📄 License

This portfolio template is free to use and modify for personal projects.

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- Google Fonts for typography
- Inspiration from modern portfolio designs
- Community feedback and suggestions

---

**Last Updated:** February 7, 2026
**Version:** 1.0.0

Made with ❤️ by Jai Kumar