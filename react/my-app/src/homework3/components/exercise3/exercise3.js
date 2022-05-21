import ColorChooser from "./color-chooser";
import { useState } from "react";
import ColoredBox from "./colored-box";

const Exercise3 = () => {
    const [colors, setColors] = useState([
        {id:0, colorCode: "#666666"}
    ]);

    const addColor = (color) => {
        const newColors = [...colors];
        newColors.push({id: newColors.length, colorCode: color});
        setColors(newColors);
    }

    const deleteColor = (colorId) =>{
        const newColors = colors.filter((color) => color.id !== colorId);
        setColors(newColors);
    }

    return (
        <div className="with-border">
            Exercitiu 3
            <ColorChooser handleClick={addColor}/>
            <div className="d-flex">
                {colors.map((color) =>  <ColoredBox key={color.id} {...color} handleDeleteColor={deleteColor}/>)}
            </div>
            { colors.length > 1 && 
            <div className="gradient" style={{
                backgroundImage: `linear-gradient(${colors.map(c => c.colorCode).join()})`
                }}>
            </div>
            }
        </div>
    );
}

export default Exercise3;