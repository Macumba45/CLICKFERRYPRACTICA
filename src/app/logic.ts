// export const logic = () => {
//     const route = 'ALGECEUT'; // Obtén el valor de route desde el frontend
//     const time = '2023-09-21'; // Obtén el valor de time desde el frontend

//     const API_URL = 'http://localhost:3000/departures?route=ALGECEUT&time=2023-09-25';

//     const getDepartures = async () => {

//         try {
//             const response = await fetch(API_URL, {
//                 method: "GET",
//             });
//             if (response.ok) {
//                 const data = await response.json();
//                 console.log(data);
//             } else {
//                 throw new Error("Error en la petición");
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return {
//         getDepartures,
//     };
// };

// export default logic;
