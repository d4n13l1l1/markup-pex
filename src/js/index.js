import '../css/main.css';
import './component.js';

const el = document.querySelector('h1');

el.textContent += ' World!';

document.body.appendChild(el);
