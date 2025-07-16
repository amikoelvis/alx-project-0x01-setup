import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Name & Username */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-500 text-sm">@{user.username}</p>
      </div>

      {/* Contact Info */}
      <div className="text-gray-600 space-y-1">
        <p>Email: <span className="text-blue-600">{user.email}</span></p>
        <p>Phone: {user.phone}</p>
        <p>Website: <a href={`https://${user.website}`} className="text-blue-500 hover:underline">{user.website}</a></p>
      </div>

      {/* Address */}
      <div className="mt-4 text-gray-500 text-sm">
        <strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city} {user.address.zipcode}
      </div>

      {/* Company */}
      <div className="mt-4 flex flex-col text-sm text-gray-700">
        <span className="font-semibold">{user.company.name}</span>
        <span className="italic text-gray-500">{user.company.catchPhrase}</span>
      </div>

      {/* Footer (IDs like PostCard) */}
      <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
        <span>User ID: {user.id}</span>
      </div>
    </div>
  );
};

export default UserCard;
