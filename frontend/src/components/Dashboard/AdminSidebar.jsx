import React from "react";
import { useAuth } from "../../context/authContext";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";

function AdminSidebar() {
  return (
    <div className="bg-blue-950 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-indigo-700 h-12 flex items-center justify-center">
        <h3 className="text-2xl font-semibold">Employee MS</h3>
      </div>
      <div>
        <NavLink
          to="/admin-dashboard"
          className={({isActive}) => `${isActive ? "bg-indigo-300" : ""} flex items-center space-x-4 py-2.5 px-4 rounded-xl`}
          end>
          <FaTachometerAlt />
          <span>Dasboard</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard/employee"
          className={({isActive}) => `${isActive ? "bg-indigo-300" : ""} flex items-center space-x-4 py-2.5 px-4 rounded-xl`}
          end>
          <FaUsers />
          <span>Employee</span>
        </NavLink>
        <NavLink 
          to="/admin-dashboard/departments"
          className={({isActive}) => `${isActive ? "bg-indigo-300" : ""} flex items-center space-x-4 py-2.5 px-4 rounded-xl`}>
          <FaBuilding />
          <span>Departments</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 py-2.5 px-4 rounded">
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 py-2.5 px-4 rounded">
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
