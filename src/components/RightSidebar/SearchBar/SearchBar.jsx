import React, { useState } from 'react';
import './searchBar.css';
import { FaSistrix } from "react-icons/fa";

export default function SearchAppBar() {

  const [inputfield, setInputField] = useState('')
  
  return (
    <div className='searchBar_mainDiv'>
      <div className='searchBar_container'>

        <FaSistrix style={{color: 'gray'}} size={20}  />

        <input
          type="text"
          placeholder='Search'
          value={inputfield}
          onChange={(e) => setInputField(e.target.value)}
        />

      </div>
    </div>


  );
}