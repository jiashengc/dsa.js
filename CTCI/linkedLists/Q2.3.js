let addLists = function(l1, l2) {

    let stack1 = [], stack2 = [];
    let arr = [];

    while (l1 != null) {
        stack1.push(l1.data);
    }

    while (l2 != null) {
        stack2.push(l2.data);
    }

    let full = 0;
    let i = 0;
    while (stack1 != [] && stack2 != []) {
        full += stack1.pop() * (10 * i) + stack2.pop() * (10 * i);
        i++;
    }

    while (stack1 != []) {
        full += stack1.pop() * (10 * i);
        i++;
    }

    while (stack2 != []) {
        full += stack2.pop() * (10 * i);
        i++;
    }

    while (full <= 0) {
        arr.push(full % 10);
        full /= 10;
    }

    while (arr != []) {
        
    }


}