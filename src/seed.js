/* eslint-disable no-plusplus */
// NOTE: replace '4sg3JoqctgOK7rtpqwucF3foVgz1' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: '4sg3JoqctgOK7rtpqwucF3foVgz1',
      username: 'alex',
      fullName: 'Alex Mikh',
      emailAddress: 'mihaleksval@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'aivazovsky',
      fullName: 'Aivazovsky Ivan Konstantinovich',
      emailAddress: 'aivazovsky@crimea.com',
      following: [],
      followers: ['4sg3JoqctgOK7rtpqwucF3foVgz1'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'dali',
      fullName: 'Salvador Dalí',
      emailAddress: 'salvador@dali.com',
      following: [],
      followers: ['4sg3JoqctgOK7rtpqwucF3foVgz1'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'orwell',
      fullName: 'George Orwell',
      emailAddress: 'george@orwell.com',
      following: [],
      followers: ['4sg3JoqctgOK7rtpqwucF3foVgz1'],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/aivazovsky/${i}.jpg`,
        caption: 'Nice picture, unfortunately it not a sea D: ',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
