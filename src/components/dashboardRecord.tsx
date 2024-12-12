import React, { useEffect, useState } from "react";
import './dashboardRecord.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { getBorrowData } from '../services/borrowService'; // Fungsi untuk mendapatkan data peminjaman
import { getMemberData } from '../services/memberService'; // Fungsi untuk mendapatkan data anggota

const DashboardRecord: React.FC = () => {
    const [booksReturned, setBooksReturned] = useState(0);
    const [booksBorrowed, setBooksBorrowed] = useState(0);
    const [totalMembers, setTotalMembers] = useState(0);

    useEffect(() => {
        const fetchBorrowStatistics = async () => {
            try {
                const borrowData = await getBorrowData();

                // Kalkulasi Buku yang Dipinjam Hari Ini
                const today = new Date().toISOString().split("T")[0]; // Format tanggal: YYYY-MM-DD
                const borrowedToday = borrowData.borrow.filter(
                    (borrow: any) => borrow.dateBorrow.startsWith(today)
                ).length;

                // Kalkulasi Buku yang Dikembalikan Hari Ini
                const returnedToday = borrowData.borrow.filter(
                    (borrow: any) =>
                        borrow.dateReturn?.startsWith(today) &&
                        borrow.status === 0 // Status 0 = Dikembalikan
                ).length;

                setBooksBorrowed(borrowedToday);
                setBooksReturned(returnedToday);
            } catch (error) {
                console.error("Error fetching borrow statistics:", error);
            }
        };

        const fetchMemberStatistics = async () => {
            try {
                const memberData = await getMemberData();
                console.log("Member Data:", memberData); // Debugging
                // Akses array member
                if (memberData && Array.isArray(memberData.member)) {
                    setTotalMembers(memberData.member.length); // Hitung jumlah anggota
                } else {
                    console.error("Invalid member data structure:", memberData);
                }
            } catch (error) {
                console.error("Error fetching member statistics:", error);
            }
        };        
        fetchBorrowStatistics();
        fetchMemberStatistics();
    }, []);

    return (
        <div className="dashboard-record-container">
            <div className="dashboard-record-book-return-container">
                <div className="dashboard-record-book-return">
                    <p className="dashboard-record-book-return-record">
                        {booksReturned.toString().padStart(3, '0')}
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
                        <p className="dashboard-record-book-borrow-record">
                            {booksBorrowed.toString().padStart(3, '0')}
                        </p>
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
                        <p className="dashboard-record-member-record">
                            {totalMembers.toString().padStart(3, '0')}
                        </p>
                        <p className="dashboard-record-member-title">Members</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardRecord;
