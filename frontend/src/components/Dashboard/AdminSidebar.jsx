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
    <div className="w-80 bg-slate-900 text-white min-h-screen">
      <div className="px-6 py-8 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold text-white">Employee Management System</h1>
      </div>
      <div>
        <NavLink
          to="/admin-dashboard" end
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 mx-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }>
          <FaBuilding />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/employee"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 mx-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }>
          <FaUsers />
          <span>Employee</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 mx-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }>
          <FaBuilding />
          <span>Departments</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/Leave"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 mx-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }>
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 mx-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }>
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
