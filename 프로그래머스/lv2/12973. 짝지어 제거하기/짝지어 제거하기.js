function solution(s)
{
    let stack = [s[0]];
    for(let i = 1; i < s.length; i++){
        if(s[i] == stack[stack.length -1]) stack.pop();
        else stack.push(s[i]);
    }
    if(stack.length === 0) return 1;
    else return 0;
}