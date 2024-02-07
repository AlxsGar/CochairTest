"use server";

/*
Welcome to your technical assesment. 
Your task is to create a REST API endpoint that returns a list of users that are on ./users.js
The main goal is: 
a) use asynch functions to get the data from another API. 
b) refactor the esxisting code so you don't have to repeat yourself.
Any approach is valid, but the code should be clean and easy to read.

The second part of the challenge is to create a function that takes the list of users and 
invert the viewed property of each user.

Good luck!
*/

import { createRouter } from "next-connect";

const router = createRouter();

router.get(() => "Hello world");
export default router.handler();
export const config = {
  api: {
    externalResolver: true,
  },
};
