import React, { useState } from 'react'
import Entry from '../Entry/Entry';
import './Video.css'
import Navbar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { clearSurvey, videoSurvey } from '../../Slice/videoSlice';
import { toast } from 'react-toastify';

const Video = () => {
  
  const dispatch = useDispatch();
  // const [submitBtn, setSubmitBtn] = useState<any>(false);
  const [btn, setBtn] = useState<any>(
    {
      addVideoBtn: false,
      addVideoSurvey: false,
      createBtn: true
    }
  )
  const [titleDesc, setTitleDesc] = useState<any>({
    title: '',
    desc: '',
  });
  console.log(titleDesc);

  const [videoSrc, setVideoSrc] = useState<any>(null)
  const [type, setType] = useState<any>('')
  const [disable, setDisable] = useState<any>(true);

  function handleSurveyToggle() {
    setBtn({ ...btn, addVideoSurvey: true, createBtn: false});
  }

  function handelSubmit(){
    try {
      const videoAllInfo = [
        {titleDesc: titleDesc},
        {url: URL.createObjectURL(videoSrc)}
      ]
      console.log(videoAllInfo);
      dispatch(videoSurvey(videoAllInfo));
      toast.success("Survey uploaded successfully!!")
    } catch (error) {
      toast.error("Uploding fail")
    }
  }
  
  return ( 
    <div className='videoContainer'>
      <Navbar/>
      <div className='video-container'>
      {btn.createBtn && 
      <Entry handleSurveyToggle={handleSurveyToggle} btnTitle={"Create Video Survey"}/>
      }
      { btn.addVideoSurvey &&
        <div className='form-video'>
           <h2>Video Survey Creation</h2>
           <input 
           type='text' 
           placeholder='Video title'
           value={titleDesc.title}
           onChange={(e:any)=>setTitleDesc({...titleDesc, title: e.target.value})}
           /><br />
           <input 
           type='text' 
           placeholder='Description'
           value={titleDesc.desc}
           onChange={(e:any)=>setTitleDesc({...titleDesc, desc: e.target.value})}
           /><br />
          
           <label htmlFor="upload">Upload video:</label><br />
           {videoSrc &&
              <video width="320" height="240" controls>
                 <source src={URL.createObjectURL(videoSrc)} type={`video/${type}`} />
              </video>
           }
       {  disable &&
        <input 
           type='file'
           accept="video/*"
           onChange={(e:any)=>{
            const files = e.target.files
            if(files && files.length > 0){
              console.log(files[0]);
              setVideoSrc(files[0]);
              let arr = (files[0].name).split('.');
              console.log(arr[1]);
              setType(arr[1]);
              setDisable(false);
            }
           }}
           />}<br />
           <button onClick={handelSubmit}>Submit</button>
        </div>
      }
      </div>
    </div>
  )
}

export default Video
