import AllUsers from "./components/AllUsers";
import Highlights from "./components/Highlights";
import { Records } from "./assets/UsersData";
import { useState } from "react";
import Filters from "./components/Filters";

export default function App() {
  const[selectedUsers,setSelectedUsers] = useState(Records);
  const updateStatus = (userId, newStatus) => {
    console.log("heyy");
    setSelectedUsers(prevUsers =>
        prevUsers.map(user =>
            user.id === userId
                ? {
                    ...user,
                    about: { ...user.about, status: newStatus }
                }
                : user
        )
    );
};
  return (
    <div className="px-6 py-12 md:px-16 bg-[#e5e4e4]">
    <div className=" flex justify-between items-start mb-16 " >
        <div className="w-2/5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">User Details</h1>
        <p className="text-xl opacity-70 font-semibold">Information about a user, including name, email,start date, inviter, status, and available actions. </p>
        </div>
        <button className="bg-black text-white px-6 py-2 text-lg font-semibold rounded-md" >Download Report</button>
    </div>
    <Highlights selectedUsers={selectedUsers} />
    <Filters selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
    <AllUsers selectedUsers={selectedUsers} setSelectedUsers={selectedUsers} updateStatus={updateStatus} />
    </div>
  )
}
