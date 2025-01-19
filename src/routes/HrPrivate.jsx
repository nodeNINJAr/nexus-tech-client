import React from "react";
import PropTypes from "prop-types";
import useRole from "../components/hooks/useRole";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/shared/loader/Spinner";

const HrPrivate = ({children}) => {
  const [userRole, isLoading] = useRole();
  const location = useLocation();
  if (isLoading) return <Spinner />;
  if (userRole === "hr") return children;
  return <Navigate to="/login" state={{ from: location }} replace="true" />;
};
HrPrivate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HrPrivate;

