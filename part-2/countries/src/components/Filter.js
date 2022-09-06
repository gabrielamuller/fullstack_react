const Filter = ({ onChange, value }) => {
	return (
	  <>
		<div>
		  Find countries <input onChange={onChange} value={value} type='search' />
		</div>
	  </>
	);
  };
 
export default Filter
