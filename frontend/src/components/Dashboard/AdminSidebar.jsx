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
    <div className="border mt-4
      mx-6 rounded-2xl shadow-sm w-72 bg-white border-r border-slate-200 min-h-screen flex flex-col">

      <div className="px-6 py-8">
        <h1 className="text-xl font-bold text-slate-800">EMS</h1>
         <p className="text-sm text-slate-400 mt-1">
        Employee Management System
      </p>
      </div>

      <div className="flex flex-col gap-2 px-3">
        <NavLink
          to="/admin-dashboard" 
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
              isActive
                ? "bg-violet-100 text-violet-600 font-semibold"
                : "text-slate-500 hover:bg-slate-100"
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
                ? "bg-violet-100 text-violet-600 font-semibold"
              : "text-slate-500 hover:bg-slate-100"
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
                ? "bg-violet-100 text-violet-600 font-semibold"
              : "text-slate-500 hover:bg-slate-100"
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
                ?  "bg-violet-100 text-violet-600 font-semibold"
              : "text-slate-500 hover:bg-slate-100"
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
                ?  "bg-violet-100 text-violet-600 font-semibold"
              : "text-slate-500 hover:bg-slate-100"
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
                ? "bg-violet-100 text-violet-600 font-semibold"
              : "text-slate-500 hover:bg-slate-100"
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
