import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 6 },
      { id: 2, value: "Css", xp: 8 },
      { id: 3, value: "Php", xp: 6 },
    ],
    frameworks: [
      { id: 1, value: "Bootstrap", xp: 8 },
      { id: 2, value: "Angular", xp: 1 },
      { id: 3, value: "React", xp: 1 },
      { id: 4, value: "Symfony", xp: 5 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
