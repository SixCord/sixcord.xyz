import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Home } from "../routes/app.router";
import Loadable from "react-loadable";

export default function HomeModule() {


  return (
    <div>
    <div className="navbar">
      <div className="container full flex">
        <Link href="/" className="logo flex">
          <img src="https://cdn.sixcord.xyz/attachments/sixcord.png" alt="sixcord.xyz" />
          <p className="title">SixCord</p>
        </Link>
        <nav>
          <ul>
            <li><Link to="/commands">Commands</Link></li>
            <li><Link to="/premium">Premium</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </nav>
      </div>
    </div>
    {/* Showcase */}
    <div className="showcase">
      <div className="container flex">
        <div className="showcase-text">
          <h1>Create the best Discord server!</h1>
          <p>Moderate community servers, increase voice chat activity easily with SixCord bot.</p>
          <div className="buttons flex">
            <a className="button btn btn-blurple" href="https://invite.sixcord.xyz/"><i className="fab fa-discord fa-2x" /> Invite
              to Discord</a>
            <a className="button btn" href="#features">See Features</a>
          </div>
        </div>
      </div>
    </div>
    {/* Features */}
    <div id="features" className="features">
      <div className="container grid">
        <div>
          <h3>Levels, XP and rank card!</h3>
          <p>Use our leveling feature to reward the most</p> <p>active members of your community!</p> <p>Now, users can customize their rank card, isn't that cool?</p> 
          <div className="blank" />
          <p>Be active to spot at top 1 of your leaderboard!</p>
        </div>
        <img src="https://cdn.sixcord.xyz/attachments/rankcard.png" alt="sixcord.xyz" />
      </div>
    </div>
    <div className="wrapper" style={{padding: '35px'}} />
    <div className="features">
      <div className="container grid">
        <img className="desktop" src="https://cdn.sixcord.xyz/attachments/music.png" alt="sixcord.xyz" />
        <div>
          <h3>Music</h3>
          <p>SixCord offers music feature to all users, free &amp; stable, that's amazing right?
            You don't need to setup anything, just do <b>s?play {'{'}song_name{'}'}</b> and chill.</p>
          <div className="blank" />
          <p>We ensure that there is enough capacity for every server to get the highest quality possible, you can always check <a href="https://status.sixcord.xyz/" style={{textDecorationLine: 'underline'}}>service status</a> with real-time reports.</p>
        </div>
        <img className="mobile" src="https://cdn.sixcord.xyz/attachments/music.png" alt="sixcord.xyz" />
      </div>
    </div>
    <div className="wrapper" style={{padding: '35px'}} />

    <div className="footer">
      <div className="container full grid">
        <div className="branding">
          <h1 className="title">SixCord</h1>
          <p>Copyright © 2021 ‐ All Rights Reserved</p>
        </div>
        <div className="flex">
          <div className="footernav">
            <ul>
              <li><Link to="/commands">Commands</Link></li>
              <li><Link to="/premium">Premium</Link></li>
            </ul>
          </div>
          <div className="footernav">
            <ul>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div></div>
  );
}
