import React, {
    useState,
    useEffect,
    useReducer,
    useRef,
    Component,
  } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import ReactDOM from "react-dom";
  import { Button } from "bootstrap";
  import { Person, ChatDots } from "react-bootstrap-icons";
  export function Chatmsg(props) {
    return (
      <div className={`d-flex ${props.user&&`justify-content-end`}`}>
        {props.user ? (
          <span className="message-right">
            <span className="message-text">{props.message}</span>
            <Person className="message-icon"/>
          </span>
        ) : (
          <span className="message-left">
            <ChatDots className="message-icon"/>
            <span className="message-text">{props.message}</span>
          </span>
        )}
      </div>
    );
  }