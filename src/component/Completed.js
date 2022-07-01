import { useEffect, useState } from "react";

const Completed = () => {
  const [completedTask, setCompletedTask] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/completed")
      .then((res) => res.json())
      .then((data) => setCompletedTask(data));
  }, [completedTask]);
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-2xl font-bold">Completed Task</h1>
      <div className="overflow-x-auto">
        <table className="table w-full my-6">
          <thead>
            <tr>
              <th>Complete</th>
              <th>Date</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {completedTask.map((tasks, index) => {
              const { _id, date, task } = tasks;
              return (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>{date}</td>
                  <td>{task}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Completed;
