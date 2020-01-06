import React from "react"
import styled, { keyframes, css } from "styled-components"
import media from "../theme/media"
import Button from "../components/atoms/Button/Button"
import { Formik, Form, Field } from "formik"
import axios from "axios"
import * as Yup from "yup"

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  subject: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  content: Yup.string()
    .min(5, "Too Short!")
    .required("Required"),
})

const ContactContainer = styled.div`
  position: relative;
  width: 50%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 0.5s 0.7s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.tablet`
    width: 50%;
    height: 25vh;
  `}

  ${media.phone`
    width: 100%;
    height: 70%;
  `}
`

const StyledButton = styled(Button)`
  margin-top: 2rem;
  width: 25%;
  height: 25%;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.black};

  &:before {
    border: 1px solid ${({ theme }) => theme.white};
  }

  &:after {
    border: 1px solid ${({ theme }) => theme.black};
  }

  ${media.phone`
    width: 30%;
    height: 30%;
  `}
`

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;

  .contact-inputs {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  input {
    width: 40%;
    background: none;
    border: 1px solid ${({ theme }) => theme.black};
    padding: 10px 14px;
    margin: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.black};
    font-family: "Montserrat", sans-serif;

    ::placeholder {
      color: ${({ theme }) => theme.black};
    }
  }

  textarea {
    width: calc(80% + 20px);
    height: 80%;
    background: none;
    border: 1px solid ${({ theme }) => theme.black};
    padding: 1rem 1.4rem;
    margin: 2rem 1rem 0 1rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.black};
    resize: none;
    font-family: "Montserrat", sans-serif;

    ::placeholder {
      color: ${({ theme }) => theme.black};
    }
  }

  ${media.phone`
    margin-top: 10%;

    input {
      padding: 10px 10px;
      font-size: 1.4rem;
    }

    textarea {
      padding: 10px 10px;
      font-size: 1.4rem;
      height: 100%;
    }
  `}
`

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: false }
  }

  componentDidUpdate() {
    if (
      this.props.active === true &&
      this.props.active !== this.state.activeTab
    ) {
      this.setState({ activeTab: this.props.active })
    }
  }

  render() {
    return (
      <ContactContainer active={this.props.active}>
        <Formik
          initialValues={{ email: "", subject: "", content: "" }}
          validate={values => {
            let errors = {}
            if (!values.email) {
              errors.email = "Required"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address"
            }
            return errors
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            SignupSchema.isValid({
              email: values.email,
              subject: values.subject,
              content: values.content,
            })
              .then(function() {
                axios({
                  method: "post",
                  url:
                    "https://cors-anywhere.herokuapp.com/https://o30d2yrza3.execute-api.eu-west-1.amazonaws.com/default/portfolio_lambda",
                  data: {
                    email: values.email,
                    subject: values.subject,
                    content: values.content,
                  },
                })
                  .then(function() {
                    resetForm()
                    alert.success("Message sent!")
                  })
                  .catch(function() {
                    alert.error("Error :/")
                  })
              })
              .catch(function() {
                alert.show("Fill in all the fields")
              })
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <div className="contact-inputs">
                <Field name="email" type="email" placeholder="E-mail" />
                <Field name="subject" type="text" placeholder="Subject" />
              </div>
              <Field
                name="content"
                component="textarea"
                placeholder="Message"
              />
              <StyledButton type="submit" disabled={isSubmitting}>
                Submit
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </ContactContainer>
    )
  }
}

export default Contact
