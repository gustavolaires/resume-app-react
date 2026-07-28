import './Base.css'
import DataContainer from './components/DataContainer'

import page from './data/en.json'

function Base() {

  // console.log(page);
  return (
    <>
      <div id='main-container'>
        <DataContainer data={page.details[0]}/>
        
        <br />

        <DataContainer data={page.details[1]}/>
        
        <br />

        <DataContainer data={page.details[2]}/>
        
        <br />

        <DataContainer data={page.details[3]}/>

        <br />

        <DataContainer data={page.details[4]}/>

        <br />

        <DataContainer data={page.details[5]}/>
      </div>
    </>
  )
}

export default Base
