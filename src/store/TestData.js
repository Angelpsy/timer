import nanoid from 'nanoid';

const childTimers = [
    {
        id: 41,
        order: 1,
        title: 'Timer 41',
        description: 'Description Timer 41',
        childTimers: null,
        value: 100, // s
        left: 100, // s
        state: 'stop', // ['stop', 'pause', 'play']
    },
    {
        id: 42,
        order: 2,
        title: 'Timer 42',
        description: 'Description Timer 42',
        childTimers: null,
        value: 100, // s
        left: 100, // s
        state: 'pause',
    },
    {
        id: 43,
        order: 3,
        title: 'Timer 43',
        description: 'Description Timer 43',
        childTimers: null,
        value: 1000, // s
        left: 100, // s
        state: 'play',
    },
    {
        id: 44,
        order: 3,
        title: 'Timer 431',
        description: 'Description Timer 43',
        childTimers: null,
        value: 1000, // s
        left: 100, // s
        state: 'play',
    },
];

// const childTimers2 = [
//     {
//         id: 21,
//         order: 1,
//         title: 'Timer 241',
//         description: 'Description Timer 41',
//         childTimers: null,
//         value: 100, // s
//         left: 100, // s
//         state: 'stop', // ['stop', 'pause', 'play']
//     },
//     {
//         id: 22,
//         order: 2,
//         title: 'Timer 242',
//         description: 'Description Timer 42',
//         childTimers: null,
//         value: 100, // s
//         left: 100, // s
//         state: 'pause',
//     },
//     {
//         id: 23,
//         order: 3,
//         title: 'Timer 23',
//         description: 'Description Timer 43',
//         childTimers: null,
//         value: 1000, // s
//         left: 100, // s
//         state: 'play',
//     },
//     {
//         id: 24,
//         order: 3,
//         title: 'Timer 231',
//         description: 'Description Timer 43',
//         childTimers: null,
//         value: 1000, // s
//         left: 100, // s
//         state: 'play',
//     },
// ];


let timers = [
    {
        id: 1,
        order: 2,
        title: 'Timer 1',
        description: 'Description Timer 1',
        childTimers: null,
        value: 5, // s
        left: 5, // s
        state: 'stop', // ['stop', 'pause', 'play']
        isTopLevel: true,
    },
    {
        id: 2,
        order: 1,
        title: 'Timer 2',
        description: 'Description Timer 2',
        childTimers: null,
        value: 15, // s
        left: 10, // s
        state: 'play',
        isTopLevel: true,
    },
    {
        id: 3,
        order: 0,
        title: 'Timer 3',
        description: 'Description Timer 3',
        childTimers: null,
        value: 10, // s
        left: 10, // s
        state: 'stop',
        isTopLevel: true,
    },
    {
        id: 4,
        order: 3,
        title: 'Timer 4',
        description: 'Description Timer 4',
        childTimers: childTimers.map((timer => timer.id)),
        value: 1000, // s
        left: 100, // s
        state: 'stop',
        isTopLevel: true,
    },
];

timers = timers.concat(childTimers);
export {timers};
