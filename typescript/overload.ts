function process(text: string): string
function process(): string
function process(text?: any): any {
  if (typeof text === 'string') {
    return text && text.replace(/f/g, 'p')
  }
  return ''
}
process().toUpperCase()
