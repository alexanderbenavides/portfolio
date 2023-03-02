import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/shared/layout';
import { Home, About, PostCrud, Post, Contact, PageNotFound } from './components/modules';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />,
        <main>
        <Routes>
          <Route path="/" element= { <Home />}/>
          <Route path="/about" element= { <About />}/>
          <Route path="/posts">
            <Route index  element= { <PostCrud />}/>
            <Route path=":id" element= { <Post/>}/>
          </Route>
          <Route path="/contact" element= { <Contact />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;