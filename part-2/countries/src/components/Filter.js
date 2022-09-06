const Filter = ({ onChange, value }) => {
	return (
		<>
			Find countries <input onChange={onChange} value={value} type='search' />
		</>
	)
}
 
export default Filter
