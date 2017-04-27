exports.seed = function(knex, Promise) {
  // return seedAnswerTable();
  // return seedSlidesTable();
  return seedUserDeckScoreTable();
  // return seedDeckTable();
  // return seedGenreTable();
  // return seedUserTable();


function seedUserTable () {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({firstname: 'Alice', lastname: 'Wonderland', email: 'alice@wonderland.com', password: 'bumbum', cookie: 'word', createDate: '2016-01-08 04:05:06 -5:00'}),
        knex('users').insert({firstname: 'Ben', lastname: 'Felangy', email: 'bdawg@wonderland.com', password: 'bantin', cookie: 'drow', createDate: '2016-06-01 04:05:06 -5:00'}),
        knex('users').insert({firstname: 'Chip', lastname: 'Flavio', email: 'flavouredchips@wonderland.com', password: 'lays', cookie: 'crunch', createDate: '2016-09-11 04:05:06 -5:00'})
      ]);
    });
  }

  function seedGenreTable () {
    return knex('genre').del()
      .then(function () {
        return Promise.all([
          knex('genre').insert({name: 'Genre1', description: 'This is genre 1'}),
          knex('genre').insert({name: 'Genre2', description: 'This is genre 2'}),
          knex('genre').insert({name: 'Genre3', description: 'This is genre 3'})
        ]);
      });
  }

  function seedDeckTable () {
    return knex('deck').del()
      .then(function () {
        return Promise.all([
          knex('deck').insert({name: 'Deck1', userId: 14, genreId: 1, createDate: '2016-06-01 04:05:06 -5:00'}),
          knex('deck').insert({name: 'Deck2', userId: 15, genreId: 2, createDate: '2016-06-01 04:05:06 -5:00'}),
          knex('deck').insert({name: 'Deck3', userId: 16, genreId: 3, createDate: '2016-06-01 04:05:06 -5:00'})
        ]);
      });
  }


  function seedSlidesTable () {
    return knex('slides').del()
      .then(function () {
        return Promise.all([
          knex('slides').insert({question: 'Question1', genreId: 1, deckId: 14, pictureUrl: 'there'}),
          knex('slides').insert({question: 'Question2', genreId: 2, deckId: 15, pictureUrl: 'here'}),
          knex('slides').insert({question: 'Question3', genreId: 3, deckId: 16, pictureUrl: 'overThere'})
        ]);
      });
  }

  function seedAnswerTable () {
    return knex('answer').del()
      .then(function () {
        return Promise.all([
          knex('answer').insert({answer: 'answer1', correctAnswer: 'false', slideId: 1}),
          knex('answer').insert({answer: 'answer2', correctAnswer: 'true', slideId: 1}),
          knex('answer').insert({answer: 'answer3', correctAnswer: 'false', slideId: 1}),
          knex('answer').insert({answer: 'answer4', correctAnswer: 'false', slideId: 1})
        ]);
      });
  }

  function seedUserDeckScoreTable () {
    return knex('userdeckscore').del()
      .then(function () {
        return Promise.all([
          knex('userdeckscore').insert({userId: 14, correctAnswerCount: 5,  deckId: 14}),
          knex('userdeckscore').insert({userId: 15, correctAnswerCount: 9, deckId: 15}),
          knex('userdeckscore').insert({userId: 16, correctAnswerCount: 7, deckId: 16})
        ]);
      });
  }


};
