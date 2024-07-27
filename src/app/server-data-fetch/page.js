import Link from "next/link";

async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users", {});
    const res = await apiResponse.json();
    return res.users;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ServerSideDataFetching() {
  const listOfUser = await fetchListOfUsers();
  // console.log(listOfUser);
  return (
    <div className="p-5 flex items-center flex-col">
      <h1 className="font-bold mb-4">
        Server side Data Fetching : User List page
      </h1>
      <ul>
        {listOfUser &&
          listOfUser.map((user) => (
            <li className="m-2 cursor-pointer" key={user.id}>
             <Link href={`/server-data-fetch/${user.id}`}> {user.firstName} {user.lastName}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
