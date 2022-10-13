import React, { useState } from 'react'

const AddButton = ({clickFn}) => {
const [isAdded , setIsAdded] = useState(false)

const handleAdd = () => {
    setIsAdded(!isAdded)
}

  return (
    <button className="btn btn-success btn-sm"  data-testid="addBtn" onClick={() => handleAdd()}>
        {isAdded ? 'Remove from Reading List' : 'Add to Reading List'}
    </button>
  )
}

export default AddButton