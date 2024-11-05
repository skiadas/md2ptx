import { Root } from 'xast';
export interface FixListOptions {
    mergeListToParagraph: boolean;
    omitInnerParagraph: boolean;
}
export declare function fixLists(options: Partial<FixListOptions> | null | undefined): (tree: Root) => void;
