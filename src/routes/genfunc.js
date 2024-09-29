import { writable } from 'svelte/store';

export let current = writable({
	name: "",
	dueDate: "",
	description: "",
	completed: false
})
export const showModal = writable(false)
function tasksFunction() {
	const { subscribe, set, update } = writable([
		{
			name: 'gifts for me',
			completed: false,
			dueDate: '2024-10-01', 
			description: 'Plan or purchase gifts for myself.'
		},
		{
			name: 'groceries',
			completed: true,
			dueDate: '2024-09-25',
			description: 'Buy groceries for the week.'
		},
		{
			name: 'workout',
			completed: false,
			dueDate: '2124-09-26',
			description: 'Complete daily workout routine.'
		},
		{
			name: 'study JavaScript',
			completed: true,
			dueDate: '2024-09-30',
			description: 'Study JavaScript for the project.'
		},
		{
			name: 'call mom',
			completed: false,
			dueDate: '2024-09-28',
			description: 'Call and catch up with mom.'
		},
		{
			name: 'read a book',
			completed: false,
			dueDate: '2024-10-05',
			description: 'Read a new book for leisure.'
		},
		{
			name: 'clean the room',
			completed: true,
			dueDate: '2024-09-27',
			description: 'Clean and organize the room.'
		},
		{
			name: 'finish project',
			completed: false,
			dueDate: '2024-10-10',
			description: 'Finish the ongoing project before the deadline.'
		},
		{
			name: 'buy vegetables',
			completed: true,
			dueDate: '2024-09-26',
			description: 'Buy fresh vegetables for the week.'
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
