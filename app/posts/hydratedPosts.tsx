import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "@/components/Providers/getQueryClient";
import { getPosts } from "./getPosts";
import Posts from "./Posts";

export default async function HydratedPosts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["posts"], getPosts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Posts />
    </Hydrate>
  );
}
