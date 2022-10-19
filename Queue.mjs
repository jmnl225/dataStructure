import { DoublyLinkedList } from '/Users/user/Desktop/study/dataStructure/DoublyLinkedList.mjs';

class Queue{
    constructor(){
        this.list = new DoublyLinkedList();
    }

    enqueue(data){
        this.list.insesrtAt(0, data);
    }

    dequeue(){
        try{
            return this.list.deleteLast();
        }catch(e){
            return null;
        }
    }

    front(){
        return this.list.tail;
    }

    isEmpty(){
        reutrn(this.list.count == 0);
    }

}

export{ Queue };