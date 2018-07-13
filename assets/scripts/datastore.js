let questionCount = 0;
let scoreCount = 0;
//These getters and setters make manipulating and intent of the code more clear
// Because they have a single responsibility, it makes for debugging the app that much easier
function getQuestionCount() {
    return questionCount;
}
function setQuestionCount(int) {
    questionCount = int;
}

function getScoreCount() {
    return scoreCount;
}
function setScoreCount(int) {
    scoreCount = int;
}

function updateScoreCount() {
    let score = getScoreCount();
    score++;
    if (score <= STORE.length) {
        setScoreCount(score); 
    }
}

function updateQuestionCount() {
    let questionNumber = getQuestionCount();
    questionNumber++;
    if (questionNumber <= STORE.length) {
        setQuestionCount(questionNumber);
    }    
}

const STORE = [
    {
        question:'The M4 carbine fires which caliber of ammunition?',
        answers:['5.56', '.270', '7.62','.308'],
        correctAnswer: 0
    },
    {
        question:'A fireteam typically consists of an automatic rifleman who wields an M249 SAW. How much does this machine gun weigh (without loaded ammunition)?',
        answers:['9 lbs','13 lbs','17 lbs','21 lbs'],
        correctAnswer: 2
    },
    {
        question:'What is the maximum effective point-target distance of the M240 Bravo?',
        answers:['2oo meters','400 meters','600 meters','800 meters'],
        correctAnswer: 3
    },
    {
        question:'Which of the following is NOT a characteristic of the M4 carbine?',
        answers:['Air-cooled','Belt-fed','Gas-operated','None of the above'],
        correctAnswer: 1
    },
    {
        question:'A standard M4 magazine holds how many rounds of ammunition?',
        answers:['14','20','24','30'],
        correctAnswer: 3
    },
    {
        question:'What color is used to designate that ammo status is critically low?',
        answers:['Yellow','Red','Amber','Black'],
        correctAnswer: 1
    },
    {
        question:'What Army rank does the following insignia represent?<img class="army-rank" src="assets/images/e7-sfc.jpg" alt="Insignia"/>',
        answers:['Master Sergeant','First Sergeant','Sergeant First Class', 'Gunnery Sergeant'],
        correctAnswer: 2,
        isImageQuestion: true
    },
    {
        question:'After demo has misfired, what is the required wait-time before investigating the charge?',
        answers:['30 min','1 hour','2 hours','4 hours'],
        correctAnswer: 0
    },
    {
        question:'What does the handy acronym "SPORTS" stand for?',
        answers:['Select Post-Op Review Team','Special Order Transmission','Stay positive, offer resolution, think swiftly','Slap, Pull, Observe, Release, Tap, Squeeze'],
        correctAnswer: 3
    },
    {
        question:'Which military occupation uses the abbreviation 12Bravo?',
        answers:['Combat Engineer','Communications Specialist','Infantryman','Medic'],
        correctAnswer: 0
    },
];

