/* eslint-disable no-console */
import { post, get, patch, del } from './request';

export const postNote = note => post('/notes', note);

export const getPublicNotes = () => get('/notes');

export const getUserNotes = () => get('/notes/user/allnotes');

export const getNote = id => get(`/notes/${id}`);

export const deleteRequest = id => del(`/notes/${id}`);

export const getUserFaves = () => get('/faves');

export const addUserFaves = id => patch('/faves/add', { id });

export const removeUserFaves = id => patch('/faves/remove', { id });
