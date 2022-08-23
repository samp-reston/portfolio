import { FunctionComponent } from "react";

import Navbar from './Navbar'
import Footer from './Footer'

type PropTypes = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<PropTypes> = ({children}) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout