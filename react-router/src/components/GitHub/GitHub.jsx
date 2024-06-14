import { useEffect, useState } from "react";

function GitHub() {
  const [githubData, setGithubData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Pranavk-Official")
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      GitHub Followers: {githubData.followers}
    </div>
  );
}

export default GitHub;
