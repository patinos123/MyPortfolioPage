import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import SortingImg from "../assets/sorting.gif"
import ContentTemplate from "../template/ContentTemplate"
import media from "../theme/media"

const ScaleBox = keyframes`
  0% {
    min-height: 0%;
    opacity: 1;
  }
  100% {
    min-height: 100%;
    opacity: 1;
  }
`
const ScaleBoxAfter = keyframes`
  0% {
    min-height: 0%;
    opacity: 1;
  }
  60% {
    transform: translate(0, 0);
    min-height: 100%;
    opacity: 1;
  }
  100% {
    transform: translate(2.5%, -5%);
    opacity: 1;
    min-height: 100%;
  }
`

const TextSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -200%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0%, 0);
  }
`

const ProjectDescription = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column;
  `}
`

const ProjectImage = styled.div`
  position: relative;
  height: 100%;
  width: 60%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    opacity: 0;
    background: ${({ theme }) => theme.yellow};
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBoxAfter} 2s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    opacity: 0;
    background-image: url(${SortingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1s 0.25s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  ${media.phone`
    height: 25vh;
    width: calc(100% - 2rem);
    order: 1;
  `}
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  padding-bottom: 3rem;
  width: 100%;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: left;
    padding: 0 1rem 1rem 1rem;
    margin: 0;
  `}
`

const StyledParagraph = styled(Paragraph)`
  font-family: font44146, sans-serif;
  font-size: 2.4rem;
  width: 100%;
  text-align: justify;
  padding-bottom: 5rem;
  color: ${({ theme }) => theme.gray};
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.phone`
    font-size: 1.4rem;
    padding: 0 1rem 3rem 1rem;
  `}
`

const RightDescription = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.phone`
    order: 2;
    width: 100%;
    height: auto;
    padding: 3rem 1rem 0 1rem;
    flex-direction: row;
  `}
`

const StyledList = styled.ul`
  font-family: font44146, sans-serif;
  line-height: 3rem;
  color: ${({ theme }) => theme.gray};
  font-size: 2rem;
  opacity: 0;
  padding: 0 0 0 8rem;
  margin: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.tablet`
    font-size: 2.5rem;
  `}

  ${media.phone`
    width: 50%;
    font-size: 1.4rem;
    line-height: 2rem;
    padding:  0 0 0 2rem;
  `}
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 0 0 0 8rem;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.75s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.phone`
    height: 100%;
    width: 50%;
    font-size: 1.4rem;
    padding: 0;
    justify-content: space-around;
    align-items: flex-end;
  `}
`

const StyledNavLink = styled(NavLink)`
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;

  &:hover {
    transform: initial;
    border-bottom: 1px solid ${({ theme }) => theme.yellow};
  }

  ${media.tablet`
    font-size: 2.5rem;
  `}

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.xs};
  `}
`

const StyledButton = styled(Button)`
  margin: 3rem 0;

  ${media.tablet`
    margin: 1rem 0;
  `}

  ${media.phone`
    margin: 0;
  `}
`

class FirstProject extends React.Component {
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
    const { activeTab } = this.state
    return (
      <ContentTemplate
        id="first-project-page"
        type="Projects."
        active={activeTab}
      >
        <StyledHeading big active={activeTab}>
          Sorting Visualizer App
        </StyledHeading>
        <StyledParagraph active={activeTab}>
          App made in React showing how particular sorting algorithms works. App
          made in React showing how particular sorting algorithms works. App
          made in React showing how particular sorting algorithms works. App
          made in React showing how particular sorting algorithms works. App
          made in React showing how particular sorting algorithms works. This
          app will help you understand:
        </StyledParagraph>
        <ProjectDescription>
          <ProjectImage active={activeTab} />
          <RightDescription>
            <StyledList active={activeTab}>
              <li>bubble sort</li>
              <li>selection sort</li>
              <li>insertion sort</li>
              <li>quick sort</li>
              <li>merge sort</li>
            </StyledList>
            <ProjectButtons active={activeTab}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://patinos123.github.io/sorting-app/"
              >
                <StyledButton>Preview</StyledButton>
              </a>
              <StyledNavLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/patinos123/sorting-app"
              >
                GitHub Code
              </StyledNavLink>
            </ProjectButtons>
          </RightDescription>
        </ProjectDescription>
      </ContentTemplate>
    )
  }
}

export default FirstProject
