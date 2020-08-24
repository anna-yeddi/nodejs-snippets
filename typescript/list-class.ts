interface List<T> {
  push: (T) => void
  pop: () => T
}
class B<T> implements List<T> {
  private list: Array<T> = []
  push(b: T) {
    this.list.push(b)
  }
  pop() {
    return this.list.pop()
  }
}

const list = new List<number>()
list.push(0)
