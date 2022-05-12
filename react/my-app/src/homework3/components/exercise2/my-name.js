import { useState } from "react";

const MyName = () => {
    const [isColored,setNameState] = useState(false);

    const toggleIsColored = () =>{
        setNameState(!isColored);
    }

    return (
        <div className="my-name-container">
            <p onClick={toggleIsColored} className={ isColored ? "favorite-color" : ""}>Noemi</p>
            {(isColored) && <p>Numele de alături este colorat</p>}
        </div>
    );
}

export default MyName;