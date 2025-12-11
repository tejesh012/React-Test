import robotImage from '../assets/robot.png';
import userImage from '../assets/user.png';
import './ChatMessage.css'
export function ChatMessage({ message, sender }) {
  //const { message, sender } = props;

  return(
    <div className = { sender=="user" ? "userMessageDiv" : "robotMessageDiv"}>
      {sender === "robot" && (
        <img src={robotImage} width = "50"/>
      )}
      <div className = "messageDiv">
        {message} 
      </div>
      
      {sender === "user" && (
        <img src={userImage} width = "50"/>
      )}
    </div>
  )

}