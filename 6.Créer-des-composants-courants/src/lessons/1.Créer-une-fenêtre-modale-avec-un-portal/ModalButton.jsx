import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";
export default function ModalButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-slate-200 p-2 mx-auto block rounded text-slate-900"
      >
        Open the modal
      </button>

      {showModal &&
        createPortal(
          <ModalContent closeModal={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
