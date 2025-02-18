import User from "./User";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { ArrowUpWideNarrow, ArrowDownNarrowWide } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";


const usersPerPage = 10;

const AllUsers = ({ selectedUsers }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState({ field: "name", order: "asc" });
    const [sortedData, setSortedData] = useState([]); console.log("Component Mounted");

    useEffect(() => {
        // Sort data by default on initial render (Name - Ascending)
        const sorted = [...selectedUsers].sort((a, b) => a.about.name.localeCompare(b.about.name));
        setSortedData(sorted);
    }, [selectedUsers]);

    const sortByField = (field) => {
        const newOrder = sortOrder.field === field && sortOrder.order === "asc" ? "desc" : "asc";

        const sorted = [...sortedData].sort((a, b) => {
            let aValue, bValue;

            if (field === "name" || field === "email" || field === "status") {
                aValue = a.about[field].toLowerCase();
                bValue = b.about[field].toLowerCase();
            } else if (field === "invitedBy") {
                aValue = a.details.invitedBy.toLowerCase();
                bValue = b.details.invitedBy.toLowerCase();
            } else if (field === "date") {
                aValue = a.details.date.split(".").reverse().join(""); // Convert date to YYYYMMDD for sorting
                bValue = b.details.date.split(".").reverse().join("");
            }

            return newOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        });

        setSortedData(sorted);
        setSortOrder({ field, order: newOrder });
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(sortedData.length / usersPerPage);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedData.slice(indexOfFirstUser, indexOfLastUser);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };



    return (
        <div className="bg-white px-12 py-8 rounded-2xl flex flex-col items-center p-4">
            <div className="flex w-full flex-col gap-4">
                <div className="grid grid-cols-7 border-b pb-2 font-semibold">
                   
                    <span
                        className="col-span-1 opacity-70 text-2xl flex gap-3 items-center cursor-pointer"
                        onClick={() => sortByField("name")}
                    >
                        Name
                        {sortOrder.field === "name"
                            ? sortOrder.order === "asc"
                                ? <ArrowUpWideNarrow size={26} />
                                : <ArrowDownNarrowWide size={26} />
                            : <ArrowUpWideNarrow size={26} className="opacity-50" /> /* Default icon */}
                    </span>

                    <span
                        className="col-span-2 opacity-70 text-2xl flex gap-3 items-center cursor-pointer"
                        onClick={() => sortByField("email")}
                    >
                        Email
                        {sortOrder.field === "email"
                            ? sortOrder.order === "asc"
                                ? <ArrowUpWideNarrow size={26} />
                                : <ArrowDownNarrowWide size={26} />
                            : <ArrowUpWideNarrow size={26} className="opacity-50" />}
                    </span>

                    <span
                        className="col-span-1 opacity-70 text-2xl flex gap-3 items-center cursor-pointer"
                        onClick={() => sortByField("date")}
                    >
                        Date
                        {sortOrder.field === "date"
                            ? sortOrder.order === "asc"
                                ? <ArrowUpWideNarrow size={26} />
                                : <ArrowDownNarrowWide size={26} />
                            : <ArrowUpWideNarrow size={26} className="opacity-50" />}
                    </span>

                    <span
                        className="col-span-1 opacity-70 text-2xl flex gap-3 items-center cursor-pointer"
                        onClick={() => sortByField("invitedBy")}
                    >
                        Invited By
                        {sortOrder.field === "invitedBy"
                            ? sortOrder.order === "asc"
                                ? <ArrowUpWideNarrow size={26} />
                                : <ArrowDownNarrowWide size={26} />
                            : <ArrowUpWideNarrow size={26} className="opacity-50" />}
                    </span>

                    <span
                        className="col-span-1 opacity-70 text-2xl flex gap-3 items-center cursor-pointer"
                        onClick={() => sortByField("status")}
                    >
                        Status
                        {sortOrder.field === "status"
                            ? sortOrder.order === "asc"
                                ? <ArrowUpWideNarrow size={26} />
                                : <ArrowDownNarrowWide size={26} />
                            : <ArrowUpWideNarrow size={26} className="opacity-50" />}
                    </span>

                    <span className="col-span-1 opacity-70 text-2xl flex items-center justify-center ">
                        Action
                    </span>
                </div>


                {currentUsers.map((userData) => (
                    <User key={userData.id} userData={userData} />
                ))}

            </div>
            <div className="flex items-center space-x-2 mt-4">
                <button onClick={() => goToPage(1)} disabled={currentPage === 1} className="p-2 rounded disabled:opacity-50">
                    <FaAngleDoubleLeft />
                </button>
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded disabled:opacity-50">
                    <FaAngleLeft />
                </button>
                <span className="px-3 py-1 border rounded">Page {currentPage} of {totalPages}</span>
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded disabled:opacity-50">
                    <FaAngleRight />
                </button>
                <button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages} className="p-2 rounded disabled:opacity-50">
                    <FaAngleDoubleRight />
                </button>
            </div>
        </div>
    );
};

export default AllUsers;
