"use strict";
exports.__esModule = true;
var MovieManagementApp = /** @class */ (function () {
    function MovieManagementApp() {
        this.movieList = [];
    }
    MovieManagementApp.prototype.addMovie = function (movie) {
        this.movieList.push(movie);
    };
    MovieManagementApp.prototype.removeMovie = function (movieId) {
        var index = 0;
        for (var i = 0; i < this.movieList.length; i++) {
            if (this.movieList[i].movieId == movieId) {
                index = i;
            }
        }
        delete this.movieList[index];
    };
    MovieManagementApp.prototype.changeProducerForTheMovie = function (movie, nameOfProducer) {
        movie.producer = nameOfProducer;
    };
    MovieManagementApp.prototype.display = function (movie) {
        return "movie name: " + movie.name +
            "hero name " + movie.heroName +
            "heroine name : " + movie.heroine +
            "director :" + movie.director +
            "producer : " + movie.producer;
    };
    return MovieManagementApp;
}());
exports.MovieManagementApp = MovieManagementApp;
