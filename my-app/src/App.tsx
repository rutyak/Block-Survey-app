import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './components/Home/Home';
import Form from './components/formBlock/Form';
import Image from './components/imageBlock/Image';
import Video from './components/videoBlock/Video';
import Analysis from './components/analysisBlock/Analysis';
import React, {Suspense} from 'react';

const  Survey = React.lazy(()=>import('./components/surveyBlock/Survey'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Suspense>
          <Routes>
            <Route path='/' element={<Survey/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/video' element={<Video/>}/>
            <Route path='/image' element={<Image/>}/>
            <Route path='/analysis' element={<Analysis/>}/>
          </Routes>
         </Suspense>
       </BrowserRouter>
      
    </div> 
  );
}

export default App;
