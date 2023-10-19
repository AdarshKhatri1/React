
import { Select, PinInput, PinInputField, Box, Button, Container, Heading, Input, Stack,  HStack, Text, Menu, MenuButton, MenuList, MenuItem, color } from "@chakra-ui/react"
import { useState } from "react"
import {ChevronDownIcon } from "@chakra-ui/icons"

export default function Cprac() {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState();

    return (

        <Box >
            <Container>

                <Box>
                    <Stack gap="1rem">
                        <Heading>Form</Heading>
                        <Box>
                            <Input type="email" placeholder="write email" />
                        </Box>
                        <Box>
                            <Input type="text" placeholder="write Password" />
                        </Box>
                        <Box>
                            <Button bg={"brand.900"} onClick={() => {

                                setLoading(true)
                                setTimeout(() => {
                                    setLoading(false)
                                }, 2000);
                            }} isLoading={loading} >Submit</Button>
                        </Box>

                        <Box>
                            <HStack>
                                <PinInput onChange={(e) => (setValue(e))} type='alphanumeric' >
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>

                            </HStack>
                            <Box><Text>{value}</Text></Box>
                        </Box>

                        <Box>
                            <Select placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>

                        <Box >
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                    Actions
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                    <MenuItem>Mark as Draft</MenuItem>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Attend a Workshop</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Stack>
                </Box>
            </Container>

        </Box>
    )
}