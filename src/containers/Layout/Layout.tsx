import Footer from '../landing-page/Footer/Footer'
import Header from '../landing-page/Header/Header'
import Navigation from "../landing-page/Navigation/Navigation"

function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout