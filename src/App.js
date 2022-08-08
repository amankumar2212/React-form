import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [userRegistration, setUserRegistration] = useState({ Name: "", Contact: "", Address: "", Gender: "" });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });

  }

  const submitData = async (event) => {
    await event.preventDefault();
    const { Name, Contact, Address, Gender } = userRegistration;
    const res = fetch('https://react-form-fcf8b-default-rtdb.firebaseio.com/user.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify({
        Name, Contact, Address, Gender,
      }),
    }
    );
    if (!Name || !Contact || !Address || !Gender ) {
     alert("Please all the data");
    
  }
    else{ if (res) {
      alert("Data is Stored");
    }
    else {
      alert("Please fill the data");
    }
}
  }


  return (

    <div className='app'>
      <h1>React Form With Validation</h1>

      <div className='name'>
        <label>Name :
          <input required type='text' placeholder='Name' minLength={10} name='Name' id='Name' autoComplete='off' onChange={handleInput} value={userRegistration.Name} /></label></div>

      <label>Contact :
        <input required tyoe='number' placeholder='Contact' maxLength={10} name='Contact' id="Contact" autoComplete='off' onChange={handleInput} value={userRegistration.Contact} /></label>

      <label>Address :
        <input required type='text' placeholder='Address' minLength={10}  name='Address' id="Address" autoComplete='off' onChange={handleInput} value={userRegistration.Address} /></label>

      <div className='gender'>
        <label>Gender :
          <input required type='radio' name='Gender' value='male' onChange={handleInput} />Male
          <input required type='radio' name='Gender' value='female' onChange={handleInput} />Female
        </label>
     
          <button type='submit' onClick={submitData}>Submit</button>
      

      </div>
    </div>

  )
}

export default App
