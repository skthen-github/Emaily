// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  // these code is the same as the line below:
  //  state = { formReview: false };
  // constructor(props) {
  //   super(props);

  //   this.state = { new: true };
  // }

  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => {
            this.setState({ showFormReview: false });
          }}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm",
  // by default, id we dont specify destroyOnUnmount
  // it will be destroyOnUnmount: true,
  destroyOnUnmount: true,
})(SurveyNew);
