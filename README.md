# Kike Mujica, Consultoría Gastronómica

A one-page site for a restaurant consultant: who he is, what he does, how he works, and how to reach him. The copy is in Spanish.

Live: https://alediez2048.github.io/Chef-Consulting/

## Sections

Hero, his outlook on hospitality (Mirada), services (Qué hago), track record (Trayectoria), how an engagement runs (Cómo trabajo), credentials (Credibilidad), a photo gallery, and a closing call to action. Each section is one component in `src/components/`.

## Stack

React 18 and Vite, Tailwind CSS for layout and type, and Framer Motion for scroll-triggered reveals. Fonts are Playfair Display and Inter.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run deploy    # build and publish dist/ to the gh-pages branch
```

The Vite `base` is `/Chef-Consulting/` to match the GitHub Pages path.
