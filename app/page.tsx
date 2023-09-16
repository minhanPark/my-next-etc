import { getPosts } from "./api/getPosts";

export default async function Home() {
  const data = await getPosts();
  return (
    <div className="">
      <h1 className="font-bold text-4xl">홈</h1>
      {data.map((item: any) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <p>
            <span>{item.author}</span> / <span>{item.date}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
