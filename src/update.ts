// console.log("Hello World!");
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updatePost = async () => {
  //   console.log("Hello World!");

  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       // id: 6
  //       id: 5,
  //     },
  //     // data: {
  //     //     title: "this is title 6",
  //     //     content: "this is content 6",
  //     //     authorName: "firoz4",
  //     //     published: true
  //     // }
  //     data: {
  //       title: "this is title 5",
  //     },
  //   });

  //   console.log(singleUpdate);

  //     for updating multiple data
  //   const multipleUpdate = await prisma.post.updateMany({
  //     where: {
  //       title: "this is title 2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  //   console.log(multipleUpdate);

//   const upsertData = await prisma.post.upsert({
//     where: {
//       id: 1,
//     },
//     update: {
//       title: "this is title 1",
//     },
//     create: {
//       title: "this is title 1",
//       content: "this is content 1",
//       authorName: "firoz",
//     },
//   });
  const upsertData = await prisma.post.upsert({
    where: {
      id: 5,
    },
    update: {
      authorName: "Mohabbat",
    },
    create: {
      title: "this is title 5",
      content: "this is content 5",
      authorName: "firoz",
    },
  });

  console.log(upsertData);
};

updatePost();
