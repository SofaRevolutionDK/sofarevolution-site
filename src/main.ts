import './style/style.css';
import { animationObserver } from './components/animationObserver';
import { sidebarHandler } from './components/sidebarHandler';
import { canvasScrollHandler } from './components/canvasScrollHandler';

window.addEventListener('DOMContentLoaded', () => {
  animationObserver();
  sidebarHandler();
  canvasScrollHandler();
});