import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import './VideoRes.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const BaseUrl = 'http://localhost:5000'

const ImageRes = () => {

  const param = useParams();
  const imageId = param.imageId;
  const navigate = useNavigate();
  type imageAnsType = {
    name: string,
    title: string,
    answer: [{
      img1: string,
      img2: string
    }]
  }
  const [imageA, setImageA] = useState<imageAnsType[]>()

  useEffect(() => {
    (async function fetch(){
      try {
        const res = await axios.get(`${BaseUrl}/imageAnsData`);
        setImageA(res.data.data) 
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  console.log('imageeAns: ',imageA)

  return (
    <div className='videores-container'>
      <Navbar />
      <div className='videores' data-testid='imageres'>
        <div className='videores-title'>
          <h1>Image Survey Responses !!</h1>
        </div>
        <div className='videoResBlock'>
          {imageA?.map((img: any, i: number) => (
            img.title.trim() === imageId?.trim() ? (
              <div className='videoRes' data-testid='imageRes-tag' onClick={() => navigate(`/imageres/${img.title}/${img.name}`)}>
                <p>{img.title}<br /> Response by: {img.name}</p>
              </div>
            ) : ''
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageRes
