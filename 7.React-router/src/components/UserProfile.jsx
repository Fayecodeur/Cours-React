import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();
  return (
    <div>
      <p className="text-3xl font-semibold text-center pt-10">
        Your profile : {id}
      </p>
    </div>
  );
}
