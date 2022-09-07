import Link from 'next/link'

const FourOhFour = (): JSX.Element => {
  return (
    <div className='flex flex-col justify-center text-center'>
      <h1 className='text-h1-mobile text-black-90 md:text-h1'>404 - Page Not Found</h1>
      <Link href="/">
        <a className='text-h3-mobile text-black-90 transition-all duration-200 hover:text-secondary md:text-h3'>
          Go back home
        </a>
      </Link>
    </div>
  )
}

export default FourOhFour
