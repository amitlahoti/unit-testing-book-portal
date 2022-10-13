import React from 'react'
import AddButton from '../AddButton/AddButton';


const Book = ({info}) => {
  return (
    <>
      <div className='container'>
        <div className="row">
          
            {info.map((book , i)=>(
              <div className="col-sm-4" key={i}>
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4" data-testid="bookTitle">{book?.title}</h5>
                    
                    <div className='d-flex justify-content-between mb-4'>
                      <small>By : {book?.author}</small>
                      <span className="badge badge-success">$ {book?.price}</span>
                    </div>

                    <div className='d-flex justify-content-between'>
                      
                      <AddButton/>
                      
                      <a href={book?.link}  rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </>
   
  )
}

export default Book