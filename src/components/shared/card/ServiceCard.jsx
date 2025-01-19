import { Button, Card } from "antd";
import React from "react";
import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {
  return (
    <>
      <Card
        key={service.id}
        bordered={false}
        className="shadow-md rounded-lg hover:shadow-lg transition duration-300 "
      >
        <div className="flex flex-col items-center text-center ">
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Button type="primary" shape="round">
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

