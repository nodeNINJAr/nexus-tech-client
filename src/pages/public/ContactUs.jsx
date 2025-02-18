import React, { useState } from "react";
import { Form, Input, Button, notification, message, Spin } from "antd";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const [form] = Form.useForm();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axiosPublic.post("/contact", values);
      notification.success({
        message: "Message Sent",
        description:
          "Thank you for reaching out. We will get back to you shortly.",
        placement: "topRight",
      });
      form.resetFields();
    } catch (err) {
      message.error(`${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-roboto min-h-screen flex flex-col items-center py-10 md:py-16 dark:bg-gray-900">
      <Helmet>
        <title>Contact Us || NexusTech</title>
      </Helmet>

      {/* Company Info */}
      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 sm:w-8/12 lg:w-6/12 mb-8 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
        <h2 className="font-bold text-gray-800 mb-4 font-rubik text-3xl dark:text-white">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-2 dark:text-gray-400">
          📍 <strong>Address:</strong> 123 Dummy Street, Cityville, Country
        </p>
        <p className="text-gray-600 mb-2 dark:text-gray-400">
          📞 <strong>Phone:</strong> +1 (234) 567-890
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          ✉️ <strong>Email:</strong> contact@dummycompany.com
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 sm:w-8/12 lg:w-6/12 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-rubik dark:text-white">
          Send Us a Message
        </h3>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
          {/* Email Field */}
          <Form.Item
            label={<span className="dark:text-gray-400">Email</span>}
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
                type: "email",
              },
            ]}
          >
            <Input
              placeholder="Your Email"
              className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
          </Form.Item>

          {/* Message Field */}
          <Form.Item
            label={<span className="dark:text-gray-400">Message</span>}
            name="message"
            rules={[
              {
                required: true,
                message: "Please enter your message!",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Your Message"
              className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full dark:bg-blue-600 dark:border-blue-600"
            >
              {loading && <Spin size="small" />} Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;