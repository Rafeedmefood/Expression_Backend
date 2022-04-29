'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'note', [
                {
                    title: 'React: Basics',
                    author: 'Rafid Karim',
                    description: 'Addresses :\n' +
                        '- How To create and initialize an app?\n' +
                        '- What is the folder structure and composition?\n' +
                        '- Why can I use HTML in my JavaScript file?\n' +
                        '- How do you use these components?\n' +
                        '- How do I render elements?',
                    link: 'https://www.evernote.com/shard/s724/sh/50d64f01-6ec2-e2a6-9e5b-cdbea1bb3c28/3bc989aeded1a1c98f5fc69719737cfc',
                    tag: 'REACT',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    title: 'React: Components: Functional Components Intro',
                    author: 'Rafid Karim',
                    description: 'Addresses :\n' +
                        '- What are components?\n' +
                        '- What is a functional component?\n' +
                        '- What is the syntax of a functional component?',
                    link: 'https://www.evernote.com/shard/s724/sh/5d3724c9-454c-cc1a-f0af-a7b943deeaab/0321aaf4b87a0a67bb13550e6c65eba4',
                    tag: 'REACT',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    title: 'React: Components: Class Components Intro (CLASS COMPONENTS ARE OLD)',
                    author: 'Rafid Karim',
                    description: 'Addresses :\n' +
                        '- What is a class component?\n' +
                        '- What is the syntax of a class component?\n' +
                        '- What is the difference between class and functional components?',
                    link: 'https://www.evernote.com/shard/s724/sh/8686a2aa-fd9f-af56-3070-ccb41ad29c94/c3239a5730b03c89dc2aeebe813b017d',
                    tag: 'REACT',
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('note', null, {});
    }
};
