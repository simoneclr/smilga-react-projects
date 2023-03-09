const Story = ({title, num_comments, url, points, author, handleRemoveClick}) => {
	return (
		<article className="story">
			<h4 className="title">
				{title}
			</h4>

			<p className="info">
				{points} points by <span>{author}</span> | {num_comments} comments
			</p>

			<div>
				<a href={url} className="read-link" target="_blank" rel="noopener noreferrer">
					Read more
				</a>

				<button onClick={handleRemoveClick} className="remove-btn">
					Remove
				</button>
			</div>
		</article>
	)
}

export default Story
