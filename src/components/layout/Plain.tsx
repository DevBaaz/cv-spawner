import { Box } from "@chakra-ui/react"

type props = { children: any }

const Plain:React.FC<any> = ({ children }:props) => {
    return (
        <Box width='100%' textAlign='center'>{children}</Box>
    )
}

export default Plain;