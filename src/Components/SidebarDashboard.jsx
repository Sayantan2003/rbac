import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SidebarDashboard = ({ isOpen, onClose, user }) => {
    const logout = async () => {
        try {
            await fetch('/logout', { method: 'GET', credentials: 'include' });
            window.location.href = '/';
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex flex-col justify-between items-center h-full" onClick={onClose}></div>
            )}
            <div
                className={`fixed top-0 right-0 w-1/4 h-full bg-gray-900 text-white transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-xl font-bold">Company Name</h2>
                    <FontAwesomeIcon icon={faTimes} className="cursor-pointer" onClick={onClose} />
                </div>
                <div className="flex items-center p-4">
                    <img src={user.profilePhoto} alt="Profile" className="w-12 h-12 rounded-full mr-3" />
                    <div>
                        <div className="text-lg font-semibold">{user.name}</div>
                        <div className="text-sm">{user.role}</div>
                    </div>
                </div>
                <div className="p-4">
                    <ul>
                        <li className="py-2 hover:bg-gray-700 cursor-pointer">Users</li>
                        <li className="py-2 hover:bg-gray-700 cursor-pointer">Roles</li>
                        <li className="py-2 hover:bg-gray-700 cursor-pointer">Permissions</li>
                        <li className="py-2 hover:bg-gray-700 cursor-pointer">Activity Logs</li>
                        <li className="py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
                    </ul>
                </div>
                {/* Footer Section */}
                <div className="flex flex-col justify-between p-4 border-t border-gray-700">
                    <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white text-sm w-1/3 font-bold py-2 px-4 rounded">
                        Logout
                    </button>
                    <div className="flex flex-col">
                        <div className="text-center text-lg font-bold tracking-wide mt-auto">RBAC</div>
                        <div className="text-center text-xs font-thin">© RBAC 2024 All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarDashboard;