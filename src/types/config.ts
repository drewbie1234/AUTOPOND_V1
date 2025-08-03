/**
 * types/config.ts
 *
 * AppConfig - Application-level settings.
 * @interface AppConfig
 *
 * @property {boolean} wizardMode - Enables interactive configuration wizard.
 * @property {"Mine" | "Swap" | "Mine and Swap"} defaultMode - Default operating mode.
 * @property {number} [defaultCycleCount] - (Optional) Default number of cycles; if not set, runs indefinitely.
 * @property {boolean} [loggingEnabled] - (Optional) Flag to enable or disable logging.
 * @property {number} [liveDecodedDisplayLimit] - (Optional) Maximum number of live decoded events to display.
 * @property {boolean} manualaccountcreation - Flag to enable manual account creation.
 * @property {string[]} myRigAddresses - Array of rig addresses for the user's rigs.
 * @property {string[]} watchRigAddresses - Array of rig addresses to be watched.
 */
export interface AppConfig {
  wizardMode: boolean;
  defaultMode: "Mine" | "Swap" | "Mine and Swap";
  defaultCycleCount?: number;
  loggingEnabled?: boolean;
  liveDecodedDisplayLimit?: number;
  manualaccountcreation: boolean;
  myRigAddresses: string[];
  watchRigAddresses: string[];
}

/**
 * MiningConfig - Configuration parameters for mining operations.
 * @interface MiningConfig
 *
 * @property {number} activeMiningRetryDelayMs - Delay before retrying an active mining check.
 * @property {number} miningLoopFailRetryDelayMs - Delay before retrying a failed mining loop.
 * @property {number} miningSuccessDelayMs - Delay after a successful mining operation.
 * @property {number} initialDelayMs - Delay before starting mining.
 * @property {number} popupDelayMs - Delay before handling popups.
 * @property {number} maxIterations - Maximum iterations allowed per session.
 * @property {number} loopIterationDelayMs - Delay between iterations in the mining loop.
 * @property {number} miningCompleteHashRate - Minimum hash rate for a session to be considered complete.
 * @property {number} miningCompleteUnclaimedThreshold - Threshold for unclaimed rewards to mark completion.
 * @property {number} claimMaxThreshold - Maximum threshold for claiming rewards.
 * @property {number} claimTimeThreshold - Time threshold for triggering a claim.
 * @property {number} claimBoostThreshold - Boost threshold for triggering a claim.
 * @property {string} mineButtonTrigger - Text to trigger the mining button.
 * @property {string} confirmButtonText - Text used to confirm actions.
 * @property {string} stopClaimButtonText - Text used to stop a claim.
 * @property {string} stopAnywayButtonText - Text used to force-stop operations.
 * @property {boolean} skipMiningOnFailure - Flag to skip mining if a failure occurs.
 * @property {boolean} skipMiningIfInactive - Flag to skip mining if no active mining is detected.
 */
export interface MiningConfig {
  activeMiningRetryDelayMs: number;
  miningLoopFailRetryDelayMs: number;
  miningSuccessDelayMs: number;
  initialDelayMs: number;
  popupDelayMs: number;
  maxIterations: number;
  loopIterationDelayMs: number;
  miningCompleteHashRate: number;
  miningCompleteUnclaimedThreshold: number;
  claimMaxThreshold: number;
  claimTimeThreshold: number;
  claimBoostThreshold: number;
  mineButtonTrigger: string;
  confirmButtonText: string;
  stopClaimButtonText: string;
  stopAnywayButtonText: string;
  skipMiningOnFailure: boolean;
  skipMiningIfInactive: boolean;
  boostHash: boolean;
  boostHashAmountPerSession: string;
}

/**
 * SolanaConfig - Settings for connecting to the Solana blockchain.
 * @interface SolanaConfig
 *
 * @property {string} rpcEndpoint - The RPC endpoint URL.
 * @property {number} wpondTransferTimeThreshold - Time threshold (in seconds) for WPOND transfers.
 * @property {string} rewardsWalletAddress - Wallet address for rewards.
 * @property {string} wpondTokenMint - Mint address for the WPOND token.
 * @property {string[]} discountWalletAddresses - List of wallet addresses that get discounts.
 */
export interface SolanaConfig {
  rpcEndpoint: string;
  wpondTransferTimeThreshold: number;
  rewardsWalletAddress: string;
  wpondTokenMint: string;
  discountWalletAddresses: string[];
}

