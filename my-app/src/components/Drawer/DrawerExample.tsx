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
import { error } from 'console'

type typeObj = {
  data: any
}
export default function DrawerExample({ data }: typeObj) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<any>(null)
  console.log("data", data);
  // data[0].title === 'second video'? console.log("type", data[3].videotype): '';

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
                  <h3>Title<p style={{ marginLeft: "3.2rem" }}>: {data[0].title}</p></h3>
                </div>
                <div className='desc-drawer'>
                  <h3>Description<p>: {data[1].desc}</p></h3>
                </div>
              </div>
            {/* { data[0].title === 'second video' &&
              <div className="video-image">
                <video width="320" height="240" controls>
                  <source src={URL.createObjectURL(data[2].url)} type="video/mp4"/>
                </video>
              </div>
            } */}

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