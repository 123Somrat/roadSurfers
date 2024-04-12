import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function Layouts() {
  return (
    <div className="container max-w-6xl mx-auto min-h-screen">
      <nav>
        <Navbar />
      </nav>
       
       <div className="w-full">
       <Outlet />
       </div>
    
    </div>
  );
}
