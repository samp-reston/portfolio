import { FunctionComponent } from "react";

import Header from './Header'
import Footer from './Footer'

type PropTypes = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<PropTypes> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-base flex flex-col items-start 2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 gap-4 pb-16 min-w-full transition-all ease-linear duration-300">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout