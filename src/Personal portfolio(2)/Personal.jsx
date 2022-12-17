import React from "react";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
import "./index.css"

function RenderBIO() {
    return (
        <div className="section">
            <div className="intro-title">BIO</div>
            <div className="intro-content">Even if you're not sure what a blog is, you've no doubt come across one at some point in time. Perhaps you've stumbled across a blog when you've searched "healthy dinner recipes". In fact, if you're reading this, guess what? You're on a blog. (Very meta, I know.)</div>
        </div>
    )
}

function RenderPosts() {
    return (
        <div className="section">
            <div className="intro-title">Posts</div>
            <div className="post-content">
                <span>First, let's go over a brief history -- in 1994, Swarthmore College student Justin Hall is credited with the creation of the first blog, Links.net. At the time, however, it wasn't considered a blog … just a personal homepage.</span>
                <img src="https://iph.href.lu/300x120?fg=666666&bg=cccccc" alt="" />
            </div>
            <div className="post-content">
                <span>First, let's go over a brief history -- in 1994, Swarthmore College student Justin Hall is credited with the creation of the first blog, Links.net. At the time, however, it wasn't considered a blog … just a personal homepage.</span>
                <img src="https://iph.href.lu/300x120?fg=666666&bg=cccccc" alt="" />
            </div>
        </div>
    )
}

function RenderInterest() {
    return (
        <div className="section">
            <div className="intro-title">My interest and hobbies</div>
            <div className="intro-content">Even if you're not sure what a blog is, you've no doubt come across one at some point in time. Perhaps you've stumbled across a blog when you've searched "healthy dinner recipes". In fact, if you're reading this, guess what? You're on a blog. (Very meta, I know.)</div>
        </div>
    )
}

function Personal() {
    return (
        <div className="p-container">
            <div className="left">
                <Profile />
                <HomePage />
            </div>
            <div className="right">
                <RenderBIO />
                <RenderPosts />
                <RenderInterest />
            </div>

        </div>
    )
}

export default Personal