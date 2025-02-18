import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
const { Meta } = Card;

//
const UserInfoCard = ({ employeeInfo }) => (
  <Card
    className="w-full"
    cover={<img className="h-44 lg:h-56 object-cover object-top" alt={employeeInfo?.userName} src={employeeInfo?.userImage} />}
  >
      <Meta
        className="capitalize"
        title={<h3 className="text-gray-800 dark:text-gray-200">{employeeInfo?.userName}</h3>}
        description={<p className="text-gray-600">{employeeInfo?.designation}</p>}
      />
  </Card>
);
UserInfoCard.propTypes = {
  employeeInfo: PropTypes.shape({
    userImage: PropTypes.string,
    userName: PropTypes.string,
    designation: PropTypes.string,
  })
};

export default UserInfoCard;
