<script>

import { showModal, tasks,current } from './genfunc';
	import Modal from './modal.svelte';


</script>



{#if $tasks}
	<div class="tasks-container">
		{#each $tasks as task (task.name)}
			<div class="task">
	<button on:click={() => {showModal.set(!$showModal)
				current.set(task)
				// console.log(current);
				}}
				>hello</button>
				<div class="checkbox-wrapper-15">
					<input
						class="inp-cbx"
						id={task.name}
						type="checkbox"
						bind:checked={task.completed}
						style="display: none;"
					/>
					<label class="cbx" for={task.name}>
						<span>
							<!-- <svg width="12px" height="9px" viewbox="0 0 12 9"> -->
							<svg width="12px" height="9px" >
								<polyline points="1 5 4 8 11 1"></polyline>
							</svg>
						</span>
						<span>{task.name}</span>
					</label>
				</div>
				<div class="due-info">
					<!-- Task Info -->
					<p style="font-weight:500; color:#03346E">due on</p>
					<p style="font-weight:600; font-size:1.2rem">{task.dueDate}</p>
				</div>
				<!-- Task options -->
			</div>
		{/each}
	</div>
{:else}
	<div class="null-message">
		<p style="opacity:0.3">
			"Maybe you’ve got a plan… or maybe you're just winging it like the rest of us!"
		</p>
		<p>So add a new task by smashing that "Add Task" button</p>
	</div>
{/if}

{#if $showModal}
<Modal taskData={$current} ></Modal>
{/if}

<style>
	.due-info {
		background-color: #6eacda;
		padding: 1px 10px;
		min-width: 14%;
		border-radius: 4px;
	}

	.task {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 0.4px solid #e2e2b6;
		margin: 10px 3.43em;
		border-radius: 6px;
		padding: 7px 14px;
	}
	.null-message {
		height: 40vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 20px;
		align-items: center;
		font-size: 2.1rem;
		border-radius: 10px;
		background-color: #03346e;
		margin: 2.02rem 3.43em;
		padding: 10px;
	}
	.checkbox-wrapper-15 .cbx {
		-webkit-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		cursor: pointer;
	}
	.checkbox-wrapper-15 .cbx span {
		display: inline-block;
		vertical-align: middle;
		transform: translate3d(0, 0, 0);
	}
	.checkbox-wrapper-15 .cbx span:first-child {
		position: relative;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		transform: scale(1);
		vertical-align: middle;
		border: 1px solid #b9b8c3;
		transition: all 0.2s ease;
	}
	.checkbox-wrapper-15 .cbx span:first-child svg {
		position: absolute;
		z-index: 1;
		top: 8px;
		left: 6px;
		fill: none;
		stroke: white;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-dasharray: 16px;
		stroke-dashoffset: 16px;
		transition: all 0.3s ease;
		transition-delay: 0.1s;
		transform: translate3d(0, 0, 0);
	}
	.checkbox-wrapper-15 .cbx span:first-child:before {
		content: '';
		width: 100%;
		height: 100%;
		background: #506eec;
		display: block;
		transform: scale(0);
		opacity: 1;
		border-radius: 50%;
		transition-delay: 0.2s;
	}
	.checkbox-wrapper-15 .cbx span:last-child {
		margin-left: 8px;
	}
	.checkbox-wrapper-15 .cbx span:last-child:after {
		content: '';
		position: absolute;
		top: 8px;
		left: 0;
		height: 1px;
		width: 100%;
		background: #b9b8c3;
		transform-origin: 0 0;
		transform: scaleX(0);
	}
	.checkbox-wrapper-15 .cbx:hover span:first-child {
		border-color: #3c53c7;
	}

	.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child {
		border-color: #3c53c7;
		background: #3c53c7;
		animation: check-15 0.6s ease;
	}
	.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child svg {
		stroke-dashoffset: 0;
	}
	.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child:before {
		transform: scale(2.2);
		opacity: 0;
		transition: all 0.6s ease;
	}
	.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child {
		color: #b9b8c3;
		transition: all 0.3s ease;
	}
	.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child:after {
		transform: scaleX(1);
		transition: all 0.3s ease;
	}

	@keyframes check-15 {
		50% {
			transform: scale(1.2);
		}
	}
</style>
