import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <div
          className="p-4"
          style={{ width: "100%" }}
        >
          {children}
        </div>

      </div>
    </>
  );
}

export default MainLayout;