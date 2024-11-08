export enum StakingProgramId {
  PearlAlpha = 'pearl_alpha',
  PearlBeta = 'pearl_beta',
  PearlBeta2 = 'pearl_beta_2',
  PearlBeta3 = 'pearl_beta_3',
  PearlBeta4 = 'pearl_beta_4',
  PearlBeta5 = 'pearl_beta_5',
  PearlBetaMechMarketplace = 'pearl_beta_mech_marketplace',
  OptimusAlpha = 'optimus_alpha',
}

export type ValidStakingProgramId = keyof typeof StakingProgramId;

export type StakingProgramIdMapping<ValueType> = {
  [K in string]: K extends ValidStakingProgramId ? ValueType : never;
};
