export class DoublyLinkedListNode<T = any> {
  value: T;
  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;

  constructor(value: T, prev: DoublyLinkedListNode | null = null, next: DoublyLinkedListNode | null = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedList<T = any> {
  head: DoublyLinkedListNode<T> | null;
  tail: DoublyLinkedListNode<T> | null;
  current: DoublyLinkedListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  /**
   * Adds a new node to the end of the list.
   * @param value The value to add to the list.
   */
  add(value: T): void {
    const newNode = new DoublyLinkedListNode(value, this.current);

    if (this.current) this.current.next = newNode;
    if (!this.head) this.head = newNode;

    this.tail = newNode;
    this.current = newNode;
  }

  /**
   * Undoes the last add operation.
   * @returns The value of the undone node, or null if there is no previous node.
   */
  undo(): T | null {
    if (this.current?.prev) {
      this.current = this.current.prev;
      return this.current.value;
    }
    return null;
  }

  /**
   * Redoes the last undone add operation.
   * @returns The value of the redone node, or null if there is no next node.
   */
  redo(): T | null {
    if (this.current?.next) {
      this.current = this.current.next;
      return this.current.value;
    }
    return null;
  }

  /**
   * Removes all nodes from the list.
   */
  reset(): void {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  /**
   * Removes the current node from the list.
   * @returns The value of the removed node, or null if there is no current node.
   */
  remove(): T | null {
    if (!this.current) return null;

    const value = this.current.value;

    if (this.current === this.head && this.current === this.tail) {
      this.head = null;
      this.tail = null;
      this.current = null;
    } else if (this.current === this.head) {
      this.head = this.current.next;
      // If head exists, set its prev to null
      if (this.head) {
        this.head.prev = null;
      }
      this.current = this.head;
    } else if (this.current === this.tail) {
      this.tail = this.current.prev;
      // If tail exists, set its next to null
      if (this.tail) {
        this.tail.next = null;
      }
      this.current = this.tail;
    } else {
      this.current.prev!.next = this.current.next;
      this.current.next!.prev = this.current.prev;
      this.current = this.current.next;
    }

    return value;
  }
}