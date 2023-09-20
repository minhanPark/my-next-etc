"use client";

import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const DetailPage = () => {
  const { data, error } = useSwr("/api/post/1", () =>
    fetcher("/api/post/1").then((r) => r.json())
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>{data}</div>;
};

export default DetailPage;
