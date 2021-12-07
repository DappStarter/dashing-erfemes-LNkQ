require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note noise error grace hen fresh genre'; 
let testAccounts = [
"0xdafa5572b8f146bfe9d0d157bd59e453f8bc617677074be865223e403f0c1e2a",
"0x0a4acd10b521cadb9d6065cc739394357ac3f1f7f43073fae7bbfa0d544fcdb3",
"0x452300757a97c13218b88f5f1730d991034915fd396a8250844d7eac71eccfc8",
"0x873c01fcc63e394f54d90dc6e1bd4ad979d4faca6d85eecc3dc84393b72ea3b6",
"0xe453288c5616a15997f9f6e7a48c902a35f4fc50fbb86dc6296b5212ff3c10a7",
"0x76a46d519e78f10df903f97c6ba1a0e15b6ae5eeb69e000c46acdca00cd79349",
"0xda6b49e538ff7aba5fdf42e6386becb060a8e485c5ab9825296ac987bf5fc220",
"0xa39ec96188a2bdf163f8d20b5b396e3f901d8eb121c92a555d590696e3bf0533",
"0x07ee2df2e19fe085193941ad14feaf847d92f9cd9f8ce43ac81d31ce76f0b8f1",
"0x3c1a19586e75319d4df5c32a73224e9267a0e9bd131fdc8a6b53999999e9c8b8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

