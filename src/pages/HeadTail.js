import React, { useState } from 'react';

function HeadTail() {
  const [userSelection, setuserSelection] = useState([]);
  const [currSelection, setCurrSelection] = useState('');

  const onhandleOptionChange = (e) => {
    setCurrSelection(e.target.value);
  };

  const onhandleAddOption = () => {
    console.log("called")
   
        const updatedSelections = [...userSelection];

        if (
          updatedSelections.length === 0 ||
          updatedSelections[updatedSelections.length - 1][0] !=
            currSelection
        ) {
          updatedSelections.push([currSelection]);
        } else {
           updatedSelections[updatedSelections.length - 1].push(currSelection);
        }

        setuserSelection(updatedSelections)
        setCurrSelection('');
   
  };

  return (
    <div className={"flex flex-col h-[calc(100vh-80px)] bg-red-300 items-center justify-center space-y-2"}>
    
      <h1 className="text-3xl">Head & Tail</h1>
      <label>
        Select Your Choose:
      </label>
      <div className="flex">
      
        <select className={"rounded-full"} onChange={(e)=>onhandleOptionChange(e)} value={currSelection}>
          <option value="">-- Select Value --</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
    
      <button className="bg-gray-300 px-3 rounded-full" onClick={()=>onhandleAddOption()}>Add</button>
      </div>
      <div>
        <h2>Output:</h2>
        <div style={{ display: 'flex' }}>
          {userSelection.map((col, i) => (
            <div key={i} style={{ marginRight: '10px' }}>
              {col.map((selecte, i1) => (
                <div key={i1}>{selecte}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeadTail;




