import { useEffect, useState } from "react";
import "react-day-picker/dist/style.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateTask, setUpdateTask] = useState({});
  const { date, task } = updateTask;
  console.log(task);
  useEffect(() => {
    fetch(`https://ancient-depths-76424.herokuapp.com/task/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateTask(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const task = e.target.task.value;

    fetch(`https://ancient-depths-76424.herokuapp.com/task/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Task Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };
  return (
    <div className="w-1/2 mx-auto min-h-screen">
      <h1 className="text-3xl text-center font-bold">Update Your Task</h1>
      <form onSubmit={handleUpdate}>
        <input
          className="text-center w-full mt-4 text-2xl font-bold"
          type="text"
          name="date"
          value={date}
          readOnly
          disabled
        />
        <br />
        <textarea
          className="w-full rounded-lg m-2 p-2 border"
          name="task"
          defaultValue={task}
          placeholder="Add a new task"
        ></textarea>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Update"
            className="btn btn-sm btn-primary font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
