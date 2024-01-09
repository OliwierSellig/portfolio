import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { fadeIn } from "../../styles/Animations";
import styled from "styled-components";
import React from "react";

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
  backdrop-filter: blur(5px);
  animation: ${fadeIn} 0.3s;
`;

interface ModalContextProps {
  openName: string;
  close: () => void;
  open: Dispatch<SetStateAction<string>>;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  opens: string;
  children: ReactElement;
}

function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useModal();

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
    onKeyDown: (e: any) => {
      if (e.key === "Enter") {
        open(opensWindowName);
      }
    },
  });
}

interface WindowProps {
  name: string;
  children: ReactElement;
}

function Window({ name, children }: WindowProps) {
  const { openName, close } = useModal();
  const backgroundRef = useRef<HTMLDivElement>(null);

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

function useModal() {
  const modal = useContext(ModalContext);
  if (!modal) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return modal;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
