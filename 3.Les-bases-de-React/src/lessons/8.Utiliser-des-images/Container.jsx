import fuji from "./assets/fuji.jpg";
export default function Container() {
  return (
    <div>
      <h1>Utiliser des images</h1>
      <img src={fuji} alt="Mont Fuji" />
    </div>
  );
}
