import React from 'react'

const Genere = () => {
  return (
    <div className="flex space-x-4 px-3 my-2">
      <div className="w-0.5 h-7 bg-black md:hidden"></div>
      {/* parent of all written element  */}
      <div className="flex items-center space-x-4">
        <p className="px-3 cu py-1 bg-gray-600 text-white inline-block cursor-pointer rounded-full md:rounded-lg">
          All
        </p>
        <p className="px-3 cu py-1 bg-gray-300 inline-block cursor-pointer rounded-full md:rounded-lg">
          Music
        </p>
        <p className="px-3 cu py-1 bg-gray-300 inline-block cursor-pointer rounded-full md:rounded-lg">
          Game shows
        </p>
        <p className="px-3 cu py-1 bg-gray-300 hidden rounded-lg md:inline-block cursor-pointer">
          Fingerstyle
        </p>
        <p className="px-3 cu py-1 bg-gray-300 hidden rounded-lg md:inline-block cursor-pointer">
          Computer science
        </p>
        <p className="px-3 cu py-1 bg-gray-300 hidden rounded-lg md:inline-block cursor-pointer">
          Live
        </p>
        <p className="px-3 cu py-1 bg-gray-300 hidden rounded-lg md:inline-block cursor-pointer">
          Neet
        </p>
        <p className="px-3 cu py-1 bg-gray-300 hidden rounded-lg md:inline-block cursor-pointer">
          T-series
        </p>
        <p className="px-3 cu py-1 bg-gray-300 hidden rounded-lg md:inline-block cursor-pointer">
          Bollywood Music
        </p>
        <p className="px-3 cu py-1 bg-gray-300 hidden rounded-lg md:inline-block cursor-pointer">
          Reverbation
        </p>
        <p className="px-3 cu py-1 bg-gray-300 hidden rounded-lg md:inline-block cursor-pointer">
          Web dev
        </p>
      </div>
    </div>
  )
}

export default Genere