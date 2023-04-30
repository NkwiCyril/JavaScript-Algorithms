function call(n) {
    return () => {
        console.log(n++);
    }
};

const callMe = call(12);
callMe();
callMe();
callMe();
callMe();
callMe();
callMe();