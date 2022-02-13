
/*
Implement the MyLinkedList class:

    MyLinkedList() Initializes the MyLinkedList object.
    int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
    void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
    void addAtTail(int val) Append a node of value val as the last element of the linked list.
    void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
    void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/


type LinkedNode<T> = {
    val: T;
    next: LinkedNode<T> | undefined;
}

class MyLinkedList {
    items: number;
    head: LinkedNode<number> | undefined;

    constructor() {
        this.items = 0;
        this.head = undefined;
    }

    get(index: number): number {
        const elem = this.getElem(index);
        if (elem) {
            return elem.val;
        }
        return -1;
    }

    private getElem(index: number): LinkedNode<number> | undefined {
        if (this.head === undefined) {
            return undefined;
        }
        let linkNode = this.head;
        let i = 0;
        while (i < index) {
            linkNode = linkNode.next;
        }
        return linkNode;
    }

    addAtHead(val: number): void {

    }

    addAtTail(val: number): void {

    }
    addAtIndex(index: number, val: number): void {

    }

    deleteAtIndex(index: number): void {

    }
}