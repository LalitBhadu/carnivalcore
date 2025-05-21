"use client";

import { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import Modal from "../../Components/Common/Modal";

// Sample CarnivalCore Team Data
const teamMembers = [
  {
    _id: "1",
    name: "Ava Monroe",
    email: "ava@carnivalcore.com",
    mobile: "9876543210",
    city: "Los Angeles",
    states: "California",
    imageUrl: "https://i.pravatar.cc/300?img=32",
  },
  {
    _id: "2",
    name: "Luca Rivera",
    email: "luca@carnivalcore.com",
    mobile: "9876543211",
    city: "New York",
    states: "New York",
    imageUrl: "https://i.pravatar.cc/300?img=12",
  },
  {
    _id: "3",
    name: "Zara Blake",
    email: "zara@carnivalcore.com",
    mobile: "9876543212",
    city: "Miami",
    states: "Florida",
    imageUrl: "https://i.pravatar.cc/300?img=28",
  },
  {
    _id: "4",
    name: "Kai Nakamura",
    email: "kai@carnivalcore.com",
    mobile: "9876543213",
    city: "Tokyo",
    states: "Japan",
    imageUrl: "https://i.pravatar.cc/300?img=45",
  },
  {
    _id: "5",
    name: "Nova Bennett",
    email: "nova@carnivalcore.com",
    mobile: "9876543214",
    city: "Paris",
    states: "France",
    imageUrl: "https://i.pravatar.cc/300?img=49",
  },
];

const TeamCards = ({ member, index, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="cursor-pointer relative group rounded overflow-hidden shadow-lg border border-gray-200"
      onClick={() => onClick(member.imageUrl)}
    >
      {!loaded ? (
        <div className="animate-pulse bg-gray-200 h-48 w-full rounded" />
      ) : (
        <>
          <img
            src={member.imageUrl}
            alt={`Team ${index}`}
            className="object-cover object-top w-full h-[350px] transition-transform group-hover:scale-105 duration-300"
          />
          <div className="p-3 bg-white">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">Email: {member.email}</p>
            <p className="text-sm text-gray-600">Phone: {member.mobile}</p>
            <p className="text-sm text-gray-600">City: {member.city}</p>
            <p className="text-sm text-gray-600">State: {member.states}</p>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-sm font-medium">View Full Image</p>
          </div>
        </>
      )}
    </div>
  );
};

const Team = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImageUrl("");
  };

  return (
    <Layout>
      {/* Banner */}
      <div
        className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/background/fun-fact-bg-image.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <h1 className="relative text-white text-2xl md:text-5xl font-bold z-10">
          Meet the CarnivalCore Team
        </h1>
      </div>

      {/* Gallery */}
      <div className="p-4 bg-white min-h-screen">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Our Fashion Visionaries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <TeamCards
              key={member._id}
              member={member}
              index={index}
              onClick={openModal}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Team;
