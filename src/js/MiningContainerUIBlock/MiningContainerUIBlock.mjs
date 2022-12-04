/**
 * @param {{ enabledSwitchId: string }} param0 
 */
  export default function MiningContainerUI({ enabledSwitchId }) {
    return {
        $template: '#melvorMiningAutomation-mining-container-ui-block',
        enabledSwitchId
    };
}
