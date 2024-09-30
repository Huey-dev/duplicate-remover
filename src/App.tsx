import React, { useState,  } from "react";
import InputBox from "./_component/InputBox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App: React.FC = () => {
  // toastify notification
  const notify = (message: string) =>
    toast(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      type: 'error',
      theme: 'dark',
    });
  const [inputValue, setInputValue] = useState<string>('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // grab our text
    setInputValue(e.target.value);
    // console.log('inputValue', inputValue)
  }
  const handleSubmit=(e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // console.log(inputValue)
    if (inputValue.trim() === "") {
      notify("Please provide us a value");
    } else {
      return ('done')
    }
  }

  return (
    <div className="bg-[#51d0de] w-full h-screen">
      <ToastContainer/>
      <div className="h-screen flex justify-center items-center">
        <InputBox onSubmit={handleSubmit} value={inputValue} onChange={handleOnChange}/>
      </div>
    </div>
  );
};

export default App;
