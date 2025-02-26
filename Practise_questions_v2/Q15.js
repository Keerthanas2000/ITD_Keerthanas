//Question:15 Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

const Employename=['Keerthana','Suresh','Lenovo','Elon Musk','Pie','March']

function ReturnEmployees(Employename)
{
    let NewEmployeelist=[];
    for (emps of Employename)
    {
        if(emps.length >5)
        {
            NewEmployeelist.push(emps)
        }
    }

    return NewEmployeelist;
}


console.log("Employee list new", ReturnEmployees(Employename));
