import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const selector = `[data-app-id='app']`;
const appElements = Array.from(
  document.querySelectorAll<HTMLElement>(selector)
);

console.log(appElements);

appElements.forEach((element: HTMLElement) => {
  return ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
