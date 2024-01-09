import React, { useState } from 'react'
import Entry from '../Entry/Entry'      
import '../videoBlock/Video.css'
import Navbar from "../Navbar/Navbar"
import './Image.css'
import { useDispatch } from 'react-redux'
import { clearImageSurvey, imageSurvey } from '../../Slice/imageSlice'
import axios from 'axios'
import { toast } from 'react-toastify'


const Image = () => {

    const dispatch = useDispatch();
    const [img, setImg] = useState<any>([])
    const [display, setDisplay] = useState<boolean>(true);

    const [btn, setBtn] = useState<any>(
        {
            addVideoBtn: false,
            addImageSurvey: false,
            createBtn: true
        }
    )

    const [titDesc, setTitDesc] = useState<any>({
        title: '',
        desc: ''
    });

    function handleSurveyToggle() {
        setBtn({ ...btn, addImageSurvey: true, createBtn: false });
    }

    function handleImg(e:any){
        setImg([...img, ""]);
        let file = e.target.files;
        // console.log(file);
        if(file && file.length > 0){
            console.log(file[0]);
            setImg([...img, URL.createObjectURL(file[0])]);
            console.log(img)
            img.length === 3? setDisplay(false): setDisplay(true);
        }
    }
    
    async function handleImgSubmit(){
         try {
            console.log("HandleSubmit Click");
         const imageInfo = [
            {type: 'Image'},
            {title: titDesc.title},
            {desc: titDesc.desc},
            {imageUrls: img}
         ]

         const formData = new FormData();
         formData.append('files',img);
         formData.append('title',titDesc.title);
         formData.append('desc',titDesc.desc);
         formData.append('type','Image');
         
         try {
            const res = await axios.post('http://localhost:5000/images', formData);
            if(res.status===200){
                console.log("imgSurveyData: ",res.data);
                toast.success("Survey uploaded successfully!!")
            }
         }
          catch (error) {
            console.log(error);
            toast.error("Uploding fail")
         }
         
         dispatch(imageSurvey(imageInfo))
        //  dispatch(clearImageSurvey())
         } 
         catch (error) {
            console.log(error);
         }
    }
    
    return  (
        <div className='videoContainer'>
            <Navbar/>
            <div className='video-container'>
            {btn.createBtn &&
                <Entry handleSurveyToggle={handleSurveyToggle} btnTitle={"Create Image Survey"} />
            }

            { btn.addImageSurvey &&
            <div className='form-video'>
                <h2>Image Survey Creation</h2>
                <input type='text' 
                placeholder='Image title' 
                onChange={(e:any)=>setTitDesc({...titDesc, title: e.target.value})}
                />
                <input 
                type='text' 
                placeholder='Description' 
                onChange={(e:any)=>setTitDesc({...titDesc, desc: e.target.value})}
                />
                <label htmlFor="upload">Upload Image(max 4):</label>
                <div className='img-container'>
                { img.length > 0 &&
                  img.map((ele: any,index: any)=>{
                    try {
                       return (
                        <div key={index}>
                        <img className='survey-img' src={ele} alt="img" />
                        <button className='img-remove-btn' onClick={()=>{
                           setImg(img.filter((ele:any, i:any)=> i!==index))
                           setDisplay(true)
                        }}
                        >Remove</button>
                        </div>
                        )
                    } catch (error) {
                        console.log(error)
                    }
                  })
                 }
                 </div>
                { display &&
                <input 
                type='file'
                accept='image/*' 
                onChange={handleImg}
                />}
                <div>
                   <button onClick={handleImgSubmit}>Submit</button>
                </div>
            </div>
            }
            </div>
        </div>
    )
}

export default Image
