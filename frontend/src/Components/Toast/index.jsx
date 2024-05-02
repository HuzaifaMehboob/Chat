import React from 'react'
import {  toast } from 'react-toastify';
function Toast() {
  return (
    <>
      {toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    })}
    </>
  )
}

export default Toast