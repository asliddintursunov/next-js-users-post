export default async function GetAllUsers() {
  const API = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(API);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
}
