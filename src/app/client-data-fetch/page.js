"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then(res=>res.json())

export default function ClientSideDataFetching() {
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([]);

//   async function fetchListOfUsers() {
//     try {
//       setLoading(true);
//       const apiRes = await fetch("https://dummyjson.com/users");
//       const result = await apiRes.json();

//       if (result?.users) {
//         setUsers(result.users);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setUsers([]);
//       setLoading(true);
//     }
//   }

//   useEffect(() => {
//     fetchListOfUsers();
//   }, []);

const {data, error, isLoading} = useSWR("https://dummyjson.com/users",fetcher);

if(error){
    return <div>failed to load</div>
}


  if (isLoading)
    return (
      <h3 className="font-bold text-2xl">
        Loading users!!!! please wait............
      </h3>
    );


  return (
    <div className="p-3 flex flex-col items-center">
      <h1 className="font-bold text-xl mb-3">Client side Data Fetching</h1>
      <ul>
        {data.users &&
            data.users.map((user) => (
            <li className="m-2 cursor-pointer" key={user.id}>
              <Link href={`/server-data-fetch/${user.id}`}>
                {" "}
                {user.firstName} {user.lastName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
