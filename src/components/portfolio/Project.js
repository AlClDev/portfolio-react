import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: false,
    showPicture: false,
  };

  hanldeInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  hanldePicture = () => {
    this.setState({
      showPicture: !this.state.showPicture,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="image" onClick={this.hanldePicture} />
        <span className="infos" onClick={this.hanldeInfo}>
          <i className="fas fa-plus-circle"> Info</i>
        </span>

        {this.state.showPicture && (
          <div className="showPictures">
            <div className="picturesContent">
              <img src={picture} alt="image" />
              <div className="button return" onClick={this.hanldePicture}>
                Retour
              </div>
            </div>
          </div>
        )}

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code source
                  </a>
                </div>
              </div>

              <p className="text">{info}</p>

              <div className="button return" onClick={this.hanldeInfo}>
                Retour
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
