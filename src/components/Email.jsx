import React from 'react'
import '../styles/styleComponents/Email.css'
function Email({email, index, toggleRead, toggleStar, showMail}) {
  return (
    <>
        <li

            className={`email ${email.read ? 'read' : 'unread'}`}
            onClick={(e) => showMail(e, email)}
        >
            <div className="select">
            <input
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
                onChange={() => toggleRead(email)}
            />
            </div>
            <div className="star">
            <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => toggleStar(email)}
            />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
        </li>
    </>
  )
}

export default Email