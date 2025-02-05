import React from 'react'
import Email from './Email'
import '../styles/styleComponents/Emails.css'
function Emails({filteredEmails, toggleRead, toggleStar}) {
  return (
    <>
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                <Email email ={email} index = {index} toggleStar = {toggleStar} toggleRead = {toggleRead}></Email>
                ))}
            </ul>
        </main>
    </>
  )
}

export default Emails