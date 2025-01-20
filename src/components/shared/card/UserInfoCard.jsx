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
        title={`${employeeInfo?.userName}`}
        description={employeeInfo?.designation}
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
