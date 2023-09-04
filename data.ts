type Task = {
    id: number;
    task: string;
    checked: boolean;
    closed: boolean;
}

type Category = {
    category: string;
    tasks: Task[]
};

const data: Category[] = [
    {
        category: 'Foundation',
        tasks: [
            {
                id: 1,
                task: 'Setup virtual office',
                checked: false,
                closed: false,
            },
            {
                id: 2,
                task: 'Set mission & vision',
                checked: false,
                closed: false,
            },
            {
                id: 3,
                task: 'Select business name',
                checked: false,
                closed: false,
            }, 
            {
                id: 4,
                task: 'Buy domains',
                checked: false,
                closed: false,
            }
        ]
    },
    {
        category: 'Discovery',
        tasks: [
            {
                id: 5,
                task: 'Create roadmap',
                checked: false,
                closed: false,
            },
            {
                id: 6,
                task: 'Competitor analysis',
                checked: false,
                closed: false,
            }
        ]
    },
    {
        category: 'Delivery',
        tasks: [
            {
                id: 7,
                task: 'Release marketing website',
                checked: false,
                closed: false,
            },
            {
                id: 8,
                task: 'Release MVP',
                checked: false,
                closed: false
            }
        ]
    }
]

export {data}