import React, { useState } from 'react'
import Entry from '../Entry/Entry'      
import '../videoBlock/Video.css'
import Navbar from "../Navbar/Navbar"
import './Image.css'
import { useDispatch } from 'react-redux'
import { imageSurvey } from '../../Slice/imageSlice'


const Image = () => {

    const dispatch = useDispatch();
    const [img, setImg] = useState<any>([''])
    const [display, setDisplay] = useState<any>(true);

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
    
    function handleImgSubmit(){
         console.log("HandleSubmit Click");
         const imageInfo = [
            {titleDesc: titDesc},
            {imageUrls: img}
         ]

         dispatch(imageSurvey(imageInfo))
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
