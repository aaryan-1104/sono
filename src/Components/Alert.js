import React from "react";

export default function Alert(props) {

  return (
    props.warn && ( <div style={{"marginTop":"55px","position":"fixed","width":"100%","height":"45px"}}className={`alert alert-${props.warn.type} ${props.warn.type==="primary"?"d-none":""} alert-dismissible `} role="alert" id="liveAlert">
                      <strong>{props.warn.type==="danger"?"Error":"Nice!"}</strong>{" "}
                      <em className="text-align-left">{props.warn.msg}</em>
                    </div>
                  )
  );
}
