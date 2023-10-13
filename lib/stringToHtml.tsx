export const stringToHTML = function (str: string): React.ReactNode[] {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return Array.from(doc.body.childNodes).map((node) => {
    if (node instanceof Element) {
      return <div dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
    } else {
      return node.textContent
    }
  })
}
