import styled from 'styled-components'

export const SelectStyled = styled.select`
  min-width: 100%;
  padding: 5px 10px;
  font-size: 20px;
  color: var(--black);
  border-radius: 15px;
  margin-top: 5px;
  border: none;
  cursor: pointer;
`

export const SelectWrapper = styled.div`
  margin-top: -30px;
  margin-right: 10px;
  span {
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 0;
    width: 240px;
  }
`
