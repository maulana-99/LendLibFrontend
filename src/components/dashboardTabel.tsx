import React, { useEffect, useState } from "react";
import './dashboardTabel.css';
import { getBorrowData } from '../services/borrowService';
import { Borrowed } from '../models/Borrowed';

const DashboardTable: React.FC = () => {
    const [borrowedBooks, setBorrowedBooks] = useState<Borrowed[]>([]);

    useEffect(() => {
        const fetchBorrowData = async () => {
            try {
                const data = await getBorrowData();
                setBorrowedBooks(data.borrow);
            } catch (error) {
                console.error("Error fetching borrowed books:", error);
            }
        };

        fetchBorrowData();
    }, []);

    return (
        <div className="dashboard-table-container">
            <div className="dashboard-table-header">
                <h1 className="dashboard-table-title">Last Book Borrowed</h1>
                <a className="dashboard-table-link" href="/borrow">Details <i className="fas fa-arrow-right"></i></a>
            </div>
            <p className="dashboard-table-total">{borrowedBooks.length} books</p>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date Borrowed</th>
                        <th>Date Returned</th>
                        <th>Stock</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {borrowedBooks.map((borrow, index) => (
                        <tr key={index}>
                            <td>{borrow.book.title}</td>
                            <td>{new Date(borrow.dateBorrow).toLocaleDateString()}</td>
                            <td>{new Date(borrow.dateReturn).toLocaleDateString()}</td>
                            <td>{borrow.qty}</td>
                            <td>
                                {borrow.status === 1 ? 'Borrowed' : 'Returned'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardTable;