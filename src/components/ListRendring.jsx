import React from "react";

const ListRendring = () => {
  const tasks = ["task1", "task2", "task3", "task4"];

  return (
    <>     
       {/* currently we gave task as key but its not good practice . key is used to identify which item removed,changed or added */}
      <h3>Rendring List using map dynamically</h3>
      {tasks.map((task) => (       
        <li key={task}>{task}</li>
      ))}
    </>
  );
};

export default ListRendring;
