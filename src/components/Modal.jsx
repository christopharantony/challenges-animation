import { motion } from "motion/react";
import { createPortal } from "react-dom";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <motion.div
        className="backdrop"
        onClick={onClose}
        initial={{ display: "none" }}
        animate={{ display: "block" }}
        exit={{ display: "none" }}
      />

      <motion.dialog
        open
        className="modal"
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
