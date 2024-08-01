/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';
import data from '$lib/team.json'

export const actions = {
	default: async ({ request }) =>
	{
		const formData = await request.formData();
		const title = formData.get('title');

		console.log(title);
	}
}

export const load = async ({ fetch, locals }) =>
{
	// console.log(data);
	return {data: data.services};
};

