import {useRef,useEffect} from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'
function ChatMessages({chatMessages}){
  const chatMessagesRef = useRef(null);

  useEffect(()=>{
    const containerElem = chatMessagesRef.current
    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  },[chatMessages]);
  return (
    <div 
      className="chatMessagesContainer"
      ref = {chatMessagesRef}
    
    >
      {chatMessages.length === 0 ?(
        <p
          className="welcome-text"
        >
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
        ): (
        chatMessages.map((chatmessage)=>{
          return(
            <ChatMessage
              message = {chatmessage.message}
              sender = {chatmessage.sender}
              key = {chatmessage.id}
            />
          );
        })
    )}
    </div>
  )
}
export default ChatMessages