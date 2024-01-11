import Navbar from '../Navbar/Navbar'
import './Survey.css'
import DrawerExample from '../Drawer/DrawerExample'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Survey = () => {

  const [video, setVideo] = useState<any>();
  const [image, setImage] = useState<any>();
  const [form, setForm] = useState<any>();

  useEffect( ()=>{
     axios.get('http://localhost:5000/videoData').then(response => setVideo(response.data.data))
     axios.get('http://localhost:5000/imageData').then((response)=> setImage(response.data.data))
     axios.get('http://localhost:5000/formData').then((response) => setForm(response.data.data))
  },[])

  console.log("vInfo",video);
  console.log("iInfo",image);
  console.log("fInfo",form);

   

  return (
    <div className='surveyContainer'>
      <Navbar />
      <div className='survey-container'>
        <div className='formBlock'>
          <h2>Forms</h2>
          <div className="fBlock">
            {form?.map((ele: any, i: number) => (
              <div className='formSurvey'>
                <p>{ele.title}<DrawerExample data={ele} /> </p>
              </div>
            ))
            }
          </div>
        </div>
        <div className='videoBlock'>
          <h2>Videos</h2>
          <div className="vBlock">
            {video?.map((ele: any, i: number) => (
              <div className='videoSurvey'>
                <p>{ele.title}<DrawerExample data={ele} /></p>
              </div>
            ))}
          </div>

        </div>
        <div className='imageBlock'>
          <h2>Images</h2>
          <div className="iBlock">
            {image?.map((ele: any, i: number) => (
              <div className='imgSurvey'>
                <p>{ele.title}<DrawerExample data={ele} /></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Survey