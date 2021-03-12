import React from 'react'

const List = () => {
    
    const notes = ["Osta leipää", "Osta kahvia", "Vie roskat"]
    
    return (
        notes.map(note => <div className="notes">{note}</div>)
    )
}

export default List