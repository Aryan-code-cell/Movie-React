import axios from "axios";


const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjFkOTIzYjI1NmNhNmNlYzA3OWY3OTVjMDBkYmM2ZCIsInN1YiI6IjY2NmE3YTQ5OWMwOTk4ZmYzMDFjODZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mpTh1_7eZFLMYiRffOg1LI5AgsOgi3SXClddL1hJ7nU'
      },
});

export default instance;