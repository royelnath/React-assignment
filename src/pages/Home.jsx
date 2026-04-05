import { useState } from 'react';

// Separate Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <h3>Click Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Main Home Page Component
export default function Home() {
  return (
    <section className="home-section">
      <div className="bio-container">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a second-year B.Tech Computer Science student at Dhemaji Engineering College.
          I have a deep passion for full-stack web development and I am currently
          mastering the MERN stack.
        </p>
      </div>

      <div className="interactive-area">
        <Counter />
      </div>
    </section>
  );
}