import React from "react";
import appleLogo from "../../../assets/images/appleLogo.png"
import twitterLogo from "../../../assets/images/twitterLogo.png"
import GitHubLogo from "../../../assets/images/GitHubLogo.png"

function renderItem(props) {
    return (
        <div className="page-item">
            <img className="logo" src={props.logo} alt="" />
            <div className="content">
                <span className="title">{props.title}</span>
                <span>{props.desc}</span>
            </div>
            <span className="remark">{props.mark}</span>

        </div>
    )
}
function renderPage(props) {
    return (
        <div className="page-diff">
            <span className="title">{props.title}</span>
            <div className="page-list">
                {props.list.map(renderItem)}
            </div>
            <span className="link">view all</span>
        </div>
    )
}
function HomePage() {
    const myHomePages = [
        {
            title: "YOUR PAGES",
            list: [
                {
                    title: "Twitter",
                    logo: twitterLogo,
                    desc: "Social Media Platform",
                    mark: 3
                }
            ]
        },
        {
            title: "YOUR PROJECTS",
            list: [
                {
                    title: "GITHUB",
                    logo: GitHubLogo,
                    desc: "Coding Platform",
                    mark: 2
                },
                {
                    title: "Apple",
                    logo: appleLogo,
                    desc: "Bussiness Company",
                    mark: 2
                },
            ]
        },
    ]
    return (
        <div className="home-page-content">
            {myHomePages.map(renderPage)}
        </div>
    )

}


export default HomePage