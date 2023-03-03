import { FaEdit, FaTrash } from 'react-icons/fa'

function GroceryItem({name, handleRemoveClick, handleEditClick}) {
	return (
		<article className="grocery-item">
			<p className="title">
				{name}
			</p>

			<div className="btn-container">
				<button onClick={handleEditClick} className="edit-btn">
					<FaEdit />
				</button>

				<button onClick={handleRemoveClick} className="delete-btn">
					<FaTrash/>
				</button>
			</div>
		</article>
	)
}

export default GroceryItem
