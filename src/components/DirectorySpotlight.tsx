import React, { useState } from 'react';

const EMPLOYEES = [
  {
    name: 'Priya Sharma',
    avatar: 'PS',
    avatarBg: 'bg-slate-950 text-brand-lime',
    empId: 'OMN-1042',
    dept: 'Engineering',
    role: 'Lead Systems Architect',
    status: 'Active',
    attendance: 'Present (Biometric)',
    attendanceColor: 'text-emerald-600',
  },
  {
    name: 'Rahul Verma',
    avatar: 'RV',
    avatarBg: 'bg-indigo-900 text-white',
    empId: 'OMN-1088',
    dept: 'Product Design',
    role: 'Senior UI/UX Designer',
    status: 'Active',
    attendance: 'WFH (Approved)',
    attendanceColor: 'text-cyan-600',
  },
  {
    name: 'Ananya Mehta',
    avatar: 'AM',
    avatarBg: 'bg-slate-800 text-amber-300',
    empId: 'OMN-1102',
    dept: 'People & Culture',
    role: 'HR Operations Lead',
    status: 'Active',
    attendance: 'Present (Biometric)',
    attendanceColor: 'text-emerald-600',
  },
  {
    name: 'David Kim',
    avatar: 'DK',
    avatarBg: 'bg-slate-600 text-white',
    empId: 'OMN-1145',
    dept: 'Finance',
    role: 'Payroll Specialist',
    status: 'On Leave',
    attendance: 'Casual Leave (Day 1)',
    attendanceColor: 'text-amber-600',
  },
];

export const DirectorySpotlight: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const filtered = EMPLOYEES.filter(
    (emp) =>
      emp.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      emp.dept.toLowerCase().includes(filterQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(filterQuery.toLowerCase()) ||
      emp.empId.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section className="py-20 relative z-10" data-purpose="directory-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-white/90 px-4 py-1.5 rounded-[6px] border border-indigo-100 shadow-sm inline-block">
            Interactive System Preview
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-3.5 mb-2">
            Clean, Transparent Employee Records
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Single source of truth for every team member across departments.
          </p>
        </div>

        {/* Directory Table Mockup */}
        <div className="frosted-glass rounded-[6px] border border-white/95 overflow-hidden max-w-5xl mx-auto shadow-glass-lum hover:shadow-glass-card-hover transition-all duration-300">
          <div className="p-5 border-b border-slate-200/60 flex flex-wrap items-center justify-between gap-4 bg-white/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-900">Active Staff Directory</span>
              <span className="text-xs bg-emerald-100/90 text-emerald-800 font-bold px-2.5 py-0.5 rounded-[6px]">
                384 Total
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="text-xs px-3.5 py-2 border border-slate-200 rounded-[6px] bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-56 sm:w-64 outline-none transition-all"
                placeholder="Filter by name, department, role..."
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-indigo-50/50 text-[11px] uppercase tracking-wider text-slate-500 border-b border-slate-200/60">
                <tr>
                  <th className="py-3.5 px-5 font-semibold">Employee</th>
                  <th className="py-3.5 px-4 font-semibold">Emp ID</th>
                  <th className="py-3.5 px-4 font-semibold">Department</th>
                  <th className="py-3.5 px-4 font-semibold">Role</th>
                  <th className="py-3.5 px-4 font-semibold">Status</th>
                  <th className="py-3.5 px-4 font-semibold">Attendance</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((emp) => (
                  <tr key={emp.empId} className="hover:bg-white/60 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-slate-900 flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] ${emp.avatarBg}`}>
                        {emp.avatar}
                      </div>
                      <span>{emp.name}</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-500">{emp.empId}</td>
                    <td className="py-3.5 px-4">{emp.dept}</td>
                    <td className="py-3.5 px-4">{emp.role}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${
                          emp.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    <td className={`py-3.5 px-4 font-semibold ${emp.attendanceColor}`}>
                      {emp.attendance}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="text-indigo-600 hover:text-indigo-900 font-bold text-xs cursor-pointer">
                        View Profile →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50/70 border-t border-slate-200/60 text-center text-xs text-slate-500 font-medium">
            Showing {filtered.length} of 384 employees • Encrypted AES-256 cloud storage
          </div>
        </div>
      </div>
    </section>
  );
};
