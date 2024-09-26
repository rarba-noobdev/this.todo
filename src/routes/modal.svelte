
<script>
    import { createEventDispatcher } from "svelte";
	import { tasks } from "./genfunc";
    const dispatcher  = createEventDispatcher()
    function stopMessage() {
        dispatcher("closeModal")
    }

 
    /**
	 * @type {string}
	 */
    let dueDate ;
    /**
	 * @type {any}
	 */
    let description ;
    /**
	 * @type {any}
	 */
    let name ;

</script>
<div class="pop-up" >
    <button id="close"   on:click={() => {stopMessage()}} style="background-color:red;padding:1px; color:black; width:max-content;"  >X</button>
<div class="name-and-dueDate">
    <input aria-required="true" bind:value={name}   type="text" placeholder="name of the task" style="background-color: #021526; border:0; margin:12px ; height:30px; border-radius:6px;padding:4px;">
    <input type="date" bind:value={dueDate} aria-required="true"   style="background-color: #021526; border:0; margin:12px ; height:30px; border-radius:6px;padding:4px; color-scheme: dark;">
</div>
<input type="text" id="description" bind:value={description} placeholder="description" style="background-color: #021526; border:0; margin:12px; border-radius:6px;padding:4px;">
    <div class="moadal-buttons">
        <button style="background-color: #D91656;" on:click={() => {stopMessage()}} id="remove-task" >Cancel</button>
        <button  id="add-task" type="submit" style="background-color: #8FD14F;" on:click={() => { 

        if ([description,name,dueDate].every((ele) => true === Boolean(ele))) {
            $tasks =    [...$tasks,{
               name,
               id:132,
               completed:false,
            dueDate,
            description,
        }]  

        return stopMessage()
        }      
        
                       
        }} >Add</button>
    </div>
</div>
<style>

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
        position: absolute;
    top: 50%;  
    left: 50%; 

    transform: translate(-50%, -50%); 
        z-index: 10;
        
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

