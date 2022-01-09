// https://eth-ropsten.alchemyapi.io/v2/aPR6B02GYwY6QeZbKzVyuabmfEjYEOzI

require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.2",
    networks: {
        ropsten: {
            url: "https://eth-ropsten.alchemyapi.io/v2/aPR6B02GYwY6QeZbKzVyuabmfEjYEOzI",
            accounts: ["e2227e62758f00ac4300b85cae81a946800caf07bf444d93784b76a1904a200f"],
        },
    },
};
