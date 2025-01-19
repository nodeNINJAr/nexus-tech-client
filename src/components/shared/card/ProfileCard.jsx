import React from "react";
import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import Spinner from "../loader/Spinner";


// 

const ProfileCard = ({userInfo,isLoading}) => {

    if(isLoading) return <Spinner/>
    // 
  return (
    <Card className="lg:w-1/2 mx-auto">
      <div className="flex flex-col items-center pb-10 capitalize">
        <img
          alt="Bonnie image"
          src={userInfo?.userImage}
          className="mb-3 rounded-full shadow-lg h-44 w-44 object-cover"
        />
        <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white capitalize">
          {userInfo?.userName}
        </h5>
        <span className="mb-2 bg-[#F6FFED] text-[#29ec2f] border border-[#29ec2f] rounded-lg px-4 py-1 font-normal font-rubik text-sm">
          Role : {userInfo?.userRole}
        </span>
        <span className="text-sm dark:text-gray-400 bg-[#FFF2E8] border border-[#ffb77f] rounded-lg px-4 py-1 font-normal font-rubik text-[#ffb77f] hover:text-[#ffac6d]">
          designation : {userInfo?.designation}
        </span>
        <div className="mt-4 sm:flex space-y-3 sm:space-y-0 sm:space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Upadate image
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
           Forgot Password
          </a>
        </div>
      </div>
    </Card>
  );
};
ProfileCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  userInfo: PropTypes.shape({
    userImage: PropTypes.string,
    userName: PropTypes.string,
    userRole: PropTypes.string,
    designation: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;

