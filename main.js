const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



// --------- Обычная версия ---------

// const firstQuestion = prompt('Один из последних просмотренних фильмов?'),
//       sekondQuestion = prompt('На сколько оцените его?'),
//       thirdQuestion = prompt('Один из последних просмотренних фильмов?'),
//       fourthQuestion = prompt('На сколько оцените его?');

// personalMovieDB.movies[firstQuestion] = sekondQuestion;
// personalMovieDB.movies[thirdQuestion] = fourthQuestion;




// ---------- Автоматизированная версия с помощью цикла for -------------

for (let i = 0; i < 2; i++) {
    const firstQuestion = prompt('Один из последних просмотренних фильмов?'),
          sekondQuestion = prompt('На сколько оцените его?');

    if (firstQuestion != null && sekondQuestion != numberOfFilms && firstQuestion != '' && sekondQuestion != '' && firstQuestion.length < 50) {
        personalMovieDB.movies[firstQuestion] = sekondQuestion;
        console.log('Done');
    } else {
        console.log('Error');
        i--;  // возвращать на одну ступень више, т.е. если условия в if не выпонился, то задаем вопросы заново
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрего слишком мало фильмов.')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы обычный зритель.')
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!')
} else {
    console.log('Произошла ошибка')
}

console.log(personalMovieDB);