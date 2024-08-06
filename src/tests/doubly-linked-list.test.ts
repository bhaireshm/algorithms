import { DoublyLinkedList } from "../data-structures";

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it('should add nodes to the list', () => {
    list.add('A');
    list.add('B');
    list.add('C');

    expect(list.head?.value).toBe('A');
    expect(list.tail?.value).toBe('C');
    expect(list.current?.value).toBe('C');
  });

  it('should undo the last add operation', () => {
    list.add('A');
    list.add('B');
    list.add('C');

    expect(list.undo()).toBe('B');
    expect(list.current?.value).toBe('B');
  });

  it('should redo the last undone add operation', () => {
    list.add('A');
    list.add('B');
    list.add('C');
    list.undo();

    expect(list.redo()).toBe('C');
    expect(list.current?.value).toBe('C');
    expect(list.tail?.value).toBe('C');
  });

  it('should reset the list', () => {
    list.add('A');
    list.add('B');
    list.add('C');

    list.reset();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.current).toBeNull();
  });

  it('should remove the current node', () => {
    list.add('A');
    list.add('B');
    list.add('C');

    expect(list.remove()).toBe('C');
    expect(list.current?.value).toBe('B');
    expect(list.tail?.value).toBe('B');

    expect(list.remove()).toBe('B');
    expect(list.current?.value).toBe('A');
    expect(list.tail?.value).toBe('A');

    expect(list.remove()).toBe('A');
    expect(list.current).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('should handle removing the only node', () => {
    list.add('A');

    expect(list.remove()).toBe('A');
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.current).toBeNull();
  });

  it('should handle removing the head node', () => {
    list.add('A');
    list.add('B');

    expect(list.remove()).toBe('B');
    expect(list.head?.value).toBe('A');
    expect(list.tail?.value).toBe('A');
    expect(list.current?.value).toBe('A');
  });

  it('should handle removing the tail node', () => {
    list.add('A');
    list.add('B');

    expect(list.undo()).toBe('A');
    expect(list.remove()).toBe('A');
  });
});
