import { createSignal } from "solid-js";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = createSignal(randomMessage());

  return (
    <div>
      <h1>{greeting()}, to you!</h1>
      <button
        type="button"
        onClick={() => {
          setGreeting(randomMessage());
        }}
      >
        Randomize
      </button>
    </div>
  );
}
