import { useState } from 'react';
import { chatbot } from 'supersimpledev';
import loadingGif from '../assets/loading-spinner.gif';
import './ChatInput.css'

export function ChatInput({chatMessages,setChatMessages}){
  const [inputText, setInputText] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  function SaveInputText(event){
    setInputText(event.target.value);
  }
  async function SendMessage(){
    if (inputText === '' || isLoading){
      return
    }
    
    setIsLoading(true)
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id : crypto.randomUUID()
      }
      
    ]
    setChatMessages([
      ...newChatMessages,{
        message: <img className="image" height = "50px" src={loadingGif}></img>,
        sender: "robot",
        id: crypto.randomUUID()
      }
    ]);
    setInputText(''); 

    const botMessage = await(chatbot.getResponseAsync(inputText));
    setChatMessages([
      ...newChatMessages,
      {
        message: botMessage,
        sender: "robot",
        id : crypto.randomUUID()
      },
    ]);
    setIsLoading(false)
    
  }
  return(
    <div className = "chatInputContainer">
      <input
        className = "chatInput"
        type="text" 
        placeholder="Send a message to ChatBot" 
        size="30"
        onChange={SaveInputText}
        value={inputText}
        onKeyDown = {
          event =>{
            if (event.key =="Enter"){
              SendMessage()
            }
            else if (event.key == "Escape" || event.key == "Esc"){
              setInputText('');
            }
          }
        }
      />
      <button 
        onClick = {SendMessage}
        className = "sendButton"
      >
        Send
      </button>
    </div>
  )
}