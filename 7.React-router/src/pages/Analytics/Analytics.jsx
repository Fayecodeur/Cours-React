import { Link, Outlet } from "react-router-dom";

export default function Analytics() {
  return (
    <div className="bg-slate-400 pb-10 text-center">
      <p className="pt-5 text-xl mb-3">Here is the analytics company</p>
      <p className="mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        eveniet quas, sunt saepe perferendis nisi officia rerum voluptatem nam
        delectus.
      </p>
      <nav>
        <Link className="font-semibold mx-3" to={"development"}>
          Development
        </Link>
        <Link className="font-semibold mx-3" to={"cybersecurity"}>
          CyberSecurity
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
