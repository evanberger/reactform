import { extendObservable } from 'mobx'

class AppState {
  constructor(){
    extendObservable(this, {
      glName: 'default glName',
      load: 0,
      profile: '',
      name: '',
      existingRate: '',
      iceStorageRate: '',
      chillerType: '',
      coolingMonths: 8,
      chillerTonnage: 0,
      WCcheckboxChecked: false,
      ACcheckboxChecked: false,
      standardChillerEfficiency: 0,
      ddChillerEfficiency: 0,
      iceMakingEfficiency: 0,
      standardChillerCost: 1250,
      ddChillerCost: 1250,
      icebankCost: 21000,
      hxCost: 0,
      rebate: 0,
      addlIceCost: 0,
      taxes: 0,
      downsizePipeSavings: 0,
      downsizeDuctSavings: 0,
      roundDuctSavings: 0,
      hours: [],
      // hourEnds: [
      //   {type: '', load: 0},
      //   {type: '', load: 0},
      // ]

    //   newHourEnds = this.state.hourEnds;
    //   newHourEnds[].value = newValue;
    // this.setState({hourEnds:newHourEnds});

      HE1: 0, HE2: 0, HE3: 0, HE4: 0, HE5: 0, HE6: 0, HE7: 0, HE8: 0, HE9: 0, HE10: 0,
      HE11: 0, HE12: 0, HE13: 0, HE14: 0, HE15: 0, HE16: 0, HE17: 0, HE18: 0, HE19: 0, HE20: 0,
      HE21: 0, HE22: 0, HE23: 0, HE24: 0, type1: '', type2: '', type3: '', type4: '', type5: '', type6: '', type7: '', type8: '', type9: '', type10: '',
      type11: '', type12: '', type13: '', type14: '', type15: '', type16: '', type17: '', type18: '', type19: '', type20: '',
      type21: '', type22: '', type23: '', type24: '',
      icemakingTons1: 0, icemakingTons2: 0, icemakingTons3: 0, icemakingTons4: 0, icemakingTons5: 0, icemakingTons6: 0, icemakingTons7: 0, icemakingTons8: 0, icemakingTons9: 0, icemakingTons10: 0,
      icemakingTons11: 0, icemakingTons12: 0, icemakingTons13: 0, icemakingTons14: 0, icemakingTons15: 0, icemakingTons16: 0, icemakingTons17: 0, icemakingTons18: 0, icemakingTons19: 0, icemakingTons20: 0,
      icemakingTons21: 0, icemakingTons22: 0, icemakingTons23: 0, icemakingTons24: 0,
      iceDispatchTons1: 0, iceDispatchTons2: 0, iceDispatchTons3: 0, iceDispatchTons4: 0, iceDispatchTons5: 0, iceDispatchTons6: 0, iceDispatchTons7: 0, iceDispatchTons8: 0, iceDispatchTons9: 0, iceDispatchTons10: 0,
      iceDispatchTons11: 0, iceDispatchTons12: 0, iceDispatchTons13: 0, iceDispatchTons14: 0, iceDispatchTons15: 0, iceDispatchTons16: 0, iceDispatchTons17: 0, iceDispatchTons18: 0, iceDispatchTons19: 0, iceDispatchTons20: 0,
      iceDispatchTons21: 0, iceDispatchTons22: 0, iceDispatchTons23: 0, iceDispatchTons24: 0,
      chillerTons1: 0, chillerTons2: 0, chillerTons3: 0, chillerTons4: 0, chillerTons5: 0, chillerTons6: 0, chillerTons7: 0, chillerTons8: 0, chillerTons9: 0, chillerTons10: 0,
      chillerTons11: 0, chillerTons12: 0, chillerTons13: 0, chillerTons14: 0, chillerTons15: 0, chillerTons16: 0, chillerTons17: 0, chillerTons18: 0, chillerTons19: 0, chillerTons20: 0,
      chillerTons21: 0, chillerTons22: 0, chillerTons23: 0, chillerTons24: 0,
      icebanks: 0,
      offseason: 0.6,
      costDelta: 0,
      utility: 'Florida Power & Light',
      mockRate: 'LGS-Secondary',
      mockDemand: 20.75, 
      mockConsumption: 0.05,
      mockTaxes: 6.5,
      utilities: 
        [
          {
            id: 'consumersMI',
            name: 'Consumers Energy',
            state: "MI",
            rates: 
              [
                  {
                  ratename: "GP",
                  customercharge: 100,
                  d12month: 0,
                  d_s1: 0, d_s2: 0, d_s3: 0,
                  d_o1: 0, d_o2: 0, d_o3: 0,
                  c_s1: 0.11411, c_s2: 0, c_s3: 0,
                  c_o1: 0.102501, c_02: 0, c_03: 0,
                  hd_s1: [1,24], h_s2: null, h_s3: null,
                  hd_o1: [1,24], hd_o2: null, hd_o3: null,                  
                  hc_s1: [1,24], hc_s2: null, hc_s3: null,
                  hc_o1: [1,24], hc_o2: null, hc_o3: null
                },
                {
                  ratename: "GPD",
                  customercharge: 100,
                  d12month: 4.05,
                  d_s1: 21.05, d_s2: 0, d_s3: 0, 
                  d_o1: 18.05, d_o2: 0, d_o3: 0, 
                  c_s1: 0.053574, c_s2: 0.03663, c_s3: 0,
                  c_o1: 0.045596, c_02: 0.039786, c_03: 0,
                  hd_s1: [12,19], h_s2: [[1,11], [20,24]], h_s3: null,
                  hd_o1: [12,19], h_o2: [[1,11], [20,24]], h_o3: null,  
                  hc_s1: [12,19], hc_s2: [[1,11], [20,24]], hc_s3: null,
                  hc_o1: [12,19], hc_o2: [[1,11], [20,24]], hc_o3: null                    
                }
              ]
            },
             {
            id: 'fpl',
            name: 'Florida Power & Light',
            state: "FL",
            rates: 
              [
                  {
                  ratename: "GSLD1",
                  customercharge: 59.51,
                  d12month: 0,
                  d_s1: 11.57, d_s2: 0, d_s3: 0,
                  d_o1: 11.57, d_o2: 0, d_o3: 0,
                  c_s1: 0.046, c_s2: 0, c_s3: 0,
                  c_o1: 0.046, c_02: 0, c_03: 0,
                  hd_s1: [1,24], hd_s2: null, hd_s3: null,
                  hd_o1: [1,24], hd_o2: null, hd_o3: null,
                  hc_s1: [1,24], hc_s2: null, hc_s3: null,
                  hc_o1: [1,24], hc_o2: null, hc_o3: null
                },
                {
                  ratename: "GSLDT1",
                  customercharge: 59.51,
                  d12month: 0,
                  d_s1: 11.57, d_s2: 0, d_s3: 0, 
                  d_o1: 11.57, d_o2: 0, d_o3: 0, 
                  c_s1: 0.066, c_s2: 0.037, c_s3: 0,
                  c_o1: 0.066, c_o2: 0.037, c_o3: 0,
                  hd_s1: [13,19], hd_s2: [[1,12], [20,24]], hd_s3: 0,
                  hd_o1: [13,19], hd_o2: [[1,12], [20,24]], hd_o3: 0,                  
                  hc_s1: [13,19], hc_s2: [[1,12], [20,24]], hc_s3: 0,
                  hc_o1: [13,19], hc_o2: [[1,12], [20,24]], hc_o3: 0
                },
                                {
                  ratename: "GSLDT1-SDTR",
                  customercharge: 25.96,
                  d12month: 0,
                  d_s1: 11.40, d_s2: 0, d_s3: 0, 
                  d_o1: 9.78, d_o2: 0, d_o3: 0, 
                  c_s1: 0.128, c_s2: 0.042, c_s3: 0,
                  c_o1: 0.081, c_o2: 0.040, c_o3: 0,
                  hd_s1: [16,18], hd_s2: null, hd_s3: null,
                  hd_o1: [[7,10], [19,22]], hd_o2: null, hd_o3: null ,                 
                  hc_s1: [16,18], hc_s2: null, hc_s3: null,
                  hc_o1: [[7,10], [19,22]], hc_o2: null, hc_o3: null
                }
              ]
            }
        ]
    });
  }
}

const appState = new AppState();

export default appState;
