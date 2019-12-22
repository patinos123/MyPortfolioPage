import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import PathfindingImg from "../assets/PathfindingVisualization.png"

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
  80% {
    min-height: 100%;
    opacity: 1;
  }
  100% {
    transform: translate(2.5%, 5%);
    opacity: 1;
    min-height: 100%;
  }
`

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectDescriptionContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProjectDescription = styled.div`
  width: 70%;
  height: auto;
`

const ProjectImage = styled.div`
  position: relative;
  height: 50%;
  width: 50%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    z-index: 1;
    opacity: 0;
    background: ${({ theme }) => theme.yellow};
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBoxAfter} 0.5s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    z-index: 1;
    opacity: 0;
    background-image: url(${PathfindingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 0.5s 0.25s cubic-bezier(.34,.615,.4,.985) both
      `};
  }
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  margin-bottom: 3rem;
  width: 100%;
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.gray};
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const StyledNavLink = styled(NavLink)`
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  font-size: ${({ theme }) => theme.fontSize.s};

  &:hover {
    transform: initial;
    border-bottom: 1px solid ${({ theme }) => theme.yellow};
  }
`

const StyledButton = styled(Button)`
  margin: 3rem 0;
`

class ThirdProject extends React.Component {
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
      <ProjectContainer id="third-project-page">
        <ProjectImage active={activeTab} />
        <ProjectDescriptionContainer>
          <ProjectDescription>
            <StyledHeading big>Sorting Visualizer App</StyledHeading>
            <StyledParagraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam id odit unde quasi molestiae rerum. Voluptatibus
              veritatis saepe quae beatae facilis, in natus nam laborum eum
              autem neque impedit sapiente odio soluta repellat, doloribus
              suscipit voluptates aliquid.
            </StyledParagraph>
            <ProjectButtons>
              <StyledButton>Preview</StyledButton>
              <StyledNavLink>GitHub Code</StyledNavLink>
            </ProjectButtons>
          </ProjectDescription>
        </ProjectDescriptionContainer>
      </ProjectContainer>
    )
  }
}

export default ThirdProject