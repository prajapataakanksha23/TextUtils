import React from 'react'

export default function Alerts(props) {
	
  return (
	<div style={{ position: "absolute",top: "56px",width: "100%"}}>
	{props.alert && <div>
		<div className="alert alert-success alert-dismissible fade show" role="alert">
  		<strong>{props.alert.type}</strong> {props.alert.msg}
		</div>
	</div>}
	</div>
  )
}
