// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async (req, res) => {

    if('GET' !== req.method) {
        return res.send(405);
    }

    try {

        let movies = []; 
        const { Title } = req.query;
        const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${Title}`;

        const response = await axios.get(url);
        const { page, total_pages, data } = response.data;

        movies = [...data];

        if(total_pages >= page) {

            for(let i = 2; i <= total_pages; i++){

                const responsePagination = await axios.get(`${url}&page=${i}`);
                const { data } = responsePagination.data;
                
                movies = [...movies, ...data];

            }

        }

        const responseMovies = movies.map(movie => movie.Year);

        const returnMovies = responseMovies.reduce((accumulator, year) => {

            if(accumulator.length > 0) {

                let isFound = accumulator.find(teste => teste.year === year);

                if(isFound) {
    
                    isFound.movies = isFound.movies+1; 
                    return accumulator; 
    
                }
            }
            
            return accumulator = [
                ...accumulator,
                {
                    year: year,
                    movies: 1
                }
            ]

        }, []);


        return res.status(200).json({
            "message": "Success",
            "moviesByYear": returnMovies,
            "total": movies.length
        })
        
    } catch (error) {
        return res.send(500).json({
            "message": error.message,
            "moviesByYear": [],
            "total": 0
        })
    }
    
}
  