import Navbar from '../Navbar/Navbar'
import './Survey.css'
import DrawerExample from '../Drawer/DrawerExample'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Survey = () => {

    const videos = useSelector((state: any) => state.video.videoInfo);
    console.log("Video: ", videos);
    const images = useSelector((state: any) => state.image.imageInfo);
    console.log("Images: ", images);
    const forms = useSelector((state: any) => state.form.formInfo);
    console.log("Forms: ", forms);

  return (
    <div className='surveyContainer'>
      <Navbar />
      <div className='survey-container'>
        <div className='formBlock'>
          <h2>Forms</h2>
          <div className="fBlock">
            {forms?.map((ele: any, i: number) => (
              <div className='formSurvey'>
                <p>{ele[1].title}<DrawerExample data={ele} /> </p>
              </div>
            ))
            }
          </div>
        </div>
        <div className='videoBlock'>
          <h2>Videos</h2>
          <div className="vBlock">
            {videos?.map((ele: any, i: number) => (
              <div className='videoSurvey'>
                <p>{ele[1].title}<DrawerExample data={ele} /></p>
              </div>
            ))}
          </div>

        </div>
        <div className='imageBlock'>
          <h2>Images</h2>
          <div className="iBlock">
            {images?.map((ele: any, i: number) => (
              <div className='imgSurvey'>
                <p>{ele[1].title}<DrawerExample data={ele} /></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Survey
