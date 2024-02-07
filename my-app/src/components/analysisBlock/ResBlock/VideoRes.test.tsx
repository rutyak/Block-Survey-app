import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import VideoRes from './VideoRes';
import axios from 'axios';
import { mockComponent } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import VideoA from '../related/VideoA';
const BaseUrl = 'http://localhost:5000';
jest.mock('axios')

it("Checking VideoRes component", () => {
    render(<MemoryRouter><VideoRes /></MemoryRouter>)
    const testId = screen.getByTestId('videores');
    expect(testId).toBeInTheDocument();
    expect(screen.getByText(/Video Survey Responses !!/i)).toBeInTheDocument();
})

it('Testing VideoAns get api', async () => {

    const mockResponse = {
        data: {
            data: {
                title: 'Nature',
                name: 'rutik'
            }
        }
    }
    axios.get = jest.fn().mockImplementation(() => {
        console.log("Calling mock");
        return Promise.resolve(mockResponse);
    });

    const res = await axios.get(`${BaseUrl}/videoAnsData`);
    expect(mockResponse.data.data.name).toEqual(res.data.data.name);
    expect(mockResponse.data.data.title).toEqual(res.data.data.title);
})

describe('VideoRes testing', () => {

    it('Video title and responsed by',async()=>{
        const videoData = {
            data: [{
             answer: [{ start: '12', end: '15', _id: '65c32e976b9ae4853445c671' }],
             name: "Ruti Khandekar",
             title: "Nature Lover",
             videoType: "mp4",
             videoUrl: "http://res.cloudinary.com/daguvaxyh/video/upload/v1706851244/Videos/ke9gqizgh01vfv7ymqyj.mp4",
             _id: "65c32e976b9ae4853445c670"
         }]
         };
     
         axios.get = jest.fn().mockResolvedValue({data: videoData})

        const videoId = 'Nature Lover';
        render(<MemoryRouter initialEntries={[`/video/${videoId}`]}>
            <Routes>
                <Route path='/video/:videoId' element={<VideoRes/>}/>
            </Routes>
        </MemoryRouter>)

        await waitFor(()=>{
             const title = screen.getAllByTestId('videoRes-tag');
             expect(title[0]).toBeInTheDocument();
        })
    })

    it('videoRes onClick testing',async()=>{
        const user = userEvent.setup();
        const videoData = {
            data: [{
                answer: [{ start: '12', end: '15', _id: '65c32e976b9ae4853445c671' }],
                name: "Ruti Khandekar",
                title: "Nature Lover",
                videoType: "mp4",
                videoUrl: "http://res.cloudinary.com/daguvaxyh/video/upload/v1706851244/Videos/ke9gqizgh01vfv7ymqyj.mp4",
                _id: "65c32e976b9ae4853445c670"
            }]
        };
       
          axios.get = jest.fn().mockResolvedValue({data: videoData})
          const videoId = 'Nature Lover';
          render(<MemoryRouter initialEntries={[`/video/${videoId}`]}>
              <Routes>
                  <Route path='/video/:videoId' element={<VideoRes/>}/>
              </Routes>
          </MemoryRouter>)
  
          await waitFor(async()=>{
              const name = 'Ruti Khandekar';
              const btn = screen.getAllByTestId(/videoRes-tag/i);
              await user.click(btn[0]);
              render(<MemoryRouter initialEntries={[`/videores/${videoId}/${name}`]}>
                  <Routes>
                  <Route path='/videores/:videoId/:name' element={<VideoA/>}/>
                  </Routes>
              </MemoryRouter>)
  
              expect(await screen.findByText(/User response on video!!/i)).toBeInTheDocument()
          })
          
     })
})


