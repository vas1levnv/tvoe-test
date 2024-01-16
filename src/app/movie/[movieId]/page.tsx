export default function Movie({params}: {
	params: { movieId: string }
}) {
	return <div>Movies {params.movieId}</div>
}