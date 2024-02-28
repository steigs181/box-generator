import React from "react";
import { useState } from "react";

function BoxObject(props) {
    const { boxes, setBoxes } = props;
    const [ box, setBox ] = useState({
        color: "",
        size: ""
    });

    const handleValues = (e) => {
        setBox({...box, [e.target.name]: e.target.value});
    }

    const newBox = (e) => {
        e.preventDefault();
        setBoxes([...boxes, box])

        setBox({
            color: "",
            size: ""
        });
    }

    return (
        <form onSubmit={newBox}>
            <div>
                <h1>Create Your Box!</h1>
                <div>
                    <label>Color: </label>
                    <input type="text" name="color" value={box.color} onChange={handleValues}/>
                </div>
                <div>
                    <label>Size: </label>
                    <input type="text" name="size" value={box.size} onChange={handleValues} />
                </div>
                <button>Add</button>
            </div>
        </form>
    )
}
export default BoxObject;