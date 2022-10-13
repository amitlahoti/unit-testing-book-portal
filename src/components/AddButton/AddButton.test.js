import { fireEvent, render, screen } from "@testing-library/react";
import AddButton from './AddButton';

describe('Add Button Component' , () => {

    // test spec to test call handleAdd button
    it('will call handleAdd' , () => {
        render (<AddButton/>);
        const addBtnEl = screen.getByTestId('addBtn');
        fireEvent.click(addBtnEl);
        expect(addBtnEl.textContent).toBe('Remove from Reading List')

        // call 2nd time
        fireEvent.click(addBtnEl);
        expect(addBtnEl.textContent).toBe('Add to Reading List')
    })

})