import { useParams } from "react-router-dom";
export default function PostDetails() {
  const { id } = useParams();
  return <div>PostDetails {id}</div>;
}
