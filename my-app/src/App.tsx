import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './components/Home/Home';
import Form from './components/formBlock/Form';
import Image from './components/imageBlock/Image';
import Video from './components/videoBlock/Video'; 
import VideoRes from './components/analysisBlock/ResBlock/VideoRes';
import ImageRes from './components/analysisBlock/ResBlock/ImageRes';
import FormRes from './components/analysisBlock/ResBlock/FormRes';
import VideoA from './components/analysisBlock/related/VideoA'
import FormA from './components/analysisBlock/related/FormA'
import ImageA from './components/analysisBlock/related/ImageA'
import Analysis from './components/analysisBlock/Analysis';
import React, {Suspense} from 'react';


const  Survey = React.lazy(()=>import('./components/surveyBlock/Survey'));

function App() {
  return (
    <div className="App">
         <Suspense>
          <Routes>
            <Route path='/' element={<Survey/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/video' element={<Video/>}/>
            <Route path='/image' element={<Image/>}/>
            <Route path='/analysis' element={<Analysis/>}/>
            <Route path='/video/:videoId' element={<VideoRes/>}/>
            <Route path='/image/:imageId' element={<ImageRes/>}/>
            <Route path='/form/:formId' element={<FormRes/>}/> 
            <Route path='/videores/:videoId/:name' element={<VideoA/>}/>
            <Route path='/imageres/:imageId/:name' element={<ImageA/>}/>
            <Route path='/formres/:formId/:name' element={<FormA/>}/> 
          </Routes>
         </Suspense>
    </div> 
  );
}

export default App;
