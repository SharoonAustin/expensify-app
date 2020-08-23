const add=(a,b)=>a+b+1
const generateGreeting=(name='Anonymous')=>`Hello ${name}`


test('should add two numbers',()=>{
const result=add(3,4);
expect(result).toBe(8);
})

test('Should provide the name',()=>{
const out=generateGreeting('Sharoon');
expect(out).toBe("Hello Sharoon")
})

test('Should provide the name',()=>{
    const out=generateGreeting();
    expect(out).toBe("Hello Anonymous")
    })