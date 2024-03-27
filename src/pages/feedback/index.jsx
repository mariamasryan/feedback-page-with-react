import "./style.scss";
import React, { useRef, useState, useEffect } from "react";
import { Modal } from "@/components/modal";
import { InputField } from "@/atoms/input";
import { TextareaField } from "@/atoms/textareaField";
import { Button } from "@/atoms/button";
import { useCallback } from "react";

export const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    ValidateForm();
  }, [name, email, subject, messages]);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubjectChange = useCallback((e) => {
    setSubject(e.target.value);
  }, []);

  const handleMessageChange = useCallback((e) => {
    setMessages(e.target.value);
  }, []);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (ValidateForm()) {
      setIsOpenModal(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessages("");
    }
  }, [name, email, subject, messages]);

  // to validate form
  const ValidateForm = () => {
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = true;

    if (name === "") {
      nameRef.current.style.setProperty("outline", "1px solid #D2D5DA");
      isValid = true;
    } else {
      nameRef.current.style.setProperty("outline", "1px solid green");
    }

    if (email === "") {
      emailRef.current.style.setProperty("outline", "1px solid #D2D5DA");
      isValid = false;
    } else if (!email.match(isEmail)) {
      emailRef.current.style.setProperty("outline", "1px solid #E12828");
      isValid = false;
    } else {
      emailRef.current.style.setProperty("outline", "1px solid green");
    }

    if (subject === "") {
      subjectRef.current.style.setProperty("outline", "1px solid #D2D5DA");
      isValid = false;
    } else {
      subjectRef.current.style.setProperty("outline", "1px solid green");
    }

    if (messages === "") {
      messageRef.current.style.setProperty("outline", "1px solid #D2D5DA");
      isValid = false;
    } else {
      messageRef.current.style.setProperty("outline", "1px solid green");
    }
    return isValid;
  };

  return (
    <>
      <div className="container">
        <div className="parent">
          <header className="header">
            <h1>Contact</h1>
            <p className="header-text">
              Send us your feedback and we will contact you in short time!
            </p>
          </header>
          <main className="content">
            <form
              onSubmit={(e) => handleSubmit(e)}
              action="#"
              className="feedback-form"
            >
              <InputField
                reff={nameRef}
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              <InputField
                reff={emailRef}
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <InputField
                reff={subjectRef}
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={handleSubjectChange}
              />
              <TextareaField
                reff={messageRef}
                placeholder="Message"
                value={messages}
                required
                onChange={handleMessageChange}
              />
              <Button>Send</Button>
            </form>
          </main>
        </div>
      </div>
      {isOpenModal && <Modal close={() => setIsOpenModal(false)} />}
    </>
  );
};
