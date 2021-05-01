import React from 'react'
import HeaderItem from './HeaderItem'
import { CollectionIcon, HomeIcon, SearchIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Header = (): JSX.Element => {
  const router = useRouter()
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <div onClick={() => router.push('/')}>
          <HeaderItem title="HOME" Icon={HomeIcon} />
        </div>
        <div onClick={() => router.push('/nominations')}>
          <HeaderItem title="NOMINATIONS" Icon={CollectionIcon} />
        </div>
        <div onClick={() => router.push('/search')}>
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
        </div>
      </div>
      <Image
        className="object-contain"
        src={'/logo_transparent.png'}
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header
