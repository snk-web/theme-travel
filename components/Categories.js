import React from 'react'

function Categories() {
  return (
    <div className='flex flex-col py-6'>
        <div className='flex flex-col w-1/3 pb-8 gap-6'>
            <h1 className='text-6xl font-medium'>Categories</h1>
            <p className='text-sm text-[#5B5F62]'>Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
        </div>
        <div className='flex gap-4 text-white'>
        <div className="flex rounded-full bg-[url('../assets/beach.jpg')] h-64 w-44 bg-cover overflow-hidden object-center group">
            <div className='hidden group-hover:flex text-white p-6 group-hover:backdrop-brightness-50 w-full justify-center'>
                <div className='my-auto'>Beach</div>     
            </div>
        </div>
        <div className="flex rounded-full bg-[url('../assets/desert.jpg')] h-64 w-44 bg-cover overflow-hidden object-center group">
            <div className='hidden group-hover:flex text-white p-6 group-hover:backdrop-brightness-50 w-full justify-center'>
                <div className='my-auto'>Desert</div>     
            </div>
        </div>
        <div className="flex rounded-full bg-[url('../assets/mountain.jpg')] h-64 w-44 bg-cover overflow-hidden object-center group">
            <div className='hidden group-hover:flex text-white p-6 group-hover:backdrop-brightness-50 w-full justify-center'>
                <div className='my-auto'>Mountain</div>     
            </div>
        </div>
        <div className="flex rounded-full bg-[url('../assets/tower.jpg')] h-64 w-44 bg-cover object-right overflow-hidden group">
            <div className='hidden group-hover:flex text-white p-6 group-hover:backdrop-brightness-50 w-full justify-center'>
                <div className='my-auto'>Tower</div>     
            </div>
        </div>
        <div className="flex rounded-full bg-[url('../assets/pyramid.jpg')] h-64 w-44 bg-cover overflow-hidden object-center group">
            <div className='hidden group-hover:flex text-white p-6 group-hover:backdrop-brightness-50 w-full justify-center'>
                <div className='my-auto'>Pyramid</div>     
            </div>
        </div>
        <div className="flex rounded-full bg-[url('../assets/temple.jpg')] h-64 w-44 bg-cover overflow-hidden object-center group">
            <div className='hidden group-hover:flex text-white p-6 group-hover:backdrop-brightness-50 w-full justify-center'>
                <div className='my-auto'>Temple</div>     
            </div>
        </div>

       
        </div>
    </div>
  )
}

export default Categories