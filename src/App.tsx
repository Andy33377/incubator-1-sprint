import { useState } from "react";

import OnOff from "./components/OnOff";
import FullInput from "./components/FullInput";

type messageList = {
  id: number;
  title: string;
};

export default function App() {
  const [message, setMessage] = useState<messageList[]>([
    { id: 1, title: "message 1" },
    { id: 2, title: "message 2" },
    { id: 3, title: "message 3" },
  ]);

  const addMsg = (title: string) => {
    if (title.trim() === "") return;

    const newMsg = {
      id: Date.now(),
      title: title,
    };

    setMessage((prev) => [...prev, newMsg]);
  };

  const removeAllMsgButton = () => {
    setMessage([]);
  };

  const removeMsg = (id: number) => {
    setMessage((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div>
      <FullInput addMsg={addMsg} />
      {message.map((el) => {
        return (
          <div key={el.id}>
            {el.title}
            <button onClick={() => removeMsg(el.id)}>clean</button>
          </div>
        );
      })}
      <button onClick={removeAllMsgButton}>delete all message</button> */
    </div>
  );
}
