// console.log("Hello World!");
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // console.log("Hello World!");

  // for creaitng single data
  // const result = await prisma.post.create({
  //     data: {
  //         title: "this is title 2",
  //         content: "this is content 2",
  //         authorName: "firoz"
  //     }
  // })

  // console.log(result)


//   for creaitng multiple data
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "this is title 2",
        content: "this is content 2",
        authorName: "firoz",
      },
      {
        title: "this is title 3",
        content: "this is content 3",
        authorName: "firoz",
      },
      {
        title: "this is title 4",
        content: "this is content 4",
        authorName: "firoz",
      },
      {
        title: "this is title 5",
        content: "this is content 5",
        authorName: "firoz",
      },
    ],
  });

  console.log(createMany);
};

main();
