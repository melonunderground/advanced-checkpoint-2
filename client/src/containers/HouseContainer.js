import {connect} from "react-redux";
import House from "../components/House";
import { deleteHouse } from "../actions/index";

const mapStateToProps = state => ({ houses: state.houses});

const mapDispatchToProps = (dispatch) => ({ 
    deleteHouse:(id) => {dispatch(deleteHouse(id))} 
});
export default connect (mapStateToProps,mapDispatchToProps)(House); 