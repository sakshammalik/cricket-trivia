export interface QuestionsAndAnswers {
    id: number;
    question: string;
    correct_answer: string;
    all_answers: string[];
}

export const QUESTIONSANDANSWERS: QuestionsAndAnswers[] = [
    {
        id: 1,
        question: 'Which team secured the top position in the ICC test rankings with 123 points in May 2017?',
        correct_answer: 'India',
        all_answers: [
            'India',
            'Australia',
            'South Africa',
            'West Indies',
        ]
    },
    {
        id: 2,
        question: ' Which woman cricketer won the BCCI award for the first time?',
        correct_answer: 'Shanta Rangaswamy',
        all_answers: [
            'Shanta Rangaswamy',
            'Mithali Raj',
            'Harmanpreet Kaur',
            'Mamta Maben',
        ]
    },
    {
        id: 3,
        question: ' Which bowler became the fastest to take 250 wickets in Test matches?',
        correct_answer: 'None of the above',
        all_answers: [
            'Dennis Lillee',
            'Brett Lee',
            'Waqar Younis',
            'None of the above',
        ]
    },
    {
        id: 4,
        question: ' Where did India play its 1st one day international match?',
        correct_answer: 'Taunton',
        all_answers: [
            'Lords',
            'Headingley',
            'Taunton',
            'The Oval',
        ]
    },
    {
        id: 5,
        question: 'Who was the 1st ODI captain for India?',
        correct_answer: 'Ajit Wadekar',
        all_answers: [
            'Ajit Wadekar',
            'Bishen Singh Bedi',
            'Nawab Pataudi',
            'Vinoo Mankad',
        ]
    }
];
