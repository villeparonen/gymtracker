import { reduxForm } from 'redux-form';
// import { reduxForm } from 'redux-form/immutable';   kokeile
import ProgSelectionView from './ProgSelectionView';

// RF: REDUX FORM MANAGEMENT component
// The component is responsible for supplying the Redux Form form management features 
// (via properties supplied to HelloFormView); 
// later we will define things like VALIDATION RULES here


const validate = ({ programName, goal }) => {
    const errors = {};
    if (programName === undefined) {
      errors.programName = 'Required';
    } else if (programName.trim() === '') {
      errors.programName = 'Must not be blank';
    }
    if (goal === undefined) {
      errors.goal = 'Required';
    } else if (goal.trim() === '') {
      errors.goal = 'Must not be blank';
    }
    return errors;
  };

const FORM = 'Program';  // IDENTIFIER
// Each form requires an unique string identifier, e.g., ProgSelection

const ProgSelectionRF = reduxForm({
  form: FORM,
  validate,
})(ProgSelectionView);

export default ProgSelectionRF;
