🎨 Cyberpunk Color Palette
css/* Primary Colors */
--cyber-pink: #fc199a;
--cyber-purple: #9963ff;
--cyber-cyan: #61e2ff;
--cyber-yellow: #ffcc00;
--cyber-orange: #ff8d41;

/* Background Colors */
--bg-dark: #241b2f;
--bg-gradient-top: #200933;
--bg-gradient-bottom: #3d0b43;
--code-bg: #131417;

/* Text Colors */
--text-primary: #b5b4b6;
--text-highlight: #ffffff;
--text-dimmed: rgba(255, 200, 255, 0.5);

/* Accent Colors */
--red-dot: #fc199a;
--yellow-dot: #ffcc00;
--green-dot: #61e2ff;
✨ Key Visual Effects
1. Neon Glow Text Shadows
css/* Pink glow for keywords */
text-shadow: 0 0 2px #393a33, 
             0 0 35px #ffffff44, 
             0 0 10px #fc199a, 
             0 0 2px #fc199a;

/* Cyan glow for variables */
text-shadow: 0 0 2px #001716, 
             0 0 5px #03edf933, 
             0 0 10px #ffff6633;

/* Yellow glow for tags */
text-shadow: 0 0 2px #100c0f, 
             0 0 3px #ffaa0099, 
             0 0 5px #ffaa0099, 
             0 0 10px #ffaa0099;

/* Purple glow for signatures */
text-shadow: 0 0 12px rebeccapurple;
2. Retro Grid Background
css.cyber-grid-bg {
  background: repeating-linear-gradient(
    to top,
    rgba(255, 255, 255, 0.03) 0px 2px,
    transparent 2px 4px
  ),
  linear-gradient(to bottom, #200933 75%, #3d0b43);
}

.cyber-grid-bg::after {
  content: '';
  height: 50%;
  width: 100%;
  display: block;
  background-image: 
    linear-gradient(90deg, rgba(252,25,154,.1) 1px, rgba(0,0,0,0) 1px), 
    linear-gradient(0deg, rgba(252,25,154,.1) 1px, rgba(0,0,0,0) 1px);
  background-position: bottom;
  background-repeat: repeat;
  background-size: 20px 20px;
  left: -25px;
  position: absolute;
  pointer-events: none;
  bottom: 0;
  transform: perspective(100px) rotateX(60deg);
  z-index: 0;
}
3. Radial Burst Background
cssbody {
  --c: rgb(0 0 0 / 0.95);
  --bgb: linear-gradient(var(--c), var(--c));
  --bg: repeating-conic-gradient(
    from 7.5deg at center center,
    hsl(200, 100%, 0%) 0deg 15deg,
    hsl(200, 100%, 60%) 10deg 30deg
  );
  background: var(--bgb), var(--bg), black;
}
4. Border Glow Effect
css.cyber-border {
  filter: drop-shadow(0 0 1px violet) 
          brightness(1.5) 
          drop-shadow(0 0 10px violet);
  border: 2px solid transparent;
  background: linear-gradient(to bottom left, rebeccapurple, orange);
  border-radius: 8px;
}
5. Container Shadow
css.cyber-container {
  filter: drop-shadow(0 0 75px rgb(128 0 255 / 0.25));
}
🎯 Complete Theme Setup
css/* Base Setup */
* {
  font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
  box-sizing: border-box;
}

body {
  background: #241b2f;
  color: #b5b4b6;
  min-height: 100vh;
}

/* Cyberpunk Container */
.cyber-panel {
  position: relative;
  background: repeating-linear-gradient(
    to top,
    rgba(255, 255, 255, 0.03) 0px 2px,
    transparent 2px 4px
  ),
  linear-gradient(to bottom, #200933 75%, #3d0b43);
  border-radius: 8px;
  filter: drop-shadow(0 0 75px rgb(128 0 255 / 0.25));
  padding: 2rem;
}

/* Add 3D grid floor */
.cyber-panel::after {
  content: '';
  height: 300px;
  width: 100%;
  display: block;
  background-image: 
    linear-gradient(90deg, rgba(252,25,154,.1) 1px, rgba(0,0,0,0) 1px), 
    linear-gradient(0deg, rgba(252,25,154,.1) 1px, rgba(0,0,0,0) 1px);
  background-position: bottom;
  background-repeat: repeat;
  background-size: 20px 20px;
  position: absolute;
  pointer-events: none;
  bottom: 0;
  left: -25px;
  transform: perspective(100px) rotateX(60deg);
  z-index: 0;
}

/* Neon Text */
.neon-pink {
  color: #fc199a;
  text-shadow: 0 0 2px #393a33, 0 0 35px #ffffff44, 0 0 10px #fc199a, 0 0 2px #fc199a;
  font-style: italic;
}

.neon-cyan {
  color: #61e2ff;
  text-shadow: 0 0 2px #001716, 0 0 5px #03edf933, 0 0 10px #ffff6633;
}

.neon-yellow {
  color: #ffcc00;
  text-shadow: 0 0 2px #100c0f, 0 0 3px #ffaa0099, 0 0 5px #ffaa0099, 0 0 10px #ffaa0099;
  font-style: italic;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 0.5em;
  height: 0.5em;
}

::-webkit-scrollbar-thumb {
  background: rgba(153, 99, 255, 0.5);
}

::-webkit-scrollbar-track {
  background: transparent;
}