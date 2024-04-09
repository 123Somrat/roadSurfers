import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div className="container max-w-6xl mx-auto min-h-screen border-2 border-slate-500">
      <nav>
        <h1 className="text-red-400">
          This is navBar whis is always exziest in all page
        </h1>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
