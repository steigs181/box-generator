import React from 'react'

function DisplayBox(props) {
    const {boxes} = props;
  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "space-between"}}>
        {
            boxes.map((aBox, idx) => (
                <div key={idx} style={{backgroundColor: aBox.color, height: aBox.size + "px", width: aBox.size + "px"}}>

                </div>
            ))
        }
    </div>
  )
}

export default DisplayBox