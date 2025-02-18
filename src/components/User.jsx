import { MdBlock } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";


const User = ({ userData , updateStatus }) => {
    return (
      <div className="w-full grid grid-cols-7 py-4 items-center justify-between">
        <span className="text-2xl font-semibold">{userData.about.name}</span>
        <span className="text-2xl col-span-2 text-center opacity-60">{userData.about.email}</span>
        <span className="text-2xl opacity-60">{userData.details.date}</span>
        <span className="text-2xl opacity-60">{userData.details.invitedBy}</span>
        <span className={"text-2xl border-2 w-44 py-2 font-semibold flex justify-center items-center rounded-md " + 
            (userData.about.status === "Active" ? "text-green-500 bg-green-50 border-green-600" : userData.about.status === "Blocked" ? "text-red-500 bg-red-50 border-red-600" : "text-blue-600 bg-blue-50 border-blue-600")}>
          {userData.about.status}
        </span>
        <div className="flex justify-evenly h-12">
                <MdBlock 
                    className="text-2xl w-12 rounded-lg border border-red-600 p-2 h-full bg-red-50 text-red-600 cursor-pointer" 
                    onClick={() => updateStatus(userData.id, "Blocked")} // Set to Blocked
                />
                <FaCheck 
                    className="text-2xl w-12 rounded-lg border border-green-600 p-2 h-full bg-green-50 text-green-600 cursor-pointer" 
                    onClick={() => updateStatus(userData.id, "Active")} // Set to Active
                />
                <CiCircleInfo 
                    className="text-2xl w-12 rounded-lg border border-blue-600 p-2 h-full bg-blue-50 text-blue-600 cursor-pointer" 
                    onClick={() => updateStatus(userData.id, "Inactive")} // Set to Inactive
                />
            </div>
      </div>
    )
  }
  
  export default User