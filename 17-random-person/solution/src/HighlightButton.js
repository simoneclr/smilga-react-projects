function HighlightButton({label, handler, children}) {
	return (
		<button onMouseOver={handler} onClick={handler} className="icon" data-label={label}>
			{children}
		</button>
	)
}

export default HighlightButton
