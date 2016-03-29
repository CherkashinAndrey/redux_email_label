import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action from '../actions'

class Email extends Component {
  _onChangeInput(id,active, e) {
    let { inputEmailChange } = this.props.actions;
    let { showDel } = this.props.actions;
    inputEmailChange(id,active);
    showDel();
  }

  render() {
    const { emails, actions } = this.props


    return (
      <div className="email">
        EMAIL:
        {this.props.emails.map((email, i) => {
            return (
              <li key={i}>
                <input type="checkbox" checked={email.active} onChange={this._onChangeInput.bind(this, email.id, email.active)}/> {email.text}

                {email.lables.map( (lable, i) => {
                  return <strong key={i} className="emailLable">{lable.text + "  "}</strong>
                })}

              </li> )
        })}

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(action, dispatch)
  }
}

export default connect(
  state => ({emails: state.email}),
  mapDispatchToProps
  )(Email);
