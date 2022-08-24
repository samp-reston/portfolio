import { FunctionComponent } from "react";

import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'

type PropTypes = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<PropTypes> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-base flex flex-col items-start 2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 gap-4 pb-16 min-w-full transition-all ease-linear duration-300">
      <Header />
      <main>{children}</main>
      <div className="flex sm:flex-row flex-col divide-black-90 gap-16 sm:divide-x-2 divide-y-2 sm:divide-y-0 w-full">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Layout