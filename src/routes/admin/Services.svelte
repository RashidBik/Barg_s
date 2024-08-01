<script>
   export let pageData;
    const services = pageData;
    $:isTrue = false;
    // const addNewService = isTrue;
    const addNewService = ()=> {
        isTrue = !isTrue;
        console.log(isTrue);
    }; 
</script>

<div class=" p-3">
   <div class="bg-white w-full flex justify-end ">
     <button class="text-red-600 font-bold text-4xl border rounded-full w-10 text-center flex justify-center align-center"
            on:click={addNewService}
    >{isTrue ? 'x':'+'}</button>
   </div>
        <div class="hidden md:flex justify-between font-bold px-8 bg-slate-400">
            <span>Title</span>
            <span>Description</span>
            <span>Icon</span>
        </div>
    <form class="{isTrue ? 'flex':'hidden'} flex-col md:flex-row p-4" action="" method="post">
        <div class=" p-1 border border-sky-800 rounded-md"> 
            <input class="w-full" type="text" name="title" id=""  placeholder="Title">  
        </div>
        <div class=" p-1 border border-sky-800 rounded-md">
            <textarea class="w-full" name="" id="" cols="30" rows="2" placeholder="Description"></textarea>              
        </div>
        <div class=" p-1 border border-sky-800 rounded-md">
            <input class="w-full" type="text" name="" id=""  placeholder="Icon URL">
        </div>
        <div class=" p-1">

            <input class="bg-lime-700 rounded-md border text-white border-lime-700 p-2 font-bold " type="submit" value="Save">
            <button class=" bg-slate-300 rounded-md border text-white border-lime-700 p-2 font-bold " type="reset">Cancel</button>
        </div>
    </form>
    <div class="flex flex-col-reverse">

   
        {#each services as service}
        <div class=" ">
            <form class=" flex flex-col md:flex-row " action="" method="post">
                <div class=" p-1 border rounded-md"> 
                    <input class="  w-full" type="text" name="title" id="" bind:value="{service.title}">  
                </div>
                <div class=" p-1 border rounded-md">
                    <textarea class=" w-full" name="" >{service.description}</textarea>              
                </div>
                <div class=" p-1 border rounded-md">
                    <input class="  w-full" type="text" name="" id="" bind:value="{service.icon_url}">
                </div>
                <div class="p-1">
                    
                    <input class="bg-lime-300 rounded-md border border-lime-700 p-2 font-bold " type="submit" value="Save changes">
                    <button class="bg-red-300 rounded-md border border-lime-700 p-2 font-bold " type="reset">Delete</button>
                </div>
            </form>
        </div>
        {/each}
         </div>
</div>