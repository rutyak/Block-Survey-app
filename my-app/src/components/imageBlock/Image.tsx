import React, { ChangeEvent, useState } from 'react'
import Entry from '../Entry/Entry'      
import '../videoBlock/Video.css'
import Navbar from "../Navbar/Navbar"
import './Image.css'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
const BaseUrl = 'http://localhost:5000';


const Image = () => {

    const dispatch = useDispatch();
    const [img, setImg] = useState<File[]>([])
    const [display, setDisplay] = useState<boolean>(true);

    interface BtnType{
        addVideoBtn: boolean,
        addImageSurvey: boolean,
        createBtn: boolean
    }
    const [btn, setBtn] = useState<BtnType>(
        {
            addVideoBtn: false,
            addImageSurvey: false,
            createBtn: true
        }
    )

    interface titleDesc{
        title: string,
        desc: string
    }
    const [titDesc, setTitDesc] = useState<titleDesc>({
        title: '',
        desc: ''
    });

    function handleSurveyToggle() {
        setBtn({ ...btn, addImageSurvey: true, createBtn: false });
    }

    function handleImg(e: ChangeEvent<HTMLInputElement>){
        let file = e.target.files;
    
        if(file && file.length > 0){
            console.log(file[0]);
            setImg([...img, file[0]]);
            console.log(img)
            img.length === 3? setDisplay(false): setDisplay(true);
        }
    }
    
    async function handleImgSubmit(){
        try {
          

        const formData = new FormData();
        for(let i=0; i<img.length;i++){
           formData.append('files',img[i])
        }
        formData.append('title',titDesc.title);
        formData.append('desc',titDesc.desc);
        formData.append('type','Image');
        formData.append('stage','');
        try {
           const res = await axios.post(`${BaseUrl}/images`, formData);
           if(res.status===200){
               toast.success("Survey uploaded successfully!!")
           }
        }
         catch (error) {
           console.log(error);
           toast.error("Uploding fail")
        }
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
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitDesc({...titDesc, title: e.target.value})}
                />
                <input 
                type='text' 
                placeholder='Description' 
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitDesc({...titDesc, desc: e.target.value})}
                />
                <label htmlFor="upload">Upload Image(max 4):</label>
                <div className='img-container'>
                { img.length > 0 &&
                  img.map((ele: File,index: number)=>{
                    try {
                       return (
                        <div key={index}>
                        <img className='survey-img' src={URL.createObjectURL(ele)} alt="img" />
                        <button className='img-remove-btn' onClick={()=>{
                           setImg(img.filter((_, i:number)=> i!==index))
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
