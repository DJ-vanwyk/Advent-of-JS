import { writable } from 'svelte/store';

export const cart = writable([]);

export const subtotal = writable(0);
