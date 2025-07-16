import React, { useState } from "react";
import { UserProps, UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

interface UsersPageProps {
  posts: UserProps[];
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return { props: { posts } };
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setUsersList] = useState<UserProps[]>(posts);

  const handleAddUser = (newUser: UserData) => {
    const addedUser: UserProps = {
      ...newUser,
      id: post.length + 1 // auto-generate ID
    };
    setUsersList([...post, addedUser]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800"
        >
          Add User
        </button>
      </div>

      {/* Grid of User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {post.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export default Users;
