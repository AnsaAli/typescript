import React, { useState } from "react";
import TaskList from "./TaskList";
import Swal from "sweetalert2";

const Form = () => {
  const [input, setInput] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const handleList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === "") return;
    setList([...list, input]);
    setInput("");
  };

  const handleDelete = (index: number) => {
    Swal.fire({
      title: "Are sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setList(list.filter((_, i) => i !== index));

        // Show success message
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
          timer: 1500, // Auto close alert after 1.5 seconds
          showConfirmButton: false,
        });
      }
    });
  };
  
  const handleUpdate = (index : number)=>{
      setList(list.filter((_,i)=>i === index))
  }
  return (
    <>
      <div className=" flex justify-center mt-10 ">
        <form className="flex w-1/4" onSubmit={handleList}>
          <input
            type="text"
            placeholder="Add your task"
            className="w-full p-2 rounded-lg "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="border border-red-400 p-2 rounded-lg ml-2 shadow-lg text-red-400 hover:bg-red-500 hover:text-white"
          >
            Add
          </button>
        </form>
      </div>

      <TaskList tasks={list} onDelete={handleDelete} onEdit = {handleUpdate}/>
    </>
  );
};

export default Form;
