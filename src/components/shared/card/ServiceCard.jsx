import { Button, Card } from "antd";
import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  return (
    <>
      <Card
        key={service.id}
        bordered={false}
        className="shadow-md rounded-lg hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-4">{service.icon}</div>
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
            {service.title}
          </h3>
          {/* Description */}
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            {service.description}
          </p>
          {/* Button */}
          <Button
            type="primary"
            shape="round"
            className="dark:bg-blue-500 dark:border-blue-500"
          >
            Learn More
          </Button>
        </div>
      </Card>
    </>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;