import React from "react";
import Userdata from "../../data/userdata";
const Profile = () => {
  const user = Userdata[0];

  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="flex items-center gap-6">
        <img
          src={user.avatar}
          alt={user.fullName}
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.fullName}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">Joined: {user.joinedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
