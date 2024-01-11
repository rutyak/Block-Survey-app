import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import './DrawerExample.css'

type typeObj = {
  data: any
}
export default function DrawerExample({ data }: typeObj) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<any>(null)
  console.log("data", data);
 

  return (
    <>
      <Button sx={{ width: "3rem", height: "1.5rem" }} ref={btnRef} colorScheme='teal' onClick={onOpen}>
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
          <DrawerCloseButton />

          <DrawerBody>
            <div className='drawer-main'>
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
                <video width="320" height="240" controls>
                  <source src={data.url} type={`video/${data.videotype}`}/>
                </video>
                </div>
              
            }

            { data.type === 'Image' &&
                data.imageUrls?.map((ele: any, i: number)=>(
                  <div className="image-drawer" key={i}>
                    <img src={ele} alt="img" />
                  </div>
                ))
            }

              <div className='publish-analytics-btn'>
                <Button className='publish'>Publish</Button>
                <Button className='analytics'>Analytics</Button>
              </div>
            </div>

          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}