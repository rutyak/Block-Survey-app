import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from '../../Navbar/Navbar';
import './VideoA.css'
import './Image.css'
import { useParams } from "react-router-dom";
const BaseUrl = 'http://localhost:5000';

const Image = () => {

  const param = useParams();
  const imageId = param.imageId;
  const name = param.name;
  type ansType = {
    img1: string,
    img2: string
  }

  type imageType = {
    desc: string,
    title: string,
    type: string,
    name: string,
    imageFile: string[],
    _id: string,
    stage: string,
    answer: ansType[]
  }
  const [imageA, setImageA] = useState<imageType[]>();

  useEffect(() => {
    (async function fetch(){
      try {
        const res = await axios.get(`${BaseUrl}/imageAnsData`);
        if (res.data && res.data.data) {
          setImageA(res.data.data);
        } else {
          console.error("Invalid response structure:", res);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })()
  }, [])
 


  return (
    <div className='video-img-form-user-res'>
      <Navbar />
      <div className="video-img-from-res">
        <div>
          <h1>User response on images!!</h1>
        </div>
        <div className='video-res-container'>
          {
            imageA?.map((img: imageType, i: number) => (
              img.title === imageId && name === img.name ? (
                <div key={i} className="img-desc">
                  <div className='img-section'>
                    <img src={img.answer[0].img1} alt="img1" />
                    <img src={img.answer[0].img2} alt="img1" />
                  </div>
                  <div>
                    <p>{img.name} Like This Images</p>
                  </div>
                </div>
              ) : ''
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Image
