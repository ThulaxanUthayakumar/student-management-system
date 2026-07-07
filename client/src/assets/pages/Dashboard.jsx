import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="container-fluid">

      <h2 className="mb-4">
        Dashboard
      </h2>

      <div className="row">

        <div className="col-md-3">
          <DashboardCard
            title="Students"
            value="120"
            color="blue"
          />
        </div>

        <div className="col-md-3">
          <DashboardCard
            title="Courses"
            value="15"
            color="green"
          />
        </div>

        <div className="col-md-3">
          <DashboardCard
            title="Lecturers"
            value="10"
            color="orange"
          />
        </div>

        <div className="col-md-3">
          <DashboardCard
            title="Attendance"
            value="95%"
            color="red"
          />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;