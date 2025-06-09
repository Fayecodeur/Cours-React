import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="text-3xl font-semibold text-center pt-10">
        Page not found
      </div>
      <Link to={"/"} className="text-center mt-3 block text-blue-400">
        Back to homePage
      </Link>
      <p></p>
    </>
  );
}
