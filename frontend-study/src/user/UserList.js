import React from "react";

const UserComponent = ({ id, username }) => {
  return (
    <div>
      {username}({id})
    </div>
  );
};

const UserList = () => {
  const userArray = [
    {
      id: 0,
      username: "yunseong",
    },
    {
      id: 1,
      username: "kakao",
    },
    {
      id: 2,
      username: "discord",
    },
  ];

  return (
    <>
      {userArray.map((item) => (
        <UserComponent id={item.id} username={item.username} />
      ))}
    </>
  );
};

export default UserList;
