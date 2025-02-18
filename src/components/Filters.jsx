import { useState } from "react";
import { Records } from "../assets/UsersData";
import { MdSearch } from "react-icons/md";

const Filters = ({ setSelectedUsers }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");

  const handleClear = () => {
    setSearchTerm("");
    setStatus("all");
    setSelectedDate("");
    setSelectedUsers(Records);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterUsers(value, status, selectedDate);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatus(value);
    filterUsers(searchTerm, value, selectedDate);
  };

  const handleDateChange = (e) => {
    const value = e.target.value; // YYYY-MM-DD from input
    setSelectedDate(value);
    filterUsers(searchTerm, status, value);
  };

  const filterUsers = (search, statusFilter, dateFilter) => {
    let filteredUsers = Records.filter((user) =>
      user.about.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    if (statusFilter !== "all") {
      filteredUsers = filteredUsers.filter(
        (user) => user.about.status === statusFilter
      );
    }

    if (dateFilter) {
      const formattedFilterDate = dateFilter.split("-").reverse().join("."); // Convert YYYY-MM-DD to DD.MM.YYYY
      filteredUsers = filteredUsers.filter(
        (user) => user.details.date === formattedFilterDate
      );
    }

    setSelectedUsers(filteredUsers);
  };
  return (
    <div className="flex justify-between mb-16   text-2xl font-medium items-center">
      {/* Search Input */}
      <div className="relative border">
        <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="search"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 px-8 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Status Filter Dropdown */}
      <div className="flex gap-8">
        <select
          value={status}
          onChange={handleStatusChange}
          className="border p-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Blocked">Blocked</option>
        </select>

        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button onClick={handleClear} className="bg-white px-4 py-2 rounded-md">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
