import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";


class App extends Component {
  state = { 
    good: 0,
    neutral: 0,
    bad: 0,
  }


  countTotalFeedback = () => {
    const totals = Object.values(this.state);
    return totals.reduce((acc, total) => acc+=total, 0);
  };


  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0 ? 0 : Math.round(this.state.good / this.countTotalFeedback() * 100)
  };

  onLeaveFeedback = (e) => {
    const value = e.target.attributes.option.value;

    this.setState((prevState) => {
      const newValue = prevState[value] + 1;
      return ({ ...prevState, ...{[value]: newValue}})
      })

      this.countTotalFeedback();
  }

  render() { 
    const { good, neutral, bad } = this.state;
    return (
    <>
      <Section title = "Please leave feedback">
        <FeedbackOptions
          options = {Object.keys(this.state)}
          onLeaveFeedback = {this.onLeaveFeedback} 
        />
      </Section>
      <Section title = "Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
      </Section>
    </>
    )
  }
}
 
export default App;
