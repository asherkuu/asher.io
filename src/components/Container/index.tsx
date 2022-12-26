import React from 'react'
import Nav from '#/src/components/Container/Nav'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center px-8">
        <Nav />
        <main id="skip" className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  )
}

export default Container
