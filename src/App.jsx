import React from 'react';
import camping_bkgnd from './assets/camping_bkgnd.jpeg';

import Header from './Layout/Header';
import Main from './Layout/Main';
import Footer from './Layout/Footer';

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${camping_bkgnd})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(245,245,245,0.4)',
            maxWidth: 1028,
            padding: 12,
            margin: 'auto',
          }}
        >
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
