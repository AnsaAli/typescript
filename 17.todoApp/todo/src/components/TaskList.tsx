import React from "react";

interface TaskListProps {
  tasks: string[];
  onDelete : (indesx : number)=>void;
  onUpdate :(index : number) =>void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete , onUpdate}) => {


  return (
    <div className="grid place-items-center mt-32  m-40 p-10 rounded-lg">
      <div>
        <ul>
          {tasks.length > 0 ? (tasks.map((task, index) => (
            <div  className=" flex ">
             <li className="border border-teal-300 p-2 text-white rounded-lg w-72 mb-2" key={index}>
              {task}
            </li>
            
              <button className='border border-green-500 p-2 rounded-md ml-5 mb-2 text-green-500' onClick={()=>onUpdate(index)}>Edit</button>
              <button className=' border border-red-500 p-2 rounded-md ml-5 mb-2 text-red-500' onClick={()=>onDelete(index)} >Delete</button>
            </div>
           
          ))) : <p className="text-white">No task assigned!</p> }
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
