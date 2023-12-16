import React from 'react'
import Header from './Header'
import Pagination from './Pagination'
import Blogs from './Blogs'

function Home() {
  return (
    <div>
      <Header/>
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  )
}

export default Home
