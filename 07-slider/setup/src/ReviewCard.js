import { FaQuoteRight } from "react-icons/fa"

function ReviewCard({name, image, title, quote, sliderClassName}) {
	return (
		<article className={sliderClassName}>
			<img src={image} alt={name} className="person-img" />
			<h4>{name}</h4>
			<p className="title">{title}</p>
			<p className="text">
				{quote}
			</p>
			<FaQuoteRight className='icon' />
		</article>
	)
}

export default ReviewCard
