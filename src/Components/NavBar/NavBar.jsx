
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user } = useAuth();
  const [toggle, setToggle] = useState(false);
  const auth = getAuth();

  const handleToggle = () => setToggle(!toggle);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const PublicRoutes = [
    { label: "Home", url: "/" },
    { label: "SignUp", url: "/signup" },
    { label: "Login", url: "/login" },
  ];

  const PrivateRoutes = [
    { label: "Home", url: "/" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <div className="bg-amber-600 flex items-center justify-between px-6 w-full h-16">
      <div className="flex items-center">
        <h1 className="text-white font-bold text-xl">Glamour</h1>
      </div>

      <ul className="hidden lg:flex gap-5 text-white">
        {user
          ? PrivateRoutes.map((item) => (
              <li key={item.label}>
                <Link to={item.url} className="hover:text-gray-200">{item.label}</Link>
              </li>
            ))
          : PublicRoutes.map((item) => (
              <li key={item.label}>
                <Link to={item.url} className="hover:text-gray-200">{item.label}</Link>
              </li>
            ))}
        {user && (
          <li>
            <button onClick={handleLogout} className="hover:text-gray-200">Logout</button>
          </li>
        )}
      </ul>

      <div className="lg:hidden">
        <GiHamburgerMenu className="text-white text-2xl cursor-pointer" onClick={handleToggle} />
      </div>

      {toggle && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <AiOutlineClose className="text-white text-3xl absolute top-6 right-6 cursor-pointer" onClick={handleToggle} />

          <ul className="text-white text-lg space-y-6">
            {(user ? PrivateRoutes : PublicRoutes).map((item) => (
              <li key={item.label}>
                <Link to={item.url} className="hover:text-gray-400" onClick={handleToggle}>
                  {item.label}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <button onClick={handleLogout} className="hover:text-gray-400">Logout</button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;

