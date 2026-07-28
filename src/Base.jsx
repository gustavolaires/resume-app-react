import './Base.css'
import DataContainer from './components/DataContainer'

import page from './data/en.json'

function Base() {
  return (
    <div className='flex flex-row justify-center max-w-7xl mx-auto'>
      <div id='main-container' className='flex flex-col md:flex-row gap-6'>
        <div className='flex flex-col gap-6 md:max-w-md'>
          <DataContainer data={page.details[0]}/>
          <DataContainer data={page.details[1]}/>
          <DataContainer data={page.details[2]}/>
          <DataContainer data={page.details[3]}/>
        </div>
        
        <div className='flex flex-col gap-6 md:min-w-md'>
          <DataContainer data={page.details[4]}/>
          <DataContainer data={page.details[5]}/>
        </div>
      </div>
    </div>
  )
}

export default Base
