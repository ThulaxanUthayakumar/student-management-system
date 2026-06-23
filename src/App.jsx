import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="p-4 flex-grow-1">
          <AppRoutes />
        </div>
      </div>
    </>
  );
}

export default App;