import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="section error-page">
      <div className="error-container">
        <h1>Oops! It's A Dead End</h1>

        <Link to="/" className="btn btn-primary">
          Take Me Home
        </Link>
      </div>
    </div>
  )
}

export default Error
