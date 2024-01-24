import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ImageRes from './ImageRes';

it("Checking ImageRes component",()=>{
      render(<MemoryRouter><ImageRes/></MemoryRouter>)
      const testId = screen.getByTestId('imageres');
      expect(testId).toBeInTheDocument();
})