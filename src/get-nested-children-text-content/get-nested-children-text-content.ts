import React from 'react'

function getNestedChildrenTextContent(node: React.ReactNode): string {
	if (typeof node === 'string' || typeof node === 'number') {
		return node.toString()
	}

	if (Array.isArray(node)) {
		return node.map(getNestedChildrenTextContent).join('')
	}

	// biome-ignore lint/suspicious/noExplicitAny: generic
	if (React.isValidElement(node) && (node as any).props.children) {
		// biome-ignore lint/suspicious/noExplicitAny: generic
		return getNestedChildrenTextContent((node as any).props.children)
	}

	return ''
}

export { getNestedChildrenTextContent }
