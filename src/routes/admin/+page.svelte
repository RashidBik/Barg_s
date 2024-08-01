<script>
     export let data;
    let pageData = data.data;
  import CallToAction from "./CallToAction.svelte";
  import Services from "./Services.svelte";
  import Store from "./Store.svelte";
  import Teams from "./Teams.svelte";

   
    $:activeList = 'services';
    
</script>
<div class="flex flex-col md:justify-center md:items-center bg-gradient-to-b from-lime-900 bg-white  ">
   
    <header class="p-2 bg-lime-700 md:text-3xl text-center font-madi text-white shadow-2xl shadow-black ">Welcome to Space4 Admin panel</header>
    <main class="flex bg-slate-200 text-slate-800">
    <aside class="flex flex-col font-bold ">
        <button class="text-left py-2 pl-3 pr-2 border-b border-r-white hover:bg-slate-400 md:text-xl" on:click={()=> activeList = 'services'}>services</button>
        <button class="text-left py-2 pl-3 pr-2 border-b border-r-white hover:bg-slate-400 md:text-xl" on:click={() => activeList = 'store'}>store</button>    
        <button class="text-left py-2 pl-3 pr-2 border-b border-r-white hover:bg-slate-400 md:text-xl" on:click={() => activeList = 'teams'}>teams</button>
        <button class="text-left py-2 pl-3 pr-2 border-b border-r-white hover:bg-slate-400 md:text-xl" on:click={() => activeList = 'callToAction'}>call to action</button>
    </aside>
    <div class="bg-slate-100">
        {#if activeList == 'services'}
         <Services {pageData}/>
         {:else if activeList == 'teams'}
         <Teams/>
         {:else if activeList == 'store'}
         <Store/>
         {:else if activeList == 'callToAction'}
         <CallToAction/>
        {/if}
    </div>
    </main>
</div>