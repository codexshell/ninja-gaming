import { error } from '@sveltejs/kit';
import { api } from './api';

export const load = async () => {
	const response = await api();
	const guides = await response.json();

	if (response.ok) {
		return {
			guides
		};
	}

	throw error(response.status);
};
