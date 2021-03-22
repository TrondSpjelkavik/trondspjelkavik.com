import { PageContainer } from "../Projects/Projects";
import { OrangeLine } from "../Home/WhoAmI";
import SuccessSend from "./SuccessSend";
import { useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";

import styled from "styled-components";

const ContactContainer = styled.div`
  position: absolute;
  top: 300px;
  width: 100%;
  height: 550px;
  background: #051e3e;
  max-width: 800px;
  font-family: "Inconsolata", monospace;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    height: 600px;
  }
  @media (max-width: 468px) {
    top: 100px;
  }
  @media (max-width: 468px) and (max-height: 667px) {
    top: 80px !important;
  }

  @media (max-height: 859px) {
    top: 300px;
  }
  @media (max-height: 760px) {
    top: 150px;
  }
`;
const SubHeadlineContact = styled.h3`
  position: absolute;
  margin-top: 85px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 400;

  white-space: nowrap;
`;
const ContactHeadline = styled.h1`
  position: absolute;
  margin-top: 20px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
`;

const ContactHeadlineBox = styled.div`
  text-align: center;
  top: 0;
  position: absolute;
  height: 0;
  width: 0;
  border-left: 400px solid transparent;
  border-right: 400px solid transparent;
  border-top: 170px solid rgba(3, 14, 29, 0.3);
  @media (max-width: 800px) {
    display: none;
  }
`;

const ContactForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 450px;
  max-width: 500px;
  top: 100px;
  margin-left: 50px;
  @media (max-width: 468px) {
    height: 450px;
    margin-top: 40px;
  }
`;

const LabelBox = styled.label`
  position: relative;
  font-size: 24px;
`;

const InputContact = styled.input`
  position: relative;
  color: white;
  width: 200px;
  padding: 10px 10px 0 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid white;
  font-size: 18px;
  &::placeholder {
    font-size: 18px;
  }
`;

const TextareaContact = styled.textarea`
  position: relative;
  width: 400px;
  height: 150px;
  color: white;
  font-size: 20px;
  border: 1px solid white;
  background: transparent;
  &::placeholder {
    padding: 5px 0 0 5px;
    font-size: 16px;
  }
  @media (max-width: 468px) {
    width: 250px;
  }
`;

const ContactButton = styled.button`
  position: relative;
  width: fit-content;
  padding: 10px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: white;
  background: #651e3e;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background: rgba(219, 100, 0, 0.9);
  }
`;

const SocialIconsContact = styled.div`
  position: absolute;
  right: 50px;
  top: 100px;
  width: 150px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    right: 20px;
    top: 530px;
  }
`;

const SocialIconsContainerContact = styled.div`
  cursor: pointer;
  padding: 5px 0 5px 0;
  &:hover {
    border-bottom: 2px solid #db6400;
    border-top: 2px solid #db6400;
  }
`;

function ContactFom() {
  // Opens new successfullySent

  const [send, setSend] = useState(false);

  // react-hooks validation

  const { register, handleSubmit, errors } = useForm();

  // onClick event onSubmit

  function sendEmail() {
    setSend(true);
  }

  // redirects to social media

  function toGithub() {
    window.open("https://github.com/TrondSpjelkavik");
  }

  function toLinkedin() {
    window.open(
      "https://www.linkedin.com/in/trond-fuglseth-spjelkavik-80871552/"
    );
  }

  function toFacebook() {
    window.open("https://www.facebook.com/Trondchivu");
  }

  return (
    <PageContainer>
      <SuccessSend send={send} setSend={setSend}></SuccessSend>
      <ContactContainer>
        <ContactHeadlineBox> </ContactHeadlineBox>
        <ContactHeadline>
          Contact<OrangeLine></OrangeLine>
        </ContactHeadline>
        <SubHeadlineContact>Let's work together</SubHeadlineContact>
        <ContactForm onSubmit={handleSubmit(sendEmail)}>
          <LabelBox>From:</LabelBox>
          <InputContact
            className="input-text"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            ref={register({ required: true, minLength: 2 })}
          ></InputContact>
          {errors.name && errors.name.type === "required" && (
            <p>Please type in your name</p>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <p>Please use 2 or more characters</p>
          )}

          <InputContact
            className="input-text"
            id="email"
            type="text"
            name="email"
            placeholder="E-mail"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              },
            })}
          ></InputContact>
          {errors.email && errors.email.type === "required" && (
            <p>Please enter a valid e-mail address</p>
          )}
          {errors.email && errors.email.type === "minLength" && (
            <p>Please use 4 or more characters</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p>Please enter a valid e-mail address</p>
          )}

          <TextareaContact
            className="input-text"
            id="message"
            name="message"
            placeholder="Message.."
            ref={register({ required: true, minLength: 4 })}
          ></TextareaContact>
          {errors.message && errors.message.type === "required" && (
            <p>Please write a message</p>
          )}
          {errors.message && errors.message.type === "minLength" && (
            <p>Please use 4 or more characters</p>
          )}

          <ContactButton type="submit" arial-label="send message">
            Send
          </ContactButton>
        </ContactForm>
        <SocialIconsContact>
          <SocialIconsContainerContact>
            <FaGithub className="social-icons" onClick={toGithub}></FaGithub>
          </SocialIconsContainerContact>
          <SocialIconsContainerContact>
            <FaLinkedinIn
              className="social-icons"
              onClick={toLinkedin}
            ></FaLinkedinIn>
          </SocialIconsContainerContact>
          <SocialIconsContainerContact>
            <FaFacebookF
              className="social-icons"
              onClick={toFacebook}
            ></FaFacebookF>
          </SocialIconsContainerContact>
        </SocialIconsContact>
      </ContactContainer>
    </PageContainer>
  );
}

export default ContactFom;
