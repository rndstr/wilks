export default function (categories) {
    categories.push({
        name: 'USPA Raw Elite Standards',
        unit: 'lbs',
        lists: [
            {
                meta: {max: 114, gender: 'male'},
                weight: 114,
                scores: [
                    {name: 'Class IV', squat: , bench: , dead: , total:},
                    {name: 'Class III', squat: , bench: , dead: , total:},
                    {name: 'Class II', squat: , bench: , dead: , total:},
                    {name: 'Class I', squat: , bench: , dead: , total:},
                    {name: 'Master', squat: , bench: , dead: , total:},
                    {name: 'Elite', squat: , bench: , dead: , total:},
                    {name: 'International Elite', squat: , bench: , dead: , total:},
                ]
            },
            {
                meta: {max: 40, gender: 'female'},
                scores: [
                    {name: 'Beginner', weight: 40, squat: 17, bench: 9, dead: 25},
                    {name: 'Novice', weight: 40, squat: 34, bench: 21, dead: 44},
                    {name: 'Intermediate', weight: 40, squat: 50, bench: 34, dead: 64},
                    {name: 'Advanced', weight: 40, squat: 67, bench: 46, dead: 83},
                    {name: 'Elite', weight: 40, squat: 83, bench: 59, dead: 102}
                ]
            },
            {
                meta: {min: 55, max: 60, gender: 'female'},
                scores: [
                    {name: 'Beginner', weight: 60, squat: 24},
                    {name: 'Novice', weight: 60, squat: 45},
                    {name: 'Intermediate', weight: 60, squat: 66},
                    {name: 'Advanced', weight: 60, squat: 88},
                    {name: 'Elite', weight: 60, squat: 109}
                ]
            }
        ]
    });
}
