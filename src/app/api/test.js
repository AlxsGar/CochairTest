"use server";

import { createRouter } from "next-connect";

const router = createRouter();

const getUsers = async (req, res) => {
  const { id } = req.query;
  const mockUsers = [
    {
      id: 1,
      name: "Michael Phelps",
      position: "Professional swimmer",
      company: "The Pool",
      profilePicture: "https://i.pravatar.cc/300",
      viewed: false,
    },
    {
      id: 2,
      name: "Steve Jobs",
      position: "CEO",
      company: "Apple",
      profilePicture: "https://i.pravatar.cc/301",
      viewed: true,
    },
    {
      id: 3,
      name: "Keanu Reeves",
      position: "Neo",
      company: "The Matrix",
      profilePicture: "https://i.pravatar.cc/302",
      archived: false,
      viewed: false,
    },
    {
      id: 4,
      name: "El Chavo del 8",
      position: "Inquilino",
      company: "La Vecindad",
      profilePicture: "",
      viewed: false,
    },
  ];
  res.status(200).json(mockUsers);
};

router.get(getUsers);
export default router.handler();
export const config = {
  api: {
    externalResolver: true,
  },
};
