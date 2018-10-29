import {connect} from "react-redux";
import House from "../components/House";

const mapStateToProps = state => ({ houses: state.houses});

export default connect (mapStateToProps)(House); 