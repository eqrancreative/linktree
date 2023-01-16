import React from 'react';
import "../../css/page/button.css";

class Button extends React.Component {
    render() {
        return (
            <button
                className={this.props.enable === true ? "btn btn-enable" : "btn btn-disable"}
                onClick={this.props.action}
            >
                <img src={this.props.icon} style={{ marginRight: "8px" }} alt={"Ícone"}/>
                {this.props.description}
            </button>
        )
    }
}

export default Button;
