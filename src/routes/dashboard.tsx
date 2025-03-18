import { useAuth } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser?.photoURL);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Navigasi ke halaman login setelah logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center flex-shrink-0">
                <h1 className="text-xl font-bold">My App</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="px-4 py-2 ml-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="p-6 border-4 border-gray-200 border-dashed rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {currentUser?.photoURL ? (
                      <img
                        className="object-cover w-12 h-12 rounded-full"
                        src={currentUser.photoURL}
                        alt="Profile"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full">
                        <span className="text-xl font-medium text-indigo-800">
                          {currentUser?.email?.charAt(0).toUpperCase() || "?"}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      Welcome, {currentUser?.displayName || currentUser?.email}!
                    </h2>
                    <p className="text-sm text-gray-500">
                      User ID: {currentUser?.uid}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
