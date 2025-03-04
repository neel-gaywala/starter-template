/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getCookie } from "@/utils/functions/common";

declare module "axios" {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

export interface ResponseHelper<T> {
  isSuccess: boolean;
  data: T;
}

interface APIResponse {
  isSuccess: boolean;
  data: any;
}

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const instance = axios.create({
  baseURL: apiBaseUrl,
});

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.headers.set("Authorization", `Bearer ${getCookie("__session")}`);
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

function responseHelper(response: AxiosResponse): AxiosResponse {
  if (response.status === 200 || response.status === 201) {
    response.data = {
      isSuccess: true,
      data: response.data,
    };
  } else {
    response.data = {
      isSuccess: false,
      data: response.data,
    };
  }
  return response.data;
}

function errorHelper(error: any): APIResponse {
  if (error?.response?.data) {
    const message = error.response.data;
    if (message?.code) {
      return { isSuccess: false, data: message };
    }
  }
  return { isSuccess: false, data: null };
}

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(responseHelper, errorHelper);

export default instance;
