import { useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  // Add Student
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

  // Delete Student
  const deleteStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  // Edit Student
  const editStudent = (student) => {
    setEditingId(student.id);

    setName(student.name);
    setEmail(student.email);
    setCourse(student.course);
  };

  // Update Student
  const updateStudent = () => {
    const updatedStudents = students.map((student) => {
      if (student.id === editingId) {
        return {
          ...student,
          name,
          email,
          course,
        };
      }

      return student;
    });

    setStudents(updatedStudents);

    setEditingId(null);

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Students Management</h2>

      <input
        className="form-control mb-3"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card p-3 mb-4">

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

        {editingId ? (
          <button
            className="btn btn-success"
            onClick={updateStudent}
          >
            Update Student
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={handleAddStudent}
          >
            Add Student
          </button>
        )}

      </div>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th width="180">Actions</th>
          </tr>
        </thead>

        <tbody>

          {students
            .filter((student) =>
              student.name
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editStudent(student)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(student.id)}
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