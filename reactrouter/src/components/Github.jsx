import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState(null); // null to start

  useEffect(() => {
    fetch("https://api.github.com/users/mukti2216patel")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data); // set inside the .then
      });
  }, []);

  if (!data) return <div className="text-center p-4">Loading...</div>; // handle loading state

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <div className="mt-4">
        <img src={data.avatar_url} alt="GitHub Avatar" width={200} className="mx-auto rounded-full" />
      </div>
    </div>
  );
}

export default Github;
