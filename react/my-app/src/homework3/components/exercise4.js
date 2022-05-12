import { useEffect } from "react";
import { useState } from "react";

const Exercise4 = () => {

    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoaded(true);
          }, 5000);
          return () => clearTimeout(timer);
    },[]);
    
    return (
        <div className="with-border">
            Exercitiu 4
            {loaded ? <p>Finished loading</p> : <p>Loading, please wait</p>}
        </div>
    );
};

export default Exercise4;