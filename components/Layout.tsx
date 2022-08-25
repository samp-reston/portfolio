import { FunctionComponent } from "react";

import Header from './Header'
import Footer from './Footer'

type PropTypes = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<PropTypes> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b break-words from-primary to-base flex flex-col items-start">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout