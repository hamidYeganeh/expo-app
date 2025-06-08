import { BASE_URL } from "@/configs/endpoints";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export function baseQuery() {
  return fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {},
  });
}
