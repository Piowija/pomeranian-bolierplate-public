import './styles.css';

import htmlIcon from '../Images/tech-stack/html.svg';
import ts from '../Images/tech-stack/ts.svg';
import js from '../Images/tech-stack/js.svg';
import react from '../Images/tech-stack/react.svg';
import github from '../Images/tech-stack/github.svg';
import redux from '../Images/tech-stack/redux.png';
import vscode from '../Images/tech-stack/vscode-alt 1.png';
import discord from '../Images/tech-stack/discord-icon-svgrepo-com 3.png';
import jira from '../Images/tech-stack/jira 1.png';
import redmine from '../Images/tech-stack/redmine.png';

export const TechStack = () => {
  return (
    <div className="displayGrid">
      <div className="text">
        <p>
          Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
          podczas kursu.
        </p>
      </div>
      <div className="grid-container">
        <div className="grid-cell">
          <img src={htmlIcon}></img>
          <p>html</p>
        </div>
        <div className="grid-cell">
          <img src={ts}></img>
          <p>typescript</p>
        </div>
        <div className="grid-cell">
          <img src={js}></img>
          <p>javascript</p>
        </div>
        <div className="grid-cell">
          <img src={react}></img>
          <p>react</p>
        </div>
        <div className="grid-cell">
          <img src={github}></img>
          <p>github</p>
        </div>
        <div className="grid-cell">
          <img src={redux}></img>
          <p>redux</p>
        </div>
        <div className="grid-cell">
          <img src={vscode}></img>
          <p>vscode</p>
        </div>
        <div className="grid-cell">
          <img src={discord}></img>
          <p>discord</p>
        </div>
        <div className="grid-cell">
          <img src={jira}></img>
          <p>jira</p>
        </div>
        <div className="grid-cell">
          <img src={redmine}></img>
          <p>readmine</p>
        </div>
      </div>
    </div>
  );
};
