import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Tabs from './routes/tabs/Tabs';
import All from './routes/all/All';
import UIDesign from './routes/ui-design/UIDesign';
import UxDesign from './routes/ux-design/UxDesign';
import ProductDesign from './routes/product-design/ProductDesign';
import Articles from './routes/articles/Articles';
import Tutorials from './routes/tutorials/Tutorials';
import News from './routes/news/News';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/' element={<Tabs />} >
            <Route path='/' element={<All />} />
            <Route path='/tabs/ui-design' element={<UIDesign />} />
            <Route path='/tabs/ux-design' element={<UxDesign />} />
            <Route path='/tabs/product-design' element={<ProductDesign />} />
            <Route path='/tabs/articles' element={<Articles />} />
            <Route path='/tabs/tutorials' element={<Tutorials />} />
            <Route path='/tabs/news' element={<News />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
