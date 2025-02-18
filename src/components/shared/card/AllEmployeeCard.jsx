import { Avatar, Card } from "antd";
import PropTypes from "prop-types";
const { Meta } = Card;

const AllEmployeeCard = ({ user }) => {
  return (
    <Card
      cover={
        <img
          className="object-top object-cover w-full h-36 lg:h-44"
          alt={user?.userName}
          src={user?.userImage}
        />
      }
    >
      <Meta
     
        title={
          <div className="flex justify-between capitalize flex-wrap ">
            <span className="text-base font-rubik -mt-[2px] text-gray-700 dark:text-gray-300">{user?.userName}</span> <span className="text-sm font-roboto truncate text-gray-700 dark:text-gray-400">{user?.designation}</span>
          </div>
        }
        description={
          <div className="flex justify-between items-start gap-1 flex-wrap capitalize text-sm font-roboto font-medium truncate">
            <span className="bg-[#F6FFED] rounded-full px-1 truncate dark:bg-gray-600">
              salary : {user?.salary} $
            </span>{" "}
            <span className="bg-[#F6FFED] dark:bg-gray-600 rounded-full px-1"> {user?.userRole}</span>{" "}
            <span className="bg-[#F6FFED] dark:bg-gray-600 rounded-full px-1">{user?.fired ? "fired" : "Active"}</span>
          </div>
        }
      />
    </Card>
  );
};
AllEmployeeCard.propTypes = {
  user: PropTypes.shape({
    userImage: PropTypes.string,
    userName: PropTypes.string,
    designation: PropTypes.string,
    salary: PropTypes.number,
    userRole: PropTypes.string,
    fired: PropTypes.bool,
  }).isRequired,
};

export default AllEmployeeCard;
