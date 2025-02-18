import React, { useState } from "react";
import {  Button, List, notification, Skeleton } from "antd";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";


//
const MessageList = () => {
  const [size, setLoadSize] = useState(0);
  //
  const axiosSecure = useAxiosSecure();
  const { data: messageInfo = [], isLoading,refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/contacts?size=${size}`);
      return data;
    },
  });

const handleLoadMore=(size)=>{
  setLoadSize(size)
  refetch();
}
// 
const handleRemove= async(id)=>{
// 
  const {data} = await axiosSecure.delete(`/contact/${id}`)
  if(data?.deletedCount===1){
    refetch();
    notification.success({
      message:"Message deleted from Database Successfully",
      placement: "topRight",
    });
  }
}
  // 
  const loadMore = !isLoading && (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
        fontFamily:"font-exo2"
      }}
    >
      <Button className="capitalize font-exo2" onClick={()=>handleLoadMore(5)}>loading more</Button>
    </div>
  );

  //
  return (
    <List
      className="demo-loadmore-list overflow-x-auto overflow-y-hidden"
      loading={isLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={messageInfo}
      renderItem={(item) => (
        <List.Item onClick={()=>handleRemove(item?._id)} actions={[<a key="list-loadmore-edit" className="bg-gray-300 rounded-md py-[1px] px-1 text-xs sm:text-sm font-medium flex items-start">Remove</a>]}>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              title={<span className="truncate text-gray-600">Email : {item?.email}</span>}
              description={<p className="">Message : {item?.message}</p>}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default MessageList;
