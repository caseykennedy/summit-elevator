/* eslint-disable react/no-unescaped-entities */
// HomeView:
// ___________________________________________________________________

import * as React from 'react'

// Styles
import * as S from './styles.scss'

// Components
import Symbol from '../../components/SVG/Symbol'

// ___________________________________________________________________

const HomeView = () => (
  <S.HomeView>
    <div className="logo">
      <Symbol />
    </div>
    <div className="soon">
      <h1>Website coming soon.</h1>
    </div>
    <div className="contact">
      <div>775-360-6464</div>
      <div>
        <a href="mailto:rachel@summitelevator.us">rachel@summitelevator.us</a>
      </div>
    </div>
  </S.HomeView>
)

export default HomeView
