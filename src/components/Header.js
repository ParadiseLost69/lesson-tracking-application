import "./Header.css";
import { format } from "date-fns";

export default function Header() {
  const currentDate = format(new Date(), "eeee, MMMM dd, yyyy");
  return (
    <div className="header">
      <h1 className="header-title-name">Tracking</h1>
      <div className="header-section-tabs">
        <div className="header-section-tabs-list">
          <h2 className="section-nav">Calendar</h2>
          <h2 className="section-nav">Planner</h2>
        </div>
      </div>
      <h2 className="header-date">{currentDate}</h2>
    </div>
  );
}
