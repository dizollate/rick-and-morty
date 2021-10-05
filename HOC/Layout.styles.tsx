import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: var(--white);
  background-color: var(--black);
  height: 100%;
`

export const Content = styled.div`
  min-height: calc(100vh - 200px);
`
