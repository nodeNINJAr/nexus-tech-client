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
import {
  fetchUserRoleFromAPI,
  userInfoSaveToDb,
} from "../../utilitis/utilitis";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const { Option } = Select;

//
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
    userSignOut,
  } = useAuth();
  //
  const axiosPublic = useAxiosPublic();
  // navigate
  const navigate = useNavigate();
  // modal btn loading
  const [btnLoading, setBtnLoading] = useState(true);
  // modal data
  // submit firebase and db
  const handleSubmit = async (values) => {
    setBtnLoading(!btnLoading);
    // for github
    if (authMethod === "github") {
      try {
        const { user } = await userSignInByGithub();
        //  checking if employee fired
        const { data } = await axiosPublic.get(`/fired/${user?.email}`);
        if (data?.fired) {
          notification.info({
            message: (
              <p className="text-base font-medium font-rubik text-red-500">
                Your employment with NexusTech has been terminated. We wish you
                the best in your future endeavors.
              </p>
            ),
            placement: "topRight",
          });
          userSignOut();
          setIsModalVisible(false);
          return;
        }
        if (user?.email) {
          await userInfoSaveToDb({
            userEmail: user?.email,
            userName: user?.displayName,
            userImage: user?.photoURL,
            userRole: "employee",
            bank_account_no: values?.bank_account_no,
            salary: values?.salary,
            designation: values?.designation,
            term: true,
          });
          notification.success({
            message: (
              <p className="text-base font-medium font-rubik text-green-500">
                Successfully logged in using GitHub!
              </p>
            ),
            placement: "topRight",
          });
          navigate("/dashboard/work-sheet");
        } else {
          await userSignOut();
          notification.info({
            message: (
              <p className="text-base font-medium font-rubik text-red-500">
                Your github account have no added gmail try other options
              </p>
            ),
            placement: "topRight",
          });
          setIsModalVisible(false);
          return;
        }
      } catch (err) {
        notification.error({
          message: (
            <p className="text-base font-medium font-rubik text-green-500">
              Some probem with github login refresh and try again
            </p>
          ),
          placement: "topRight",
        });
      } finally {
        setBtnLoading(true);
      }
      return;
    }

    if (authMethod === "google") {
      try {
        const { user } = await userSignInByGoogle();
        //  checking if employee fired
        const { data } = await axiosPublic.get(`/fired/${user?.email}`);
        if (data?.fired) {
          notification.info({
            message: (
              <p className="text-base font-medium font-rubik text-red-500">
                Your employment with NexusTech has been terminated. We wish you
                the best in your future endeavors.
              </p>
            ),
            placement: "topRight",
          });
          userSignOut();
          setIsModalVisible(false);
          return;
        }
        if (user?.email) {
          userInfoSaveToDb({
            userEmail: user?.email,
            userName: user?.displayName,
            userImage: user?.photoURL,
            userRole: "employee",
            bank_account_no: values?.bank_account_no,
            salary: values?.salary,
            designation: values?.designation,
            term: true,
          });
          notification.success({
            message: (
              <p className="text-base font-medium font-rubik text-green-500">
                Successfully SignIn using Google!
              </p>
            ),
            placement: "topRight",
          });
          navigate("/dashboard/work-sheet");
        }
      } catch (err) {
        notification.error({
          message: (
            <p className="text-base font-medium font-rubik text-green-500">
              Some probem with google login refresh and try again
            </p>
          ),
          placement: "topRight",
        });
      } finally {
        setBtnLoading(true);
      }
      return;
    }

    // user info obj
    const userData = {
      ...userInfo,
      bank_account_no: values?.bank_account_no,
      salary: values?.salary,
      designation: values?.designation,
      userPass: null,
    };
    // userSignUp on fireBase
    try {
      await userSignUp(userInfo?.userEmail, userInfo?.userPass);
      await userProfileUpdate(userInfo?.userName, userInfo?.userImage);
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

      // Fetch role dynamically if not already available
      const userRole = await fetchUserRoleFromAPI(userInfo?.userEmail);
      // Navigate based on role
      switch (userRole) {
        case "admin":
          navigate("/dashboard");
          break;
        case "hr":
          navigate("/dashboard/employee-list");
          break;
        case "employee":
          navigate("/dashboard/work-sheet");
          break;
        default:
          notification.error({
            message: "Role not recognized. Contact support.",
            placement: "topRight",
          });
      }
      //
    } catch (err) {
      notification.error({
        message: (
          <p className="text-base font-medium font-rubik text-red-500">
            {`${err.message.split("Firebase:").join(" ")}`}
          </p>
        ),
        placement: "topRight",
      });
    } finally {
      setBtnLoading(true);
      setLoading(!loading);
    }
    //  modal visible
    setIsModalVisible(false);
  };

  // hide the modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setLoading(false);
    setBtnLoading(true);
  };
  //
  return (
    <>
      <Modal
        title={
          <div className="flex justify-between items-start gap-2 truncate text-xl font-roboto">
            Employee Details{" "}
            {authMethod && (
              <p className="text-[7px] font-semibold font-roboto capitalize text-red-500 mr-4 mt-2 leading-3 whitespace-pre-line">
                ** already have an account ? by {authMethod} don't panic just
                provide the info
              </p>
            )}
          </div>
        }
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
                pattern: /^\d{10}$/,
                message: "Bank account number must be exactly 10 digits!",
              },
            ]}
          >
            <Input
              placeholder="Enter bank account number"
              className="rounded-lg  border-gray-300"
            />
          </Form.Item>
          {/*  */}
          <Form.Item
            label="Salary $"
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
              max={550}
              min={100}
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
  setLoading: PropTypes.func,
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  loading: PropTypes.bool,
  authMethod: PropTypes.string,
};

export default EmployeeDetailsModal;
