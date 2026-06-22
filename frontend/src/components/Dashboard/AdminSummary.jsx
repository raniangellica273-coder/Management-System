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
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="mb-8">
      <h1 className="text-4xl font-bold text-slate-800">
        Dashboard Overview
        </h1>
        <p className="text-slate-500 mt-2">
          Monitor your employees, departments and leave requests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <SummaryCard
          icon={<FaUsers size={26} />}
          text="Total Employees"
          number={13}
          color="bg-gradient-to-r from-cyan-500 to-teal-500"
        />

        <SummaryCard
          icon={<FaBuilding size={26} />}
          text="Total Departments"
          number={5}
          color="bg-gradient-to-r from-violet-500 to-indigo-600"
        />

        <SummaryCard
          icon={<FaMoneyBillWave />}
          text="Monthly Payroll"
          number="$645"
          color="bg-gradient-to-r from-rose-500 to-red-600"
        />
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">Leave Statistics</h2>

          <span className="text-sm text-slate-500">Updated Today</span>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
          <SummaryCard
            icon={<FaFileAlt size={24} />}
            text="Leave Applied"
            number={5}
            color="bg-gradient-to-r from-sky-500 to-cyan-500"
          />
          <SummaryCard
            icon={<FaCheckCircle size={24} />}
            text="Leave Approved"
            number={2}
            color="bg-gradient-to-r from-emerald-500 to-green-600"
          />
          <SummaryCard
            icon={<FaHourglassHalf size={24}/>}
            text="Leave Pending"
            number={4}
            color="bg-gradient-to-r from-amber-400 to-yellow-500"
          />
          <SummaryCard
            icon={<FaTimesCircle size={24}/>}
            text="Leave Rejected"
            number={1}
            color="bg-gradient-to-r from-red-500 to-rose-600"
          />
        </div>
      </div>
      </div>
  );
};

export default AdminSummary;
