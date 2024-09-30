import { writable } from 'svelte/store';

export let current = writable({
	name: "",
	dueDate: "",
	description: "",
	completed: false
})
export const showModal = writable(false)
function tasksFunction() {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set,
		update
	};
}
export const tasks = tasksFunction();

