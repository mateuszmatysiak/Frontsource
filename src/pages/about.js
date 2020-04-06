import React from "react"
import styled from 'styled-components';
import Image from "gatsby-image"

const StyledTagItem = styled.span`
    font-weight: 400;
    font-size: 32px;

    &:not(:nth-child(1)) {
        margin-left: 8px;
    }
    margin-right: 8px;
`;

const StyledImage = styled(Image)`
    flex-grow: 1;
    margin: 10px;
    &:nth-child(1) {
        height: 400px;
        flex-basis: 100%;
    }

    &:nth-child(1),
    &:nth-child(2) {
        margin-left: 0;
    }
    height: 150px;
`;

const StyledImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 50%;
`;

const StyledWrapper = styled.div`
    display: flex;
    margin-top: 30px;
`;

const StyledContentWrapper = styled.div`
    margin-left: 20px;
`;

const AboutPage = ({ data }) => (
    <>
        <StyledTagItem>O mnie</StyledTagItem>
        <StyledWrapper>
            <StyledImageWrapper>
                <StyledImage fluid={data.file.childImageSharp.fluid} />
                <StyledImage fluid={data.file.childImageSharp.fluid} />
                <StyledImage fluid={data.file.childImageSharp.fluid} />
            </StyledImageWrapper>
            <StyledContentWrapper>
                <h1>Czesc, jestem Mateusz!</h1>
                <p>Going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites.
                    </p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from. Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from.</p>
            </StyledContentWrapper>
        </StyledWrapper>
    </>
)

export const query = graphql`
  {
    file(name: {eq: "example1"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default AboutPage
