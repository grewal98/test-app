import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleClick = async () => {
    const res = await fetch('/api/greet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    const data = await res.json();
    setGreeting(data.message);
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Greeting App</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ padding: 8, marginRight: 10 }}
      />
      <button onClick={handleClick} style={{ padding: 8 }}>Say Hi</button>
      <p style={{ marginTop: 20 }}>{greeting}</p>
    </div>
  );
}
