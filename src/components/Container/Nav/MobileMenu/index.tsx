'use client'

import React, {useState, useEffect} from 'react'
import clsx from 'clsx'
import useDelayedRender from 'use-delayed-render'

import styles from 'styles/mobile-menu.module.css'
import MobileMenuItem from './MobileMenuItem'
import IconMenu from '#/src/components/Icons/IconMenu'
import IconCross from '#/src/components/Icons/IconCross'

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const {mounted: isMenuMounted, rendered: isMenuRendered} = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 300,
  })

  const handleClickToggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <button
        className={clsx(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={handleClickToggleMenu}
      >
        <IconMenu data-hide={isMenuOpen} />
        <IconCross data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={clsx(
            styles.menu,
            'flex flex-col absolute bg-gray-100 dark:bg-gray-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <MobileMenuItem delay="150ms" text="Home" href="/" />
          <MobileMenuItem delay="175ms" text="Experience" href="/experience" />
          {/* <MobileMenuItem delay="175ms" text="Guest Book" href="/guestbook" />
          <MobileMenuItem delay="200ms" text="Dashboard" href="/dashboard" />
          <MobileMenuItem delay="250ms" text="Blog" href="/blog" />
          <MobileMenuItem delay="275ms" text="Snippets" href="/snippets" />
          <MobileMenuItem delay="2300ms" text="Uses" href="/uses" /> */}
        </ul>
      )}
    </>
  )
}

export default MobileMenu
