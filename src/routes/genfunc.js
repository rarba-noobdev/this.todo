import { writable } from 'svelte/store';

function tasksFunction() {
	const { subscribe, set, update } = writable([
		
			{
				name: 'gifts for me',
				id: 0,
				completed: false,
				dueDate: '2024-10-01', // Due date in 'YYYY-MM-DD' format
				description: 'Plan or purchase gifts for myself.'
			},
			{
				name: 'groceries',
				id: 1,
				completed: true,
				dueDate: '2024-09-25', // Due date in 'YYYY-MM-DD' format
				description: 'Buy groceries for the week.'
			},
			{
				name: 'workout',
				id: 2,
				completed: false,
				dueDate: '2024-09-26', // Due date in 'YYYY-MM-DD' format
				description: 'Complete daily workout routine.'
			},
			{
				name: 'study JavaScript',
				id: 3,
				completed: true,
				dueDate: '2024-09-30', // Due date in 'YYYY-MM-DD' format
				description: 'Study JavaScript for the project.'
			},
			{
				name: 'call mom',
				id: 4,
				completed: false,
				dueDate: '2024-09-28', // Due date in 'YYYY-MM-DD' format
				description: 'Call and catch up with mom.'
			},
			{
				name: 'read a book',
				id: 5,
				completed: false,
				dueDate: '2024-10-05', // Due date in 'YYYY-MM-DD' format
				description: 'Read a new book for leisure.'
			},
			{
				name: 'clean the room',
				id: 6,
				completed: true,
				dueDate: '2024-09-27', // Due date in 'YYYY-MM-DD' format
				description: 'Clean and organize the room.'
			},
			{
				name: 'finish project',
				id: 7,
				completed: false,
				dueDate: '2024-10-10', // Due date in 'YYYY-MM-DD' format
				description: 'Finish the ongoing project before the deadline.'
			},
			{
				name: 'buy vegetables',
				id: 8,
				completed: true,
				dueDate: '2024-09-26', // Due date in 'YYYY-MM-DD' format
				description: 'Buy fresh vegetables for the week.'
			},
			{
				name: 'meditate',
				id: 9,
				completed: false,
				dueDate: '2024-10-02', // Due date in 'YYYY-MM-DD' format
				// description: 'Meditate for relaxation and focus.'
			}
		]
		
	);
	return {
		subscribe,
		set,
		update
	};
}
export const tasks = tasksFunction();

// //
// [
//     {
//         name: "gifts for me",
//         id: 0,
//         completed: false
//     },
//     {
//         name: "groceries",
//         id: 1,
//         completed: true
//     },
//     {
//         name: "workout",
//         id: 2,
//         completed: false
//     },
//     {
//         name: "study JavaScript",
//         id: 3,
//         completed: true
//     },
//     {
//         name: "call mom",
//         id: 4,
//         completed: false
//     },
//     {
//         name: "read a book",
//         id: 5,
//         completed: false
//     },
//     {
//         name: "clean the room",
//         id: 6,
//         completed: true
//     },
//     {
//         name: "finish project",
//         id: 7,
//         completed: false
//     },
//     {
//         name: "buy vegetables",
//         id: 8,
//         completed: true
//     },
//     {
//         name: "meditate",
//         id: 9,
//         completed: false
//     }
// ]
