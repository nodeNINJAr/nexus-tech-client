import React from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { CheckCircleTwoTone, WarningTwoTone  } from '@ant-design/icons';

const ProfileHover = () => {
 const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  //
  const { data: profileInfo ={}, isLoading } = useQuery({
    queryKey: ["all-users", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-users/${user?.email}`);
      return data;
    },
  });

  //
  return (
    <div className="relative inline-block group">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 group-hover:scale-110 mr-2">
        <img
          src={profileInfo?.userImage}
          alt={profileInfo?.userName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Card (Hidden by Default) */}
      <div className=" z-50 absolute top-14 right-2 transform bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-64 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={profileInfo?.userImage}
            alt={profileInfo?.userName}
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 dark:border-blue-400"
          />
        </div>
        {/* Profile Details */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
             {profileInfo?.userName} <span>{profileInfo?.isVerified?<CheckCircleTwoTone twoToneColor="#52c41a" />:<WarningTwoTone twoToneColor="red"/>}</span>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
             {profileInfo?.designation}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
             {profileInfo?.userEmail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHover;