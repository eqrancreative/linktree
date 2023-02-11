import React from 'react'

class GlassIcon extends React.Component {
    render() {
        return (
            <div className={this.props.styleClass}>
                <img src={this.props.icon} alt={this.props.alt}/>
            </div>
        )
    }
}

export default GlassIcon;