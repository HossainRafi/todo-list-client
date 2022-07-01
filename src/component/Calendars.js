import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendars = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div className="flex justify-center flex-wrap min-h-screen">
      <p>
        <DayPicker
          numberOfMonths={3}
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
      </p>
    </div>
  );
};

export default Calendars;
