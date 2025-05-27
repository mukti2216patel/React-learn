import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import User from './components/User.jsx';
import Github from './components/Github.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:username" element={<User />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
