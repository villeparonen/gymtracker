import { reduxForm } from 'redux-form';
import ExcerciseView from './ExcerciseView';

// RF: REDUX FORM MANAGEMENT component
// The component is responsible for supplying the Redux Form form management features 
// (via properties supplied to HelloFormView); 
// later we will define things like VALIDATION RULES here


const validate = ({ excerciseName, weight, sets, reps }) => {
    const errors = {};
    if (excerciseName === undefined) {
      errors.excerciseName = 'Required';
    } else if (excerciseName.trim() === '') {
      errors.excerciseName = 'Must not be blank';
    }
    if (weight === undefined) {
      errors.weight = 'Required';
    } else if (weight.trim() === '') {
      errors.weight = 'Must not be blank';
    }
    if (sets === undefined) {
      errors.sets = 'Required';
    } else if (sets.trim() === '') {
      errors.sets = 'Must not be blank';
    }
    if (reps === undefined) {
      errors.reps = 'Required';
    } else if (reps.trim() === '') {
      errors.reps = 'Must not be blank';
    }
    return errors;
  };

const FORM = 'Excercise';  // IDENTIFIER
// Each form requires an unique string identifier, e.g., ProgSelection

const ExcerciseRF = reduxForm({
  form: FORM,
  validate,
})(ExcerciseView);

export default ExcerciseRF;
