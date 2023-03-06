import { useState } from "react"

function ExpandableParagraph({text, clippedLength = 100}) {

	const [isExpanded, setIsExpanded] = useState(false)
	
	return (
		<p>
			{ 
				(text.length <= clippedLength || isExpanded) ? 
				text 
				: 
				text.substring(0, clippedLength) + "..."
			}
			
			{ text.length > clippedLength && 
				<button onClick={() => setIsExpanded(!isExpanded)}>
					{isExpanded ? "show less" : "read more"}
				</button>
			}
		</p>
	)
}

export default ExpandableParagraph
