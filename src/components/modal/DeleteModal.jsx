import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "antd";

//
const DeleteModal = ({ text, handleDelete, record }) => {

    // 
  return (
    <>
      <Button
        className="hover:modal-button font-semibold font-rubik bg-red-200 p-3 rounded-lg text-sm text-black shadow-none h-0"
        onClick={() => {
          Modal.confirm({
            title: "Confirm Deletion",
            content:
              "Are you sure you want to delete this item? This action cannot be undone",
            okText: "Delete It",
            onOk: () => {
              handleDelete(record);
            },
            cancelText: "Cancel",
            footer: (_, { OkBtn, CancelBtn }) => (
              <>
                <CancelBtn />
                <OkBtn     />
              </>
            ),
          });
        }}
      >
        {text}
      </Button>
    </>
  );
};
DeleteModal.propTypes = {
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired,
};

export default DeleteModal;

