import React, { useEffect } from 'react'
function Chat({n}) {

    useEffect(() => {
        n(false);


        var messagecontainer=document.querySelector('.container');
var messagecontent=document.querySelector('.msg');
var sent=document.getElementById('form');
const append=(message,position)=>{
const messagelement = document.createElement('div');
messagelement.innerText=message;
messagelement.classList.add('msg');
messagelement.classList.add(position);
messagecontainer.append(messagelement)
var h=messagecontainer.clientHeight;
messagecontainer.scrollBy(0,h);
}

var form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=document.getElementById('text');
    var msgdata= text.value;
    append(msgdata,"right");
    text.value=" ";
})
      
        return () => {
          n(true)
        }
      }, [])
  return (
    <div>


<div class="box">
<div class="container">
            </div>

            
            
            <form action="#" id="form">
       <input type="text" id="text" name="text"/>
           <button type="submit" id="send">Send</button>
        </form>
        
    </div>


    </div>
  )
}

export default Chat