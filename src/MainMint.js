import {useState} from 'react';
import { ethers, BigNumber } from 'ethers';
import {Box, Button, Flex, Text, Input} from '@chakra-ui/react';
import Consortium from  './Consortium.json';

const consortiumAddress = "0xdE52FeD41381EE994B7A34650CfbbF1179770A61";

const MainMint = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                consortiumAddress,
                Consortium.abi,
                signer
            );
            try {
                 
                const response = await contract.mint(BigNumber.from(mintAmount),{
                    value: ethers.utils.parseEther((0.1 * mintAmount).toString()),
            });
                console.log('response: ', response);
            } catch (err) {
                console.log("error", err)
            }
        }
    }
    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 5) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingTop="100px" paddingBottom="100px" overflow="scroll">
            <Box width="520px">
            <div>
                <Text 
                fontSize="78px" 
                paddingBottom="-25px"
                textShadow="0 5px #000000">Spoiled Shib's Consortium</Text>
            
                <Text 
                fontSize="45px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                textShadow="0px 5px 5px #000000">Building the future of Voluntary Government and Logistics</Text>
                <Text
                fontSize="30px">Sustaining Economic Resources For Shib's Everywhere <br></br>-<br></br> Store Front Located In The Shiba Inu Metaverse</Text>
            </div>
            {isConnected ? (
                <div>
                    <div>
                    <Button
                    backgroundColor="#D6517D"
                    borderRadius="5px"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="10px"
                    onClick={handleDecrement}>-</Button>

                    <Input
                    readOnly
                    fontFamily="inherit"
                    width="100px"
                    height="40px"
                    textAlign="center"
                    marginTop="10px"
                    type="mumber"
                    value={mintAmount} />

                    <Button
                    backgroundColor="#D6517D"
                    borderRadius="5px"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="10px"
                    onClick={handleIncrement}>+</Button>
                    </div>
                    
                    <Button
                    backgroundColor="#D6517D"
                    borderRadius="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="0 15px"
                    onClick={handleMint}> Mint Your<br></br>Spoiled Shib</Button>
                </div>
            ) : ( 
                <p>You Must Be Connected To Recieve A Shiby</p>
                )} 
                <footer margin="15px">=P</footer>
            </Box>
                </Flex>
    )
}

export default MainMint;