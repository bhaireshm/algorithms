import { DoublyLinkedList } from "../data-structures";

type User = {
  name: string;
  age: number;
};

const user: User = { name: "aklsjdnfas", age: 3 };
const dll = new DoublyLinkedList<User>();
dll.add(user);

console.log("dll.head?.value.name", dll.head?.value.name);
