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

  type ansType ={
    img1: string,
    img2: string
  }

  type imageType = {
    desc: string,
    title: string,
    type: string,
    imageFile: string[],
    _id: string,
    stage: string,
    answer: ansType[]
  }
  const [image, setImage] = useState<imageType[]>();

  useEffect(() => {
    axios.get(`${BaseUrl}/imageAnsData`).then(response => setImage(response.data.data))
  }, [])
  console.log("ImageData: ", image);


  return (
    <div className='video-img-form-user-res'>
      <Navbar />
      <div className="video-img-from-res">
        <div>
          <h1>User response on images!!</h1>
        </div>
        {
          image?.map((img: imageType, i: number) => {
            if (imageId === img._id) {
              return (
                <div key={i}>
                  <div>
                    <div className="img-flex">
                      <img src={img.answer[0].img1} alt="img1" />
                      <img src={img.answer[0].img2} alt="img1" />
                    </div>
                    <div>
                      <p>User Like This Images</p>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }

      </div>
    </div>
  )
}

export default Image
