import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Inbox from './jsonData/Inbox'
import Spam from './jsonData/Spam'
import OutlookHeader from './components/OutlookHeader'
import Sidebar from './components/Sidebar'
import MailView from './components/MailView'
import MailList from './components/MailList'

class App extends Component { //implemented class component
  constructor(props) {
    super();
    this.state = {
      open: true
    };
  }  

  toggleFolder = () => {   // implemented arrow functions
    this.setState({open: !this.state.open})
  }

  render() {
    const inboxList = Inbox.map(inboxMail => <MailList key={inboxMail.mId} unread={inboxMail.unread} subject={inboxMail.subject} content={inboxMail.content}/>);

    const spamList = Spam.map(spamMail => <MailList key={spamMail.mId} unread={spamMail.unread} subject={spamMail.subject} content={spamMail.content}/>);

    var getCountUnread = (mails) => { 
      var count = 0;
      for (var i = 0; i < mails.length; i++) {
          if (mails[i].props.unread == true) {
              count++;
          }
      }
      return count;
    }
    const unreadCount = getCountUnread(inboxList);

    return(
      <>
      <OutlookHeader /> 
      <div className="container">
          <div>
            <p className = "folders" onClick={this.toggleFolder}>Folders</p>
            {this.state.open ? <ul> 
              <li>Inbox <span className="unreadCount">{unreadCount}</span> {inboxList}</li>
              <li>Spam <span className="unreadCount">{spamList.length}</span> {spamList}</li>           
              <li>Deleted Items</li>
              <li>Custom Folder</li>
            </ul> : null} {/*Collapsible Folders */}
          </div>
          {/*<div><MailList /></div> routing
          <div><MailView /></div>*/}
      </div>
      </> 
    )
  }
}

export default App