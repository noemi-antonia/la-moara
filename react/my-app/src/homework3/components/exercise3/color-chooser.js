import { useState } from "react";

const ColorChooser = (props) => {
    const [color, setColor] = useState("#000000");

    const handleClick = () => {
        props.handleClick(color);
    }

    return (
    <div className="color-chooser-container d-flex">
        <input type="color" value={color} onChange={(evt) => setColor(evt.target.value)}></input>
        <button className="btn color-add-btn" onClick={handleClick}>Add</button>
    </div>
    );
}

export default ColorChooser;