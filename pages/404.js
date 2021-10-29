import Link from "next/link";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";

// This is a change that I made

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>That page could not be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "} 
      </p>
    </div>
  );
};

export default NotFound;
