require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'include kiwi flame table educate ranch remember smile hover problem bone giant'; 
let testAccounts = [
"0xe5627c522d8f4412edcdd828d5a047ba8ee169523416ab8a3c3f1397a7165a8e",
"0xe7eaed2ab045cc8b8108b315cec3382d9341f1cbcf15d3c9d8043b74c036d3d6",
"0xf2b4dd69b7409ca6b35ffbdb7eb7028230ea36fb4d136c1a50fec1e5492fedbb",
"0x77f34fed3e68b0c676250f31463b12bafc130f7410102a60c46e2203ba7d78ce",
"0xc75040d47b0aa3ba6803c888cfb5aa3a15f8225dbfba1cb98a7eadbe791a9b76",
"0xe1fa32e1e8c01ebd5b72fb4fa293bc09efadeae80871d06978b929bcd361ae49",
"0x91ce2c997bf5a5c17697f62c6fe4870872a0c74d0e45bd6fb41feb511fe50c35",
"0x20c8fba120f69bfb12a489bbf99e37b94c67a90a4eac55720beb45a993146264",
"0x9bb4873b918628b8995b771c5836059216328bae0756a9f80b06f48480fc8b08",
"0x034fa34b0b5864165260a802bc4de82ee21c10d0f53ea5ca59eebbf492181f9c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


