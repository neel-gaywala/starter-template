/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance, { ResponseHelper } from "@/services/axiosConfig";

class SeedDataServices {
  // Get Types
  getTypes = async () =>
    await axiosInstance.get<ResponseHelper<any>>("/seed-data/types");
}

const instance = new SeedDataServices();

export default instance;
