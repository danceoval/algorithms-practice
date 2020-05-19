//two sorted singly linked lists -> merged sorted linked list

// 3 - 4 - 7
// 1 - 4 - 8
// 1 - 3 - 4 - 4 - 7 - 8

function mergeLists(headA, headB) {
  let pointA = headA
  let pointB = headB
  let headC = new Node(-1)
  let pointC = headC
  while (pointA && pointB) {
    if (pointA.val < pointB.val) {
      pointC.next = new Node(pointA.val)
      pointA = pointA.next
    } else {
      pointC.next = new Node(pointB.val)
      pointB = pointB.next
    }
    pointC = pointC.next
  }
  if (pointA) {
    pointC.next = pointA
  } else {
    pointC.next = pointB
  }
  return headC.next
}
