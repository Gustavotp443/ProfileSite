import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Footer } from './components';
import GlobalStyles from './globalStyles';
import { Home, Projects, Erro404 } from './pages';
import ScrollToTop from './ScrollToTop';



function App() {




  return (
    <Router>
      <ScrollToTop />
      <GlobalStyles />
      <Navbar />
      <Container>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<Erro404 />} />
        </Routes>
      </Container>
      <Footer id="contato" />
    </Router>
  );
}

export default App;
