import React, { useEffect, useState } from "react";
import { Modal, Button, notification, Form, InputNumber, Spin } from "antd";

import PropTypes from "prop-types";
import useAxiosSecure from "../hooks/useAxiosSecure";

// 
const UpdateSalaryModal = ({ modalOpen, setModalOpen, salary,refetch }) => {
    // 
    const axiosSecure = useAxiosSecure();
    // 
    const [loading,setLoading] = useState(false)
  // for showing default value on input
  const [form] = Form.useForm();
  //
  useEffect(() => {
    if (salary?.salary) {
      form.setFieldsValue({
        salary: salary?.salary,
      });
    }
  }, [salary, form]);


  //
  const handlePayIncrease = async(values) => {
    setLoading(!loading)
    const salaryInfo ={
        _id:salary?._id,
        currentSalary:salary?.salary,
        newSalary:values?.salary,
    }
    // 
    try{
        await axiosSecure.patch("/pay/salary-update", salaryInfo);
        refetch();
        setModalOpen(false); 
        notification.success({
            message: "Salary Updated",
            description: `The salary of ${salary?.userName} has been updated to ${values?.salary}$`,
          });
    }
    catch(err){
        notification.error({
            message: "Invalid Salary",
            description:`${err?.response?.data?.message}`,
          });
    }
    finally{
        setLoading(false)
    }

  };

  // hide the modal
  const handleCancel = () => {
    setModalOpen(false);
    setLoading(false)
  };

  //
  return (
    <Modal
      title={`Update Salary for ${salary?.userName}`}
      style={{
        top: 20,
      }}
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      footer={null}
    >
      <Form form={form} onFinish={handlePayIncrease}>
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
          />
        </Form.Item>
        {/*  button */}
        <Form.Item>
          <Button
            color="cyan" variant="outlined"
            className=" text-sm font-normal font-rubik"
            type="submit"
            htmlType="submit"
            style={{ marginRight: 10 }}
          >
            {loading &&  <Spin size="small" />}
             Update
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
  );
};
UpdateSalaryModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  refetch: PropTypes.func,
  salary: PropTypes.shape({
      _id: PropTypes.string,
      salary: PropTypes.number,
      userName: PropTypes.string,
  }),
};
export default UpdateSalaryModal;
