// * AppContainer should mapDispatchToProps for loadThings.
import App from "../App.js"
import { connect } from "react-redux";
import { loadHouses } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        loadHouses: function () {
            dispatch(loadHouses());
        }
    }
}
export default connect(null, mapDispatchToProps)(App);


