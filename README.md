# 🚀 Darshan Panchal - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and an elegant design.

![Portfolio Banner](./public/og-image.png)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

- **🎨 Modern UI/UX Design** - Clean, professional, and visually appealing interface
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and optimized production builds
- **🎭 Smooth Animations** - Framer Motion powered animations for engaging user experience
- **✍️ Typing Animation** - Dynamic typewriter effect for name display
- **📧 Contact Form** - Integrated with Formspree for easy contact functionality
- **🎯 Service Showcase** - Highlighting frontend, backend, and full-stack development skills
- **💼 Portfolio Section** - Project showcase with detailed information
- **🎨 Testimonials** - Client feedback carousel with smooth transitions
- **📊 Work Process** - Visual representation of development workflow

## 🛠️ Tech Stack

### Frontend
- **React 19.0.0** - Modern UI library
- **Vite 6.2.0** - Next-generation frontend tooling
- **React Router DOM 7.3.0** - Client-side routing
- **Framer Motion** - Animation library for smooth transitions

### Styling
- **Tailwind CSS 4.0.14** - Utility-first CSS framework
- **DaisyUI 5.0.6** - Tailwind CSS component library
- **Custom CSS** - Additional custom styles

### UI Components
- **Swiper 11.2.8** - Modern touch slider
- **React Fast Marquee 1.6.5** - Smooth scrolling marquee
- **React Spinners 0.17.0** - Loading indicators
- **Font Awesome** - Icon library

### Form Handling
- **Formspree** - Form backend service for contact form

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS transformations
- **Vite Plugin React** - React fast refresh

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DarshanPro123/basic-to-advance-portfolio.git
   cd basic-to-advance-portfolio
   git checkout building
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   # Create a .env file in the root directory
   # Add your environment variables here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📁 Project Structure

```
picto-1.0.0/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, and other assets
│   │   └── images/        # Image files
│   ├── components/        # React components
│   │   ├── common/        # Shared components
│   │   │   ├── navbar/    # Navigation bar
│   │   │   ├── sidebar/   # Sidebar navigation
│   │   │   └── socialMedia/ # Social media links
│   │   ├── contact/       # Contact section
│   │   ├── footer/        # Footer component
│   │   ├── introduction/  # Hero section
│   │   ├── portfolio/     # Portfolio showcase
│   │   ├── profession/    # Services/Skills section
│   │   ├── profile/       # About section
│   │   ├── sponsor/       # Tech stack/sponsors
│   │   ├── testimonial/   # Client testimonials
│   │   └── workProcess/   # Work process section
│   ├── layouts/           # Layout components
│   ├── pages/             # Page components
│   ├── routes/            # Routing configuration
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── .gitignore             # Git ignore file
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🧩 Components

### Introduction
- Hero section with typing animation
- Animated entrance with Framer Motion
- Professional greeting and introduction
- Statistics showcase (Experience, Projects, Clients)

### Profession/Services
- Frontend Development expertise
- Backend Development skills
- Full-Stack Solutions
- Technology stack highlights

### Portfolio
- Project showcase with filtering
- Detailed project information
- Live demos and source code links

### Testimonials
- Client feedback carousel
- Smooth swiper transitions
- Professional recommendations

### Contact
- Formspree integrated contact form
- Real contact information
- Clickable email and phone links
- Social media integration

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## 🎨 Customization

### Updating Contact Information
Edit `src/components/contact/Contact.jsx`:
```javascript
const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Your Address Here",
  },
  // ... more contact info
];
```

### Modifying Services
Edit `src/components/profession/Profession.jsx`:
```javascript
const rolesData = [
  {
    id: 1,
    title: "Your Service",
    description: "Your service description",
  },
  // ... more services
];
```

### Changing Formspree Endpoint
Edit `src/components/contact/Form.jsx`:
```javascript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  // ...
});
```

## 🚀 Deployment

### GitHub Pages

1. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     // ...
   });
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** via Netlify dashboard or CLI

## 🌟 Features Highlight

- ✅ Typing animation for personalized greeting
- ✅ Smooth page transitions with Framer Motion
- ✅ Responsive design for all devices
- ✅ Dark/Light mode support (via DaisyUI)
- ✅ SEO optimized
- ✅ Fast loading times
- ✅ Accessible components
- ✅ Cross-browser compatible

## 📧 Contact

**Darshan Panchal**
- Email: [darshanpro187@gmail.com](mailto:darshanpro187@gmail.com)
- Phone: [+91 7990 7521 37](tel:+917990752137)
- Location: Ahmedabad, Gujarat, India
- GitHub: [@DarshanPro123](https://github.com/DarshanPro123)
- Portfolio: [Your Portfolio URL]

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- Icons from Font Awesome
- Animations powered by Framer Motion
- Form handling by Formspree

---

**Built with ❤️ by Darshan Panchal**

Last Updated: November 2025
