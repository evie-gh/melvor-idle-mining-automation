import MiningContainerUIBlock from './MiningContainerUIBlock/MiningContainerUIBlock.mjs';
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
    });

    generalSettings.add({
        type: 'radio-group',
        options: [{
            value: 'exp',
            label: 'Highest XP (Default)',
            hint: 'Always choose the rock which has the largest EXP value per action among those with remaining HP.',
            default: true
        }, {
            value: 'ranked',
            label: 'Custom Priority Ordering',
            hint: 'Always choose the rock which has the highest priority in the defined ordering among those with remaining HP.'
        }]
    });
}

//
// An ordering of ores is defined as a vector of ore ids, with the position in the vector
// indicating the descending priority. position 0 contains the highest priority ore.
// 
// if an ore is not found in the ordering, e.g. when an update introduces a new ore id
// that was not present in the save data, add the ore as the lowest priority and notify
// the user that they may wish to review priorities the next time a custom ordering mode
// is used.
//

class Mode {
    constructor(id, label, description) {
        this.id = id;
        this.label = label;
        this.description = description;
    }

    static equals(mode0, mode1) {
        if (undefined === mode0) {
            return undefined === mode1;
        }

        if (undefined === mode1) {
            return undefined === mode0;
        }

        if (!(mode0 instanceof Mode)
            || !(mode1 instanceof Mode)) {
            throw new Error('mode parameters must be instances of Mode.')
        }

        return mode0.id === mode1.id;
    }
}

class MODES {
    constructor() {
        throw new TypeError('Static classes cannot be instantiated.');
    }

    static {
        this.EXP = new Mode(0, 'Highest XP (Default)', 'Always choose the rock which has the largest EXP value per action among those with remaining HP.');
        this.CUSTOM = new Mode(1, 'Custom Priority Ordering', 'Always choose the rock which has the highest priority in the defined ordering among those with remaining HP.');
        this.DEFAULT = this.EXP;
    }

    static normalize(mode) {
        if (undefined === mode) {
            return this.DEFAULT;
        }

        if (Mode.equals(mode, this.EXP)) {
            return this.EXP;
        }
        if (Mode.equals(mode, this.CUSTOM)) {
            return this.CUSTOM;
        }
        if (Mode.equals(mode, this.DEFAULT)) {
            return this.DEFAULT;
        }

        throw new Error('mode value cannot be mapped to any known mode. value: ' + mode);
    }
}

class Ordering {
    constructor(orderedIds, rockCount) {
        if (!Array.isArray(orderedIds)) {
            throw new Error('orderedIds value must be an array. value: ' + orderedIds);
        }


        // todo : find out to get rock, ore, xp data from the game
        this.orderedIds = orderedIds;
        if ()
    }
}

// const MODES = {
//     EXP: new Mode(0, 'Highest XP (Default)', 'Always choose the rock which has the largest EXP value per action among those with remaining HP.'),
//     CUSTOM: new Mode(1, 'Custom Priority Ordering', 'Always choose the rock which has the highest priority in the defined ordering among those with remaining HP.'),
// }
// MODES.DEFAULT = 


class MelvorIdleMiningAutomationCharacterConfiguration {
    constructor(mode = MODES.DEFAULT, customOrdering = undefined) {
        this.mode = mode;
        this.customOrdering = customOrdering;
    }

    static #modeStorageKey = 'melvor-idle-mining-automation-mode';
    static #orderingStorageKey = 'melvor-idle-mining-automation-custom-ordering';

    /**
     * @param {ModContext} ctx 
     */
    static loadFromContext(ctx) {
        if (undefined === ctx) {
            throw new Error('ModContext parameter must not be undefined.');
        }

        const mode = MODES.normalize(ctx.characterStorage.getItem(this.#modeStorageKey));
        
        var customOrdering = ctx.characterStorage.getItem(this.#orderingStorageKey);
        if (undefined === customOrdering) {
            customOrdering =
        }
    }

    /**
     * @param {ModContext} ctx 
     */
    static saveToContext(ctx) {
        if (undefined === ctx) {
            throw new Error('ModContext parameter must not be undefined.');
        }
    }
}

/**
 * @param {ModContext} ctx 
 */
export async function setup(ctx) {
    ctx.loadTemplates('templates.html');

    // this array will always represent the current ordering, regardless of mode.
    var currentOrdering = [];
    customOrdering = ctx.characterStorage.getItem(orderingStorageKey);
    if (customOrdering === undefined) {

    }

    ctx.onCharacterLoaded((ctx) => {

    });

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
