const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMuFilms: function() {
        for (let i = 0; i < 2; i++) {
            const firstQuestion = prompt('Один из последних просмотренних фильмов?'),
                  sekondQuestion = prompt('На сколько оцените его?');
        
            if (firstQuestion != null && sekondQuestion != null && firstQuestion != '' && sekondQuestion != '' && firstQuestion.length < 50) {
                personalMovieDB.movies[firstQuestion] = sekondQuestion;
                console.log('Done');
            } else {
                console.log('Error');
                i--;  // возвращать на одну ступень више, т.е. если условия в if не выпонился, то задаем вопросы заново
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрего слишком мало фильмов.')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы обычный зритель.')
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!')
        } else {
            console.log('Произошла ошибка')
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {            
            let genre = prompt(`Ваш любимый жанр под номеров ${i}`);

            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе')
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;                
            }
        }

    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
    },
};