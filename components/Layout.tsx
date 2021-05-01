import Header from './header/Header'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
