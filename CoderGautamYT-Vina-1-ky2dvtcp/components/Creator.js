import React from 'react';
import Sidebar from "react-sidebar";

function QuestionSidebar(props) {
  return (
    <h1>Question #{props.num}</h1>
  )
}

export default class Creator extends React.Component {

  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  addQuestion() {

    this.setState((curState) => {
      return {questions: curState.questions.concat([{}])}
    }, () => { console.log(this.state) })



  }

  getQuestionsList() {
    return (
      <div>
        <b className="creatorheader">Questions </b>
        <hr />
        {

          [...Array(this.state.questions.length)].map((e, i) => <QuestionSidebar key={i} num={i} question={e}/>)
        }
        <button onClick={() => this.addQuestion()} className="button">New Question</button>
      </div>
    )
  }

  render() {
    return (
      <Sidebar
        sidebar={this.getQuestionsList()}
        docked={true}
        styles={{
          sidebar: {
            background: "white", padding: "20px", transition: "transform .1s ease-out",
            WebkitTransition: "-webkit-transform .1s ease-out", position: "absolute", width: "200px", 
          }
        }}
        children={<br/>}
      >
      </Sidebar>
    );
  }
}