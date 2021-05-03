import { getPage } from 'next-page-tester'
import React from 'react'
import NominationsWrapper from '../../../pages/nominations'
import { render } from '../../testUtils'

describe('Nominations page', () => {
  beforeEach(async () => {
    const { render } = await getPage({
      route: '/nominations',
    })
    render()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<NominationsWrapper />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
