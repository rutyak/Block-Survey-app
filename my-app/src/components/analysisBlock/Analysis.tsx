import Navbar from '../Navbar/Navbar'
import './Analysis.css'
import searchIcon from '../../Asset/icons8-search-50.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const BaseUrl = 'http://localhost:5000'
const Analysis = () => {

  type questionType ={
    options: string[],
    question: string,
    type: string
  }

  type formType={
    desc: string,
    title: string,
    type: string,
    _id: string,
    stage: string,
    questions: questionType
  }

  type videoType={
    desc: string,
    title: string,
    type: string,
    videoType: string,
    videoUrl: string,
    _id: string,
    stage: string,
  }

  type imageType={
    desc: string,
    title: string,
    type: string,
    imageFile: string[],
    _id: string,
    stage: string,
  }

  const navigate = useNavigate();
  const [search, setSearch] = useState<any>('');
  const [videoA, setVideoA] = useState<videoType[]>();
  const [imageA, setImageA] = useState<imageType[]>();
  const [formA, setFormA] = useState<formType[]>();

  const [filteredVideo, setFitleredVideo] = useState<videoType[]>();
  const [filteredImage, setFilteredImage] = useState<imageType[]>();
  const [filteredForm, setfilteredForm] = useState<formType[]>();


  useEffect( ()=>{
     axios.get(`${BaseUrl}/videoAnsData`).then(response => setVideoA(response.data.data))
     axios.get(`${BaseUrl}/imageAnsData`).then((response)=> setImageA(response.data.data))
     axios.get(`${BaseUrl}/formAnsData`).then((response) => setFormA(response.data.data))
  },[])

  console.log("vAns",videoA);
  console.log("iAns",imageA);
  console.log("fAns",formA);
  
  function handleSearchBlock(e: any){
    setSearch(e.target.value)
    
    let filteredF = formA?.filter((form: formType, i:number)=>(
      form.title.toLowerCase().includes(search.toLowerCase())
    ))
    let filteredV = videoA?.filter((video: videoType, i:number)=>(
      video.title.toLowerCase().includes(search.toLowerCase())
    ))
    let filteredI = imageA?.filter((image: imageType, i:number)=>(
      image.title.toLowerCase().includes(search.toLowerCase())
    ))

    setfilteredForm(filteredF);
    setFilteredImage(filteredI);
    setFitleredVideo(filteredV)
  }





  return (
    <div className='analysisContainer'>
      <Navbar/>
      <div className='analysis-container'>
        <div className='search-part'>
          <input type='text'
           className='search-block' 
           placeholder='Search block survey...'
           value={search}
           onChange={handleSearchBlock}
           />
          <img src={searchIcon} alt="icon" />
        </div>
        <div className='blocks'>
        <div className='formBlock'>
          <div className="fBlock">
            { (search? filteredForm: formA)?.map((form: any, i: number) => (
              form.answer.length !== 0 ? (
              <div className='formSurvey'  onClick={()=>navigate(`/form/${form.title}`)}>
                <p>{form.title} <br /> Responsed by: {form.name}</p>
              </div>
              ):''
            ))
            }
          </div>
        </div>
        <div className='videoBlock'>
          <div className="vBlock">
            {(search? filteredVideo: videoA)?.map((video: any, i: number) => (
              video.answer.length !== 0 ? (
              <div className='videoSurvey'  onClick={()=>navigate(`/video/${video.title}`)}>
                <p>{video.title} <br /> Responsed by: {video.name}</p>

              </div>
              ):''
            ))}
          </div>

        </div>
        <div className='imageBlock'>
          <div className="iBlock">
            {(search? filteredImage: imageA)?.map((img: any, i: number) => (
              img.answer.length !== 0 ? (
                <div className='imgSurvey'  onClick={()=>navigate(`/image/${img.title}`)}>
                <p>{img.title} <br /> Responsed by: {img.name}</p>
              </div>
              ): ''
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Analysis
