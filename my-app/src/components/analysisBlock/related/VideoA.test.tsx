import {act, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VideoA from './VideoA';
import axios from 'axios';
const BaseUrl = 'http://localhost:5000'
jest.mock('axios');

it('Checking Video component of analysis component',()=>{
    render(<MemoryRouter><VideoA/></MemoryRouter>);
    const text = screen.getByText('User response on video!!');
    expect(text).toBeInTheDocument();
})

it('Testing Video get api',async ()=>{
    
    const mockData = {
        data:{data:{
            title: 'Nature',
            name: 'Rutik'
        }}
    }
    axios.get = jest.fn().mockResolvedValue(mockData);
    const res = await axios.get(`${BaseUrl}/videoAnsData`);
    expect(mockData.data.data.title).toEqual(res.data.data.title);
    expect(mockData.data.data.name).toEqual(res.data.data.name);
})



describe('VideoA component', () => {

    const sampleVideoData = {
        data: {
          data: [
            {
              desc: 'Nature lover',
              title: 'title',
              type: 'video',
              name: 'Rutik khandekar',
              videoType: 'mp4',
              videoUrl: 'http://example.com/sample.mp4',
              _id: '123',
              stage: 'Answered',
              answer: [{ start: '0', end: '10' }],
            },
          ],
        },
    };
  axios.get = jest.fn().mockResolvedValue(sampleVideoData);
  

  // test('renders video and response information', async () => {
  //   render(<MemoryRouter > 
  //     <VideoA/>
  //     </MemoryRouter>);

  //   const videoElement = screen.getByRole('video');
  //   expect(videoElement).toBeInTheDocument();

  // });
});
