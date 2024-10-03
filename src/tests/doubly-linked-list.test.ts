import { DoublyLinkedList } from "../data-structures";

describe("DoublyLinkedList", () => {
  let list: DoublyLinkedList<string>;

  beforeEach(() => {
    list = new DoublyLinkedList<string>();
  });

  it("should add nodes to the list", () => {
    list.add("A");
    list.add("B");
    list.add("C");

    expect(list.head?.value).toBe("A");
    expect(list.tail?.value).toBe("C");
    expect(list.current?.value).toBe("C");
  });

  it("should undo the last add operation", () => {
    list.add("A");
    list.add("B");
    list.add("C");

    expect(list.undo()).toBe("B");
    expect(list.current?.value).toBe("B");
  });

  it("should redo the last undone add operation", () => {
    list.add("A");
    list.add("B");
    list.add("C");
    list.undo();

    expect(list.redo()).toBe("C");
    expect(list.current?.value).toBe("C");
    expect(list.tail?.value).toBe("C");
  });

  it("should not redo when there is nothing to redo", () => {
    list.add("A");
    list.add("B");

    expect(list.redo()).toBeNull();
    expect(list.current?.value).toBe("B");
  });

  it("should redo multiple operations", () => {
    list.add("A");
    list.add("B");
    list.add("C");
    list.undo();
    list.undo();

    expect(list.redo()).toBe("B");
    expect(list.redo()).toBe("C");
    expect(list.current?.value).toBe("C");
  });

  it("should reset the list", () => {
    list.add("A");
    list.add("B");
    list.add("C");

    list.reset();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.current).toBeNull();
  });

  it("should reset an empty list", () => {
    list.reset();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.current).toBeNull();
  });

  it("should remove the current node", () => {
    list.add("A");
    list.add("B");
    list.add("C");

    expect(list.remove()).toBe("C");
    expect(list.current?.value).toBe("B");
    expect(list.tail?.value).toBe("B");

    expect(list.remove()).toBe("B");
    expect(list.current?.value).toBe("A");
    expect(list.tail?.value).toBe("A");

    expect(list.remove()).toBe("A");
    expect(list.current).toBeNull();
    expect(list.tail).toBeNull();
  });

  it("should handle removing the only node", () => {
    list.add("A");

    expect(list.remove()).toBe("A");
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.current).toBeNull();
  });

  it("should handle removing the head node", () => {
    list.add("A");
    list.add("B");
    list.undo();

    expect(list.remove()).toBe("A");
    expect(list.head?.value).toBe("B");
    expect(list.tail?.value).toBe("B");
    expect(list.current?.value).toBe("B");
  });

  it("should handle removing the tail node", () => {
    list.add("A");
    list.add("B");

    expect(list.remove()).toBe("B");
    expect(list.head?.value).toBe("A");
    expect(list.tail?.value).toBe("A");
    expect(list.current?.value).toBe("A");
  });

  it("should return null when removing from an empty list", () => {
    expect(list.remove()).toBeNull();
  });

  it("should handle removing the head node when there is only one node", () => {
    list.add("A");

    expect(list.remove()).toBe("A");
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.current).toBeNull();
  });

  it("should handle removing the tail node when there is only one node", () => {
    list.add("A");

    expect(list.remove()).toBe("A");
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.current).toBeNull();
  });

  it("should handle removing the head node when there is only two nodes", () => {
    list.add("A");
    list.add("B");

    expect(list.remove()).toBe("B");
    expect(list.head?.value).toBe("A");
    expect(list.tail?.value).toBe("A");
    expect(list.current?.value).toBe("A");
  });

  it("should handle removing the tail node when there is only two nodes", () => {
    list.add("A");
    list.add("B");

    expect(list.remove()).toBe("B");
    expect(list.head?.value).toBe("A");
    expect(list.tail?.value).toBe("A");
    expect(list.current?.value).toBe("A");
  });

  it("should handle removing the head node when there is only three nodes", () => {
    list.add("A");
    list.add("B");
    list.add("C");

    expect(list.remove()).toBe("C");
    expect(list.head?.value).toBe("A");
    expect(list.tail?.value).toBe("B");
    expect(list.current?.value).toBe("B");
  });

  it("should handle removing the tail node when there is only three nodes", () => {
    list.add("A");
    list.add("B");
    list.add("C");

    expect(list.remove()).toBe("C");
    expect(list.head?.value).toBe("A");
    expect(list.tail?.value).toBe("B");
    expect(list.current?.value).toBe("B");
  });

  it("should handle removing the head node when there is only four nodes", () => {
    list.add("A");
    list.add("B");
    list.add("C");
    list.add("D");

    expect(list.remove()).toBe("D");
    expect(list.head?.value).toBe("A");
    expect(list.tail?.value).toBe("C");
    expect(list.current?.value).toBe("C");
  });

  it("should handle removing the tail node when there is only four nodes", () => {
    list.add("A");
    list.add("B");
    list.add("C");
    list.add("D");

    expect(list.remove()).toBe("D");
    expect(list.head?.value).toBe("A");
    expect(list.tail?.value).toBe("C");
    expect(list.current?.value).toBe("C");
  });
});
