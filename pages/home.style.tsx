import styled from 'styled-components'
import Image from 'next/image'

export const ContentBox = styled.div`
  transition: all 0.5s ease;
  background: var(--black-hover);
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  :hover {
    transform: scale(1.2);
    img {
      transform: scale(1.02);
      border-radius: 15px 0 0 15px;
    }
  }
`

export const ContentBoxText = styled.div`
  padding: 20px;
`

export const MockImage = styled(Image)`
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.5s ease;
`
