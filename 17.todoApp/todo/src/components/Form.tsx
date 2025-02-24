import React, { useState } from "react";
import TaskList from "./TaskList";
import Swal from "sweetalert2";

const Form = () => {
  const [input, setInput] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [editing, setEditing] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [doneTask,setDoneTask]= useState<boolean[]>([])

  const handleList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;

    if (list.includes(input)) {
      setMessage("This activity is already present");
      setInput("");
    }

    if (editing) {
      const updatedTask = list.map((newtask, index) =>
        index === currentIndex ? input : newtask
      );
      setList(updatedTask);
      setEditing(false);
      setCurrentIndex(null);
      setInput("");
      setMessage("");
      setDoneTask(doneTask.map((done,indx)=>indx === currentIndex ? false : done))
    } else {
      if (!list.includes(input)) {
        setList([...list, input]);
        setInput("");
        setMessage("");
        setDoneTask([...doneTask,false])
      }
    }
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

        setDoneTask(doneTask.filter((_,i)=> i!== index))
      }
    });
  };

  const handleUpdate = (index: number) => {
    setEditing(true);
    setCurrentIndex(index);
    setInput(list[index]);
  };

  const handleDone = (index : number)=>{
    Swal.fire({
      title: "Done!",
      text: "Your have completed the task.",
      icon: "success",
      timer: 1500, // Auto close alert after 1.5 seconds
      showConfirmButton: false,
    })
    setDoneTask(doneTask.map((done,indx)=> (index === indx ? true : done)))
  }
  return (
    <>
      <div className="text-center mt-10">
        <div className=" flex justify-center  ">
          <form className="flex w-1/4" onSubmit={handleList}>
            <input
              type="text"
              placeholder={editing ? "Edit" : "Add your task"}
              className="w-full p-2 rounded-lg "
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="border border-red-400 p-2 rounded-lg ml-2 shadow-lg text-red-400 hover:bg-red-500 hover:text-white"
            >
              {editing ? "Update" : "Add"}
            </button>
          </form>
        </div>
        {message ? <p className="text-red-600">{message}</p> : " "}
      </div>

      <TaskList tasks={list} onDelete={handleDelete} onUpdate={handleUpdate} onMark= {handleDone} doneTask= {doneTask}/>
    </>
  );
};

export default Form;
