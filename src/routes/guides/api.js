/*
This module is used by the /guides endpoint to make
calls to jsonplaceholder, which contains dummy server data

Parameters can optionally be passed to the api
*/

const base = 'https://jsonplaceholder.typicode.com/posts';

export function api(resource = '') {
	return fetch(`${base}/${resource}`);
}
