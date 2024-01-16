export default function Movie({params}: {
	params: { movieId: string }
}) {
	return <div>Movie {params.movieId}</div>
}