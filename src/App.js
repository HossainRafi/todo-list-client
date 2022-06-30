import { Route, Routes } from "react-router-dom";
import Calendar from "./component/Calendar";
import Calendars from "./component/Calendars";
import Completed from "./component/Completed";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Update from "./component/Update";
import Menu from "./Menu";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/calendars" element={<Calendars />} />
        <Route path="update/:id" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
