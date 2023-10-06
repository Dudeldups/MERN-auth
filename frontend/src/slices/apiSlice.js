import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://mern-auth-api-7xv4.onrender.com/",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: builder => ({}),
});
