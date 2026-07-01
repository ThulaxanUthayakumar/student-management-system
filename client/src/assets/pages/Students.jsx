import { useEffect, useState } from "react";
import API from "../api/api";

function Students() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      const response = await API.get("/students");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddStudent = async () => {
    if (!name || !email || !course) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/students", {
        name,
        email,
        course,
      });

      getStudents();

      setName("");
      setEmail("");
      setCourse("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">
        Student Management
      </h2>

      <div className="card p-4 mb-4">

        <input
          className="form-control mb-3"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={handleAddStudent}
        >
          Add Student
        </button>

      </div>

      <table className="table table-bordered">

        <thead className="table-dark">

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student._id}>

              <td>{student.name}</td>

              <td>{student.email}</td>

              <td>{student.course}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Students;