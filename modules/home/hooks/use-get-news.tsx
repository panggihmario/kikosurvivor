import { httpRequest } from "@/lib";
import { ApiResponse, NewsItem } from "@/types";
export const useGetNews = (status: boolean) => {
  const api = httpRequest();
  return api
    .get("n/l/a", {
      searchParams: {
        home: status,
      },
    })
    .json<ApiResponse<NewsItem>>();
};
