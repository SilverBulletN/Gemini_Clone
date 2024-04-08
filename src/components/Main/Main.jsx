import React, {useContext} from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';
const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(Context);
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="mainContainer">
            {!showResult
            ?
            <>
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Write a spreadsheet formula to convert a date to the weekday</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm names for an orange cat we are adopting from the shelter</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Write an email to request a quote from local plumbers</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                </div>
            </>
            :
            <div className="result">
                <div className="resultTitle">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="resultData">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?
                    <div className="loading">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p> 
                    }
                      
                </div>
            </div>

            }
            

            <div className="mainBottom">
                <div className="searchBox">
                    <input onChange={(e) => setInput(e.target.value)} value = {input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                    
                </div>
                <p className="buttomInfo">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
    </div>
  )
}

export default Main