import React from "react"
import MediaQuery from "react-responsive"
import MobileLayout from "../components/mobileLayout"
import PCLayout from "../components/pcLayout"
import AuthorMainPage from "../components/authorPage"

const AuthorPage = () => {
    return (
        <React.Fragment>
            <MediaQuery query="(min-width: 767px)">
                <PCLayout>
                </PCLayout>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
                <MobileLayout>
                    <AuthorMainPage/>
                </MobileLayout>
            </MediaQuery>
        </React.Fragment>
    )
}

export default AuthorPage