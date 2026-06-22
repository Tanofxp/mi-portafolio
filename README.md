# Daniel Matalone - Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and TailwindCSS v4. Featuring a dark theme, smooth animations, and responsive design inspired by industry leaders like Vercel, Linear, and Stripe.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and TailwindCSS v4
- **Premium Design**: Dark-first theme with elegant animations using Framer Motion
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized for Core Web Vitals and fast loading times
- **Smooth Animations**: Subtle, professional animations with scroll-reveal effects
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels

## 🛠️ Technologies

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS v4** - Utility-first CSS framework with @tailwindcss/postcss
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tanofxp/mi-portafolio.git
   cd mi-portafolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
mi-portafolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles with TailwindCSS v4
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/          # Page sections
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── SkillsSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       └── ContactSection.tsx
│   ├── data/                  # Data files
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   ├── types/                 # TypeScript types
│   │   └── index.ts
│   └── lib/                   # Utility functions
│       └── utils.ts
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── postcss.config.mjs         # PostCSS with @tailwindcss/postcss
├── next.config.ts             # Next.js configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Customization

### Personal Information
Update your information in `src/data/personal.ts`:
```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  email: 'your.email@example.com',
  // ...
};
```

### Projects
Add or modify projects in `src/data/projects.ts`

### Skills
Update your tech stack in `src/data/skills.ts`

### Theme Colors
Customize colors in `src/app/globals.css` using the `@theme` directive:
```css
@theme {
  --color-background: #0a0a0a;
  --color-accent: #3b82f6;
  /* ... */
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Done!** Your portfolio is live 🎉

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and tree shaking
- **First Load JS**: ~151 KB (optimized)

## 🔧 TailwindCSS v4 Configuration

This project uses TailwindCSS v4 with the new `@tailwindcss/postcss` plugin. Key features:

- **@theme directive** for custom design tokens
- **@import "tailwindcss"** instead of @tailwind directives
- **CSS variables** for dynamic theming
- **Simplified configuration** in `postcss.config.mjs`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Daniel Matalone**
- GitHub: [@Tanofxp](https://github.com/Tanofxp)
- LinkedIn: [Daniel Matalone](https://www.linkedin.com/in/daniel-matalone-a09b9214a/)
- Email: danifxp@gmail.com

## 🙏 Acknowledgments

- Design inspiration from [Vercel](https://vercel.com), [Linear](https://linear.app), and [Stripe](https://stripe.com)
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Vercel Geist](https://vercel.com/font)

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS v4
