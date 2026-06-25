import { useState } from "react";

function Students() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [students, setStudents] = useState([]);

  const handleAddStudent = () => {
    if (!name || !email || !course) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      email,
      course,
    };

    setStudents([...students, newStudent]);

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <div className="container mt-4">
      <h2>Students Management</h2>

      <div className="card p-3 mb-4">
        <input
          className="form-control mb-2"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-2"
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
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
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