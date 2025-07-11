import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

// CRUD OPERATION

// POST Request
const createUser = async () => {
  // Create the single user
  const user = await prisma.profile.create({
    data: {
      name: "Monika",
      email: "monikadd7232@gmail.com",
      Phone: 9389,
    },
  });

  // Create the multiple user
  const manyUser = await prisma.profile.createMany({
    data: [
      {
        name: "John",
        email: "john1252@gmail.com",
        Phone: 9875,
      },
      {
        name: "Rohan",
        email: "rohan1252@gmail.com",
        Phone: 4578,
      },
      {
        name: "Mohan",
        email: "mohan1252@gmail.com",
        Phone: 14789,
      },
    ],
  });
  console.log(manyUser);
};

// GET Request
const getUser = async () => {
  // Fetch the single user
  //   const getUser = await prisma.profile.findUnique({
  //     where: { id: 2 }, // if we want to fetch  the single user then give the inside where clause only unique attribute name
  //   });

  //   Fetch the multiple user
  // const getManyUser = await prisma.profile.findMany({
  //   where: { name: "Mohd Talib" },
  // });

  //   Fetch the all user
  const getALLUser = await prisma.profile.findMany({});
  console.log(getALLUser);
};

// UPDATE Request
const updateUser = async () => {
  // Update the single user
  //   const updateUser = await prisma.profile.update({
  //     where: { id: 5 },
  //     data: {
  //       name: "Mohd Talib",
  //     },
  //   });

  //   Update the multiple user
  // const updateManyUser = await prisma.profile.updateMany({
  //   where: { name: "Mohd Talib" },
  //   data: {
  //     name: "Abhishek",
  //   },
  // });

  //   Update the all user
  const updateAllUser = await prisma.profile.updateMany({
    // where: { name: "Mohd Talib" },
    data: {
      name: "Abhishek",
    },
  });
  console.log(updateAllUser);
};

// DELETE Request
const deleteUser = async () => {
  // Delete the single user
  // const deleteUser = await prisma.profile.delete({
  //   where: { id: 4 },
  // });

  //   Delete the multiple user
  // const idToDelete = [6, 7]
  // const nameToDelete = ["Monika"];
  // const deleteManyManyUser = await prisma.profile.deleteMany({
  //   where: {
  //     name: {
  //       in: nameToDelete,
  //     },
  //   },
  // });

  // Delete the all user
  const deleteAllUser = await prisma.profile.deleteMany({});
  console.log(deleteAllUser);
};

const main = () => {
  // return createUser();
  return getUser();
  // return updateUser();
  // return deleteUser();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
