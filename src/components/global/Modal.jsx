import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";
import { fadeIn } from "../../styles/Animations";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    rgba(21, 21, 21, 0.5),
    rgba(21, 21, 21, 0.5)
  );
  animation: ${fadeIn} 0.3s;
  backdrop-filter: blur(5px);
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);
  const backgroundRef = useRef();

  useEffect(() => {
    if (openName) document.documentElement.classList.add("modal");

    if (!openName && document.documentElement.classList.contains("modal"))
      document.documentElement.classList.remove("modal");
  }, [openName]);

  if (name !== openName) return null;

  return createPortal(
    <ModalBackground
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) close();
      }}
    >
      <div>{cloneElement(children, { onCloseModal: close })}</div>
    </ModalBackground>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
