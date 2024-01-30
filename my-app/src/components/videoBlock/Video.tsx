import React, { useEffect, useState } from 'react'
import './Video.css'
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-toastify';
import axios from 'axios';
const BaseUrl = 'http://localhost:5000';


const Video = () => {
  
  interface BtnType{
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

  interface titleDescType{
    title: string,
    desc: string
  }
  const [titleDesc, setTitleDesc] = useState<titleDescType>({
    title: '',
    desc: '',
  });


  const [file, setFile] = useState<any>()
  const [type, setType] = useState<string>('')
  const [disable, setDisable] = useState<boolean>(true);

  function handleSurveyToggle() {
    setBtn({ ...btn, addVideoSurvey: true, createBtn: false});
  }

  async function handelSubmit(){
    try {
      console.log("Video Submit clicked")
      const formData = new FormData();
      formData.append('file',file);
      formData.append('title',titleDesc.title);
      formData.append('desc',titleDesc.desc);
      formData.append('type',"Video");
      formData.append('videoType',type);
      formData.append('stage','');
      formData.append('answer',JSON.stringify([]));
     
      try {
        const res = await axios.post(`${BaseUrl}/videos/upload`,formData)
        if(res.status===200){
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


  return ( 
    <div className='videoContainer'>
      <Navbar/>
      <div className='video-container' data-testid='video-container'>
     
        <div className='form-video'>
           <h2>Video Survey Creation</h2>
           <input 
           type='text' 
           placeholder='Video title'
           value={titleDesc.title}
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitleDesc({...titleDesc, title: e.target.value})}
           /><br />
           <input 
           type='text' 
           placeholder='Description'
           value={titleDesc.desc}
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitleDesc({...titleDesc, desc: e.target.value})}
           /><br />
          
           {file? (
              <video title='video-tag' width="320" height="240" controls>
                 <source src={URL.createObjectURL(file)} type={`video/${type}`} />
              </video>
             ): ''
           }
           <label htmlFor="upload">Upload video:</label><br />
       {  disable &&
        <input 
           type='file'
           accept="video/*"
           name='videoFile'
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            const file = e.target.files
            if(file && file.length > 0){
              console.log(file[0]);
              setFile(file[0]);
              
              let arr = (file[0].name).split('.');
              console.log(arr[1]);
              setType(arr[1]);
              setDisable(false);
            }
           }}
           />}<br />
           <button onClick={handelSubmit}>Submit</button>
        </div>
      
      </div>
    </div>
  )
}

export default Video
