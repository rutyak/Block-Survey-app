import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Video from './VideoA';

it('Checking Video component of analysis component',()=>{
    render(<MemoryRouter><Video/></MemoryRouter>);
    const text = screen.getByText('User response on video!!');
    expect(text).toBeInTheDocument();
})