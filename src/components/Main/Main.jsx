import React, { useContext, useRef } from "react"
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput, 
    input
  } = useContext(Context);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSent(); // Call onSent function when Enter key is pressed
      setInput("");
    }
  };

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  return (
    <div className="main">
      <div className="nav">
          <p>NexoraAI</p>
          <img src={assets.user_icon} alt="user-icon" />
      </div>

      <div className="main-container">

        {
          !showResult
          ?
          <>
            <div className="greet">
              <p><span>Hey! Buddy.</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">

              <div className="card"
              onClick={() =>
                handleCardClick(
                  "Suggest beautiful places to see on an upcoming road trip"
                )
              }>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="compass-icon" />
              </div>

              <div className="card"
              onClick={() =>
                handleCardClick(
                  "Create a chart based on my data."
                )
              }>
                <p>Create a chart based on my data.</p>
                <img src={assets.bulb_icon} alt="bulb-icon" />
              </div>

              <div className="card"
              onClick={() =>
                handleCardClick(
                  "Draft an email to my recruiter to accept a job offer"
                )
              }>
                <p>Draft an email to my recruiter to accept a job offer</p>
                <img src={assets.message_icon} alt="message-icon" />
              </div>

              <div className="card"
              onClick={() =>
                handleCardClick(
                  "Explain the following code step by step, explaining each line in detail."
                )
              }>
                <p>Explain the following code step by step, explaining each line in detail.</p>
                <img src={assets.code_icon} alt="code-icon" />
              </div>

            </div>

          </>
          
          :(<div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p> {/* Display the recent prompt */}
            </div>
            <div className="result-data">
              <img src={assets.nexora_icon} alt="nexora-icon" />
              {
                loading ?
                <div className='loader'>
                  <hr/>
                  <hr/>
                  <hr/>
                </div>
                :
                <p dangerouslySetInnerHTML={{__html: resultData  }}></p>
            
              }
            </div>
          </div>)
        }

        <div className="main-bottom">
          <div className="search-box">
            <input 
              onChange={(e)=> setInput(e.target.value)} 
              onKeyDown={handleKeyDown} 
              value={input} 
              type="text" 
              placeholder="Enter a prompt here"
            />
            <div>
              {/* <img src={assets.gallery_icon} alt="gallery-icon" />
              <img src={assets.mic_icon} alt="mic" /> */}
              {
                input?<img onClick={()=>onSent()} src={assets.send_icon} alt="send-icon" />
                :null
              }
            </div>
          </div>

          <p className="bottom-info">
            NexoraAI may display inaccurate info, including about people, so double-check its responses. Thank You!
          </p>
        </div>
      </div>
      
    </div>
  )
};

export default Main;