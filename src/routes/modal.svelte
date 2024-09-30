<script>
// @ts-nocheck

	import { onDestroy } from "svelte";
	import { showModal, tasks, current } from "./genfunc";
const closeModal = () => {
    return showModal.set(false)
}
   export let taskData = {
       name: "",
        dueDate: "",
        description: "",
        completed: false
    };

    console.log($current);
 
onDestroy(() => {
 taskData.name = ""
 taskData.dueDate=""
 taskData.description=""
 taskData.completed=false

 current.set({
	name: "",
	dueDate: "",
	description: "",
	completed: false
})

console.log($current);


})

console.log(taskData);

</script>
<div class="pop-up-wrapper">
  <div class="pop-up">
      <button id="close" on:click={() => {closeModal()
          // console.log($showModal);
          
      }} style="background-color:red;padding:1px; color:black; width:max-content;"  >X</button>
  <div class="name-and-dueDate">
      <input aria-required="true" bind:value={taskData.name}   type="text" placeholder="name of the task" style="background-color: #021526; border:0; margin:12px ; height:30px; border-radius:6px;padding:4px;">
      <input type="date" bind:value={taskData.dueDate} aria-required="true"   style="background-color: #021526; border:0; margin:12px ; height:30px; border-radius:6px;padding:4px; color-scheme: dark;">
  </div>
  <input type="text" id="description" bind:value={taskData.description} placeholder="description" style="background-color: #021526; border:0; margin:12px; border-radius:6px;padding:4px;">
      <div class="moadal-buttons">

  {#if $current.name === "" }
  <button style="background-color: #D91656;"  id="remove-task" on:click={() => {closeModal()}} >Cancel</button>
  {:else}
  <button style="background-color: #D91656;"  id="delete-task" on:click={() => {tasks.set($tasks.filter(ele => ele !== $current));closeModal()}} >Delete</button>

  {/if}


  {#if $current.name === ""}
  <button  id="add-task" type="submit" style="background-color: #8FD14F;" on:click={() => { 
      if ([taskData.description, taskData.name, taskData.dueDate].every((ele) => Boolean(ele))) {
      tasks.set([...$tasks, {...taskData}]);
      closeModal()}}} >Add</button>

  {:else}
  <button type="submit" id="update-task" style="background-color: #8FD14F;" on:click={() => {
      $tasks[$tasks.indexOf(taskData)] = taskData
      closeModal()
  }}>Update</button>
  {/if}



      </div>
  </div>
</div>
<style>
    .pop-up-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: auto;
    }

    #close {
        justify-self: end;
    }
    .pop-up {
        height: 40vh;
        display: grid;
        width: 40vw;
        background-color: #03346E;
        grid-template-rows:.2fr 1fr 1fr auto;
        border-radius: 10px;
        padding: 10px;
        pointer-events: auto;
    }

    .moadal-buttons {
        display: flex;
        justify-content: space-evenly;
        /* align-items: center; */
    }
    .moadal-buttons button {
        height: 44px;
        color: #2b1111;
        font-weight: 900;
        font-size: 1.2rem;
        width: 95px;
        border-radius: 10px;
    }
</style>