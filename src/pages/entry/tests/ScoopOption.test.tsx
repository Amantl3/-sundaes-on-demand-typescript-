 import { render,screen} from '@testing-library/react';
 import {expect} from 'vitest';
import userEvent from '@testing-library/user-event';
import ScoopOptions from '../ScoopOptions';
 
test ("indicate if scoop count is non-int or out of range", async () => {
      const user = userEvent.setup();
      render(<ScoopOptions />);
     const vanillaInput = screen.getByRole('spinbutton', { name: 'Vanilla' });
     await user.clear(vanillaInput);
     await user.type(vanillaInput, '-1');
     expect(vanillaInput).toHaveClass('is-invalid');
});


 
      
