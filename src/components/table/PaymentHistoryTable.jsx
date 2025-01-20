import { Pagination, Table } from "antd";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../shared/loader/Spinner";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



// 
const PaymentHistoryTable = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
// 
const [currentPage, setCurrentPage] = useState(1); // Track the current page
const [pageSize, setPageSize] = useState(5); // Set number of items per page

// 
  const { data, isLoading, isError } = useQuery({
    queryKey: ['paymentHistory', currentPage, pageSize],  // Pass the queryKey as an object
    queryFn: async() => {
      const {data} = await axiosSecure(`/payment-history/${user?.email}?page=${currentPage}&limit=${pageSize}`);
      return data; 
    } 
  });

  // 
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize); 
  };

  //
  const columns = [
    {
      title: "Month Of Salary",
      key: "month",
      render: (_, record) => <p>{record?.month}</p>,
    },
    {
      title: "Year Of Salary",
      key: "year",
      render: (_, record) => <p>{record?.year}</p>,
    },
    {
      title: "Amount",
      key: "salary",
      render: (_, record) => (
        <p className="font-rubik font-normal capitalize">{record?.salary} $</p>
      ),
    },
    {
      title: "Transaction Id",
      key: "paymentIntentId",
      render: (_, record) => <p>{record?.paymentIntentId}</p>,
    },
  ];
  //
  if (isLoading) return <Spinner />;
  if (isError) {
    return <div>Error loading data</div>;
  }
  //
  return (
    <>
      <Table
        className="whitespace-nowrap"
        columns={columns}
        pagination={false}
        dataSource={data?.paymentsInfo || []}
        rowKey="paymentIntentId" 
      />
      <Pagination
        style={{ marginTop:"20px", marginBottom:"10px"}}
        current={data?.currentPage}
        total={data?.totalRecords}
        pageSize={pageSize}
        onChange={handlePageChange}
        showSizeChanger
        pageSizeOptions={['2','5', '10', '15', '20']}
      />
    </>
  );
};
PaymentHistoryTable.propTypes = {
  payHistory: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default PaymentHistoryTable;
