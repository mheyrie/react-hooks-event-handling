import React from "react";

function ChangeItUp() {
  function handleEvent(e) {
    console.log(`${e.target.name}: ${e.target.value}`);
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={handleEvent}
        placeholder="Enter search term..."
      />

      <select name="filter" onChange={handleEvent}>
        <option value="all">Select a filter...</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default ChangeItUp;