/**
 * SwapPairConfig - Configuration for an individual trading pair used in swapping.
 * @interface SwapPairConfig
 *
 * @property {string} tokenA - Symbol for token A (e.g., "SOL").
 * @property {string} tokenB - Symbol for token B (e.g., "USDC").
 * @property {string} [tokenAMint] - Mint address for token A (for SPL tokens; leave empty if not applicable).
 * @property {string} [tokenBMint] - Mint address for token B (for SPL tokens; leave empty if not applicable).
 * @property {number} tokenALowThreshold - Minimum balance threshold for token A.
 * @property {number} tokenBLowThreshold - Minimum balance threshold for token B.
 * @property {number} tokenAMinAmount - Minimum swap amount for token A (regular mode).
 * @property {number} tokenAMaxAmount - Maximum swap amount for token A (regular mode).
 * @property {number} tokenBMinAmount - Minimum swap amount for token B (regular mode).
 * @property {number} tokenBMaxAmount - Maximum swap amount for token B (regular mode).
 * @property {number} tokenARewardMin - Minimum swap amount for token A (rewards mode).
 * @property {number} tokenARewardMax - Maximum swap amount for token A (rewards mode).
 * @property {number} tokenBRewardMin - Minimum swap amount for token B (rewards mode).
 * @property {number} tokenBRewardMax - Maximum swap amount for token B (rewards mode).
 */
export interface SwapPairConfig {
  tokenA: string;
  tokenB: string;
  tokenAMint?: string;
  tokenBMint?: string;
  tokenALowThreshold: number;
  tokenBLowThreshold: number;
  tokenAMinAmount: number;
  tokenAMaxAmount: number;
  tokenBMinAmount: number;
  tokenBMaxAmount: number;
  tokenARewardMin: number;
  tokenARewardMax: number;
  tokenBRewardMin: number;
  tokenBRewardMax: number;
}

/**
 * SwapConfig - Parameters for token swap operations.
 * @interface SwapConfig
 *
 * This interface now supports multiple trading pairs through the optional 'pairs' field.
 * If the 'pairs' array is provided, it should contain one or more SwapPairConfig objects.
 * For backward compatibility, individual fields for a single pair remain optional.
 *
 * Global swap settings (such as referral fees, round counts, delay ranges, etc.) continue to reside here.
 */
export interface SwapConfig {
  pairs?: SwapPairConfig[];
  selectedPairs?: SwapPairConfig[];

  // Optional individual pair properties for backward compatibility.
  tokenA?: string;
  tokenB?: string;
  tokenAMint?: string;
  tokenBMint?: string;
  tokenALowThreshold?: number;
  tokenBLowThreshold?: number;
  tokenAMinAmount?: number;
  tokenAMaxAmount?: number;
  tokenBMinAmount?: number;
  tokenBMaxAmount?: number;
  tokenARewardMin?: number;
  tokenARewardMax?: number;
  tokenBRewardMin?: number;
  tokenBRewardMax?: number;

  // Global swap settings.
  maxReferralFee: string;
  swapRounds: number;
  swapRewardsActive: boolean;
  enableRewardsCheck: boolean;
  skipSwapIfNoRewards: boolean;
  useReferralList: boolean;
  turboswap: boolean;
  swapDelayRange: [number, number];
  swapRoundDelayRange: [number, number];
  roundsPerPair?: number; // Number of rounds to use a pair before random selection
}

/**
 * WsConfig - WebSocket settings used for mining or event listeners.
 * @interface WsConfig
 *
 * @property {string} wss - WebSocket server URL.
 * @property {string} apiKey - API key used for authorization.
 * @property {number} heartbeatInterval - Interval for heartbeats in milliseconds.
 * @property {number} maxReconnectDelay - Maximum delay between reconnection attempts.
 * @property {number} activeMiningTimeout - Timeout for active mining check in milliseconds.
 * @property {number} requiredActiveMiners - Minimum miners to consider mining active.
 * @property {number} activityThresholdSeconds - Seconds of inactivity to consider a miner inactive.
 * @property {boolean} enableRawLogging - Whether raw WebSocket messages should be logged.
 * @property {boolean} enableFilteredLogging - Whether filtered WebSocket messages should be logged.
 */
export interface WsConfig {
  wss: string;
  apiKey: string;
  heartbeatInterval: number;
  maxReconnectDelay: number;
  activeMiningTimeout: number;
  requiredActiveMiners: number;
  activityThresholdSeconds: number;
  enableRawLogging: boolean;
  enableFilteredLogging: boolean;
}

/**
 * FullConfig - Aggregated configuration for the application.
 * @interface FullConfig
 *
 * @property {AppConfig} app - Application-level settings.
 * @property {MiningConfig} mining - Configuration parameters for mining operations.
 * @property {SolanaConfig} solana - Settings for connecting to the Solana blockchain.
 * @property {SwapConfig} swap - Parameters for token swap operations.
 * @property {WsConfig} ws - WebSocket settings for mining or events.
 */
export interface FullConfig {
  app: AppConfig;
  mining: MiningConfig;
  solana: SolanaConfig;
  swap: SwapConfig;
  ws: WsConfig;
}
