import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header-title-name">Tracking</h1>
      <div className="header-section-tabs">
        <ul className="header-section-tabs-list">
          <li>Calendar</li>
          <li>Planner</li>
        </ul>
      </div>
      <h2 className="header-date">Date</h2>
    </div>
  );
}
