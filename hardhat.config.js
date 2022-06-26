// https://eth-ropsten.alchemyapi.io/v2/7tjfu6Izw_o5WrDF2qupbbq_WzJk5fGs
// 61ca265f41b9280661153cc9e74884db9ca959fe736f3af007962bdb437c2e9b

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/7tjfu6Izw_o5WrDF2qupbbq_WzJk5fGs',
      accounts: ['61ca265f41b9280661153cc9e74884db9ca959fe736f3af007962bdb437c2e9b'],
    }
  }
}