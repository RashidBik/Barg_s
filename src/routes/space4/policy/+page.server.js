/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';
import data from '$lib/team.json'

export const load = async ({ fetch, locals }) => {
	return {data: data.services};
};