import React from 'react'
import ReactDOM from 'react-dom'
import Notifications, { notify } from 'react-notify-toast'
import { connect } from 'react-redux'
import Actions from '../../store/actions'

const modalRoot = document.getElementById('modal')

class Notify extends React.PureComponent {

  timerID

  mapNotification = () => {
    const { isEmailConfirmed } = this.props
    if (!modalRoot) return false

    return ReactDOM.createPortal((
        <Notifications options={{zIndex: 3000, top: (isEmailConfirmed) ? '64px' : '0px'}} />
    ), modalRoot)
  }

  componentDidUpdate() {
    const { errorMessage, successMessage } = this.props

    if (errorMessage) {
      notify.show((errorMessage), 'error', 4000)
      this.timerID = setTimeout(() => this.props.setErrorNotify(''), 5000)
    }

    if (successMessage) {
      notify.show(successMessage, 'success', 3000)
      this.timerID = setTimeout(() => this.props.setSuccessNotify(''), 4000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerID)
  }

  render() {
    const { errorMessage, successMessage } = this.props

    if (errorMessage || successMessage) {
      return this.mapNotification()
    } else return null
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.common.errorMessage,
  successMessage: state.common.successMessage,
})

const mapDispatchToProps = (dispatch) => ({
    setErrorNotify: (value) => dispatch(Actions.common.setErrorNotify(value)),
    setSuccessNotify: (value) => dispatch(Actions.common.setSuccessNotify(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notify)
