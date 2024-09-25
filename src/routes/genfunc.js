import { writable } from 'svelte/store';

function tasksFunction() {
	const { subscribe, set, update } = writable([
		{
			name: 'gifts for me',
			id: 0,
			completed: false,
			dueDate: '2024-10-01' // Example due date
		},
		{
			name: 'groceries',
			id: 1,
			completed: true,
			dueDate: '2024-09-25' // Example due date
		},
		{
			name: 'workout',
			id: 2,
			completed: false,
			dueDate: '2024-09-26' // Example due date
		},
		{
			name: 'study JavaScript',
			id: 3,
			completed: true,
			dueDate: '2024-09-30' // Example due date
		},
		{
			name: 'call mom',
			id: 4,
			completed: false,
			dueDate: '2024-09-28' // Example due date
		},
		{
			name: 'read a book',
			id: 5,
			completed: false,
			dueDate: '2024-10-05' // Example due date
		},
		{
			name: 'clean the room',
			id: 6,
			completed: true,
			dueDate: '2024-09-27' // Example due date
		},
		{
			name: 'finish project',
			id: 7,
			completed: false,
			dueDate: '2024-10-10' // Example due date
		},
		{
			name: 'buy vegetables',
			id: 8,
			completed: true,
			dueDate: '2024-09-26' // Example due date
		},
		{
			name: 'meditate',
			id: 9,
			completed: false,
			dueDate: '2024-10-02' // Example due date
		}
	]);
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
