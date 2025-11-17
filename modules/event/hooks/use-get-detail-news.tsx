import { httpRequest } from "@/lib";
import { NewsItem } from "@/types";

type UseGetDetailNewsDto = {
  dta: NewsItem;
};

export const useGetDetailNews = (slug: string) => {
  const api = httpRequest();
  return api
    .get("n/l/d", {
      searchParams: {
        slug: slug,
      },
    })
    .json<UseGetDetailNewsDto>();
};
