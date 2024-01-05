export default async function GetUserPosts(userId: string) {
  const API = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(API + "?userId=" + userId);
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
