import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <header className="fixed top-0 w-full z-10">
        <Navbar />
      </header>
      <main className="flex pt-16">
        <aside className="fixed top-16 left-0 h-full w-64 z-10">
          <Sidebar />
        </aside>
        <div className="ml-64 mt-4 p-4 px-5 bg-slate-800 w-full rounded-xl overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
