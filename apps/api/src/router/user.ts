import { publicProcedure } from "../trpc.js";

export const userRouter = {
  login: publicProcedure.queryy(() => {
    return "success";
  }),
};
