import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        console.log(response)

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            navigate('/dashboard');
        } else {
            const error = await response.json();
            alert(error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            alert(result.message);
            navigate('/dashboard');
        } catch (error) {
            alert(error);
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6">
                {isLogin ? (
                    <form className="p-4 space-y-4 montserrat text-base w-[40vw]" onSubmit={handleLoginSubmit}>
                        <h2 className="text-3xl font-bold text-center">Login</h2>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                className="border w-full p-2 rounded-md" placeholder="Enter email address" name="email"
                                required
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                className="border w-full p-2 rounded-md" placeholder="Enter password" name="password"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full rounded-md font-semibold tracking-wide hover:bg-blue-600">
                            Login
                        </button>
                        <p className="text-sm text-center">Don&apos;t have an account. <span onClick={() => setIsLogin(false)} className="text-blue-500 cursor-pointer hover:text-blue-800">Create an account</span></p>
                    </form>
                ) : (
                    <form className="p-4 space-y-4 montserrat text-base w-full" onSubmit={handleRegisterSubmit}>
                        <h2 className="text-3xl font-bold text-center">Register</h2>
                        <div className="flex space-x-4 w-full">
                            <div className="w-1/2">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="border w-full p-2 rounded-md" placeholder="Enter full name" name="name"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="border w-full p-2 rounded-md" placeholder="Enter email" name="email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex space-x-4 w-full">
                            <div className="w-1/2">
                                <label>Phone</label>
                                <input
                                    type="number"
                                    className="border w-full p-2 rounded-md" placeholder="Enter phone number" name="phone"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label>Gender</label>
                                <select
                                    className="border w-full p-2 rounded-md" name="gender"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label>Role</label>
                            <select
                                className="border w-full p-2 rounded-md" name="role"
                                required
                            >
                                <option value="">Select</option>
                                <option value="super-admin">Super Admin</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="editor">Editor</option>
                                <option value="moderator">Moderator</option>
                                <option value="analyst">Analyst</option>
                                <option value="support-agent">Support Agent</option>
                                <option value="developer">Developer</option>
                                <option value="guest">Guest</option>
                            </select>
                        </div>
                        <div>
                            <label>Address</label>
                            <input
                                type="text"
                                className="border w-full p-2 rounded-md" placeholder="Enter address" name="address"
                                required
                            />
                        </div>
                        <div className="flex space-x-4 w-full">
                            <div className="w-1/2">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="border w-full p-2 rounded-md" placeholder="Enter password" name="password"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="border w-full p-2 rounded-md" placeholder="Enter confirm password"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 w-full font-semibold tracking-wide rounded-md hover:bg-green-600">
                            Register
                        </button>
                        <p className="text-center text-sm">Already have an account <span onClick={() => setIsLogin(true)} className="text-green-500 cursor-pointer hover:text-green-800">Login here</span></p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Home;