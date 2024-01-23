import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Image from './ImageA';

it('Checking Image component of analysis component',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const text = screen.getByText('User response on images!!');
    expect(text).toBeInTheDocument();
})