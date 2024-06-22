import { createAction } from 'redux-actions';

// Here we are defining what our action will be
/**
 * Action creators for counter operations.
 */

/**
 * Creates an action to increment the counter.
 * @returns {Object} An action object with a type of "INCREMENT".
 */
export const increment = createAction("INCREMENT")

/**
 * Creates an action to decrement the counter.
 * @returns {Object} An action object with a type of "DECREMENT".
 */
export const decrement = createAction("DECREMENT")