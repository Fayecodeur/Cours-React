import Card from "./Card.jsx";
export default function Container() {
  const id = 15;
  return (
    <div>
      <h1>Les props</h1>
      <Card id={id} />
    </div>
  );
}
