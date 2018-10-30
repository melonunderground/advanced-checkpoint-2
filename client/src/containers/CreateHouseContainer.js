// * The new thing component container should mapDispatchToProps for the saveThingAction

import { connect } from 'react-redux';
import CreateHouse from '../components/CreateHouse';
import { createHouse } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    createHouse: function (house) {
      dispatch(createHouse(house));
    }
  };
}

export default connect(null, mapDispatchToProps)(CreateHouse);

