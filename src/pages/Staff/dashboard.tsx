import React from "react";
import './dashboard.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Sidebar from '../../components/sidebar';
import DashboardTable from '../../components/dashboardTabel';
import DashboardRecord from '../../components/dashboardRecord';

const StaffPage: React.FC = () => {
    return (
        <div className="staff-container">
            <Sidebar />
            <div className="dashboard-content-container">
                <h1 className="dashboard-header">Dashboard</h1>
                <div className="dashboard-content">
                    <DashboardTable />
                    <DashboardRecord />
                </div>
            </div>
        </div >
    );
};

export default StaffPage;