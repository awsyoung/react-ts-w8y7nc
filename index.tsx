import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Text from './text'; 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
  <div className="string1">This is my text.</div>
  <div className="string2">This is my other text.</div>
  <Text />
  </div>
);
