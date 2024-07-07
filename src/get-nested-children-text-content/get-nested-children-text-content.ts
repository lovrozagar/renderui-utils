import React from 'react'

function getNestedChildrenTextContent(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return node.toString()
  }

  if (Array.isArray(node)) {
    return node.map(getNestedChildrenTextContent).join('')
  }

  if (React.isValidElement(node) && node.props.children) {
    return getNestedChildrenTextContent(node.props.children)
  }

  return ''
}

export { getNestedChildrenTextContent }
