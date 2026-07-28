import '../Base.css'
import DataContainer from './DataContainer'

function Body(props) {
  return (
    <div className='flex flex-row justify-center max-w-7xl mx-auto mt-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='flex flex-col gap-6 md:max-w-md'>
          <DataContainer data={props.data[0]}/>
          <DataContainer data={props.data[1]}/>
          <DataContainer data={props.data[2]}/>
          <DataContainer data={props.data[3]}/>
        </div>

        <div className='flex flex-col gap-6 md:min-w-md'>
          <DataContainer data={props.data[4]}/>
          <DataContainer data={props.data[5]}/>
        </div>
      </div>
    </div>
  )
}

export default Body