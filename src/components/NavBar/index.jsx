import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
// import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode'
import colors from '@theme/colors'
import SearchIcon from '@assets/search.svg'
import CloseIcon from '@assets/x.svg'
// import SunIcon from '@assets/sun.svg'
// import MoonIcon from '@assets/moon.svg'
import { Visible } from 'react-grid-system'
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
  Breadcrumb,
  BreadcrumbLink,
} from './styles'

const NavBar = ({ breadcrumbs = [] }) => {
  //const { isDark, toggleDark } = useStyledDarkMode()
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
    document.body.style.overflow = 'unset'
    if (!!search) {
      navigate(`/search?q=${search}`)
    }
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
  }, [menuOpen])

  return (
    <>
      <NavBarContainer solid={solid} fluid={false}>
        <ModuleContainer>
          <NavBarRow>
            <ContentCol>
              <LogoLink to={'/'} cover bg={colors.woodland} direction={'right'}>
                <Logo>
                  <LogoIcon />
                  Gu&iacute;a<strong>Shopy</strong>
                </Logo>
              </LogoLink>
              <NavBarData>
                {/* <NavBarCTA onClick={() => toggleDark()}>
                  {!isDark ? <MoonIcon /> : <SunIcon />}
                </NavBarCTA>*/}
                <NavBarCTA onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <CloseIcon /> : <SearchIcon />}
                </NavBarCTA>
              </NavBarData>
            </ContentCol>
          </NavBarRow>
          <Visible md lg xl xxl xxxl>
            {breadcrumbs.length > 0 && !menuOpen && (
              <NavBarRow>
                <Breadcrumb>
                  <li>
                    <BreadcrumbLink to={'/'} cover bg={colors.woodland} direction={'right'}>
                      Inicio
                    </BreadcrumbLink>
                  </li>
                  {breadcrumbs.map(({ label, target }) => {
                    if (!target) {
                      return <li>{label}</li>
                    }
                    return (
                      <li>
                        <BreadcrumbLink to={target} cover bg={colors.woodland} direction={'right'}>
                          {label}
                        </BreadcrumbLink>
                      </li>
                    )
                  })}
                </Breadcrumb>
              </NavBarRow>
            )}
          </Visible>
        </ModuleContainer>
      </NavBarContainer>
      {menuOpen && (
        <SearchModule>
          <ModuleContainer>
            <NavBarRow>
              <SearchCol>
                <Headline>{'Que te gustaría encontrar?'}</Headline>
                <SearchInputContainer>
                  <SearchInput
                    onChange={evt => setSearch(evt.target.value)}
                    placeholder={'Buscar ...'}
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
