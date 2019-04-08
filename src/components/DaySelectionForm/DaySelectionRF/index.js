import { reduxForm } from 'redux-form';
import DaySelectionView from './DaySelectionView';

// RF: REDUX FORM MANAGEMENT component
// The component is responsible for supplying the Redux Form form management features 
// (via properties supplied to HelloFormView); 
// later we will define things like VALIDATION RULES here

const FORM = 'DaySelection';  // IDENTIFIER
// Each form requires an unique string identifier, e.g., DaySelection

const DaySelectionRF = reduxForm({
  form: FORM,
})(DaySelectionView);

export default DaySelectionRF;
