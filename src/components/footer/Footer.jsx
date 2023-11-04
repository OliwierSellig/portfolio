import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 2px solid var(--color-grey-300);
  padding: 2.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterRow = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: var(--letter-spacing-default);
  color: var(--color-grey-600);
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterRow>Oliwier Sellig 2023&copy;</FooterRow>
      <FooterRow as="a" href="mailto:oliwierandrzej.sellig@gmail.com">
        oliwierandrzej.sellig@gmail.com
      </FooterRow>
    </StyledFooter>
  );
}

export default Footer;
