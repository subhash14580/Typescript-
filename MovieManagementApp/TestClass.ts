import { MovieManagementApp } from "./MovieManagementApp";
import { Movie } from "./Movie";

var obj = new MovieManagementApp();

console.log(obj.movieList);
var mov = new Movie();
mov.director = "trivikram";
mov.producer = "James cameroon";
mov.heroName = "mahesh Babu";
mov.heroine = "trisha";
mov.title = "Athadu";
mov.movieId = 12;

obj.movieList.push(mov);

console.log(obj.movieList);
var mo = obj.movieList[0];
console.log(obj.display(mo));