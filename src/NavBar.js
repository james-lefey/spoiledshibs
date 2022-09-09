import React from "react";
import {Box, Button, Flex} from '@chakra-ui/react';
//import social media icons from socialassets folder
//import social media icons from socialassets folder
//import social media icons from socialassets folder

const NavBar = ({ accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
      
            <Flex justify="space-between" align="center" padding="30px" >
                {/* left side social icons */}
                <Flex justify="space-around" width="40%" padding= "0 50px">
                    <Box margin="0 15px">Telegram</Box>
                    <Box margin="0 15px">Twitter</Box>
                    <Box margin="0 15px">Discord</Box>
                </Flex>

         


    {/* right side social icons */}
            <Flex justify="space-around" align-items="justify-right" padding="30px" >
            </Flex>

            {/* Connect */}
            {isConnected ? (
            <Box margin="0 15px" color="lightgreen">isConnected</Box>
            ) : (
                <Button
                 backgroundColor="#D6517D"
                 borderRadius="0px 2px 2px 1px #0F0F0F"
                 color="white"
                 cursor="pointer"
                 fontFamily="inherit"
                 padding="15px"
                 margin="0 15px"
                onClick={connectAccount}>Connect</Button>
            )}
        </Flex>
    );
};

export default NavBar;