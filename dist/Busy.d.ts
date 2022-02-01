/// <reference types="react" />
import { PopupPlacement, PopupModifier, PopupPosition, BadgeProps } from '@nodestrap/badge';
export declare const usesBusyLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesBusyVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesBusyStates: () => import("@cssfn/cssfn").Rule;
export declare const useBusySheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    fontSizeSm: (string | number)[][];
    fontSizeLg: (string | number)[][];
    icon: string;
    fontSize: string;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    fontSizeSm: (string | number)[][];
    fontSizeLg: (string | number)[][];
    icon: string;
    fontSize: string;
}>, cssVals: import("@cssfn/css-config").Vals<{
    fontSizeSm: (string | number)[][];
    fontSizeLg: (string | number)[][];
    icon: string;
    fontSize: string;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface BusyProps<TElement extends HTMLElement = HTMLElement> extends BadgeProps<TElement> {
}
export declare function Busy<TElement extends HTMLElement = HTMLElement>(props: BusyProps<TElement>): JSX.Element;
export { Busy as default };
export type { PopupPlacement, PopupModifier, PopupPosition };
