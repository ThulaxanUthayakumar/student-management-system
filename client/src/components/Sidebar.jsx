import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-light p-3"
      style={{ width: "220px", minHeight: "100vh" }}
    >
      <h5>Menu</h5>

      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/students">Students</Link>
        </li>

        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;