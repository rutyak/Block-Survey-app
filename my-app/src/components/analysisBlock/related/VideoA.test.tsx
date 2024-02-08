import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import VideoA from './VideoA';
import axios from 'axios';
const BaseUrl = 'http://localhost:5000'
jest.mock('axios');

it('Checking Video component of analysis component', () => {
  render(<MemoryRouter><VideoA/></MemoryRouter>);
  const text = screen.getByText('User response on video!!');
  expect(text).toBeInTheDocument();
})

it('Testing Video get api', async () => {

  const mockData = {
    data: {
      data: {
        title: 'Nature',
        name: 'Rutik'
      }
    }
  }
  axios.get = jest.fn().mockResolvedValue(mockData);
  const res = await axios.get(`${BaseUrl}/videoAnsData`);
  expect(mockData.data.data.title).toEqual(res.data.data.title);
  expect(mockData.data.data.name).toEqual(res.data.data.name);
})



describe('VideoA component', () => {

  it('Video tag and text testing',async()=>{

    const videoData = {
      data: [{
        _id: "65c32e976b9ae4853445c670",
        name: "Ruti Khandekar",
        title: "Nature Lover",
        answer: [
            {
                "start": "12",
                "end": "15",
                "_id": "65c32e976b9ae4853445c671"
            }
        ],
        videoUrl: "http://res.cloudinary.com/daguvaxyh/video/upload/v1706851244/Videos/ke9gqizgh01vfv7ymqyj.mp4",
        videoType: "mp4",
    }]
    };
    axios.get = jest.fn().mockResolvedValue({data: videoData});
    
    const videoId = 'Nature Lover';
    const name = 'Ruti Khandekar';
    render(<MemoryRouter initialEntries={[`/videores/${videoId}/${name}`]}>
      <Routes>
       <Route path='/videores/:videoId/:name' element={<VideoA/>}/>
      </Routes>
    </MemoryRouter>)

    await waitFor(()=>{
        expect(screen.getByTestId('user-video-res')).toBeInTheDocument();
        expect(screen.getByText(/ruti khandekar like the video from 12s to 15s/i)).toBeInTheDocument();
    })
  })
});
function querySelector(arg0: string): any {
  throw new Error('Function not implemented.');
}

