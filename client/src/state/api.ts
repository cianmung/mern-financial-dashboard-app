import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpiResponse,
  GetProductResponse,
  GetTransactionResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (builder) => ({
    getKpis: builder.query<Array<GetKpiResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: builder.query<Array<GetProductResponse>, void>({
      query: () => "/product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: builder.query<Array<GetTransactionResponse>, void>({
      query: () => "/transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
