const DashboardContent = () => {
  const keyMetrics = [
    { label: "Total Users", value: 120 },
    { label: "Active Users", value: 100 },
    { label: "Roles Defined", value: 10 },
    { label: "Permissions Assigned", value: 25 },
  ];

  const recentActivities = [
    {
      action: "Added new user",
      performedBy: "Admin",
      timestamp: "2024-11-24, 10:30 AM",
    },
    {
      action: "Modified Role: Editor",
      performedBy: "Super Admin",
      timestamp: "2024-11-23, 4:15 PM",
    },
  ];

  const userManagement = [
    { name: "John Doe", role: "Admin", status: "Active" },
    { name: "Jane Smith", role: "Editor", status: "Inactive" },
  ];

  const roleManagement = [
    { role: "Admin", description: "Full Access", users: 5 },
    { role: "Editor", description: "Can edit content", users: 10 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              {metric.label}
            </h3>
            <p className="text-2xl font-bold text-indigo-600">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Graphical Insights Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Role Distribution
          </h2>
          <div className="flex justify-center items-center h-64 bg-gray-200 rounded-lg">
            <p className="text-gray-500">Pie Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Activity Trends
          </h2>
          <div className="flex justify-center items-center h-64 bg-gray-200 rounded-lg">
            <p className="text-gray-500">Line Chart Placeholder</p>
          </div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Activities
        </h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4 border border-gray-300">Action</th>
              <th className="p-4 border border-gray-300">Performed By</th>
              <th className="p-4 border border-gray-300">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((activity, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="p-4 border border-gray-300">{activity.action}</td>
                <td className="p-4 border border-gray-300">
                  {activity.performedBy}
                </td>
                <td className="p-4 border border-gray-300">
                  {activity.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User and Role Management Widgets */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Management Widget */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            User Management
          </h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-4 border border-gray-300">Name</th>
                <th className="p-4 border border-gray-300">Role</th>
                <th className="p-4 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {userManagement.map((user, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="p-4 border border-gray-300">{user.name}</td>
                  <td className="p-4 border border-gray-300">{user.role}</td>
                  <td className="p-4 border border-gray-300">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Role Management Widget */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Role Management
          </h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-4 border border-gray-300">Role</th>
                <th className="p-4 border border-gray-300">Description</th>
                <th className="p-4 border border-gray-300">Users</th>
              </tr>
            </thead>
            <tbody>
              {roleManagement.map((role, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="p-4 border border-gray-300">{role.role}</td>
                  <td className="p-4 border border-gray-300">
                    {role.description}
                  </td>
                  <td className="p-4 border border-gray-300">{role.users}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;