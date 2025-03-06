# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Personal Website

A personal portfolio website built with React and Vite, featuring a real-time feedback system powered by Supabase.

## Features

- Responsive design
- Dark/light mode toggle
- Portfolio showcase
- Resource gallery
- Real-time feedback system

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a Supabase account and project at [https://supabase.com](https://supabase.com)
4. Create a `feedback` table in your Supabase project with the following columns:
   - `id` (uuid, primary key)
   - `name` (text, not null)
   - `message` (text, not null)
   - `created_at` (timestamp with timezone, default: now())
5. Enable real-time for the `feedback` table in Supabase dashboard
6. Copy your Supabase URL and anon key from the Supabase dashboard
7. Create a `.env` file in the root directory with the following content:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
8. Start the development server:
   ```
   npm run dev
   ```

## Technologies Used

- React
- Vite
- Supabase (for real-time database)
- SwiperJS
- ScrollReveal
- Boxicons

## Deployment

To build the project for production:

```
npm run build
```

The build files will be in the `dist` directory, ready to be deployed to your hosting provider of choice.
