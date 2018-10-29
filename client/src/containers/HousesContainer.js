// * The list component container should mapStateToProps for the array of things
// * The list component container should mapDispatchToProps for the deleteThing action

import { connect } from "react-redux";
import Houses from "../components/Houses";
import { deleteHouse } from "../actions/index";

const mapStateToProps = state => ({ houses: state.houses});

const mapDispatchToProps = { deleteHouse: deleteHouse};

export default connect(mapStateToProps, mapDispatchToProps)(Houses);