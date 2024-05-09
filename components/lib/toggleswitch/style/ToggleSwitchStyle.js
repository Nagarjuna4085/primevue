import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-toggleswitch {
    display: inline-block;
    width: ${dt('toggleswitch.width')};
    height: ${dt('toggleswitch.height')};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${dt('toggleswitch.border.radius')};
}

.p-toggleswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0 none;
    background: ${dt('toggleswitch.background')};
    transition: background ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')};
    border-radius: ${dt('toggleswitch.border.radius')};
    outline-color: transparent;
    box-shadow: ${dt('toggleswitch.shadow')};
}

.p-toggleswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: ${dt('toggleswitch.handle.background')};
    width: ${dt('toggleswitch.handle.size')};
    height: ${dt('toggleswitch.handle.size')};
    left: ${dt('toggleswitch.gap')};
    margin-top: calc(-1 * calc(${dt('toggleswitch.handle.size')} / 2));
    border-radius: ${dt('toggleswitch.handle.border.radius')};
    transition: all ${dt('transition.duration')};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${dt('toggleswitch.checked.background')};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${dt('toggleswitch.handle.checked.background')};
    left: calc(${dt('toggleswitch.width')} - calc(${dt('toggleswitch.handle.size')} + ${dt('toggleswitch.gap')}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${dt('toggleswitch.hover.background')};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider:before {
    background: ${dt('toggleswitch.handle.hover.background')};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${dt('toggleswitch.checked.hover.background')};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${dt('toggleswitch.handle.checked.hover.background')};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    border-color: ${dt('toggleswitch.focus.border.color')};
    box-shadow: ${dt('toggleswitch.focus.ring.shadow')};
    outline: ${dt('toggleswitch.focus.ring.width')} ${dt('toggleswitch.focus.ring.style')} ${dt('toggleswitch.focus.ring.color')};
    outline-offset: ${dt('toggleswitch.focus.ring.offset')};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    background: ${dt('toggleswitch.invalid.background')};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider:before {
    background: ${dt('toggleswitch.handle.invalid.background')};
}
`;

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-toggleswitch p-component',
        {
            'p-toggleswitch-checked': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }
    ],
    input: 'p-toggleswitch-input',
    slider: 'p-toggleswitch-slider'
};

export default BaseStyle.extend({
    name: 'toggleswitch',
    theme,
    classes,
    inlineStyles
});