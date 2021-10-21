import styled from 'styled-components'

export const ButtonOFpage = styled.button<{ active?: boolean }>`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: var(--black-hover);
  box-shadow: 2px 2px 5px #000;
  color: var(--white);
  cursor: pointer;
  font-size: 18px;
  border: none;
  transition: all 0.5s ease;
  margin: 0 4px;
  :hover {
    background-color: var(--white);
    color: var(--black);
  }
  :disabled {
    background: ${(p) => (p.active ? 'var(--gray)' : 'var(--gray-dark)')};
    color: ${(p) => (p.active ? 'var(--light-hover)' : 'var(--black)')};
    cursor: default;
  }
`
export const WrapperButton = styled.div`
  display: flex;
  align-self: center;
  margin-top: 10px;
`
