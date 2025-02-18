import { MdGroups } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { RiUserForbidFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

const Highlights = ({selectedUsers}) => {
    const activeUsers = selectedUsers.filter(user => user.about.status === "Active").length;
    const inactiveUsers = selectedUsers.filter(user => user.about.status === "Inactive").length;
    const blockedUsers = selectedUsers.filter(user => user.about.status === "Blocked").length;  
    return (
    <div className="flex gap-8 h-36 2xl:h-48 mb-16">
      <div className="grow flex items-center p-4 gap-4 2xl:gap-8 border-2 border-black border-opacity-30 bg-white rounded-xl">
        <MdGroups className="w-16 2xl:w-24 h-16 2xl:h-24 self-center rounded-xl p-4 bg-green-50 text-green-600" />
        <div className="flex flex-col gap-4">
            <p className="text-xl opacity-60 font-semibold " >Total Users</p>
            <p className="text-5xl 2xl:text-6xl font-semibold">{selectedUsers.length}</p>
        </div>
        <FaExternalLinkAlt className="h-8 opacity-60 justify-self-end self-start" />
      </div>
      <div className="grow flex items-center p-4 gap-4 2xl:gap-8 border-2 border-black border-opacity-30 bg-white rounded-xl">
        <FaUserCheck className="w-16 2xl:w-24 h-16 2xl:h-24 self-center rounded-xl p-4 bg-green-50 text-green-600" />
        <div className="flex flex-col gap-4">
            <p className="text-xl opacity-60 font-semibold " >Active Users</p>
            <p className="text-5xl 2xl:text-6xl font-semibold">{activeUsers}</p>
        </div>
        <FaExternalLinkAlt className="h-8 opacity-60 justify-self-end self-start" />
      </div>
      <div className="grow flex items-center p-4 gap-4 2xl:gap-8 border-2 border-black border-opacity-30 bg-white rounded-xl">
        <FaUserTimes className="w-16 2xl:w-24 h-16 2xl:h-24 self-center rounded-xl p-4 bg-green-50 text-green-600" />
        <div className="flex flex-col gap-4">
            <p className="text-xl opacity-60 font-semibold " >Inactive Users</p>
            <p className="text-5xl 2xl:text-6xl font-semibold">{inactiveUsers}</p>
        </div>
        <FaExternalLinkAlt className="h-8 opacity-60 justify-self-end self-start" />
      </div>
      <div className="grow flex items-center p-4 gap-4 2xl:gap-8 border-2 border-black border-opacity-30 bg-white rounded-xl">
        <RiUserForbidFill className="w-16 2xl:w-24 h-16 2xl:h-24 self-center rounded-xl p-4 bg-green-50 text-green-600" />
        <div className="flex flex-col gap-4">
            <p className="text-xl opacity-60 font-semibold " >Blocked Users</p>
            <p className="text-5xl 2xl:text-6xl font-semibold">{blockedUsers}</p>
        </div>
        <FaExternalLinkAlt className="h-8 opacity-60 justify-self-start self-start" />
      </div>
    </div>
  )
}

export default Highlights
