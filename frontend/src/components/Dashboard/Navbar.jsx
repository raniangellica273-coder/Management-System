import React from "react";
import { useAuth } from "../../context/authContext";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div
      className="
      mt-4
      mx-6
      items-center
      justify-between
      rounded-2xl
      bg-white
      border
      border-slate-200
      p-6
      shadow-sm
      flex
      ">
      <div>
      <h2 className="text-2xl tracking-tight text-slate-800 font-bold">
        Welcome back, {user.name}
      </h2>

      <p className="mt-1 text-slate-500 text-sm">
        Manage your oragnization efficiently
      </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="
      p-3
      rounded-xl
      bg-slate-100
      hover:bg-slate-200
    ">
          <FaBell />
        </button>

        <button
          className="
      px-5
      py-3
      rounded-xl
      bg-blue-600
      text-white
      font-medium
      hover:bg-blue-800
    ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
