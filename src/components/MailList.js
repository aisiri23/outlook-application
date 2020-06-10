import React from 'react';

function MailList(props) { // function component
  var isUnread = props.unread;

  return(
    <>
      <p style={ isUnread ? { fontWeight:'bold'} : {fontWeight : 'normal'} }>{props.subject}</p> {/*ternary operator used for displaying the font bold and normal accorfing to unread counts from Json file*/}
      <p>{props.content}</p>
    </>
  )
}

export default MailList