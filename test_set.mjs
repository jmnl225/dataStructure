import { HashSet } from '/Users/user/Desktop/study/dataStructure/HashSet.mjs';

let hashSet = new HashSet();
console.log(`isEmpty: ${hashset.isEmpty()}`);

console.log("======== 데이터 삽입 =========");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(456);
hashSet.printAll();
console.log(`isEmpty: ${hashset.isEmpty()}`);

console.log("======== 데이터 체크1 =========");
console.log(`isContain: ${hashSet.isContain(1)}`);

console.log("======== 데이터 제거 =========");
hashSet.remove(1);
hashSet.printAll();
console.log(`isEmpty: ${hashset.isEmpty()}`);

console.log("======== 데이터 체크2 =========");
console.log(`isContain: ${hashSet.isContain(1)}`);

console.log("============ clear =============");
hashSet.clear();
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
