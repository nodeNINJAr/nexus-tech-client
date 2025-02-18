import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const DynamicBreadcrumb = () => {
  const location = useLocation();

  // Split the path into segments for dynamic breadcrumb construction
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  // Generate breadcrumb items
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      href: url,
      title: pathSnippets[index],
    };
  });

  // Add a Home breadcrumb manually
  const items = [
    {
      href: "/",
      title: <HomeOutlined className="text-gray-800 dark:text-gray-200" />,
    },
    ...breadcrumbItems.map((item, idx) => ({
      href: item.href,
      title: (
        <>
          <span className="flex flex-nowrap text-gray-800 dark:text-gray-200">{item.title}</span>
        </>
      ),
    })),
  ];

  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-md ">
      <Breadcrumb
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
        separator=">"
        items={items}
       
      />
    </div>
  ); 
};

export default DynamicBreadcrumb;
