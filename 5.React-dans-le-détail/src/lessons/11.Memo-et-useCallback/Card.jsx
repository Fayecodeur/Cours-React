import { memo } from "react";

export default memo(function Card({ text, customLog }) {
  console.log("render");
  customLog();
  return (
    <>
      <p>{text}</p>
    </>
  );
});
