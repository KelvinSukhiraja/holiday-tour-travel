import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="px-32">
      <Outlet />
    </div>
  );
};
