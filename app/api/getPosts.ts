export const getPosts = async () => {
  const response = await fetch("http://localhost:3000/api/post");

  if (!response.ok) {
    throw new Error("something went to wrong");
  }

  return await response.json();
};
