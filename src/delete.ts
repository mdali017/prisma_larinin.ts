import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const deleteData = async () => {
  // ======= for delete single data
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 2,
  //     //   title: "this is title 2",
  //     },
  //   });

  //   console.log(singleDelete);

  //   ======= for delete multiple data
//   const multipleDelete = await prisma.post.deleteMany({
//     where: {
//       published: false,
//     },
//   });

// ======== for deleting all data
  const multipleDelete = await prisma.post.deleteMany({
    // where: {
    //   published: false,
    // },
  });

  console.log(multipleDelete);
};

deleteData();
