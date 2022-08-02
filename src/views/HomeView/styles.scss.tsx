// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

const sectionHeight = 'calc(100vh - calc(var(--gutter) * 2))'

export const HomeView = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  & > * {
    flex: 1;
    padding: var(--gutter);
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-text);
  }

  .billboard {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    font-size: var(--text-lg);
  }
`

export const Hero = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: var(--color-text);
  color: var(--color-bg);
`
