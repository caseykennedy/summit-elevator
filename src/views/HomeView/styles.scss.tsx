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
  justify-content: space-between;
  padding: var(--gutter);
  height: 100%;
  width: 100%;

  .logo {
    margin-bottom: var(--space-xxxl);
  }

  .soon {
    display: flex;
    margin: var(--space-xxxl) 0;
  }

  .contact {
    font-size: var(--text-lg);
  }
`

export const Hero = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: var(--color-text);
  color: var(--color-bg);
`
