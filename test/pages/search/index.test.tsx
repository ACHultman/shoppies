import React from 'react'
import Search from '../../../pages/search'
import { render } from '../../testUtils'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Search />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
