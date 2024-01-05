export default async function GetUser(userId: string) {
  const API = "https://jsonplaceholder.typicode.com/users/" + userId;
  const response = await fetch(API);
  if (!response.ok) throw new Error("User not Found!");
  return response.json();
}
