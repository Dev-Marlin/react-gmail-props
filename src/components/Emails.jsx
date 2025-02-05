import React from 'react'
import Email from './Email'
import '../styles/styleComponents/Emails.css'
function Emails({visible, filteredEmails, toggleRead, toggleStar, showMail}) {
  
  if(!visible)
  {
    return (
    <>
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                <Email key={index} email={email} index={index} toggleStar={toggleStar} toggleRead={toggleRead} showMail={showMail}></Email>
                ))}
            </ul>
        </main>
    </>
  )}
  else
    return null;
}

export default Emails