import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VideoRes from './VideoRes';

it("Checking VideoRes component",()=>{
      render(<MemoryRouter><VideoRes/></MemoryRouter>)
      const testId = screen.getByTestId('videores');
      expect(testId).toBeInTheDocument();
})