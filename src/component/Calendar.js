import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Calendar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const task = e.target.task.value;
    const newTask = {
      date,
      task,
      completed: false,
    };
    fetch("https://secure-harbor-66857.herokuapp.com/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Added a new Task",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
          navigate("/");
        }
      });
  };
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        <div>
          <h1 className="text-3xl text-center font-bold">Add a new task</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="text-center w-full mt-4 text-2xl font-bold"
              type="text"
              name="date"
              value={format(selected, "PP")}
              readOnly
              disabled
            />
            <br />
            <textarea
              className="w-full rounded-lg m-2 p-2 border"
              name="task"
              placeholder="Add A New Task"
            ></textarea>
            <div className="flex justify-center">
              <input type="submit" value="Add" className="btn " />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
