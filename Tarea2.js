// Jenny King Bustamante 18-01-2025
// Rocket Girls: Interactividad Web con JS

function AddActivity(myList, activity)
{
    let copy =false;
    for (let i = 0; i < myList.length; i++) 
    {
        if(myList[i]=== activity)
            {
                copy = true;
            }
    } 

    if (copy)
        {
            console.log(activity,"> No se agrego, esta repetida")
        }
    else
    {
        myList.push(activity);
        console.log(activity,"> Se agrego con exito!")
    } 
    return myList;   
}

function ShowActivityList(myList)
{
    console.log("Lista actual:");
    for (let i = 0; i< myList.length; i++) 
    {
        console.log(i+1,myList[i]);
    }    
    return 0;
}


function DeleteActivities(myList, activity)
{
    console.log(myList);
    for (let i = 0; i< myList.length; i++) 
    {
        if(myList[i]===activity)
            {
                myList.splice(i,1)
            }
    }    
    console.log(activity,"> Actividad Eliminada!");
    return myList;

}

//Menu
let myList = ["Ordenar la ropa","Bañar al gato","Barrer la casa","Comprar leche"];
console.log(AddActivity(myList,"Ordenar la ropa"));
console.log(AddActivity(myList,"Comprar Galletas"));

console.log(ShowActivityList(myList));

console.log(DeleteActivities(myList,"Bañar al gato"));

// ### resultados !
// [ 'Ordenar la ropa', '> No se agrego, esta repetida' ]
// [ 'Ordenar la ropa', 'Bañar al gato', 'Barrer la casa', 'Comprar leche' ]
// [ 'Comprar Galletas', '> Se agrego con exito!' ]
// [ 'Ordenar la ropa', 'Bañar al gato', 'Barrer la casa', 'Comprar leche', ... ]
// 'Lista actual:'
// 'Lista actual:'
// [ 1, 'Ordenar la ropa' ]
// [ 2, 'Bañar al gato' ]
// [ 3, 'Barrer la casa' ]
// [ 4, 'Comprar leche' ]
// [ 5, 'Comprar Galletas' ]
// 0
// [ 'Ordenar la ropa', 'Bañar al gato', 'Barrer la casa', 'Comprar leche', ... ]
// [ 'Bañar al gato', '> Actividad Eliminada!' ]
// [ 'Ordenar la ropa', 'Barrer la casa', 'Comprar leche', 'Comprar Galletas' ]