import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Video from './VideoA';
import axios from 'axios';
const BaseUrl = 'http://localhost:5000'
jest.mock('axios');

it('Checking Video component of analysis component',()=>{
    render(<MemoryRouter><Video/></MemoryRouter>);
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