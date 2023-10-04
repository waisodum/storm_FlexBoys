import React from 'react'

const ChatPalet = ({imageGiven, infoGiven}) => {
  return (
    <>
    <div className="palet">
    <div className="chatImg"><img src={imageGiven} alt="image" /></div>
    <div className="chatInfo"><p>{infoGiven}</p></div>

    </div>

    </>
  )
}

export default ChatPalet