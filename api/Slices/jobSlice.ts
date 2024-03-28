import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const OpportunityApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    getOpportunities: builder.query<Opportunities, void>({
      query: () => "opportunities/search",
    }),
    getOpportunityById: builder.query<SingleOpportunities, String>({
      query: (id) => `opportunities${id}`,
      transformResponse:(response:any) => {
        const jobj = response.data;
        return jobj;
      }
    }),
  }),
});


export const { useGetOpportunitiesQuery, useGetOpportunityByIdQuery } = OpportunityApi;
