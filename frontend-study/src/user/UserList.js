import React from "react";

const UserComponent = ({ element }) => {
  return (
    <div>
      {element.username}({element.id})
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
      {userArray.map((element) => (
        <UserComponent user={element} />
      ))}
    </>
  );
};

export default UserList;
