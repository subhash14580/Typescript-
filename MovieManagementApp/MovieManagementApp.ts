import {Movie} from "./Movie";
import MovieInterface from "./MovieInterface";
import {MovieDistributor} from "./MovieDistributor";

export class MovieManagementApp implements MovieInterface{

        public movieList:Movie[] = [];
        public movieDistributors:MovieDistributor[] = [];

        public addMovie(movie:Movie):void{
            this.movieList.push(movie);
        }
        public removeMovie(movieId:number) : void{
            var index = 0;
            for(var i = 0; i < this.movieList.length; i++){
                if(this.movieList[i].movieId == movieId) {
                    index = i;
                }
            }
            delete this.movieList[index];
        }
        public changeProducerForTheMovie(movie:Movie,nameOfProducer:string){
            movie.producer = nameOfProducer;
        }
        public display(movie: Movie):string{
                return "movie name: " + movie.name+ 
                        "hero name "+ movie.heroName + 
                        "heroine name : "+ movie.heroine  + 
                        "director :" + movie.director + 
                        "producer : "+ movie.producer; 
        }
        public addMovieDistributor(movieDis:MovieDistributor):void {
            this.movieDistributors.push(movieDis);
        }

}