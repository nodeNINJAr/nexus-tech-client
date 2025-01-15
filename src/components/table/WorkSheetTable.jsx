import React from "react";
import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Tasks",
    dataIndex: "name",
    key: "name",
   
  },
  {
    title: "Hours Worked",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Date",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

// work sheet table
const WorkSheetTable = () => {
  //
  return (
    <>
      <Table
       className="whitespace-nowrap"
        columns={columns}
        pagination={{
          position: ["bottomRight"],

        }}
        dataSource={data}
      />
    </>
  );
};
export default WorkSheetTable;
