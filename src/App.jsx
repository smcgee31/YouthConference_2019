import React from 'react';

import Header from './Layout/Header';
import Main from './Layout/Main';
import Footer from './Layout/Footer';

function App() {
  return (
    <div style={ { backgroundColor: '#f5f5f5', padding: 12, maxWidth: 1028, margin: 'auto' } }>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
