// Network Config
export const NETWORKS = <const>[
  'mainnet',
  'goerli',
  'arbitrum',
  'arbitrumGoerli',
  'bsc',
  'bscTestnet',
  'linea',
  'lineaTestnet',
  'polygon',
  'polygonTestnet',
  'hardhat',
]
// Create a type out of the network array
export type Networks = (typeof NETWORKS)[number]
