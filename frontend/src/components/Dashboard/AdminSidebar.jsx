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
    <div className="shadow-sm w-62 bg-blue-800 ">
      <div className="px-8 flex items-center gap-4 mb-6">
    {/* Logo */}
    <img
      src="/MS-logo.png"
      alt="MS Logo"
      className="w-16 h-16 object-contain rounded-full"
    />

      <div className="px-2 py-8">
        <h1 className="text-xl font-bold text-white">EMS</h1>
         <p className="text-sm text-white mt-1">
        Employee Management System
      </p>
      </div>
      </div>

      <div className="flex flex-col gap-2 px-3">
        <NavLink
          to="/admin-dashboard" 
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
              isActive
                ? "bg-white text-blue-600 font-semibold"
                : "text-white hover:bg-white/20"
            }`
          }>
          <FaBuilding size={18}/>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/employee"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
              isActive
                ? "bg-white text-blue-600 font-semibold"
                : "text-white hover:bg-white/20"
            }`
          }>
          <FaUsers size={18}/>
          <span>Employee</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
              isActive
                ? "bg-white text-blue-600 font-semibold"
                : "text-white hover:bg-white/20"
            }`
          }>
          <FaBuilding size={18}/>
          <span>Departments</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/Leave"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
              isActive
                ?  "bg-white text-blue-600 font-semibold"
                : "text-white hover:bg-white/20"
            }`
          }>
          <FaCalendarAlt size={18}/>
          <span>Leave</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/salary"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
              isActive
                ?  "bg-white text-blue-600 font-semibold"
                : "text-white hover:bg-white/20"
            }`
          }>
          <FaMoneyBillWave size={18}/>
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
              isActive
                ? "bg-white text-blue-600 font-semibold"
                : "text-white hover:bg-white/20"
            }`
          }>
          <FaCogs size={18}/>
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
