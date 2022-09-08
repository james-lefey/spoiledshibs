import React from "react";
import {Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';
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
                <Flex justify="space-around" width="40%" padding= "0 75px">
                    <Box margin="0 15px">Telegram</Box>
                    <Box margin="0 15px">Telegram</Box>
                    <Box margin="0 15px">Telegram</Box>
                </Flex>

         


    {/* right side social icons */}
            <Flex justify="space-around" align-items="justify-right" padding="30px" >
                <Box margin="0 40px">About</Box>
                <Box margin="0 40px">Mint</Box>
            </Flex>

            {/* Connect */}
            {isConnected ? (
            <Box margin="0 15px">isConnected</Box>
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