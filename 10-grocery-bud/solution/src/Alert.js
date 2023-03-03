const Alert = ({type, message}) => {
  return (
    <p className={`alert alert-${type}`}>
      {message}
    </p>
  )
}

export default Alert
