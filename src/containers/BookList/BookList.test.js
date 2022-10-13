import { render, screen } from '@testing-library/react';
import BookList  from './BookList'
import renderer from 'react-test-renderer';

describe('Book List Component' , () => {
    
    // Test spec to test element should have matching text
    it('Should have Welcome text' , () => {
        render(<BookList/>);
        
        const welcomeEl = screen.getByText(`Welcome to My Favorite Book Portal`);

        expect(welcomeEl).toBeInTheDocument();

    })


    // Snapshot testing
    it('Should haveBookList Component Snapshot' , ()=>{
        const snapshotJSON = renderer.create(<BookList/>).toJSON();
        expect(snapshotJSON).toMatchSnapshot();
    })

})
