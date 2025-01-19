import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  Button,
  Form,
  InputNumber,
  Select,
  notification,
  Spin,
} from "antd";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
const { Option } = Select;

const PayModal = ({ isModalVisible, setIsModalVisible, payDetails }) => {
  //  user data from firebase
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // for showing default value on input
  const [form] = Form.useForm();
  //
  useEffect(() => {
    if (payDetails?.salary) {
      form.setFieldsValue({
        salary: payDetails?.salary,
        designation: payDetails?.designation,
      });
    }
  }, [payDetails, form]);

  // modal btn loading
  const [btnLoading, setBtnLoading] = useState(true);
  // submit firebase and db
  const handleSubmit = async (values) => {
    setBtnLoading(!btnLoading);
    //
    const payRequestedData = {
      employeeId: payDetails?._id,
      employeeName: payDetails?.userName,
      salary: values?.salary,
      month: values?.month,
      year: values?.year,
      hrEmail: user?.email,
    };
    //  pay request send to backend
    try {
      const { data } = await axiosSecure.post(
        "/payment/request",
        payRequestedData
      );
      if (data?.paymentRequest?.insertedId) {
        notification.success({
          message: (
            <p className="text-base font-medium font-rubik text-green-500">
              {data?.message}
            </p>
          ),
          placement: "topRight",
        });
      }
    } catch (err) {
      if (err?.status === 409) {
        notification.error({
          message: (
            <p className="text-base font-medium font-rubik text-green-500">
              {err?.response?.data?.message}
            </p>
          ),
          placement: "topRight",
        });
      }
    } finally {
      setBtnLoading(btnLoading);
      //  modal visible
      setIsModalVisible(false);
    }
  };

  // hide the modal
  const handleCancel = () => {
    setBtnLoading(btnLoading);
    setIsModalVisible(false);
  };

  //
  return (
    <>
      <Modal
        title="Employee Details"
        open={isModalVisible}
        // onOk={handleSubmit}
        onCancel={handleCancel}
        footer={null} // Disable default footer to use custom buttons in the form
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Salary"
            name="salary"
            rules={[
              {
                required: true,
                message: "Please enter the salary!",
              },
            ]}
          >
            <InputNumber
              disabled
              style={{ width: "100%" }}
              placeholder="Enter salary amount"
            />
          </Form.Item>
          {/*  */}
          <Form.Item label="Designation" name="designation">
            {/* designation */}
            <Select disabled placeholder="Select a designation">
              <Option value="Sales Assistant">Sales Assistant</Option>
              <Option value="Social Media Executive">
                Social Media Executive
              </Option>
              <Option value="Digital Marketer">Digital Marketer</Option>
              <Option value="Software Engineer">Software Engineer</Option>
              <Option value="HR Manager">HR Manager</Option>
            </Select>
          </Form.Item>
          {/* Month Selection */}
          <Form.Item
            label="Month"
            name="month"
            rules={[{ required: true, message: "Please select a month!" }]}
          >
            <Select placeholder="Select a month">
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => (
                <Option key={index + 1} value={month}>
                  {month}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {/* Year Selection */}
          <Form.Item
            label="Year"
            name="year"
            rules={[{ required: true, message: "Please select a year!" }]}
          >
            <Select placeholder="Select a year">
              {[2025, 2026, 2027, 2028, 2029, 2030].map((year) => (
                <Option key={year} value={year}>
                  {year}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {/* pay button */}
          <Form.Item>
            <Button
              className="bg-green-400 text-sm font-normal font-rubik"
              type="submit"
              htmlType="submit"
              style={{ marginRight: 10 }}
            >
              {!btnLoading && <Spin size="small" />} Pay
            </Button>
            <Button
              className="text-sm font-normal font-rubik"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
PayModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
  payDetails: PropTypes.shape({
    _id: PropTypes.string,
    salary: PropTypes.number,
    designation: PropTypes.string,
    employeeName: PropTypes.string,
    userName: PropTypes.string,
  }).isRequired,
  userInfo: PropTypes.object,
  authMethod: PropTypes.string,
};

export default PayModal;
