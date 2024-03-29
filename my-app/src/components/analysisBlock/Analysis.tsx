import Navbar from '../Navbar/Navbar'
import './Analysis.css'
import searchIcon from '../../Asset/icons8-search-50.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const BaseUrl = 'http://localhost:5000'
const Analysis = () => {

  type questionType = {
    options: string[],
    question: string,
    type: string
  }

  type formType = {
    name: string,
    desc: string,
    title: string,
    type: string,
    _id: string,
    stage: string,
    questions: questionType
  }

  type videoType = {
    name: string,
    desc: string,
    title: string,
    type: string,
    videoType: string,
    videoUrl: string,
    _id: string,
    stage: string,
  }

  type imageType = {
    name: string,
    desc: string,
    title: string,
    type: string,
    imageFile: string[],
    _id: string,
    stage: string,
  }

  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');
  const [video, setVideo] = useState<videoType[]>();
  const [image, setImage] = useState<imageType[]>();
  const [form, setForm] = useState<formType[]>();

  const [filteredVideo, setFitleredVideo] = useState<videoType[]>();
  const [filteredImage, setFilteredImage] = useState<imageType[]>();
  const [filteredForm, setfilteredForm] = useState<formType[]>();


  useEffect(() => {
    (async function fetch(){
      try {
        const video = await axios.get(`${BaseUrl}/videoData`);
        setVideo(video.data.data);
        const image = await axios.get(`${BaseUrl}/imageData`);
        setImage(image.data.data);
        const form = await axios.get(`${BaseUrl}/formData`);
        setForm(form.data.data);
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  console.log("vAns", video);
  console.log("iAns", image);
  console.log("fAns", form);

  function handleSearchBlock(e: any) {
    setSearch(e.target.value)

    let filteredF = form?.filter((form: formType, i: number) => (
      form.title.toLowerCase().includes(search.toLowerCase())
    ))
    let filteredV = video?.filter((video: videoType, i: number) => (
      video.title.toLowerCase().includes(search.toLowerCase())
    ))
    let filteredI = image?.filter((image: imageType, i: number) => (
      image.title.toLowerCase().includes(search.toLowerCase())
    ))

    setfilteredForm(filteredF);
    setFilteredImage(filteredI);
    setFitleredVideo(filteredV)
  }


  return (
    <div className='analysisContainer'>
      <Navbar />
      <div className='analysis-container' data-testid='analysis-container'>
        <div className='search-part'>
          <input type='text'
            name='name'
            className='search-block'
            placeholder='Search block survey...'
            value={search}
            onChange={handleSearchBlock}
          />
          <img src={searchIcon} alt="icon" />
        </div>
        <div className='blocks'>
          <div className='formBlock'>
            <div className="fBlock" data-testid='fBlock'>
              {(search? filteredForm : form)?.map((form: any, i: number) => (
                form.status === 'Answered' ?(
                <div data-testid={`form-${i}`} className='formSurvey' onClick={() => navigate(`/form/${form.title}`)}>
                  <p>{form.title}</p>
                </div>
                ) : ''
              ))
              }
            </div>
          </div>
          <div className='videoBlock'>
            <div className="vBlock" data-testid='vBlock'>
              {(search ? filteredVideo : video)?.map((video: any, i: number) => (
                video.status === 'Answered' ?(
                <div data-testid={`video-${i}`} className='videoSurvey' onClick={() => navigate(`/video/${video.title}`)}>
                  <p>{video.title}</p>
                </div>
                ) : ''
              ))}
            </div>

          </div>
          <div className='imageBlock'>
            <div className="iBlock" data-testid='iBlock'>
              {(search ? filteredImage : image)?.map((img: any, i: number) => (
                img.status === 'Answered' ?(
                <div data-testid={`image-${i}`} className='imgSurvey' onClick={() => navigate(`/image/${img.title}`)}>
                  <p>{img.title}</p>
                </div>
                ) : ''
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analysis
