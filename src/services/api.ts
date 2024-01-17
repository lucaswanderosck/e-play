import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../pages/Home";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/eplay",
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => "destaque",
    }),
    getOnSaleGame: builder.query<Game[], void>({
      query: () => "promocoes",
    }),
    getSoon: builder.query<Game[], void>({
      query: () => "em-breve",
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => "acao",
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => "rpg",
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => "esportes",
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => "simulacao",
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => "luta",
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`,
    }),
  }),
});

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleGameQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetRpgGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetGameQuery,
} = api;
