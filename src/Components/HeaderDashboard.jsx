import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SidebarDashboard from './SidebarDashboard'; // Import the SidebarDashboard component

const HeaderDashboard = () => {
    const [user, setUser ] = useState({
        name: "Sayantan Halder",
        role: "Super Admin",
        profilePhoto: "https://via.placeholder.com/150",
    });

    const [isSidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="header bg-gray-800 text-white w-full h-16 montserrat flex items-center justify-between py-4 px-6">
                <div className="app-name text-2xl font-bold tracking-wider">RBAC</div>
                <div className="flex w-1/4 items-center justify-between">
                    <div className="user-details flex items-center justify-center">
                        <div className="user-info flex items-center justify-center">
                            <div className="user-name text-base font-semibold tracking-wider">{user.name}</div>
                            <div className="user-role text-xs">{", " + user.role}</div>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faBars} className="cursor-pointer transition duration-500 ease-in-out transform hover:rotate-180" onClick={toggleSidebar} />
                </div>
            </div>
            <SidebarDashboard isOpen={isSidebarOpen} onClose={toggleSidebar} user={user} />
        </>
    );
};

export default HeaderDashboard;