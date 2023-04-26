import React from 'react'
import gbtn from './AppleBtn.module.css'
import AppleIcon from '@mui/icons-material/Apple';

export default function AppleBtn() {
  return (
    <>
        <button className={gbtn.apple_btn}>
            <AppleIcon/>
            <span>Sign up with Apple</span>
        </button>
    </>
  )
}
