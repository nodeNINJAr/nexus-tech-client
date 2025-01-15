import React from "react";
import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import dayjs from "dayjs";
const WorkSheetFrom = () => {
  //
  const onSubmit = (values) => {
    console.log("Form Values:", values);
    //
    const extractedDate = dayjs(values?.todayDate?.$d);
    // Format the date for the database
    const formattedDate = extractedDate.format("YYYY-MM-DD");
    console.log(extractedDate, formattedDate);
  };

  //   error
  const onFinishFailed = (errorInfo) => {
    console.error("Form submission failed:", errorInfo); // Handles validation errors
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
            name="todayTask"
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
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          {/* work hour */}
          <Form.Item
            name="workHour"
            rules={[
              {
                required: true,
                message: "Please select worked hour!",
              },
            ]}
            className="w-full md:w-3/12"
          >
            <InputNumber
              className="custom-input-number"
              placeholder="Select worked hour"
              type="number"
              style={{ width: "100%" }}
            />
          </Form.Item>
          {/* work data */}
          <Form.Item
            name="todayDate"
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
  );
};

export default WorkSheetFrom;
