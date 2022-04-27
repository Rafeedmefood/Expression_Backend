'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'written', [
                {
                    id: 1,
                    title: 'Privilege',
                    author: 'Rafid Karim',
                    description: 'What is productivity, and what is my relationship to it? This is my first writing piece ever, and in it I explore these ideas.',
                    context: 'My first written piece, I wrote this after thinking about why I felt so restless. When did I strive to be productive? Is it a luxury?',
                    content: 'Productivity.\n' +
                        '\n' +
                        'A single word, toting a set definition, yet at the mercy to all’s interpretation.\n' +
                        '\n' +
                        'Abdicating productivity of its ecological definition, Merriam-Webster defines productivity as “the quality or state of being productive”.\n' +
                        '\n' +
                        'To some, being productive is spending every second engaged in activities that will promote financial prosperity.\n' +
                        '\n' +
                        'To others, productivity is delineated by an action\'s consequence, simply based on whether it can accomplish anything, be it for monetary success or personal happiness.\n' +
                        '\n' +
                        'I fall, like many others, within the boundaries of these renditions. Productivity dominates all aspects of my life, fueled by a fierce competitive nature I inherited from my father. Routinely emphasizing the importance of efficiently utilizing the youth and resources I have at my disposal, origins of the dominance that productivity plays in my life become discernible to the naked eye. \n' +
                        '\n' +
                        'Every moment I spend supine, idle; disengaged from the pursuit of my ambitions or improving technical skills in hobbies are moments wasted, forever haunting me with taunts of unrecoverable youth. Exhausting these irreversible moments of existence with actions lacking substance feels like an egregious sin, pushing me to perform. Study, exercise, diet, network, repeat. Existence is temporary and my days are numbered, for chimes derived from the wind-bell will cease, indifferent to its loudness.\n' +
                        '\n' +
                        'I realize it is all a privilege.',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id:2,
                    title: 'Imposter',
                    author: 'Rafid Karim',
                    description: 'Explaining feelings of imposter syndrome, and acting as if you are one who you aren\'t.',
                    context: 'Feeling as if I am forced to behave in a certain way, I convey these feelings to words.',
                    content: 'Inadvertently I put you under a guise\n' +
                        'desperately trying to accompany you\n' +
                        '\n' +
                        'Nonetheless, once cognizant to truth\n' +
                        '\n' +
                        'all efforts dissolve to notions repudiated\n' +
                        '\n' +
                        'All I want is to be free from these interpretations \n' +
                        'it is an uphill battle',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id:3,
                    title: 'Perspective',
                    author: 'Rafid Karim',
                    description: 'Exploring the intricacies of the perspectives of others.',
                    context: 'I thought of how others view me, and recognized the many expectations upon me, which were all to overwhelming',
                    content: 'I see it as cognitive dissonance\n' +
                        'boundaries and images that you must live up, or fall to\n' +
                        '\n' +
                        'restrictive and painful \n' +
                        'like chains enamored with my skin unwilling to let go \n' +
                        '\n' +
                        'I know that you think of me in a falsified way\n' +
                        'that perfect image of him is who I yearn to be \n' +
                        '\n' +
                        'and yet\n' +
                        '\n' +
                        'am not\n' +
                        '\n' +
                        'for I am me\n' +
                        '\n' +
                        'And I don\'t live up to your perspective\n',
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('written', null, {});
    }
};
