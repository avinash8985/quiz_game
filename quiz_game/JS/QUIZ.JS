let data={
    allquestions:[
        {
            num:'question1',
            id:1,
            question:'who is BATMAN',
            answer:'bruce whyne',
            options:['clark kent','bruce whyne','wonder women','rohit']
        },
        {
            num:'question2',
            id:2,
            question:'who is superman',
            answer:'clark',
            options:['clark kent','bruce whyne','wonder women','rohit']
        },
        {
            num:'question3',
            id:3,
            question:'who is kills joker',
            answer:'raj',
            options:['clark kent','raj','wonder women','rohit']
        },
        {
            num:'question4',
            id:4,
            question:'who is spiderman',
            answer:'chandu',
            options:['clark kent','chandu','wonder women','rohit']
        },
        {
            num:'question5',
            id:5,
            question:'who is teaching in js',
            answer:'naveen',
            options:['clark kent','raj','wonder women','naveen']
        },
        {
            num:'question6',
            id:6,
            question:'who is broker',
            answer:'rama',
            options:['clark kent','raj','rama','rohit']
        },
        {
            num:'question7',
            id:7,
            question:'what do you want',
            answer:'drink',
            options:['clark kent','drink','wonder women','rohit']
        },
        {
            num:'question8',
            id:8,
            question:'what are you doing',
            answer:'walking',
            options:['walking','drink','wonder women','rohit']
        },
        {
            num:'question9',
            id:9,
            question:'what happended',
            answer:'nothing',
            options:['clark kent','drink','nothing','rohit']
        },
        {
            num:'question10',
            id:10,
            question:'do you teaching',
            answer:'yes',
            options:['clark kent','yes','wonder women','rohit']
        },
        {
            num:'question11',
            id:11,
            question:'what do you want',
            answer:'drink',
            options:['clark kent','drink','wonder women','rohit']
        },
        {
            num:'question12',
            id:12,
            question:'what do you want',
            answer:'drink',
            options:['clark kent','drink','wonder women','rohit']
        },
        {
            num:'question13',
            id:13,
            question:'what do you want',
            answer:'drink',
            options:['clark kent','drink','wonder women','rohit']
        },
        {
            num:'question14',
            id:14,
            question:'what do you want',
            answer:'drink',
            options:['clark kent','drink','wonder women','rohit']
        },
        {
            num:'question15',
            id:15,
            question:'what do you want',
            answer:'drink',
            options:['clark kent','drink','wonder women','rohit']
        },
        {
            num:'question16',
            id:16,
            question:'who is teaching in js',
            answer:'naveen',
            options:['clark kent','raj','wonder women','naveen']
        },
        {
            num:'question17',
            id:17,
            question:'who is broker',
            answer:'rama',
            options:['clark kent','raj','rama','rohit']
        },
        {
            num:'question18',
            id:7,
            question:'what do you want',
            answer:'drink',
            options:['clark kent','drink','wonder women','rohit']
        },
        {
            num:'question19',
            id:19,
            question:'what are you doing',
            answer:'walking',
            options:['walking','drink','wonder women','rohit']
        },
        {
            num:'question20',
            id:20,
            question:'what are you doing',
            answer:'walking',
            options:['walking','drink','wonder women','rohit']
        },


    ]
}

let answers=[];
let count=0;
for(let i=0;i<5;i++)
{
  let random=Math.trunc(Math.random()*20);
  let quest=data.allquestions[random];
  let question=quest.question;
  let [a,b,c,d]=quest.options;
  answers.unshift(quest.answer);

  let html=
  `<div class="questions">${quest.question}</div>
  <div class="alloptions">
  <input class="options" name="radio${count}" type="radio"> <span class="ans">${a}</span>
  <input class="options" name="radio${count}" type="radio"> <span class="ans">${b}</span>
  <input class="options" name="radio${count}" type="radio"> <span class="ans">${c}</span>
  <input class="options" name="radio${count}" type="radio"> <span class="ans">${d}</span>
  </div>`;

  count++;
  document.querySelector('#main').insertAdjacentHTML('afterbegin',html)
  
  }
let ans=0;
let result=0;
function submit(){
   
    for(let i=0;i<document.querySelectorAll('.options').length;i++)
    {
        let all=document.querySelectorAll('.options')[i].checked;
        if(all==true){
            let usercheck =document.querySelectorAll('.options')[i].innerHTML;
        
        if(document.querySelectorAll('.ans')[i].innerHTML==answers[ans])
        {
            console.log('correct')
            result++;
        }else{
            console.log('not correct')
        }
        ans++;

        }
        // console.log(`${result}`)
        
    }
    document.querySelector('#main').style.opacity=0;
    document.querySelector('#score').innerHTML=`${result}/5`
     document.querySelector('#btn').style.display='block'
        

}

  document.querySelector('#btn').addEventListener('click',submit)