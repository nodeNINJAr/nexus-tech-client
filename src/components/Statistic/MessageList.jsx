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
      className="demo-loadmore-list"
      loading={isLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={messageInfo}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-edit">Delete</a>]}>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              title={<a>Email : {item?.email}</a>}
              description={<>Message : {item?.message}</>}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default MessageList;
