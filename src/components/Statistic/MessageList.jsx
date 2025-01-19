import React from "react";
import {  Button, List, Skeleton } from "antd";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";


//
const MessageList = () => {
  //
  const axiosSecure = useAxiosSecure();
  const { data: messageInfo = [], isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data } = await axiosSecure("/contacts");
      return data;
    },
  });

  const loadMore = !isLoading && (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button>loading more</Button>
    </div>
  );

  //
  return (
    <List
      className="demo-loadmore-list overflow-x-auto"
      loading={isLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={messageInfo}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-edit" className="bg-gray-300 rounded-md py-[1px] px-1 text-xs sm:text-sm font-medium">Remove</a>]}>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              title={<span className="truncate">Email : {item?.email}</span>}
              description={<p className="">Message : {item?.message}</p>}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default MessageList;
