import { FC, useState, useEffect } from "react";
import { Users } from "../service/Users";
import { Layout, Button, Flex, Menu, Modal, Input } from "antd";
import { Routes, Route } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserAddOutlined,
  UserOutlined,
  InfoCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

//components
import Sider from "../components/Sider";
import UsersTable from "../components/UsersTable";
import AddUserModal from "../components/AddUserModal";
//type
import { UsersType } from "../types/objectTyped";

const Home: FC = () => {
  const [users, setUsers] = useState<UsersType[] | []>([]);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [openedModal, setOpenedModal] = useState<boolean>(false);

  //updateOptions
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [updateName, setUpdateName] = useState<string | undefined>("");
  const [updateUsername, setUpdateUsername] = useState<string | undefined>("");
  const [updatePhone, setUpdatePhone] = useState<string | undefined>("");
  const [updateEmail, setUpdateEmail] = useState<string | undefined>("");

  const handleGetAllGallery = async () => {
    const response = await Users.getAllUsers();
    setUsers(response);
  };

  const handleDeleteUsers = (index: number) => {
    setUsers((user) =>
      //@ts-ignore
      user.filter((item: UsersType, i: number): boolean | void => i !== index)
    );
  };

  const handleUpdateModal = (index: number) => {
    setUpdateModal(true);
    let oneUserInfo = users.find(
      //@ts-ignore

      (item: UsersType, i: number): void | unknown => i == index
    );
    setUpdateName(oneUserInfo?.name);
    setUpdateUsername(oneUserInfo?.username);
    setUpdatePhone(oneUserInfo?.phone);
    setUpdateEmail(oneUserInfo?.email);
  };

  //menuProps
  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    { key: "1", icon: <UserOutlined />, label: "Users" },
    { key: "2", icon: <InfoCircleOutlined />, label: "Information" },
    { key: "3", icon: <MoreOutlined />, label: "More" },
  ];

  useEffect(() => {
    handleGetAllGallery();
  }, []);

  return (
    <>
      <Layout className="h-svh">
        <Sider collapsed={collapsed} />
        <Layout.Sider
          theme="light"
          trigger={null}
          collapsed={true}
          collapsedWidth={50}
          className="block ss:hidden"
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            items={items}
            className="h-full"
          />
        </Layout.Sider>
        <Layout>
          <Layout.Header className="bg-white px-4">
            <Flex
              className="w-full h-full"
              align="center"
              justify="space-between"
            >
              <Button
                className="hidden ss:flex"
                type="primary"
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
              <h1 className="select-none text-lg font-medium">CRUD</h1>
            </Flex>
          </Layout.Header>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Layout.Content className="my-[17px] mx-[16px] min-h-[280px] p-6 bg-white overflow-auto rounded-xl">
                    <Flex
                      className="h-auto rounded-md mb-4 flex flex-col ss:flex-row gap-5"
                      align="center"
                      justify="space-between"
                    >
                      <h1 className="text-xl leading-3">Users-lists</h1>
                      <Button
                        icon={<UserAddOutlined />}
                        onClick={(): boolean | void => setOpenedModal(true)}
                      >
                        Add user
                      </Button>
                      <AddUserModal
                        openedModal={openedModal}
                        setUsers={setUsers}
                        setOpenedModal={setOpenedModal}
                      />
                    </Flex>
                    <UsersTable
                      someUsers={users}
                      handleDeleteUsers={handleDeleteUsers}
                      handleUpdateModal={handleUpdateModal}
                    />
                    <Modal
                      title="Update Information"
                      open={updateModal}
                      onCancel={() => setUpdateModal(false)}
                    >
                      <Flex className="flex-col gap-3 capitalize">
                        <Input
                          placeholder="Name"
                          name="Name"
                          type="text"
                          required
                          allowClear
                          value={updateName}
                          onChange={(e): void | string =>
                            setUpdateName(e.target.value)
                          }
                        />
                        <Input
                          placeholder="Username"
                          name="Username"
                          type="text"
                          required
                          allowClear
                          value={updateUsername}
                          onChange={(e): void | string =>
                            setUpdateUsername(e.target.value)
                          }
                        />
                        <Input
                          placeholder="Phone"
                          name="Phone"
                          type="text"
                          required
                          allowClear
                          value={updatePhone}
                          onChange={(e): void | string =>
                            setUpdatePhone(e.target.value)
                          }
                        />
                        <Input
                          placeholder="Email"
                          name="Email"
                          type="email"
                          required
                          allowClear
                          value={updateEmail}
                          onChange={(e): void | string =>
                            setUpdateEmail(e.target.value)
                          }
                        />
                      </Flex>
                    </Modal>
                  </Layout.Content>
                </>
              }
            />
            <Route
              path="/information"
              element={
                <>
                  {users?.map((item: UsersType, i: number) => (
                    <h1 key={i} className="border">
                      {item?.name}
                    </h1>
                  ))}
                </>
              }
            />
            <Route path="/more" />
          </Routes>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
