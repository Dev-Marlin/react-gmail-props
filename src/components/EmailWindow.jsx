import React from 'react'
import '../styles/styleComponents/EmailWindow.css'

function EmailWindow({email, visible, setEmailVisible}) {

    if(visible)
    {
        return (
          <>
            <main className="emails">
                <div className="emailHeader">
                    <h2>From: {email.sender}</h2>
                    <button className="closeButton"onClick={() => setEmailVisible(false)}>Back</button>
                </div>
                <p>{email.text}</p>
            </main>
          </>
        )
    }
    else 
    {
        return null;
    }
}

export default EmailWindow