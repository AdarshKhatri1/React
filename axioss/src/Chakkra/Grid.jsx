import { Box,SimpleGrid  } from "@chakra-ui/react"

// export default function Grid(){


//     return (
// //         <Box>
            
// //             <SimpleGrid columns={3} spacing={10}>
// //   <Box bg='tomato' height='80px'></Box>
// //   <Box bg='tomato' height='80px'></Box>
// //   <Box bg='tomato' height='80px'></Box>
// //   <Box bg='tomato' height='80px'></Box>
// //   <Box bg='tomato' height='80px'></Box>
// //   <Box bg='tomato' height='80px'></Box>
// // </SimpleGrid>
// //         </Box>

// // responsiveness
// <Box>
            
// <SimpleGrid columns={[2,3,4]} spacing={10}>
// <Box bg='tomato' height='80px'></Box>
// <Box bg='tomato' height='80px'></Box>
// <Box bg='tomato' height='80px'></Box>
// <Box bg='tomato' height='80px'></Box>
// <Box bg='tomato' height='80px'></Box>

// </SimpleGrid>
// </Box>
//     )
// }






export default function Grid(){


    return (

<Box>
            
<SimpleGrid columns={{
    base:2,
    sm:2,
    md:3,
    lg:4,
    xl:5,
    "2xl":6
}} spacing={10}>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>

</SimpleGrid>
</Box>
    )
}