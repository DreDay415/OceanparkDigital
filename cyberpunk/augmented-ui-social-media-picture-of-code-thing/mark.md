To make things easy for you, I’ve organized everything into a clean Markdown structure. You can copy this into a file named `antigravity-astro-guide.md` or similar.

I've included the specific component structure you'll need to handle those "PropJockey" style CSS variables without breaking your Astro build.

---

```markdown
# Antigravity Implementation Guide for Astro

## 1. The "Golden Rule" for Jane Ori (PropJockey) Pens
The CodePen you liked uses **CSS Custom Properties (Variables)** to drive logic. Astro sometimes scopes CSS so strictly that it breaks these relationships. To fix this, always use `<style is:global>` or ensure your variables are defined within the same component.

## 2. Recommended Astro Component Structure
Create a file at `src/components/Antigravity.astro`.

```astro
---
// Any props you want to pass (e.g., color, size)
const { color = "#00d4ff" } = Astro.props;
---

<div class="antigravity-scene">
  <div class="floating-wrapper">
    <div class="object"></div>
    <div class="shadow"></div>
  </div>
</div>

<style is:global>
  /* Using is:global ensures that complex CSS logic (like Space Toggles)
     can see the variables across the different HTML elements.
  */
  :root {
    --float-speed: 3s;
    --float-distance: 20px;
  }

  .antigravity-scene {
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }

  .floating-wrapper {
    animation: float var(--float-speed) ease-in-out infinite;
    transform-style: preserve-3d;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(calc(-1 * var(--float-distance))); }
  }

  /* Paste the rest of the CodePen CSS here */
</style>

```

---

## 3. Image Generation Prompt (Asset Creation)

If you need a background or a main "hero" image that matches this vibe:

> **Prompt:** A high-end digital art piece of a modern workspace where gravity has failed. Objects like a translucent glass laptop, a succulent in a geometric pot, and coffee droplets are floating in mid-air at varying heights. Minimalist aesthetic, soft studio lighting with pastel gradients (pink and teal), sharp focus, 8k resolution, clean composition with plenty of negative space for website text.

---

## 4. How to use it in your Pages

In your `src/pages/index.astro`, simply import and use it. **No JavaScript setup required.**

```astro
---
import Layout from '../layouts/Layout.astro';
import Antigravity from '../components/Antigravity.astro';
---

<Layout title="Ocean Park Digital">
  <main>
    <h1>Welcome to the Future</h1>
    <Antigravity />
  </main>
</Layout>

```

---

## 5. Troubleshooting Tips

* **CSS Not Animating?** Check if you have a `prefers-reduced-motion` setting active on your computer, or ensure you used `is:global` in the Astro style tag.
* **Layout Shift?** Ensure the container `.antigravity-scene` has a fixed height so it doesn't "jump" when the animation starts.
* **Zero-JS:** Remember, even though this looks complex, if it's from PropJockey, it's likely 100% CSS. You do **not** need to switch to Next.js.

```

---

**Would you like me to try and convert the specific "Space Toggle" logic from that Pen into a simplified version you can test immediately?**

```