import React, { FC, useState } from "react";
import { Modal, Input, Flex, message } from "antd";
import { UsersType } from "../types/objectTyped";

const AddUserModal: FC<{
  openedModal: true | false;
  setOpenedModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: React.Dispatch<React.SetStateAction<UsersType[] | []>>;
}> = ({ openedModal, setOpenedModal, setUsers }) => {
  const [nameInput, setNameInput] = useState<string>("");
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");

  const handleOk = async () => {
    if (
      nameInput.trim() === "" ||
      usernameInput.trim() === "" ||
      phoneInput.trim() == "" ||
      emailInput.trim() === ""
    ) {
      message.error("please fill all poly");
    } else {
      setUsers((user) => [
        ...user,
        {
          name: nameInput,
          username: usernameInput,
          phone: phoneInput,
          email: emailInput,
        },
      ]);
      setOpenedModal(false);
    }
  };
  return (
    <>
      <Modal
        open={openedModal}
        title="Add User"
        onCancel={() => setOpenedModal(false)}
        onOk={handleOk}
      >
        <Flex className="flex-col gap-3 capitalize">
          <Input
            placeholder="Name"
            name="Name"
            type="text"
            required
            allowClear
            onChange={(e): void | string => setNameInput(e.target.value)}
          />
          <Input
            placeholder="Username"
            name="Username"
            type="text"
            required
            allowClear
            onChange={(e): void | string => setUsernameInput(e.target.value)}
          />
          <Input
            placeholder="Phone"
            name="Phone"
            type="number"
            required
            allowClear
            onChange={(e): void | number => setPhoneInput(e.target.value)}
          />
          <Input
            placeholder="Email"
            name="Email"
            type="email"
            required
            allowClear
            onChange={(e): void | string => setEmailInput(e.target.value)}
          />
        </Flex>
      </Modal>
    </>
  );
};

export default AddUserModal;
