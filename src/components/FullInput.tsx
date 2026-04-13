import { useState, type ChangeEvent } from "react";

type Props = {
  addMsg: (title: string) => void;
};

export default function FullInput({ addMsg }: Props) {
  const [title, setTitle] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onClickHandler = () => {
    addMsg(title);
    setTitle("");
  };

  return (
    <div>
      {" "}
      <input
        value={title}
        onChange={onChangeInputHandler}
        placeholder="add your message"
        type="text"
      />
      <button onClick={onClickHandler}>+</button>
    </div>
  );
}
