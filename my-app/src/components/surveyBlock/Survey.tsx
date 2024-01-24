import Navbar from '../Navbar/Navbar'
import './Survey.css'
import DrawerExample from '../Drawer/DrawerExample'
import { useEffect, useState } from 'react'
import axios from 'axios'
const BaseUrl = 'http://localhost:5000';

const Survey = () => {

  type questionType = {
    options: string[],
    question: string,
    type: string
  }

  type formType = {
    desc: string,
    title: string,
    type: string,
    _id: string,
    stage: string,
    questions: questionType
  }

  type videoType = {
    desc: string,
    title: string,
    type: string,
    videoType: string,
    videoUrl: string,
    _id: string,
    stage: string,
  }

  type imageType = {
    desc: string,
    title: string,
    type: string,
    imageFile: string[],
    _id: string,
    stage: string,
  }


  const [video, setVideo] = useState<videoType[]>();
  const [image, setImage] = useState<imageType[]>();
  const [form, setForm] = useState<formType[]>();

  useEffect(() => {
    (async function fetch() {
      try {
        const video = await axios.get(`${BaseUrl}/videoData`);
        console.log("viddeo: ", video.data.data)
        setVideo(video.data.data);
        const res1 = await axios.get(`${BaseUrl}/imageData`);
        setImage(res1.data.data);
        const res2 = await axios.get(`${BaseUrl}/formData`);
        setForm(res2.data.data);
      } catch (error) {
          console.log(error)
      }
    })()
  }, [])

  console.log("vInfo", video);
  console.log("iInfo", image);
  console.log("fInfo", form);



  return (
    <div className='surveyContainer'>
      <Navbar />
      <div className='survey-container' data-testid='survey-container'>
        <div className='formBlock'>
          <h2>Forms</h2>
          <div className="fBlock">
            {form?.map((form: any, i: number) => (
              <div className='formSurvey' key={i}>
                <p>{form.title}<DrawerExample data={form} /> </p>
              </div>
            ))
            }
          </div>
        </div>
        <div className='videoBlock'>
          <h2>Videos</h2>
          <div className="vBlock">
            {video?.map((video: any, i: number) => (
              <div className='videoSurvey' key={i}>
                <p>{video.title}<DrawerExample data={video} /></p>
              </div>
            ))}
          </div>

        </div>
        <div className='imageBlock'>
          <h2>Images</h2>
          <div className="iBlock">
            {image?.map((img: any, i: number) => (
              <div className='imgSurvey' key={i}>
                <p>{img.title}<DrawerExample data={img} /></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Survey