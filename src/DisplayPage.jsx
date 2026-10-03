import React from 'react'

const DisplayPage = ({form}) => {
  return (
    <>
      <p>First Name: {form.F_Name}</p>
      <p>Last Name: {form.L_Name}</p>
      <p>Email: {form.Email}</p>
      <p>Password: {form.Password}</p>
    </>
  )
}

export default DisplayPage;
