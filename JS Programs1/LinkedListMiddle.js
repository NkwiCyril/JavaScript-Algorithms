/**
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let array = [];
    var length = 0;

    while (head != null){
        array.push(head);
        head = head.next;
        length++;
    }
    return array[length/2];
};

console.log(middleNode([1,2,3,4,5]))