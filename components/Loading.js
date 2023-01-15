import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import Typewriter from "typewriter-effect";

const style = {
    display : " block",
    margin : "0 auto",
}
const Loading = ({ loading }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen m-auto">
      <BeatLoader
        color="#234aba"
        loading={loading}
        cssOverride={style}
        size={15}
        speedMultiplier={1}
        aria-label="Loading"
        data-testid="loader"
      />
      <h1 className="text-2xl text-[#1e40af] font-semibold">Loading...</h1>
    </div>
  );
}

export default Loading