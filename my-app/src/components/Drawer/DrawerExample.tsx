import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import React, { useState } from 'react'
import './DrawerExample.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify'
const BaseUrl = 'http://localhost:5000'

type questionType ={
  options: string[],
  question: string,
  type: string
}

type dataType ={
  videoType: any
  _id: string
  imageFile: string[]
  type: string
  title: string
  desc: string
  stage: string
  videoUrl: string | undefined
}

export default function DrawerExample({data}: {data:dataType}) {

  const [publish, setPublish] = useState<boolean>()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>(null);
  const navigate = useNavigate();
 
  async function handlePublish(id: string){
    
    setPublish(true);
    switch(data.type){
      case 'Video':
        axios.put(`${BaseUrl}/updateVideo/${id}`,{stage:'published'}).then(res => res.status===200 ? toast.success('Published!'):'');
        break;

      case 'Survey':
        axios.put(`${BaseUrl}/updateForm/${id}`,{stage:'published'}).then(res => res.status===200 ? toast.success('Published!'):'');
        break;

      case 'Image':
        axios.put(`${BaseUrl}/updateImage/${id}`,{stage:'published'}).then(res => res.status===200 ? toast.success('Published!'):'');
        break;
    }
  }

  return (
    <div data-testid='Drawer'>
      <Button data-testid="drawer-button" sx={{ width: "3rem", height: "1.5rem" }} ref={btnRef}  colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton/>

          <DrawerBody>
            <div className='drawer-main' >
              <div className='title-desc'>
                <div className='title-drawer'>
                  <h3>Title<p style={{ marginLeft: "3.2rem" }}>: {data.title}</p></h3>
                </div>
                <div className='desc-drawer'>
                  <h3>Description<p>: {data.desc}</p></h3>
                </div>
              </div>
            { data.type === 'Video' &&
                <div className="video-image">
                <video data-testid='video-tag' width="320" height="240" controls>
                  <source src={data.videoUrl} type={`video/${data.videoType}`}/>
                </video>
                </div>
              
            }

            { data.type === 'Image' &&
                data.imageFile?.map((ele: any, i: number)=>(
                  <div className="image-drawer" key={i}>
                    <img title='image-tag' src={ele} alt="img" />
                  </div>
                ))
            }

              <div className='publish-analytics-btn'>
                <div>
                  <Button className='publish' onClick={()=>handlePublish(data._id)}>Publish</Button>
                  { publish? <p style={{color:'brown', fontSize:'smaller', marginTop:'0.3rem'}}>Published!!</p>:''}
                </div>
                <Button className='analytics' onClick={()=>navigate('./analysis')}>Analytics</Button>
              </div>
            </div>

          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </div>
  )
}