// console.log(2 > 1); // true basic compersion 

// console.log("2" > 1); // type scirpt never allows to compare different data types
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // values convert hoti hai (predictable result nhi aate )

/* Note: The reason is that an equality check == and comparisons ><>= <= works differently
        comparisons convert null to a number, treating as 0
        That's why (3) null >= 0 is true and (1) is false 
// */

// undefined always gives false

// == conversion hon lg janda kli value check krda
// === value as well as datatype checks