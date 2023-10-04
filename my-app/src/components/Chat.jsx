import React,{useState} from 'react';
import { BsRobot } from 'react-icons/bs';

const Chat = () => {

const [name,setName] = useState(``);

  const handleChat =()=>{
setName(`chatHide`)

  }
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        zIndex: '1000',
        color: '#000',
        width: '5rem',
        height: '5rem',
        borderRadius: '50%',
        background: 'grey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor:"pointer",

      }}
      onClick={handleChat}
      className={name}
    >
      <BsRobot style={{ width: '3rem', height: '3rem' }} />
    </div>
  );
};

export default Chat;
