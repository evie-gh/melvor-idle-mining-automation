// Modules
// You can import script modules and have full type completion
import MiningContainerUIBlock from './MiningContainerUIBlock/MiningContainerUIBlock.mjs';

// Data
// Game data for registration
import ModData from '../data/data.json';

// Styles
// Will automatically load your styles upon loading the mod
import '../css/styles.css';

// Images
// To bundle your mod's icon
import '../img/icon.png';
// Reference images using `ctx.getResourceUrl`
import LargeIcon from '../img/icon_large.png';

function setupSettings(ctx) {
    // todo: move enabled switch and open-settings button to mining page
    const generalSettings = ctx.settings.section('');
    generalSettings.add({
        type: 'switch',
        name: 'enabled',
        label: 'Enable Mining Automation',
        hint: 'Enable choosing the current rock to mine based on configured priorities.',
        default: false
    })

    generalSettings.add({
        type: 'radio-group',
        options: [{
            value: 'exp',
            label: 'Highest XP (Default)',
            hint: 'Always choose the rock which has the largest EXP value per action among those with remaining HP.'
        }, {
            value: 'ranked',
            label: 'Custom Priority Ordering',
            hint: 'Always choose the rock which has the highest priority in the defined ordering among those with remaining HP.'
        }]
    })
}

/**
 * @param {ModContext} ctx 
 */
export async function setup(ctx) {
    ctx.loadTemplates('templates.html');

    ctx.onInterfaceReady(() => {
        const uiContainerId = 'melvorMiningAutomation-mining-container-ui-block';
        const container = document.createElement('div');
        container.id = uiContainerId;
        container.class = 'block'
        document.getElementById('mining-ores-container').before(container);

        const miningContainerUI = MiningContainerUIBlock({enabledSwitchId : 'melvorMiningAutomation-mining-container-ui-enabled-switch-0'});
        ui.create(miningContainerUI, document.getElementById(uiContainerId));
    });
}
