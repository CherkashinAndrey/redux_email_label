import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action from '../actions'
//import ListItem from '../components/listItem'


class List extends Component {
	_onClick(e) {
		e.preventDefault();
		var val = this.refs.input.value.trim();
		this.props.actions.addList(val);
		this.refs.input.value ='';
	}

	_onClickItem(list, e) {
		this.props.actions.activeLables(list);
		let { showDel } = this.props.actions;
		showDel();

	}

	_onClickItemDel(id, e) {
		let { deleteList } = this.props.actions;
		deleteList(id);

	}

	_onClickDelLabel(list, e) {
		let { delLables } = this.props.actions;	
		delLables(list);
		let { showDel } = this.props.actions;
		showDel();
	}

  render() {
    const { lists } = this.props
    console.log('lists',lists);
    return (
      <div className="list">
        LABLES:
        <form onSubmit={this._onClick.bind(this)}>
        	<input type="text" ref="input" />
        </form>

        {this.props.lists.map( (list, i) => {
            return (
            	<div key={i}>
            	<li className="item" onClick={this._onClickItem.bind(this, list)} >
	             {list.text}
	             
	            </li> 
					<strong className="delItem" onClick={this._onClickItemDel.bind(this, list.id)}>  X  </strong>
		            {list.active ? 
		            	<strong className="delText" onClick={this._onClickDelLabel.bind(this, list)}>  delT  </strong> :
		             ''}
				</div>
	            )
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
	state => ({lists: state.list}),
	mapDispatchToProps
	)(List);
