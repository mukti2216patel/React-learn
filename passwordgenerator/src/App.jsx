import { useState, useCallback, useRef, useEffect } from 'react';
import './App.css'; // Import the normal CSS

export default function App() {
  const [len, setLen] = useState(8);
  const [numallow, setNumallow] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordInputRef = useRef(null); // To reference the password input field

  // useCallback to prevent unnecessary recreation of the password generator function
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallow) str += '0123456789';
    if (charallow) str += '!@#$%^&*()_+';
    
    // Generate password by picking random characters
    for (let i = 1; i <= len; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }

    // Set the password
    setPassword(pass);
  }, [len, numallow, charallow]); // Dependencies

  // useEffect to automatically generate password whenever the relevant values change
  useEffect(() => {
    passwordgenerator(); // Trigger password generation on state changes
  }, [len, numallow, charallow, passwordgenerator]);  // Re-run when any of these values change

  // useEffect to focus the input when password is updated
  useEffect(() => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus(); // Automatically focus the input field
    }
  }, [password]);  // Runs whenever the password changes

  return (
    <div className="container">
      <div className="password-display">
        <input 
          ref={passwordInputRef}
          type="text"
          value={password}
          className="password-input"
          placeholder="Generated password will appear here"
          readOnly
        />
        <button 
          className="copy-button"
          onClick={() => navigator.clipboard.writeText(password)} // Button to manually copy the password
        >
          Copy
        </button>
      </div>

      <div className="controls">
        <div className="control">
          <input
            type="range"
            min={6}
            max={100}
            value={len}
            className="slider"
            onChange={(e) => setLen(e.target.value)} // Updating password length
          />
          <label>Length: {len}</label>
        </div>
        
        <div className="control">
          <input 
            type="checkbox" 
            checked={numallow} 
            onChange={() => setNumallow((prev) => !prev)} 
          />
          <label>Include Numbers</label>
        </div>
        
        <div className="control">
          <input 
            type="checkbox" 
            checked={charallow} 
            onChange={() => setCharallow((prev) => !prev)} 
          />
          <label>Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}
