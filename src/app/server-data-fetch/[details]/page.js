

async function fetchUserDetails(currentUserId){
    try {
        const fetchUserById = await fetch(
          `https://dummyjson.com/users/${currentUserId}`
        );
        const res = await fetchUserById.json();
      //  console.log(res);
        return res;
      } catch (error) {
        throw new Error(error);
      }
}

export default async function UserDetails({ params }) {
    const userDetail = await fetchUserDetails(params.details)
   // console.log(userDetail);
  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl mb-3">This is user details page</h1>
      <p>{userDetail?.firstName}{' '}{userDetail?.lastName}</p>
      <p>{userDetail?.age}</p>
      <p>{userDetail?.gender}</p>
      <p>{userDetail?.email}</p>
      <p>{userDetail?.phone}</p>

     
    </div>
  );
}
