import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100px;
  background-color: var(--white);
  color: var(--black);
  display: flex;
  justify-content: center;
  border-radius: 15px 15px 0 0;
  div {
    display: flex;
    align-items: center;
    max-width: 600px;
    a {
      margin-right: 20px;
      transition: all 0.3s ease;
    }
    a:hover {
      color: var(--numeric);
      transform: scale(1.02);
    }
  }
`
