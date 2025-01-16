import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  notification,
  Spin,
} from "antd";
import { userInfoSaveToDb } from "../../utilitis/utilitis";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const EmployeeDetailsModal = ({
  isModalVisible,
  setIsModalVisible,
  userInfo,
  loading,
  setLoading,
  authMethod,
}) => {
  // auth
  const {
    userSignUp,
    userProfileUpdate,
    userSignInByGoogle,
    userSignInByGithub,
  } = useAuth();
  // navigate
  const navigate = useNavigate();
  // modal btn loading
  const [btnLoading, setBtnLoading] = useState(true);
  // modal data
  console.log("Auth Method--->", authMethod);
  // submit firebase and db
  const handleSubmit = async (values) => {
    // for
    if (authMethod === "github") {
      userSignInByGithub()
        .then((result) => {
          userInfoSaveToDb({
            userEmail: result?.user?.email,
            userName: result?.user?.displayName,
            userImage: result?.user?.photoURL,
            userRole: "employee",
          });
          notification.success({
            message: (
              <p className="text-base font-medium font-rubik text-green-500">
                Successfully logged in using GitHub!
              </p>
            ),
            placement: "topRight",
          });
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    if (authMethod === "google") {
      userSignInByGoogle()
        .then((result) => {
          userInfoSaveToDb({
            userEmail: result?.user?.email,
            userName: result?.user?.displayName,
            userImage: result?.user?.photoURL,
            userRole: "employee",
          });
          notification.success({
            message: (
              <p className="text-base font-medium font-rubik text-green-500">
                Successfully SignIn using Google!
              </p>
            ),
            placement: "topRight",
          });
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    //
    setBtnLoading(!btnLoading);
    // user info obj
    const userData = {
      ...userInfo,
      bank_account_no: values?.bank_account_no,
      salary: values?.salary,
      designation: values?.designation,
    };
    // userSignUp on fireBase
    try {
      await userSignUp(userData?.userEmail, userData?.userPass);
      await userProfileUpdate(userData?.userName, userData?.userImage);
      // data sent to db
      await userInfoSaveToDb(userData);
      notification.success({
        message: (
          <p className="text-base font-medium font-rubik text-green-500">
            🎉 Congrats! Your account has been successfully created!
          </p>
        ),
        placement: "topRight",
      });
      navigate("/dashboard");
    } catch (err) {
      notification.error({
        message: (
          <p className="text-base font-medium font-rubik text-red-500">
            {`${err}`}
          </p>
        ),
        placement: "topRight",
      });
    } finally {
      setLoading(!loading);
      setBtnLoading(btnLoading);
    }

    //  modal visible
    setIsModalVisible(false);
  };

  // hide the modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setLoading(!loading);
    setBtnLoading(btnLoading);
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
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            designation: "Sales Assistant", // Set a default designation
          }}
        >
          <Form.Item
            label="Bank Account Number"
            name="bank_account_no"
            rules={[
              {
                required: true,
                message: "Please enter the bank account number!",
              },
              {
                pattern: /^[0-9]+$/,
                message: "Bank account number must be numeric!",
              },
            ]}
          >
            <Input placeholder="Enter bank account number" />
          </Form.Item>
          {/*  */}
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
              style={{ width: "100%" }}
              placeholder="Enter salary amount"
              min={0}
            />
          </Form.Item>
          {/*  */}
          <Form.Item
            label="Designation"
            name="designation"
            rules={[
              {
                required: true,
                message: "Please select a designation!",
              },
            ]}
          >
            {/*  */}
            <Select placeholder="Select a designation">
              <Option value="Sales Assistant">Sales Assistant</Option>
              <Option value="Social Media Executive">
                Social Media Executive
              </Option>
              <Option value="Digital Marketer">Digital Marketer</Option>
              <Option value="Software Engineer">Software Engineer</Option>
              <Option value="HR Manager">HR Manager</Option>
            </Select>
          </Form.Item>
          {/*  */}
          <Form.Item>
            <Button
              className="bg-green-400 text-sm font-normal font-rubik"
              type="submit"
              htmlType="submit"
              style={{ marginRight: 10 }}
            >
              {!btnLoading && <Spin size="small" />} Submit
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
EmployeeDetailsModal.propTypes = {
  setLoading: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  authMethod: PropTypes.string.isRequired,
};

export default EmployeeDetailsModal;
