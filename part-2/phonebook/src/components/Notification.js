const Notification = ({ message, type }) => {
	if (message === null) {
	  return null
	}

	const notificationColor = {
		color: type ==='successful' ? 'green' : 'red',
	  }
  
	return (
	  <div className='notification' style={notificationColor}>
		{message}
	  </div>
	)
}
  
export default Notification