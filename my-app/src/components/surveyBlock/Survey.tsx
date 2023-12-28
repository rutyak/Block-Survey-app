import Navbar from '../Navbar/Navbar'
import './Survey.css'
import DrawerExample from '../Drawer/DrawerExample'
import { useSelector } from 'react-redux'

const Survey = () => {
  
  const video = useSelector((state: any)=> state.video.videoInfo);
  console.log("Video: ", video);
  const image = useSelector((state: any)=>state.image.imageInfo);
  console.log(image);
  const form = useSelector((state: any)=>state.form.formInfo);
  console.log(form);
  
  return (
    <div className='surveyContainer'>
      <Navbar/>
      <div className='survey-container'>
         <div className='formBlock'>
         <h2>Forms</h2>
          <div className='formSurvey'>
            <p>This is Form blocks this containes more texts <DrawerExample/> </p>
            <p>This is Form blocks <DrawerExample/></p>
            <p>This is Form blocks <DrawerExample/></p>
            <p>This is Form blocks <DrawerExample/></p>
            <p>This is Form blocks <DrawerExample/></p>
            <p>This is Form blocks <DrawerExample/></p>
            <p>This is Form blocks this containes more texts <DrawerExample/> </p>
            <p>This is Form blocks <DrawerExample/></p>
            <p>This is Form blocks <DrawerExample/></p>
            <p>This is Form blocks <DrawerExample/></p>
            <p>This is Form blocks <DrawerExample/></p>
            <p>This is Form blocks <DrawerExample/></p> 
          </div>
         </div>
         <div className='videoBlock'>
          <h2>Videos</h2>
          <div className='videoSurvey'>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>

            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>

            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            

            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>

            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
      
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            <p>this is video block <DrawerExample/></p>
            
          </div>
         </div>
         <div className='imageBlock'>
           <h2>Images</h2>
           <div className='imgSurvey'>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>

            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>


            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>


            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>

            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>

            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>

            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>
            <p>this is image block <DrawerExample/></p>

           </div>
         </div>
      </div>
    </div>
  )
}

export default Survey
