import React from "react";
import { Button, Table, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { UsersType } from "../types/objectTyped";

type UsersTableType = {
  someUsers: UsersType[];
  handleDeleteUsers: (index: number) => boolean | void;
  handleUpdateModal: (index: number) => void;
};

const UsersTable: React.FC<UsersTableType> = ({
  someUsers,
  handleDeleteUsers,
  handleUpdateModal,
}) => {
  return (
    <>
      <Table dataSource={someUsers} scroll={{ x: 1180 }}>
        <Table.Column
          title="Name"
          dataIndex="name"
          key="id"
          className="text-xs ss:text-sm capitalize"
        />
        <Table.Column
          title="Username"
          dataIndex="username"
          key="username"
          className="text-xs ss:text-sm"
          width={270}
        />
        <Table.Column
          title="Phone"
          dataIndex="phone"
          key="id"
          className="text-xs ss:text-sm"
          width={250}
        />
        <Table.Column
          title="Email"
          dataIndex="email"
          key="id"
          className="text-xs ss:text-sm"
          width={250}
        />
        <Table.Column
          title="Action"
          dataIndex="action"
          fixed="right"
          className="text-sm"
          width={110}
          //@ts-ignore
          render={(_: undefined, item, i) => {
            return (
              <Space size="middle">
                <Button
                  icon={<DeleteOutlined />}
                  onClick={() => handleDeleteUsers(i)}
                />
                <Button
                  icon={<EditOutlined />}
                  onClick={() => handleUpdateModal(i)}
                />
              </Space>
            );
          }}
        />
      </Table>
    </>
  );
};

export default UsersTable;
