import { useEffect, useState } from "react";
import API from "../api/api";

function Students() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const response = await API.get("/students");
    setStudents(response.data);
  };

  const handleSubmit = async () => {
    if (!name || !email || !course) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      await API.put(`/students/${editingId}`, {
        name,
        email,
        course,
      });

      setEditingId(null);
    } else {
      await API.post("/students", {
        name,
        email,
        course,
      });
    }

    setName("");
    setEmail("");
    setCourse("");

    getStudents();
  };

  const editStudent = (student) => {
    setEditingId(student._id);

    setName(student.name);
    setEmail(student.email);
    setCourse(student.course);
  };

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);

    getStudents();
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
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Course"
          value={course}
          onChange={(e)=>setCourse(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          {editingId ? "Update Student" : "Add Student"}
        </button>

      </div>

      <table className="table table-bordered">

        <thead className="table-dark">

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student)=>(
            <tr key={student._id}>

              <td>{student.name}</td>

              <td>{student.email}</td>

              <td>{student.course}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={()=>editStudent(student)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={()=>deleteStudent(student._id)}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Students;