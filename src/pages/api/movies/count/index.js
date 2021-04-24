// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async (req, res) => {

    if('GET' !== req.method) {
        return res.send(405); // YODA NOTATION
    }

    try {

        // let totalItems = []; 
        const { Title } = req.query;
        // const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${Title}`;

        // const response = await axios.get(url);
        // const { page, total_pages, data } = response.data;

        // totalItems = [...data];

        // if(total_pages >= page) {

        //     for(let i = 2; i <= total_pages; i++){

        //         const responsePagination = await axios.get(`${url}&page=${i}`);
                
        //         totalItems = [...totalItems, responsePagination.data];

        //     }

        // }

        // console.log('Aqui', totalItems.length);

        return res.status(200).json({
            "message": "Success",
            "moviesByYear":[
                {
                    "year":1995,
                    "movies":10
                },                
                {
                    "year":1996,
                    "movies":12
                },                
                {
                    "year":1997,
                    "movies":13
                }
            ],
            "total":35
        })
        
    } catch (error) {
        return res.send(500).json({
            "message": error.message,
            "moviesByYear": [],
            "total": 0
        })
    }
    
}
  