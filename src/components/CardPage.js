import React from "react"
import {connect} from "react-redux"
import {navigateAction} from "../redux/actions/navigator.actions"
import {NAVIGATE_BACK} from "../consts/navigator"

export const CardPage = (props) => {
	return (
		<div className="page page-card">
			<h2>Card</h2>
			<p>Products to buy amount: {props.items}</p>
			<a href="#" onClick={props.onGoBackClick}>Go back</a>
		</div>
	)
}

export default connect(
	(state) => {
		return {
			items: state.card.items
		}
	},
	(dispatch) => {
		return {
			onGoBackClick: () => dispatch(navigateAction(NAVIGATE_BACK))
		}
	}
)(CardPage)
