import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  Select,
} from "antd";
import useUser from "../hooks/useUser";

//
const WorkFilterForm = ({
  handleMonthChanges,
  handleNameChanges,
  totalWorkedHour,
  handleFilterClear,
}) => {
// user
const [employee] = useUser();


//
  return (
    <div className="w-full">
      <Form className="flex flex-wrap lg:flex-nowrap justify-between items-start lg:gap-6">
        {/* select Name */}
        <Form.Item
          name="employeeName"
          rules={[{ required: true, message: "Please select a task!" }]}
          className="w-full md:w-4/12 lg:w-3/12"
        >
          <Select
            onChange={handleNameChanges}
            className="custom-select"
            placeholder="Filter by employee name"
            style={{ width: "100%" }}
          >
            {
              employee.filter(i=>i.userRole === "employee").map(user=>(
                <Select.Option key={user?._id} value={user?.userName}>{user?.userName}</Select.Option>
              ))
            }
           
            {/* <Select.Option value="Mehedi Hasan">Mehedi Hasan</Select.Option> */}
          </Select>
        </Form.Item>

        {/* select Month */}
        <Form.Item
          name="monthName"
          rules={[{ required: true, message: "Please select a task!" }]}
          className="w-full  md:w-4/12 lg:w-3/12"
        >
          <Select
            onChange={handleMonthChanges}
            className="custom-select"
            placeholder="Filter by month"
            style={{ width: "100%" }}
          >
            <Select.Option value="01">January</Select.Option>
            <Select.Option value="02">February</Select.Option>
            <Select.Option value="03"> March</Select.Option>
            <Select.Option value="04">April</Select.Option>
            <Select.Option value="05">May</Select.Option>
            <Select.Option value="06">June</Select.Option>
            <Select.Option value="07">July</Select.Option>
            <Select.Option value="08"> August</Select.Option>
            <Select.Option value="09">September</Select.Option>
            <Select.Option value="10"> October</Select.Option>
            <Select.Option value="11"> November</Select.Option>
            <Select.Option value="12"> December</Select.Option>
          </Select>
        </Form.Item>
        {/* clear button */}
        <Form.Item className="w-full md:w-3/12 lg:w-2/12">
          <Button onClick={handleFilterClear} className=" border text-blue-900 border-[#a4d1fb] py-[5px] px-3 w-full rounded-sm font-semibold">
            {" "}
            Clear filter
          </Button>
        </Form.Item>
        {/*total hours work */}
        <Form.Item className="w-full md:w-5/12 lg:w-3/12">
          <span className="text-center block border border-[#a4d1fb] py-[5px] px-3 w-full rounded-sm font-semibold ">
            Total Worked : {totalWorkedHour || 0} hour
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};
WorkFilterForm.propTypes = {
  handleMonthChanges: PropTypes.func.isRequired,
  handleNameChanges: PropTypes.func.isRequired,
  totalWorkedHour: PropTypes.number,
  handleFilterClear: PropTypes.func.isRequired,
  refetch: PropTypes.func,
};

export default WorkFilterForm;
