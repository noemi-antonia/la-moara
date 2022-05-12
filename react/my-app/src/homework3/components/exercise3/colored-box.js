const ColoredBox = (props) => {

    const onDeleteColorClick = () =>{
        props.handleDeleteColor(props.id);
    }

    return (
        <div className="colored-box-container d-flex">
            <div className="colored-box" style={{backgroundColor: props.colorCode}}></div>
            <button onClick={onDeleteColorClick} className="btn delete-button">delete</button>
        </div>
    );
}

export default ColoredBox;