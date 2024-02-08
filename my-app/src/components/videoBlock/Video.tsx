import React, { useEffect, useState } from 'react'
import './Video.css'
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-toastify';
import axios from 'axios';
const BaseUrl = 'http://localhost:5000';


const Video = () => {

  const [submitMes, setSubmitMes] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);

  interface BtnType {
    addVideoBtn: boolean,
    addVideoSurvey: boolean,
    createBtn: boolean
  }
  const [btn, setBtn] = useState<BtnType>(
    {
      addVideoBtn: false,
      addVideoSurvey: false,
      createBtn: true
    }
  )

  interface titleDescType {
    title: string,
    desc: string
  }
  const [titleDesc, setTitleDesc] = useState<titleDescType>({
    title: '',
    desc: '',
  });


  const [file, setFile] = useState<File | undefined>()
  const [type, setType] = useState<string>('')

  function handleSurveyToggle() {
    setBtn({ ...btn, addVideoSurvey: true, createBtn: false });
  }

  async function handelSubmit() {

    setSubmitMes(true);
    try {
      console.log("Video Submit clicked")
      const formData = new FormData();
      formData.append('file', file as File);
      formData.append('title', titleDesc.title);
      formData.append('desc', titleDesc.desc);
      formData.append('type', "Video");
      formData.append('videoType', type);
      formData.append('stage', '');

      try {
        const res = await axios.post(`${BaseUrl}/videos/upload`, formData)
        if (res.status === 200) {
          toast.success("Survey uploaded successfully!!")
        }
      } catch (error) {
        console.log(error);
        toast.error("Uploding fail")
      }


    } catch (error) {
      console.log(error);
    }
  }
  console.log('file: ',file)

  return (
    <div className='videoContainer'>
      <Navbar />
      <div className='video-container' data-testid='video-container'>

        <div className='form-video'>
          <h2>Video Survey Creation</h2>
          <input
            type='text'
            placeholder='Video title'
            value={titleDesc.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleDesc({ ...titleDesc, title: e.target.value })}
          /><br />
          <input
            type='text'
            placeholder='Description'
            value={titleDesc.desc}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleDesc({ ...titleDesc, desc: e.target.value })}
          /><br />

          {file? (
            <video data-testid='video-upload' width="320" height="240" controls>
              <source src={URL.createObjectURL(file)} type={`video/${type}`} />
            </video>
          ) : ''
          }
         
            <div>
              <label htmlFor="upload">Upload video:</label><br />
              <input
                data-testid='video-choose'
                id='upload'
                type='file'
                accept="video/*"
                name='videoFile'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSelected(true);
                  const file = e.target.files
                  if (file && file.length > 0) {
                    console.log(file[0]);
                    setFile(file[0]);
                    let arr = (file[0].name).split('.');
                    console.log(arr[1]);
                    setType(arr[1]);
                  }
                }}
              />
            </div>
          <br />
          {selected ? <p style={{ color: '#755a5a', marginBottom: '0.5rem'}}>Video selected</p> : ''}
          <button data-testid='video-submit' onClick={handelSubmit}>Submit</button>
          {submitMes ? <p style={{ color: 'green', marginTop: '1rem' }}>Please wait...</p> : ''}
        </div>

      </div>
    </div>
  )
}

export default Video
