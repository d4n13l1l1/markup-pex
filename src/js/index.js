import '../css/main.scss';

const el = document.querySelector('h1');

el.textContent += 'World!';

document.body.appendChild(el);

if (module.hot) {
  module.hot.accept();
}
