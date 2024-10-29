// console.log("Hello World!");
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // for getting all data
  //   const getAllFromDB = await prisma.post.findMany();
  //   console.log(getAllFromDB);

  //   ===== find first
  // const findFast = await prisma.post.findFirst({
  //     where: {
  //         // id: 1
  //         // id: 2
  //         // id: 0
  //         // published: false
  //         published: true
  //     }
  // })
  // console.log({findFast});

  // ===== find first or throw
  //   const findFast = await prisma.post.findFirstOrThrow({
  //     where: {
  //       // id: 1
  //       // id: 2
  //       // id: 0
  //       // published: false
  //       published: true,
  //     },
  //   });
  //   console.log({ findFast });

  //   ==== find unique
  // const findUnique = await prisma.post.findUnique({
  //     where: {
  //         id: 1
  //     }
  // })
  // console.log({findUnique});

//   //   ==== find unique or throw
//   const findUniqueOrThrow = await prisma.post.findUniqueOrThrow({
//     where: {
//       id: 7,
//     },
//   });
//   console.log({ findUniqueOrThrow });


  //   ==== find unique or throw
  const findUniqueOrThrow = await prisma.post.findUniqueOrThrow({
    where: {
      id: 7,
    },
    select: {
        title: true
    }
  });
  console.log({ findUniqueOrThrow });
};

main();
