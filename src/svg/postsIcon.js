import React from "react"
import styled from "styled-components"

const PostsIcon = () => {
    return (
        <PostsIconWrapper>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 48 48" xmlSpace="preserve" width="36" height="36"><title>bookmark 2</title>
                <g className="nc-icon-wrapper" fill="#111111">
                    <path fill="#111111"
                          d="M39,1H9C7.895,1,7,1.895,7,3v42c0,0.364,0.197,0.698,0.516,0.875c0.316,0.176,0.706,0.167,1.015-0.026 L24,36.179l15.47,9.669C39.632,45.949,39.815,46,40,46c0.167,0,0.334-0.042,0.484-0.125C40.803,45.698,41,45.364,41,45V3 C41,1.895,40.105,1,39,1z"/>
                </g>
            </svg>
        </PostsIconWrapper>
    )
}

const PostsIconWrapper = styled.div`
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  padding: 6px;
`


export default PostsIcon
