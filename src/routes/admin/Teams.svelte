<script>
     let updateableData = {
        members: [{
            name: 'anish',
            title: '',
            photo: 'http://',
            bio: '',
            skills: [''],

        },
        {
            name: 'rashid',
            title: '',
            photo: 'http://',
            bio: '',
            skills: ['']
        }
        ],
    }
</script>
<header>
    <button>Add</button>
</header>
<div>
    {#each updateableData.members as member }
    <div class="flex justify-evenly">
        <li>{member.photo}</li>
        <li>{member.name}</li>
        <li>{member.title}</li>
        <li>{member.skills}</li>
        <li>{member.bio}</li>
        <button>Update</button>
        <button>Delete</button>
    </div>
    {/each}
</div>