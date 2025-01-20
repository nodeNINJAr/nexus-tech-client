import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "antd";

//
const ConfirmationModal = ({ title, content, okText, text, handleAction, record }) => {

    // 
  return (
    <>
      <Button
        className={`${record?.fired && "pointer-events-none bg-[#ffd9bd] text-[#ff8b32]"} cursor-pointer bg-[#FFF2E8] border border-[#ffb77f] rounded-lg px-4 py-1 font-normal font-rubik text-[#ffb77f] hover:text-[#ffac6d]`}
        onClick={() => {
          Modal.confirm({
            title: `${title}`,
            content:`${content}`
              ,
            okText: `${okText}`,
            onOk: () => {
              handleAction(record);
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
ConfirmationModal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  record: PropTypes.string,
  handleAction: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  okText: PropTypes.string.isRequired,

};

export default ConfirmationModal;

