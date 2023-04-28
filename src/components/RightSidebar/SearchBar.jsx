import * as React from 'react';
import { FaSistrix } from "react-icons/fa";
export default function SearchAppBar() {
  const[inputfield,setInputField]=React.useState('')
  return (
    <div>
      <div>
      <FaSistrix style={{
            position: 'absolute',
            top: '2px',
            left: '10px',
            color: '#aaa',
          }}/><input type="text" placeholder='Search' value={inputfield} onChange={(e)=>setInputField(e.target.value)} style={{
            paddingLeft: '30px', 
            width: '100%', 
            border:"none",
          }} />
      </div>
    </div>
    

  );
}