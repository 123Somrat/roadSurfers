//import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function Layouts() {
  return (
    <div className="container max-w-6xl mx-auto min-h-screen border-2 border-slate-500">
      <nav>
          <Navbar/>
      </nav>
{/* <div>
        <Outlet />
      </div>*/}
      
    </div>
  );
}
