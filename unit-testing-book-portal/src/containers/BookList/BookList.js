import React, { Component} from 'react'
import Book from '../../components/Book/Book'

export default class BookList extends Component {
  render() {
    // Book data
    const bookInfo=[
        {
          id : 1,
          author: "Chinua Achebe",
          price: "50",
          language: "English",
          link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
          title: "Things Fall Apart",
          
        },
        {
          id : 2,
          author: "Hans Christian Andersen",
          price: "99",
          language: "Danish",
          link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
          
          title: "Fairy tales",
         
        },
        {
          id : 3,
          author: "Dante Alighieri",
          price: "145",
          language: "Italian",
          link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
          
          title: "The Divine Comedy",
          
        },
        {
          id : 4,
          author: "Alighieri Dante",
          price: "241",
          language: "Akkadian",
          link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
          
          title: "The Epic Of Gilgamesh",
          
        },
        {
          id : 5,
          author: "Christian Hans",
          price: "66",
          language: "Hebrew",
          link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
          
          title: "The Book Of Job",
          
        },
        {
          id : 6,
          author: "Achebe Chinua",
          price: "89",
          language: "Arabic",
          link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
          pages: 288,
          title: "One Thousand and One Nights",
          year: 1200
        }
    ]
    
    return (
        <>
            <h1 className="text-center p-5">Welcome to My Favorite Book Portal</h1>
            <Book info={bookInfo}/>
        </>
    )
  }
}
