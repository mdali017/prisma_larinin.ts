// console.log("Hello World!");
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
    // console.log("Hello World!");

    // for creaitng data
    // const result = await prisma.post.create({
    //     data: {
    //         title: "this is title 2",
    //         content: "this is content 2",
    //         authorName: "firoz"
    //     }
    // })

    // console.log(result)


    // for getting data
    const getAllFromDB = await prisma.post.findMany();
    console.log(getAllFromDB);
}

main()

