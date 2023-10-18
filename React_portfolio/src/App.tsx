// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Pages/layout/layout';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/contact/contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use the Layout component as the parent for Portfolio and other routes */}
        <Route path="/" element={<Layout />}>
          {/* Use the nested route for Portfolio component */}
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// App.tsx
