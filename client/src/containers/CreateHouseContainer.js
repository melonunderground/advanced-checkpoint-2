// * The new thing component container should mapDispatchToProps for the saveThingAction

import {connect} from 'react-redux';
import CreateHouse from '../components/CreateHouse';
import {createHouse} from '../actions/index.js';

const mapDispatchToProps = {createHouse: createHouse};

export default connect (null, mapDispatchToProps)(CreateHouse);

