import React, { useState } from "react";
import { Table, Input, Select, Badge, Spin } from "antd";
import { format, parseISO, compareAsc } from "date-fns";
import useWorkSheet from "../../hooks/useWorkSheet";

const { Option } = Select;

const columns = [
  {
    title: 'Date',
    dataIndex: 'workedDate',
    key: 'workedDate',
    render: (text) => (
      <div className="flex items-center">
        <span>{format(parseISO(text), 'dd/MM/yyyy')}</span>
      </div>
    ),
    sorter: (a, b) => compareAsc(parseISO(a.workedDate), parseISO(b.workedDate)),
  },
  {
    title: 'Submit Time',
    dataIndex: 'submitTime', 
    key: 'submitTime',
    render: (text) => text || 'N/A',
    sorter: (a, b) => {
      const submitTimeA = a.submitTime ? parseISO(`${a.workedDate}T${a.submitTime}`) : null;
      const submitTimeB = b.submitTime ? parseISO(`${b.workedDate}T${b.submitTime}`) : null;
      return compareAsc(submitTimeA, submitTimeB);
    },
  },
  {
    title: 'Task Name',
    dataIndex: 'taskName',
    key: 'taskName',
    render: (text) => text || '- N/A -',
    sorter: (a, b) => a.taskName.localeCompare(b.taskName),
  },
  {
    title: 'Effective time',
    dataIndex: 'workedHour',
    key: 'workedHour',
    render: (text, record) => (
      <div className="flex justify-start gap-[1px]">
        <span>{text}</span>
        <br />
        <span>/ 9 hours</span>
      </div>
    ),
    sorter: (a, b) => parseFloat(a.workedHour) - parseFloat(b.workedHour),
  },
];

const WorkingHistory = () => {
  const [showAll, setShowAll] = useState(true);
  const [empWorkSheet, isLoading] = useWorkSheet();

  // Filter data based on the selected option
  const filteredData = showAll ? empWorkSheet : empWorkSheet.filter(item => item.status === 'pending');

  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-x-scroll dark:bg-gray-900 dark:text-white">
      {/* Title */}
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Working History</h2>
        </div>
        <div>
          <Select defaultValue="all" onChange={(value) => setShowAll(value === 'all')}>
            <Option value="all">Show all</Option>
            <Option value="pending">Show pending</Option>
          </Select>
        </div>
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      )}

      {/* Table */}
      {!isLoading && (
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={false}
          rowKey="key"
          bordered
          size="small"
          className="w-full dark:text-white"
          headerClassName="dark:bg-gray-800 dark:text-white"
          rowClassName={() => "dark:bg-gray-800 dark:hover:bg-gray-700"}
        />
      )}
    </div>
  );
};

export default WorkingHistory;