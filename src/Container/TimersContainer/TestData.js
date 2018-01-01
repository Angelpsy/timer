import nanoid from 'nanoid';

export const timers = [
    {
        id: nanoid(),
        order: 0,
        title: 'Timer 1',
        description: 'Description Timer 1',
        childs: null,
        value: 100, // s
        left: 100, // s
        state: 'stop', // ['stop', 'pause', 'play']
    },
    {
        id: nanoid(),
        order: 1,
        title: 'Timer 2',
        description: 'Description Timer 2',
        childs: null,
        value: 100, // s
        left: 100, // s
        state: 'pause',
    },
    {
        id: nanoid(),
        order: 1,
        title: 'Timer 3',
        description: 'Description Timer 3',
        childs: null,
        value: 1000, // s
        left: 100, // s
        state: 'play',
    },
];
