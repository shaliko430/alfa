//    INDEXOF

// let customText = "Hello World";
// const findingSubText = "o";
// let found = false; 
// for (let i = 0; i < customText.length; i++) {
//     let match = true;
//     for (let j = 0; j < findingSubText.length; j++) {
//         if (customText[i + j] !== findingSubText[j]) {
//             match = false;
//             break;
//         }
//     }
//     if (match) {
//         console.log(i); 
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     console.log(-1);
// }


// //   INCLUDES
// let customText = "Hello World";
// const findingSubText = "1";
// let found = false; 
// for (let i = 0; i < customText.length; i++) {
//     let match = true;
//     for (let j = 0; j < findingSubText.length; j++) {
//         if (customText[i + j] !== findingSubText[j]) {
//             match = false;
//             break;
//         }
//     }
//     if (match) {
//         console.log(true); 
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     console.log(false);
// }




//  // SPLIT
// let customText = "Hello World";
// const split = "d";

// const result = [];
// let temp = "";

// if (split === "") {
//     for (let char of customText) {
//         result.push(char);
//     }
//     console.log(result); 
// } else {
//     for (let i = 0; i < customText.length; i++) {
//         if (customText.slice(i, i + split.length) === split) {
//             result.push(temp); 
//             temp = ""; 
//             i += split.length - 1; 
//         } else {
//             temp += customText[i]; 
//         }
//     }

//     result.push(temp);

//     console.log(result);
// }


        // SlICE

// let string = "Hello World";
// let start = 4;
// let end = 0;
// console.log(string.slice(4,4545));


//     let result = "";
//     const length = string.length;

//     if (start < 0) {
//         start = Math.max(length + start, 0);
//     }

//     if (end < 0) {
//         end = length + end;
//     }

//     if (end === undefined || end > length) {
//         end = length;
//     }

//     for (let i = start; i < end; i++) {
//         result += string[i];
//     }

//     console.log(result)



// // TRIM
// let str = " alfa "

//     let start = 0;
//     let end = str.length - 1;

//     // Find the index where the string starts (skip leading spaces)
//     while (str[start] === ' ' && start <= end) {
//         start++;
//     }

//     while (str[end] === ' ' && end >= start) {
//         end--;
//     }

//     console.log(str.slice(start, end + 1));
     
// let x1 = 1;
// let x2 = 2;
// let y1 = 3;
// let y2 = 4;

// let alfa = "Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)";

// let result = new Function("x1", "x2", "y1", "y2", `return ${alfa}`);

// console.log(result(x1, x2, y1, y2));  




      

// function a(d) {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             if (d < 0) {
//               reject("dsf");
//             } else {
//               resolve("5421");
//             }
//           }, d);
//         });
//       }
      
//       const q = a(1);
//       const w = a(-1);
      
//       Promise.allSettled([q, w])
//         .then((results) => {
//           results.forEach((result) => {
//             if (result.status === "fulfilled") {
//               console.log("Fulfilled:", result.value);
//             } else {
//               console.log("Rejected:", result.reason);
//             }
//           });
//         });
      


// const matrix1 = [
//   [1, 2],
//   [4, 5],
//   [7, 8]
// ];


// const matrix2 = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// function multiplyMatrices(mat1, mat2) {
//   const result = []; // To store the final result

//   for (let i = 0; i < mat1.length; i++) {
//     const row = []; // A new row for the result
//     for (let j = 0; j < mat2[0].length; j++) {
//       let sum = 0;
//       for (let k = 0; k < mat1[0].length; k++) {
//         sum += mat1[i][k] * mat2[k][j]; // Multiply and add
//       }
//       row.push(sum); // Add the computed value to the row
//     }
//     result.push(row); // Add the row to the result
//   }

//   return result;
// }

// const result = multiplyMatrices(matrix1, matrix2);
// console.log(result);




// Determinant in 3X3 Matrix
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// function calculateDeterminant(mat) {
//   if (mat.length !== 3 || mat[0].length !== 3) {
//     throw new Error("This function only works for 3x3 matrices.");
//   }

//   const a = mat[0][0], b = mat[0][1], c = mat[0][2];
//   const d = mat[1][0], e = mat[1][1], f = mat[1][2];
//   const g = mat[2][0], h = mat[2][1], i = mat[2][2];

//   return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
// }

// const determinant = calculateDeterminant(matrix);
// console.log("Determinant:", determinant);
