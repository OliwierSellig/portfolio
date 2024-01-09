import { useEffect, useState } from "react";
import { backgroundCenter } from "../../styles/Mixins";
import { fadeHorizontal } from "../../styles/Animations";
import { useDarkMode } from "../../contexts/DarkModeContext";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 0;
  border-top: 2px solid var(--color-grey-300);

  @media only screen and (max-width: 380px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const FooterCopy = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--color-grey-600);
  letter-spacing: var(--letter-spacing-default);
  animation: ${fadeHorizontal(-10, 0)} 1s;
`;

const FooterMail = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  animation: ${fadeHorizontal(10, 0)} 1s;
  cursor: pointer;

  & * {
    transition: all 0.2s;
  }

  &:hover,
  &:focus {
    & span::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

const MailText = styled.span`
  position: relative;
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--color-grey-600);
  letter-spacing: var(--letter-spacing-default);

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 8px;
    background-color: var(--color-grey-400);
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
`;

interface MailIconProps {
  $darkMode: boolean;
  $copied: boolean;
}

const MailIcon = styled.div<MailIconProps>`
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  background-image: ${(props) =>
    `url(/svg/${
      props.$copied
        ? "check-green"
        : props.$darkMode
        ? "copy-dark"
        : "copy-light"
    }.svg)`};
  ${backgroundCenter}
`;

function Footer() {
  const { inDarkMode } = useDarkMode();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <StyledFooter>
      <FooterCopy>Oliwier Sellig 2024&copy;</FooterCopy>
      <CopyToClipboard
        text="oliwierandrzej.sellig@gmail.com"
        onCopy={() => setCopied(true)}
      >
        <FooterMail>
          <MailText>oliwierandrzej.sellig@gmail.com</MailText>
          <MailIcon
            $copied={copied}
            $darkMode={inDarkMode}
            aria-label="Copy Email"
          />
        </FooterMail>
      </CopyToClipboard>
    </StyledFooter>
  );
}

export default Footer;
