import axios, { AxiosResponse } from "axios";

const END_POINT_URL = "https://pokeapi.co/api/v2/";

export interface GenericResponse<T> {
  (url: string, typeName: T): Promise<AxiosResponse<T>>;
}

export const http = axios.create({
  baseURL: END_POINT_URL,
  headers: {
    "Content-type": "application/json",
  },
});
