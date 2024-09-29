<script>

	import Tasks from './tasks.svelte';
	import { showModal, tasks } from './genfunc';
	import Modal from './modal.svelte';

	let today = new Date();
	let day = today.toLocaleDateString('en-US', { weekday: 'long' });
	let date = today.toLocaleDateString('en-UK');
	
</script>

{#if $showModal}
<Modal></Modal>

	{/if}

<div id="header">
	<div class="today-info">
		<p id="day">{day}</p>
		<p id="date">{date}</p>
	</div>
	<button id="add-task-btn" on:click={() => {showModal.set(!$showModal)}}> Add Task </button>
</div>
<div id="task-heading">
	<p style="font-size: 2rem;">Tasks</p>
	<div class="task-fuctions">
		<button class="sort" style="position: relative;"
			>sort
			<div class="sort-options">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<p
					on:click={() => {
						tasks.set([
							...$tasks.filter((ele) => ele.completed),
							...$tasks.filter((ele) => !ele.completed)
						]);
					}}
				>
					by completed
				</p>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<p
					on:click={() => {
						tasks.set([
							...$tasks.filter((ele) => !ele.completed),
							...$tasks.filter((ele) => ele.completed)
						]);
					}}
				>
					by incomplete
				</p>
				<!-- <p>by Due Date</p> -->
			</div>
		</button>
		<button class="filter" style="position: relative;"
			>filter
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<div class="filter-options">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<p
					on:click={() => {
						tasks.set($tasks.filter((ele) => !ele.completed));
					}}
				>
					clear completed
				</p>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<p
					on:click={() => {
						tasks.set($tasks.filter((ele) => ele.completed));
					}}
				>
					clear incomplete
				</p>
				<!-- <p>Filter not done</p> -->
			</div>
		</button>
	</div>
	<hr />
</div>
<Tasks></Tasks>
<!-- <Modal></Modal> -->
<style>
	:root {
		--main-bg-color: #021526;
		--btn-bg-color: #e2e2b6;
		--margin-comon: 2.02rem 2.43em;
	}

	#task-heading {
		margin: var(--margin-comon);
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr auto;
		gap: 10px;
		align-items: center;
	}

	#task-heading button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		padding-right: 20px;
	}
	#task-heading hr {
		grid-column: 1/-1;
	}
	#task-heading div {
		justify-self: end;
	}
	#add-task-btn {
		cursor: pointer;
		background: var(--btn-bg-color);
		color: var(--main-bg-color);
		border: none;
		width: 8rem;
		height: 90%;
		font-size: 1.04rem;
		font-weight: 500;
		justify-self: end;
		border-radius: 10px;
	}

	#header {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		padding: 0 0.63rem;
		margin: var(--margin-comon);
		height: 5.16rem;
		background: rgba(255, 255, 254, 0.25);
		box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(8px);
		border-radius: 0.625rem;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
	.filter-options,
	.sort-options {
		background-color: #03346e;
		padding: 13px;
		border-radius: 6px;
		position: absolute;
		z-index: 1;
		width: max-content;
		right: 0px;
		/* margin-top: 15px; */
		display: none;
	}
	.filter:hover .filter-options {
		display: block;
	}
	.sort:hover .sort-options {
		display: block;
	}
</style>
