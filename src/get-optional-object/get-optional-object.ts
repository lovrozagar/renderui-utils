import { EMPTY_OBJECT } from '@renderui/constants'

type ObjectOrUndefined<T extends object> = T | undefined

function getOptionalObject<T extends object>(object: ObjectOrUndefined<T>) {
  return object ?? (EMPTY_OBJECT as NonNullable<T>)
}

export { getOptionalObject }
