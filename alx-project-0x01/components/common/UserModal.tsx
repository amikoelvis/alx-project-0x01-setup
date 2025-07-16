import React, { useState } from "react";
import { UserData, UserModalProps, UserProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [post, setUser] = useState<UserProps>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // Nested fields like address.street or company.name
    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setUser((prevUser) => ({
        ...prevUser,
        [section]: {
          ...((typeof prevUser[section as keyof UserData] === "object" && prevUser[section as keyof UserData] !== null
            ? prevUser[section as keyof UserData]
            : {}) as UserData["address"] | UserData["company"]),
          [field]: value
        }
      }));
    } else {
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center overflow-auto">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Add New User
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={post.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={post.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={post.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={post.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={post.website}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          {/* Address Section */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
            <input
              type="text"
              name="address.street"
              placeholder="Street"
              value={post.address.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-2"
            />
            <input
              type="text"
              name="address.suite"
              placeholder="Suite"
              value={post.address.suite}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-2"
            />
            <input
              type="text"
              name="address.city"
              placeholder="City"
              value={post.address.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-2"
            />
            <input
              type="text"
              name="address.zipcode"
              placeholder="Zipcode"
              value={post.address.zipcode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Company Section */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
            <input
              type="text"
              name="company.name"
              placeholder="Company Name"
              value={post.company.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-2"
            />
            <input
              type="text"
              name="company.catchPhrase"
              placeholder="Catch Phrase"
              value={post.company.catchPhrase}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-2"
            />
            <input
              type="text"
              name="company.bs"
              placeholder="Business Services"
              value={post.company.bs}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
