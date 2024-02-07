import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import './VideoRes.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const BaseUrl = 'http://localhost:5000'

const VideoRes = () => {

    const param = useParams();
    const videoId = param.videoId;
    const navigate = useNavigate();
    type videoAnsType = {
        name: string,
        title: string,
        answer: [{
            start: string,
            end: string
        }]
    }
    const [videoAns, setVideoAns] = useState<videoAnsType[]>()

    useEffect(() => {
        (async function fetch() {
            try {
                const res = await axios.get(`${BaseUrl}/videoAnsData`);
                console.log("viddeores: ", res.data.data);
                setVideoAns(res.data.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    // console.log('videoAns',videoAns)

    return (
        <div className='videores-container'>
            <Navbar />
            <div className='videores' data-testid='videores'>
                <div className='videores-title'>
                    <h1>Video Survey Responses !!</h1>
                </div>
                <div className='videoResBlock'>
                    {videoAns?.map((video: videoAnsType, i: number) => (
                        video.title.trim() === videoId?.trim() ? (
                            <div className='videoRes' data-testid='videoRes-tag' onClick={() => navigate(`/videores/${video.title}/${video.name}`)}>
                                <p>{video.title} <br /> Response by: {video.name}</p>
                            </div>
                        ) : ''
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VideoRes
