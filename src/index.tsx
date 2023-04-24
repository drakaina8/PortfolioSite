import React, { ReactFragment } from 'react';
import { createRoot } from 'react-dom/client';
import AppWrapper from './components/appWrapper';
import './styles.css';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(<AppWrapper />);
