import { FooterWrapper } from './Footer.styles'

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <span>Rick and Morty</span>
      <span>
        Сreated by{' '}
        <a target="_blank" href="https://github.com/dizollate" rel="noreferrer">
          @dizollate
        </a>
      </span>
    </FooterWrapper>
  )
}

export default Footer
