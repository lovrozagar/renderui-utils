import React from 'react'

type CreateContextOptions<T> = {
  strict?: boolean
  hookName?: string
  providerName?: string
  errorMessage?: string
  name?: string
  defaultValue?: T
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>]

function getErrorMessage(hook: string, provider: string) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`
}

function initializeContext<T>(options: CreateContextOptions<T> = {}) {
  const {
    name,
    strict = true,
    hookName = 'useContext',
    providerName = 'Provider',
    errorMessage,
  } = options

  const Context = React.createContext<T | undefined>(undefined)

  Context.displayName = name

  const useContext = () => {
    const context = React.useContext(Context)

    if (!context && strict) {
      const error = new Error(errorMessage ?? getErrorMessage(hookName, providerName))

      error.name = 'ContextError'

      if("captureStackTrace" in Error && typeof Error.captureStackTrace === 'function' ){
        Error.captureStackTrace?.(error, useContext)
      }

      throw error
    }

    return context
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>
}

export { initializeContext }
