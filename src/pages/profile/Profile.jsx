import React from "react";
import ProfileCard from "../../components/shared/card/ProfileCard";
import useAuth from "../../components/hooks/useAuth";
import useUser from "../../components/hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  //
  const { data: profileInfo = [], isLoading } = useQuery({
    queryKey: ["all-users", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-users/${user?.email}`);
      return data;
    },
  });
  //
  return (
    <div className="py-6">
      <Helmet>
        <title>Profile || NexusTech</title>
      </Helmet>
      <ProfileCard userInfo={profileInfo} isLoading={isLoading} />
    </div>
  );
};

export default Profile;
