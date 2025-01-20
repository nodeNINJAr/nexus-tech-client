import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Dialog, DialogPanel, Input, Select } from "@headlessui/react";
import clsx from "clsx";
import { IoChevronDownSharp } from "react-icons/io5";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { notification, Spin } from "antd";
import { RxCross2 } from "react-icons/rx";

//
const UpdateModal = ({ record, refetch }) => {
  //custom axios
  const axiosSecure = useAxiosSecure();
  const { _id, workedHour, workedDate, taskName } = record || {};
  //
  const [loading, setLoading] = useState(false);
  //
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    //
    const taskName = e.target.task.value;
    const workedHour = e.target.workedHour.value;
    const workedDate = e.target.workedDate.value;
    //pay load
    const workData = {
      employeeEmail: record?.employeeEmail,
      taskName: taskName,
      workedHour: parseInt(workedHour),
      workedDate: workedDate,
    };
    try {
      const { data } = await axiosSecure.put(`/worksheet/${_id}`, workData);
      if (data?.modifiedCount === 1) {
        refetch();
        notification.success({
          message: (
            <p className="text-base font-medium font-rubik text-green-500">
              Your work updated successfully
            </p>
          ),
          placement: "topRight",
        });
        setLoading(loading);
        close();
      }
      //
      if (data?.modifiedCount === 0) {
        setLoading(loading);
        notification.info({
          message: (
            <p className="text-base font-medium font-rubik text-orange-400">
              For Update You need to change the input value
            </p>
          ),
          placement: "topRight",
        });
      }
    } catch (err) {
      // console.log(err);
    }
  };

  //
  return (
    <>
      <Button
        onClick={open}
        className="cursor-pointer bg-[#F6FFED] text-[#29ec2f] border border- rounded-lg px-4 py-1 font-normal font-rubik"
      >
        Update
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <form
          onSubmit={handleUpdate}
          className="fixed inset-0 z-10 w-screen overflow-y-auto"
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex justify-between items-start">
                <h1 className="text-lg font-poppins font-semibold pb-3 underline">
                  Update Your Existing Work
                </h1>
                <span onClick={close}  className="text-base text-gray-700 hover:text-red-400 cursor-pointer"><RxCross2/></span>
              </div>
              {/* task */}
              <div className="relative">
                <Select
                  name="task"
                  defaultValue={taskName}
                  className={clsx(
                    "mt-3 block w-full appearance-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25",
                    // Make the text of each option black on Windows
                    "*:text-black"
                  )}
                >
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="content">Content</option>
                  <option value="paperWork">Paper work</option>
                  <option value="demo">Demo</option>
                </Select>
                <IoChevronDownSharp
                  className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
                  aria-hidden="true"
                />
              </div>
              {/* worked hour */}
              <Input
                defaultValue={workedHour}
                name="workedHour"
                type="number"
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                )}
              />
              {/* date */}
              <Input
                defaultValue={workedDate}
                name="workedDate"
                type="date"
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                )}
              />
              {/* button */}
              <div className="mt-4">
                <Button
                  type="submit"
                  className="hover:text-white inline-flex items-center gap-2 rounded-md bg-green-400 py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-black data-[open]:bg-gray-700"
                >
                  {loading && <Spin size="small" />} Update Work
                </Button>
              </div>
            </DialogPanel>
          </div>
        </form>
      </Dialog>
    </>
  );
};
UpdateModal.propTypes = {
  record: PropTypes.shape({
    employeeEmail: PropTypes.string,
    workedHour: PropTypes.number,
    workedDate: PropTypes.string,
    taskName: PropTypes.string,
  }).isRequired,
  refetch: PropTypes.func.isRequired,
};

export default UpdateModal;
