import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode'
import colors from '@theme/colors'
import SearchIcon from '@assets/search.svg'
import CloseIcon from '@assets/x.svg'
import SunIcon from '@assets/sun.svg'
import MoonIcon from '@assets/moon.svg'

import {
  ModuleContainer,
  Logo,
  NavBarRow,
  ContentCol,
  SearchCol,
  NavBarData,
  NavBarCTA,
  NavBarContainer,
  SearchModule,
  SearchInput,
  LogoLink,
  Headline,
  SearchInputContainer,
  LogoIcon,
} from './styles'

const NavBar = () => {
  const { isDark, toggleDark } = useStyledDarkMode()
  const [solid, setSolid] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const listener = document.addEventListener('scroll', _e => {
      const scrolled = document.scrollingElement.scrollTop
      setSolid(!(scrolled >= 20))
    })
    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [])

  const onSearch = () => {
    setMenuOpen(false)
    if (!!search) {
      navigate(`/search?q=${search}`)
    }
  }

  return (
    <>
      <NavBarContainer solid={solid} fluid={false}>
        <ModuleContainer fluid>
          <NavBarRow>
            <ContentCol>
              <LogoLink to={'/'} cover bg={colors.persianRed} direction={'right'}>
                <Logo>
                  <LogoIcon color={colors.persianRed} />
                  Red<strong>Knot</strong>
                </Logo>
              </LogoLink>
              <NavBarData>
                <NavBarCTA onClick={() => toggleDark()}>
                  {!isDark ? <MoonIcon /> : <SunIcon />}
                </NavBarCTA>
                <NavBarCTA onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <CloseIcon /> : <SearchIcon />}
                </NavBarCTA>
              </NavBarData>
            </ContentCol>
          </NavBarRow>
        </ModuleContainer>
      </NavBarContainer>
      {menuOpen && (
        <SearchModule>
          <ModuleContainer>
            <NavBarRow>
              <SearchCol>
                <Headline>{"What's gonna be our next journey?"}</Headline>
                <SearchInputContainer>
                  <SearchInput
                    onChange={evt => setSearch(evt.target.value)}
                    placeholder={'Search ...'}
                    onKeyDown={evt => {
                      if (evt.key === 'Enter') {
                        onSearch()
                      }
                    }}
                  />
                  <NavBarCTA onClick={onSearch}>
                    <SearchIcon />
                  </NavBarCTA>
                </SearchInputContainer>
              </SearchCol>
            </NavBarRow>
          </ModuleContainer>
        </SearchModule>
      )}
    </>
  )
}

export default NavBar
