import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

/*  //Version One
const healthCheck = async (req, res, next) => {
  try {
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is Running" }));
  } catch (error) {}
  next(error);
};
*/


// Version 2 (Improved & Recommended)
const healthCheck = asyncHandler(async (req, res, next) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is Running" }));
});

export { healthCheck };
