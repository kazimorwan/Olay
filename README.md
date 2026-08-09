# Olay

## Live Demo

### [Visit us ➡️ Olay](https://olay-kazimorwan498.vercel.app/)

## 🚀 React.js + Tailwind CSS + HeroUI Setup Guide

Set up a modern React project using Vite, Tailwind CSS (v4), and HeroUI (formerly NextUI) – a beautiful, accessible React component library built with Tailwind.

---

## 📦 Prerequisites

- Node.js
- npm, yarn, pnpm or bun ==> Change according to your Package manager (npm install/yarn install/pnpm install/bun install)
- Git

---

## 1️⃣ Create React App using Vite

```bash
npm create vite@latest my-app --template react # Change according to your project name (my-app)
cd my-app # Change according to your project name (my-app)
npm install
```

---

## 2️⃣ Install Tailwind CSS (v4)

```bash
npm install tailwindcss @tailwindcss/vite
```

Update `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Update `src/index.css`:

```css
@import "tailwindcss";
```

---

## 3️⃣ Install HeroUI

```bash
npm install @heroui/react@beta
```

Create `hero.ts`:

```ts
import { heroui } from "@heroui/react";
export default heroui();
```

---

### 🎞️ Animation Note

This project uses AOS-style animation attributes such as `data-aos="fade-up"` for scroll-based reveal effects.

Install AOS:

```bash
npm install aos
```

Import it in your main file:

```jsx
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
```

Example usage:

```jsx
<section data-aos="fade-up">Content</section>
```

---

## 4️⃣ Add HeroUI styles to Tailwind (Tailwind v4 method)

Update your `src/index.css` and add this line **after** Tailwind directives:

```css
@import "tailwindcss";
@plugin '../hero.ts'; /* Change according to your file path. */
@source '../node_modules/@heroui/theme/dist*.{js,ts,jsx,tsx}'; /* Change according to your file path. */
@custom-variant dark (&:is(.dark *));
```

---

## 5️⃣ Wrap App with HeroUIProvider (Optional)

In `main.jsx`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HeroUIProvider } from "@heroui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </React.StrictMode>,
);
```

---

## 6️⃣ Use HeroUI Components

Example:

```jsx
import { Button } from "@heroui/react";

function App() {
  return (
    <div className="p-6">
      <Button color="primary">Click Me</Button>
    </div>
  );
}

export default App;
```

---

## ✅ Run the App

```bash
npm run dev
```

---

<!-- ## 📁 Project Structure

```tree
my-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── package.json
└── vite.config.js
``` -->

---

## 📚 Resources

- 📘 HeroUI (Tailwind-v4) Docs: <https://www.heroui.com/docs/guide/tailwind-v4>
- 🎨 Tailwind CSS v4 Docs: <https://tailwindcss.com/docs/installation/using-vite>
- ⚛️ React Docs: <https://react.dev>
- ⚡ Vite Docs: <https://vitejs.dev>

---

Happy Coding! 💜
