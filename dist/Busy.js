// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
mainComposition, 
// styles:
style, imports, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import { 
// hooks:
usesSizeVariant, } from '@nodestrap/basic';
import { 
// react components:
VisuallyHidden, } from '@nodestrap/visually-hidden';
import { 
// react components:
Icon, } from '@nodestrap/icon';
import { 
// styles:
usesBadgeLayout, usesBadgeVariants, usesBadgeStates, Badge, } from '@nodestrap/badge';
// styles:
export const usesBusyLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesBadgeLayout(),
        ]),
        ...style({
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    });
};
export const usesBusyVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesBadgeVariants(),
            // layouts:
            sizes(),
        ]),
    });
};
export const usesBusyStates = () => {
    return style({
        ...imports([
            // states:
            usesBadgeStates(),
        ]),
    });
};
export const useBusySheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesBusyLayout(),
        // variants:
        usesBusyVariants(),
        // states:
        usesBusyStates(),
    ])),
], /*sheetId :*/ 'y6oksyrdiq'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    const basics = {
        //#region typos
        fontSize: '1em',
        //#endregion typos
    };
    return {
        ...basics,
        //#region typos
        fontSizeSm: [['calc(', basics.fontSize, '/', 1.25, ')']],
        fontSizeLg: [['calc(', basics.fontSize, '*', 1.25, ')']],
        //#endregion typos
        //#region indicators
        icon: 'busy',
        //#endregion indicators
    };
}, { prefix: 'busy' });
export function Busy(props) {
    // styles:
    const sheet = useBusySheet();
    // jsx:
    return (React.createElement(Badge, { ...props, 
        // accessibilities:
        label: props.label ?? 'Loading...', 
        // appearances:
        nude: props.nude ?? true, badgeStyle: props.badgeStyle ?? 'circle', outlined: props.outlined ?? true, 
        // classes:
        mainClass: props.mainClass ?? sheet.main },
        React.createElement(Icon, { icon: 'busy', size: '1em' }),
        ((props.children ?? false) !== false) && React.createElement(VisuallyHidden, null, props.children)));
}
export { Busy as default };
