import { FaAngleDoubleRight } from "react-icons/fa"

function JobDetails({title, company, dates, duties}) {
	return (
		<article className="job-info">
			<h3>{title}</h3>
			<h4>{company}</h4>
			<p className="job-date">{dates}</p>

			<ul>
				{duties.map((d, i) =>
					<li key={i} className="job-desc">
						<FaAngleDoubleRight className="job-icon" />
						<p>{d}</p>
					</li>	
				)}
			</ul>
		</article>
	)
}

export default JobDetails
