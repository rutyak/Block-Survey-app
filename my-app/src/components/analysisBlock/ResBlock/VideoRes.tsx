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
    const [videoA, setVideoA] = useState<videoAnsType[]>()

    useEffect(() => {
        axios.get(`${BaseUrl}/videoAnsData`).then(res => setVideoA(res.data.data))
    }, [])

    return (
        <div className='videores-container'>
            <Navbar />
            <div className='videores' data-testid='videores'>
                <div className='videores-title'>
                    <h1>Video Survey Resonses !!</h1>
                </div>
                <div className='videoResBlock'>
                    {videoA?.map((video: videoAnsType, i: number) => (
                        video.title.trim() === videoId?.trim() ? (
                            <div className='videoRes' onClick={() => navigate(`/videores/${video.title}/${video.name}`)}>
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
