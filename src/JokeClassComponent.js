import React from "react";
import "./Joke.css";

class JokeClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.upVote = this.upVote.bind(this)
        this.downVote = this.downVote.bind(this)
    }

    upVote(){
        const {vote, id } = this.props
        return vote(id, +1)
    }

    downVote(){
        const {vote, id } = this.props
        return vote(id, -1)
    }

    render(){
        const {text, votes} = this.props
        return (
            <div className="Joke">
              <div className="Joke-votearea">
                <button onClick={this.upVote}>
                  <i className="fas fa-thumbs-up" />
                </button>
        
                <button onClick={this.downVote}>
                  <i className="fas fa-thumbs-down" />
                </button>
        
                {votes}
              </div>
        
              <div className="Joke-text">{text}</div>
            </div>
          );

    }
}

export default JokeClassComponent