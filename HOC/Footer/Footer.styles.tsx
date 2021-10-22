import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 95%;
  height: 100px;
  color: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: flex;
  border-top: 2px solid var(--white);
  a {
    transition: all 0.3s ease;
  }
  a:hover {
    color: var(--light-hover);
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`
