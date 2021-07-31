import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
export declare type AppearancesTypes = keyof typeof APPEARANCES;
declare type btnType = "primary" | "primaryOutline" | "secondary" | "secondaryOutline" | "tertiary" | "outline" | "inversePrimary" | "inverseSecondary" | "inverseOutline";
declare type AppearancesObj = {
    [key in btnType]: btnType;
};
export declare const APPEARANCES: AppearancesObj;
export declare type SizesTypes = keyof typeof SIZES;
declare type sizeType = "small" | "medium";
declare type sizeObj = {
    [key in sizeType]: sizeType;
};
export declare const SIZES: sizeObj;
export declare const Text: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Loading: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const btnPadding: {
    medium: string;
    small: string;
};
export interface CustormButtonProps {
    /** 颜色选择器 */
    backgroundColor?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否加载中 */
    isLoading?: boolean;
    /** 是否是a标签 */
    isLink?: boolean;
    /** 是否替换加载中文本 */
    loadingText?: ReactNode;
    /** 按钮大小 */
    size?: SizesTypes;
    /** 按钮类型 */
    appearance?: AppearancesTypes;
    /** 无效点击 */
    isUnclickable?: boolean;
}
export declare type ButtonProps = CustormButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, CustormButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>, never>;
export {};
