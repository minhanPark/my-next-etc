"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "./getPosts";

export default function Posts() {
  const queryClient = useQueryClient();
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  const { data: otherData } = useQuery({
    queryKey: ["post-not-ssr"],
    queryFn: getPosts,
  });

  console.log(queryClient);
  return (
    <div className="flex">
      <div>
        <h2 className="text-lg text-center font-bold mb-6">
          React Query SSR 적용
        </h2>
        <ul>
          {data?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg text-center font-bold mb-6">
          React Query SSR 적용 안함
        </h2>
        <ul>
          {otherData?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
