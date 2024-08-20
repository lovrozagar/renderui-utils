type ObjectOrUndefined<T extends object> = T | undefined

const EMPTY_OBJECT = Object.freeze({})

function getOptionalObject<T extends object>(object: ObjectOrUndefined<T>) {
	return object ?? (EMPTY_OBJECT as NonNullable<T>)
}

export { getOptionalObject }
