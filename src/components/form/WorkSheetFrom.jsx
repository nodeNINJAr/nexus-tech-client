import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  message,
  notification,
  Select,
  Spin,
} from "antd";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
// toast notification config
notification.config({
  placement: "topRight",
  top: 20,
  bottom: 50,
  duration: 3,
});

//
const WorkSheetFrom = ({ refetch }) => {
  //custom axios
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  //handle min max value check
  const [value, setValue] = useState(0);
  const handleChange = (val) => {
    if (val < 1 || val > 10) {
      message.error("Value must be between 1 and 10!");
      return;
    }
    setValue(val);
  };
  // button spinner
  const [loading, setLoading] = useState(false);
  //func for submit the form
  const onSubmit = async (values) => {
    setLoading(!loading);
    //convert to date format
    const extractedDate = dayjs(values?.workedDate?.$d);
    // Format the date for the database
    const formattedDate = extractedDate?.format("YYYY-MM-DD");
    //
    const workData = {
      employeeName: user?.displayName,
      employeeEmail: user?.email,
      taskName: values?.taskName,
      workedHour: parseInt(values?.workedHour),
      workedDate: formattedDate,
    };
    //send to db
    try {
      await axiosSecure.post("/daily-work", workData);
      //
      refetch();
      setLoading(loading);
      //
      notification.success({
        message: "Work Submited Successfully",
        description: "Thanks for your todays hardwork",
        placement: "topRight",
      });
    } catch (err) {
      setLoading(loading);
      notification.error({
        message: "Error Occurred",
        description: `${err.response?.data?.message}`,
        placement: "topRight",
      });
    }
  };

  //error
  const onFinishFailed = (errorInfo) => {
    // console.error("Form submission failed:", errorInfo); // Handles validation errors
  };

  //
  return (
    <div className="w-full">
      <Form
        name="basic"
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        className="flex flex-wrap md:flex-nowrap justify-between items-start md:gap-6"
      >
        {/* select task */}
        <Form.Item
          name="taskName"
          rules={[{ required: true, message: "Please select a task!" }]}
          className="w-full md:w-3/12"
        >
          <Select
            className="custom-select"
            placeholder="Select a task"
            style={{ width: "100%" }}
          >
            <Select.Option value="sales">Sales</Select.Option>
            <Select.Option value="support">Support</Select.Option>
            <Select.Option value="content">Content</Select.Option>
            <Select.Option value="paperWork">Paper work</Select.Option>
            <Select.Option value="marketing">Marketing</Select.Option>
            <Select.Option value="development">Development</Select.Option>
            <Select.Option value="design">Design</Select.Option>
            <Select.Option value="finance">Finance</Select.Option>
          </Select>
        </Form.Item>
        {/* work hour */}
        <Form.Item
          name="workedHour"
          rules={[
            {
              required: true,
              message: "Please select worked hour!",
            },
          ]}
          className="w-full md:w-3/12"
        >
          <InputNumber
            min={1}
            max={10}
            value={value}
            onChange={handleChange}
            className="custom-input-number"
            placeholder="Select worked hour"
            type="number"
            style={{ width: "100%" }}
          />
        </Form.Item>
        {/* work data */}
        <Form.Item
          name="workedDate"
          rules={[
            {
              required: true,
              message: "Please select a date!",
            },
          ]}
          className="w-full md:w-3/12"
        >
          <DatePicker
            className="custom-date"
            placeholder="Select worked Date"
            style={{ width: "100%" }}
          />
        </Form.Item>
        {/* submit button */}
        <Form.Item className="w-full md:w-2/12">
          <Button
            className="custom-button"
            htmlType="submit"
            style={{ width: "100%" }}
          >
            {loading && <Spin size="small" />} Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
WorkSheetFrom.propTypes = {
  refetch: PropTypes.func.isRequired,
};

export default WorkSheetFrom;
