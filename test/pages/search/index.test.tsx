import { getPage } from 'next-page-tester'
import React from 'react'
import Search from '../../../pages/search'
import { render, waitFor } from '../../testUtils'
import { screen, fireEvent } from '@testing-library/dom'
import Router from 'next/router'

jest.mock('next/router', () => {
  return {
    __esModule: true,
    ...jest.requireActual<Record<string, unknown>>('next/router'),
    default: {},
    push: jest.fn(),
  }
})

describe('Search page', () => {
  beforeEach(async () => {
    const { render } = await getPage({
      route: '/search',
      router: (router) => Object.assign(Router, router),
    })
    render()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Search />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('handles search input', () => {
    const textbox: HTMLInputElement = screen.getByLabelText(
      'search-input'
    ) as HTMLInputElement
    fireEvent.change(textbox, {
      target: { value: 'test' },
    })

    expect(textbox.value).toBe('test')
  })

  it('alerts upon empty search', async () => {
    global.alert = jest.fn()

    const textbox: HTMLInputElement = screen.getByLabelText(
      'search-input'
    ) as HTMLInputElement
    fireEvent.change(textbox, {
      target: { value: '' },
    })
    expect(textbox.value).toBe('')

    const submitButton = screen.getByLabelText('search-submit')
    fireEvent.click(submitButton)
    expect(global.alert).toHaveBeenCalledTimes(1)
  })

  it('alerts when search terms are less than three characters long', async () => {
    global.alert = jest.fn()

    const textbox: HTMLInputElement = screen.getByLabelText(
      'search-input'
    ) as HTMLInputElement
    fireEvent.change(textbox, {
      target: { value: '12' },
    })
    expect(textbox.value).toBe('12')

    const submitButton = screen.getByLabelText('search-submit')
    fireEvent.click(submitButton)
    expect(global.alert).toHaveBeenCalledTimes(1)
  })

  it('routes to search page for entered search terms', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ Search: [] }),
      })
    ) as any

    const textbox: HTMLInputElement = screen.getByLabelText(
      'search-input'
    ) as HTMLInputElement
    fireEvent.change(textbox, {
      target: { value: 'test' },
    })
    expect(textbox.value).toBe('test')

    const submitButton = screen.getByLabelText('search-submit')
    fireEvent.click(submitButton)
    await waitFor(() => screen.getByText(/Sorry! No results found for/i))
  })
})
