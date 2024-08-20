/* biome-ignore lint/complexity/noBannedTypes: allow function type */
function isFunction<T = Function>(value: unknown): value is T {
	return typeof value === 'function'
}

export { isFunction }
