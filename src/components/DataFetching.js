import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [loading, setloading] = useState(true);
  const [posts, setposts] = useState([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setloading(false);
        setposts(res.data);
        seterror("");
      })
      .catch((error) => {
        setloading(false);
        setposts([]);
        seterror("something went wrong!");
      });
  }, []);
  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}

      {error ? error : null}
    </div>
  );
}

export default DataFetching;
