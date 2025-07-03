
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="main-content">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;