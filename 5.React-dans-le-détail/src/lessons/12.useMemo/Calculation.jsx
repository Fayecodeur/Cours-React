import { useState, useMemo } from "react";

export default function Calculation() {
  const [temperature, setTemperature] = useState(30);
  function celcuisToFareneheit(degree) {
    return degree * 1.8 + 32;
  }
  const expensiveCalculation = celcuisToFareneheit(temperature);
  return (
    <div>
      <h1>
        Valeur de {temperature} degree en Farenigth {expensiveCalculation}
      </h1>
    </div>
  );
}
