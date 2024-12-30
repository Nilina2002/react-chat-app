import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {}, []);

  //2:24:00

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <div className="texts">
            <span>Charitha</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloremque voluptatem debitis at nisi beatae vero cum, fugit
              explicabo? Natus libero saepe aliquid quisquam quaerat blanditiis
              eos laboriosam excepturi ad.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloremque voluptatem debitis at nisi beatae vero cum, fugit
              explicabo? Natus libero saepe aliquid quisquam quaerat blanditiis
              eos laboriosam excepturi ad.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloremque voluptatem debitis at nisi beatae vero cum, fugit
              explicabo? Natus libero saepe aliquid quisquam quaerat blanditiis
              eos laboriosam excepturi ad.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloremque voluptatem debitis at nisi beatae vero cum, fugit
              explicabo? Natus libero saepe aliquid quisquam quaerat blanditiis
              eos laboriosam excepturi ad.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloremque voluptatem debitis at nisi beatae vero cum, fugit
              explicabo? Natus libero saepe aliquid quisquam quaerat blanditiis
              eos laboriosam excepturi ad.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloremque voluptatem debitis at nisi beatae vero cum, fugit
              explicabo? Natus libero saepe aliquid quisquam quaerat blanditiis
              eos laboriosam excepturi ad.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
