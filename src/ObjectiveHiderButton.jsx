import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'

class ObjectiveHiderButton extends Component {

  render() {
    console.log('Rendering <ObjectiveHiderButton/>');
    // add click listener - get the objective_id of the clicked element
    // then on render add 'clicked' to the circle that was clicked,
    // ObjectiveDescription and TableRow will then hide the row with corresponding objective_id

    var curr_obj_id = this.props.objective_id;

    var filledButton = ( (this.props.uistate_hide_obj_ids.indexOf(curr_obj_id) === -1) ? "obj-hide-button" : "obj-hide-button clicked")

    return (
      <div
        className={filledButton}
        onClick={ () => this.props.hideObjectiveFunction(curr_obj_id, this.props.uistate_hide_obj_ids, this.props.case_id) }
      >
        <div className="button-index"></div>
      </div>
      )
  }
}

export default ObjectiveHiderButton;


