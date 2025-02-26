// Write a function reverseArray(arr) that returns a new array with the elements of arr in reverse order.



function reversearr(arr)
{
    let oppositearr=[]
    for (let i=arr.length-1; i>=0;i--)
    {

        oppositearr.push(arr[i])
    }

    return oppositearr
}

console.log("reversed", reversearr([1,1213,44,445,566,66]));



