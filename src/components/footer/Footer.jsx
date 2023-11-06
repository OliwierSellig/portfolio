import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";
import { backgroundCenter } from "../../Mixins";
import { useEffect, useState } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const StyledFooter = styled.footer`
  border-top: 2px solid var(--color-grey-300);
  padding: 2.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterCopy = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: var(--letter-spacing-default);
  color: var(--color-grey-600);
`;

const FooterMail = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
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
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: var(--letter-spacing-default);
  color: var(--color-grey-600);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 8px;
    background-color: var(--color-grey-400);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
`;

const MailIcon = styled.div`
  display: block;
  background-image: ${(props) =>
    props.$copied
      ? 'url("/svg/check-green.svg")'
      : props.$darkMode
      ? 'url("/svg/copy-dark.svg")'
      : 'url("/svg/copy-light.svg")'};
  ${backgroundCenter}
  width: 2.8rem;
  height: 2.8rem;
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
      <FooterCopy>Oliwier Sellig 2023&copy;</FooterCopy>
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
