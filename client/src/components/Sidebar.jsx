import {
  FaHome,
  FaUserGraduate,
  FaBook,
  FaClipboardCheck,
  FaCog
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh"
      }}
    >

      <h3 className="mb-4">
        SMS
      </h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">
          <Link
            className="nav-link text-white"
            to="/dashboard"
          >
            <FaHome /> Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            className="nav-link text-white"
            to="/students"
          >
            <FaUserGraduate /> Students
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            className="nav-link text-white"
            to="/courses"
          >
            <FaBook /> Courses
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            className="nav-link text-white"
            to="/attendance"
          >
            <FaClipboardCheck /> Attendance
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="/settings"
          >
            <FaCog /> Settings
          </Link>
        </li>

      </ul>

    </div>

  );
}

export default Sidebar;