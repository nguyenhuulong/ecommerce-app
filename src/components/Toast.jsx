import { useRef } from 'react'

import PropTypes from 'prop-types'

const Toast = props => {
  const toast = {
    icon: props.id === 1 ? "bx-check" : "bx-x",
    alert: props.id === 1 ? "Success" : "Warning",
    message: props.id === 1 ? "Thêm vào giỏ hàng thành công" : (props.id === 2 ? "Vui lòng chọn màu sắc" : "Vui lòng chọn kích cỡ"),
    backgroundColor: props.id === 1 ? "green" : "red",
  }
  const toastRef = useRef(null);
  const handleClose = () => {
    toastRef.current.classList.toggle('active')
  }

  return (
    <div className={`notification-container bottom-right toast-${toast.backgroundColor} active`} ref={toastRef} onClick={handleClose}>
        <i className={`bx ${toast.icon}`}></i>
        <div>
          <p className="notification-title">{toast.alert}</p>
          <p className="notification-message">{toast.message}</p>
        </div>
    </div>
  );
};

Toast.propTypes = {
    id: PropTypes.number.isRequired
}


export default Toast;
