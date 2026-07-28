function Header(props) {
  return (
    <div className='w-full flex flex-col justify-center'>
      <div className='h-[40px] mt-4 bg-[#1B325F]'></div>
      <div className='flex flex-col gap-2 text-center mt-4'>
        <h1 className="text-4xl font-bold">{props.name}</h1>
        <h3 className="text-2xl font-bold">{props.function}</h3>
      </div>
      <div className=''>
        <div className='h-[4px] mt-4 rounded-sm max-w-7xl mx-auto bg-[#1B325F]'></div>
      </div>
    </div>
  )
}

export default Header
