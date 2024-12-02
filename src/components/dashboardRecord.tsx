import React from "react";
import './dashboardRecord.css';
import '@fortawesome/fontawesome-free/css/all.css';

const DashboardRecord: React.FC = () => {
    return (
        <div className="dashboard-record-container">
            <div className="dashboard-record-book-return-container">
                <div className="dashboard-record-book-return">
                    <p className="dashboard-record-book-return-record">
                        020
                    </p>
                    <p className="dashboard-record-title-book-return">Books Returned Today</p>
                </div>
            </div>
            <div className="dashboard-record-book-borrow-container">
                <div className="dashboard-record-book-borrow">
                    <div className="dashboard-record-book-borrow-top">
                        <div className="dashboard-record-book-borrow-icon">
                            <i className="fa fa-book-bookmark"></i>
                        </div>
                        <p className="dashboard-record-book-borrow-title-book">Books<br />Borrowed<br />Today</p>
                    </div>
                    <div className="dashboard-record-book-borrow-bottom">
                        <p className="dashboard-record-book-borrow-record">110</p>
                        <p className="dashboard-record-book-borrow-title">Books</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-record-member-container">
                <div className="dashboard-record-member">
                    <div className="dashboard-record-member-top">
                        <div className="dashboard-record-member-icon">
                            <i className="fa fa-user"></i>
                        </div>
                        <p className="dashboard-record-title-member">Member</p>
                    </div>
                    <div className="dashboard-record-member-bottom">
                        <p className="dashboard-record-member-record">055</p>
                        <p className="dashboard-record-member-title">Members</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardRecord;