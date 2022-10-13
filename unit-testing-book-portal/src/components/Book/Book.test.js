import { render, screen } from '@testing-library/react';
import Book from './Book';

describe('Book Component' ,() => {

    //  book data
    const bookInfo= [{
        author: "Dante Alighieri",
        price: "145",
        language: "Italian",
        link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        title: "The Divine Comedy",
    }]
    
    // test spec to test component receiving props or not
    it('Should receive prop' , () => {
        render(<Book info={bookInfo}/>)
        const TitleEl = screen.getByTestId('bookTitle');
        expect(TitleEl).toHaveTextContent('The Divine Comedy');
    })
})