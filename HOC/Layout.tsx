import { useRouter } from 'next/dist/client/router'
import { FunctionComponent, useRef } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { ILayout } from './Layout.props'
import {
  BackLinkWrapper,
  BackLinkText,
  Content,
  Wrapper,
  BackArrow,
  LinkBackContent,
} from './Layout.styles'

const Layout = ({ children }: ILayout): JSX.Element => {
  const bodyRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  return (
    <Wrapper>
      <Header />
      {router.asPath !== '/' && (
        <BackLinkWrapper>
          <LinkBackContent onClick={() => router.back()}>
            <BackArrow></BackArrow>
            <BackLinkText>Back</BackLinkText>
          </LinkBackContent>
        </BackLinkWrapper>
      )}
      <Content ref={bodyRef} tabIndex={0}>
        {children}
      </Content>
      <Footer />
    </Wrapper>
  )
}

export const WithLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
