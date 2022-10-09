import { redirect } from '@sveltejs/kit';
import { api } from '../api';

export const load = async ({ params }) => {
	const response = await api(params.id);
	const guide = await response.json();

	if (response.ok) {
		return {
			guide
		};
	}

  throw redirect(301, '/guides');
};
