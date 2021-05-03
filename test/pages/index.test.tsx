import React from 'react'
import { render, waitForElementToBeRemoved } from '../testUtils'
import { Home } from '../../pages/index'
import { screen, fireEvent } from '@testing-library/dom'
import { getPage } from 'next-page-tester'

jest.mock('../../components/movies/Movie', () => 'mocked-movie')

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders page title', async () => {
    const { render } = await getPage({
      route: '/',
    })
    render()
    await waitForElementToBeRemoved(() => screen.getByText(/Loading\.\.\./i))
    expect(screen.getByText('Welcome To The Shoppies!')).toBeInTheDocument()
  })

  it('handles search button click by routing to searchg page', async () => {
    const { render } = await getPage({
      route: '/',
    })
    render()
    //await waitForElementToBeRemoved(() => screen.getByText(/Loading\.\.\./i))

    const button = screen.getAllByText((context, element) => {
      return (
        element.tagName.toLocaleLowerCase() === 'button' &&
        element.innerHTML === 'Search For Movies'
      )
    })

    fireEvent.click(button[0])
    await screen.findByPlaceholderText(/Search movies by name../i)
  })
})
