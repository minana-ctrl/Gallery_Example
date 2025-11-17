# Medical Aesthetics Gallery

A modern, vibrant Next.js gallery application showcasing medical aesthetics treatment images. Built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, vibrant, and interactive design
- 📱 Fully responsive grid layout
- 🖼️ Optimized image loading with Next.js Image component
- ✨ Smooth hover animations and transitions
- 🎭 Glass-morphism effects and gradient backgrounds
- 🚀 Optimized for Railway deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component with Supabase CDN support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Railway

Railway will automatically detect this as a Next.js project and configure the build settings. To deploy:

1. **Connect your repository**:
   - Go to [Railway](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose this repository

2. **Automatic deployment**:
   - Railway will automatically detect the Next.js project
   - It will run `npm install` and `npm run build`
   - The app will be available at your Railway-provided URL

3. **Environment variables** (if needed):
   - Railway will handle environment variables automatically
   - No additional configuration needed for basic deployment

4. **Custom domain** (optional):
   - Add your custom domain in Railway dashboard
   - Railway will handle SSL certificates automatically

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main gallery page
│   └── globals.css         # Global styles
├── components/
│   ├── Gallery.tsx         # Gallery grid component
│   └── ImageCard.tsx       # Individual image card
├── data/
│   ├── images.json         # Image data (from Links.MD)
│   └── index.ts            # Data utilities
├── types/
│   └── image.ts            # TypeScript types
└── public/                 # Static assets
```

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Image Data

Images are loaded from `data/images.json`, which contains an array of image objects with the following structure:

- `id`: Unique identifier
- `image_url`: Supabase CDN URL
- `treatment_type`: Type of treatment
- `body_area`: Body area treated
- `color_theme`: Color theme
- `description`: Image description
- `keywords`: Array of keywords
- `is_flagged`: Boolean flag (filtered out in gallery)
- Additional metadata fields

## License

Private project - All rights reserved.

