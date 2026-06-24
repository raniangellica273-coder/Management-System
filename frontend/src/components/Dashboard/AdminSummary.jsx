import React from "react";
import SummaryCard from "./SummaryCard";
import {
  FaBuilding,
  FaCheckCircle,
  FaFileAlt,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaTimesCircle,
  FaUsers,
} from "react-icons/fa";

const AdminSummary = () => {
  return (
    <div className="p-4 md:p-8 mt-4
      mx-6
      items-center
      justify-between rounded-2xl
      bg-white
      border
      border-slate-200
      shadow-sm">

      <div>
        <section className="space-y-4">
          <div>
         <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
        Dashboard Overview
        </h3>
        <p className="text-sm text-slate-400 mt-0.5">
          Monitor your employees, departments and leave requests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 
        rounded-2xl border 
        border-slate-100 
        shadow-sm flex 
        items-center 
        justify-between 
        transition-all 
        hover:shadow-md">
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-400">Total Employees</p>
          <p className="text-3xl font-extrabold text-slate-800">13</p>
        </div>
        <div className="p-4 bg-cyan-50 text-cyan-600 rounded-2xl">
              <FaUsers className="w-6 h-6" />
            </div>
          </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between transition-all hover:shadow-md">
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-400">Total Departments</p>
              <p className="text-3xl font-extrabold text-slate-800">5</p>
            </div>
            <div className="p-4 bg-indigo-50 text-blue-600 rounded-2xl">
              <FaBuilding className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between transition-all hover:shadow-md">
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-400">Monthly Payroll</p>
              <p className="text-3xl font-extrabold text-slate-800">$645</p>
            </div>
            <div className="p-4 bg-rose-50 text-rose-600 rounded-2xl">
              <FaMoneyBillWave className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>
      

      <section className="space-y-4 m-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800 tracking-tight">Leave Statistics</h3>
          <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Updated Today</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <FaFileAlt className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Leave Applied</p>
              <p className="text-2xl font-bold text-slate-800 mt-0.5">5</p>
            </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <FaCheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Leave Approved</p>
              <p className="text-2xl font-bold text-slate-800 mt-0.5">2</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <FaHourglassHalf className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Leave Pending</p>
              <p className="text-2xl font-bold text-slate-800 mt-0.5">4</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
              <FaTimesCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Leave Rejected</p>
              <p className="text-2xl font-bold text-slate-800 mt-0.5">1</p>
            </div>
          </div>
        </div>
        </section>
      </div>
      </div>
  );
};

export default AdminSummary;
