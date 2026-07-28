// import './Base.css'
import Header from './components/Header'
import Body from './components/Body'

import page from './data/en.json'

function Base() {
  return (
    <div className='bg-[#E9F2F9] text-[#131820]'>
      <Header name={page.name} function={page.function} />
      <Body data={page.details} />
    </div>
  )
}

export default Base
