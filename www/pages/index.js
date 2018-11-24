import styled from 'styled-components'
import EmailInstagram from 'components/EmailInstagram'
import Footer from 'components/Footer'
import Logo from 'components/Logo'
import { Link } from 'components/Primitives'
import { LandingLayout } from 'components/Layout'
import { landingWrapper } from 'lib/pageWrapper'

export default landingWrapper((props) => (
  <LandingLayout>
    <SplashWrapper>
      <Link passHref prefetch href='/about'>
        <Tagline title='About Us' alt='About Us'>
          {'We make things.'}
        </Tagline>
      </Link>
      <Logo size={16} circle />
      <EmailInstagram url={props.url} size={3} marginTop={4} />
      <Footer splash />
    </SplashWrapper>
  </LandingLayout>
)
)

const SplashWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1 0 auto;
  height: 100vh;
  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    > ${Logo} {
      height: 32rem;
    }
  }
`
const Tagline = styled.a`
  background: transparent;
  color: ${props => props.theme.brandPrimary};
  cursor: pointer;
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 1.2;
  margin: 0 auto;
  margin-top: auto;
  outline: none;
  padding: ${props => props.theme.defaultSpacing};
  text-align: center;
  text-decoration: none;
  transition: font-size 1s ease;
  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 7.2rem;
    transition: font-size 1s ease;
  }
`