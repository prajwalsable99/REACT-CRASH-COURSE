import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className='container'>
  <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
        {props.alert.msg}
 
</div>
    </div>
  )
}

export default Alert
