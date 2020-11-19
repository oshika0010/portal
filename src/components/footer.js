import React from "react"
import styled from "styled-components"

const Footer = () => {
    return (
        <FooterComponents>
            <div>© Shika Blog Site {(new Date()).getFullYear()}</div>
        </FooterComponents>
    )
}

const FooterComponents = styled.div`
  display: flex;
  justify-content: center;
  height: 3vh;
`


export default Footer