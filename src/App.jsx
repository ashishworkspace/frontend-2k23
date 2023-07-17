import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [tempMemory, setTempMemory] = useState([]);
  return (
    <>
      <div className="chat-box">
        {tempMemory.map((data) => {
          // console.log(data)
          return (
            <div className="message" key={data.id}>
              <span className="content">{data.message}</span>
            </div>
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTempMemory([
            ...tempMemory,
            {
              id: Math.floor(Math.random() * new Date().getTime()),
              message,
            },
          ]);
          setMessage("");
        }}
      >
        <input
          className="input-box"
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default App;
