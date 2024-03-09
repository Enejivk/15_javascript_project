const people =[
{
    id: 0,
    name: 'victor Smith',
    image: 'https://shorturl.at/cfDIZ',
    job: 'Google SE',

    review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of'
},

{
    id: 1,
    name: 'David Smith',
    image: 'https://shorturl.at/xINO3',
    job: 'Microsoft SE',

    review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of'
},
{
    id: 3,
    name: 'Mary Golden',
    image: 'https://shorturl.at/jsyH0',
    job: 'UX Designer',

    review: 'Contrary to popular belief, Lorem Ipsum is not simply random text.Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of'
}
];
const prev_btn = document.querySelector('.left');
const next_btn = document.querySelector('.right');
const random_btn = document.querySelector('.random');
const name = document.querySelector('#name');
const image = document.querySelector('#image');
const review = document.querySelector('#text');
const job = document.querySelector('#job');

let person = 0;
function changePerson(){
    name.textContent = people[person].name;
    review.textContent = people[person].review;
    image.src = people[person].image;
    job.textContent = people[person].job;
}
next_btn.addEventListener('click', function(){
    person++;
    if (person > people.length-1){
        person = 0;
    }
    changePerson();
    console.log(person);
})
prev_btn.addEventListener('click', function(){
    person--;
    if (person < 0){
        person = people.length-1;
    }
    console.log(person);
    changePerson()
})
random_btn.addEventListener('click', function(){
    let randomPerson = Math.floor((Math.random()*3));
    if(randomPerson == person){
        console.log("From theSame");
        randomPerson = Math.floor((Math.random()*3));
    }
    person = randomPerson;
    console.log(person);
    changePerson();
})
