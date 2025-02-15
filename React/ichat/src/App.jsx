import { useEffect, useRef, useState } from 'react';
import './App.css'
import "regenerator-runtime/runtime"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

function App() {

  const scrollRef = useRef(null)

  const [chats, setChats] = useState([])
  const [userMessage, setUserMessage] = useState('')

  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  useEffect(() => {

    if (!listening) {
      handleSent(transcript)
    }

  }, [listening])

  const handleMicrophone = () => {
    SpeechRecognition.startListening({ continuous: false })
  }

  const handleSent = (msg) => {

    if (msg === '') {
      return
    }

    let id = Date.now()

    let values = [
      ...chats,
      {
        id: id,
        type: 'user',
        message: msg,
        time: new Date().toLocaleString('en-Us', {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        })
      },
      {
        id: id,
        type: 'ai',
        message: 'Loading...',
        time: new Date().toLocaleString('en-Us', {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        })
      }
    ]

    setChats(values)
    setTimeout(() => {
      scrollRef?.current.scrollIntoView({ 'behavior': "smooth" })
    }, 500)
    handleFetch(msg, id, values)
  }

  const handleFetch = async (text, id, allChats) => {
    let response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=[YOUR_API_KEY_HERE]", {
      "contents": [{
        "parts": [{ "text": text }]
      }]
    })

    resetTranscript()

    let message = response.data.candidates[0].content.parts[0].text

    let values = allChats.map((item) => {

      return item.id === id && item.type === 'ai' ?
        {
          ...item,
          "message": message
        }
        :
        item

    })
    setChats(values)
    setTimeout(() => {
      scrollRef?.current.scrollIntoView({ 'behavior': "smooth" })
    }, 500)
  }

  return (
    <div className='app'>
      <div className='chatbot_container'>
        {
          chats.length === 0 ?
            <div className='no_message'>
              <p>Welcome User!</p>
              <span>Start a new Converstaion</span>
            </div>
            :
            <>
              {
                chats.map((item, index) => {
                  return item.type === 'user' ?
                    <UserMessage key={index} message={item.message} time={item.time} /> :
                    <AiMessage key={index} message={item.message} time={item.time} />
                })
              }
            </>
        }
        <div ref={scrollRef} style={{ visibility: 'hidden' }}>Hello</div>
      </div>
      <div className='chatbot_controllers'>
        <div className='chatbot_logo'>
          <p>iChat</p>
          <div className='blob_1'></div>
          <div className='blob_2'></div>
        </div>
        <div className='chatbot_controls_container'>
          <div className='text_box'>
            <textarea
              onChange={(e) => setUserMessage(e.target.value)}
              value={userMessage}
              placeholder='Ask Something...!'
            ></textarea>
          </div>
          <div className='chatbot_icons'>
            <div className='mic_img'>
              <img
                src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" alt=''
                onClick={handleMicrophone}
              />
            </div>
            <div className='send_img'>
              <img src="https://cdn-icons-png.flaticon.com/512/46/46076.png" alt=''
                onClick={() => {
                  handleSent(userMessage)
                  setUserMessage("")
                }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;



// eslint-disable-next-line react/prop-types
function UserMessage({ message, time }) {
  return (
    <div className='message_user'>
      <div className='message'>
        <p>{message}</p>
        <span>{time}</span>
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function AiMessage({ message, time }) {
  return (
    <div className='message_ai'>
      <div className='message'>
        <p><ReactMarkdown>{message}</ReactMarkdown></p>
        <span>{time}</span>
      </div>
    </div>
  )
}