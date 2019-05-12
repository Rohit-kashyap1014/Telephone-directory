import React,{ Component }  from 'react'
import { compose, 
		 withState,
		 withHandlers,
		 pure, 
		 getDisplayName
		} from 'recompose'

const enhance = compose(
	withState('searchText','updateSearchText',''),
	withHandlers({
		onChange : props => e=> props.updateSearchText(e.target.value),
		onKeyDown : props => e=> {
			const { searchDirectory, searchText, updateSearchText} = props
			if(e.keyCode === 13){
				searchDirectory(searchText)
				//updateSearchText('')
			}
		}
	}),
  pure
)

const SearchComponent = ({
  searchText,
  onChange,
  onKeyDown
}) => (

	<div>

<label for="srh">Search Contact</label><br></br>
  <input id="srh"
	type="text" 
	value={searchText}
	onKeyDown={onKeyDown}
	onChange={onChange}
	/><br></br>

	</div>
)

console.log(getDisplayName(enhance(SearchComponent)))

export default enhance(SearchComponent)