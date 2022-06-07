import { useState, useEffect } from "react";

const Board = ({ board, selectTheCell, selectedCell }) => {
  const [selCell, setSelCell] = useState("");

  const selectCell = (e) => {
    if(e.target.className == 'editable-cell'){
      console.log(e.target.id);
      selectTheCell(e.target.id);
    }
  }

  useEffect(() => {
    setSelCell(selectedCell);
  }, [selectedCell]);

  if(!board) return <p>Waiting for data</p>

  return (
      <div className="board">
          {board.map((items, index) => {
            return (
              <div className="row" key={index}>
                {items.map((subItems, sIndex)=> {
                    return <div
                    className ={`${subItems ? "" : "editable-"}cell${(selCell === '' + index + sIndex) ? " selected-cell" : ""}`} 
                    style={{backgroundColor: subItems._color}}
                    id={'' + index + sIndex} /* id="rowcol" */  
                    key={sIndex} 
                    onClick={selectCell}> {subItems._text} </div>;
                })}
              </div>
            );
          })}
      </div>
  );
};

export default Board;
