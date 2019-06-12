
interface NodeRequire extends NodeRequireFunction {
    resolve: RequireResolve;
    cache: any;
    extensions: NodeExtensions;
    main: NodeModule | undefined;
    context: (path: string, useSubdirectories: boolean, patter: RegExp)
        => {
            (key: string): any,
            keys(): string[],
        },
}

declare module "static/protocol.json" {
    type ProtocolToVersion = {
        [protocol: string]: string[]
    }
    declare const protocolToVersion: ProtocolToVersion;
    export = protocolToVersion
}

declare module "universal/utils/packFormatMapping.json" {
    type PackFormatToVersioRange = {
        [range: string]: string
    }
    declare const formatToRange: PackFormatToVersioRange;
    export = formatToRange
}

declare module NodeJS {
    interface Global {
        __static: string;
    }
}

declare var __static: string;

declare module 'locales' {
    const locales: object;
    export default locales;
}

// interface ResourceParser {
//     domain: string
//     parse: (name: string, data: Buffer, type: string) => any
// }

// declare namespace McModCN {
//     interface Item {
//         id: string
//         url: string
//         image: string
//     }
//     interface ModPreview {
//         id: string
//         image: string
//         url: string
//         title: string
//         view: string
//         likes: string
//         favor: string
//         items: Item
//     }

//     interface Mod {
//         title: string
//         subTitle: string
//         likes: string
//         popularity: string
//         popularityType: string
//         lastDayCount: string
//         averageCount: string
//         browseCount: string
//         recommendCount: string
//         image: string
//         modType: string
//         recordTime: string
//         author: string
//         lastModifiedTime: string
//         mod: string
//         lastRecommendTime: string
//         modifyCount: string
//         relevantLink: string[]
//         modDescription: string
//     }

//     interface Category {
//         title: string
//         url: string
//         description: string
//         list: ModPreview
//     }
// }


declare module 'fast-html-parser' {

    interface Node {
        text: string
        rawText: string
        structuredText: string

        firstChild: Node
        lastChild: Node
        childNodes: Node[]

        removeWhitespace(): Node
        trimRight(): Node

        attributes: { [key: string]: string }
        rawAttributes: string
        rawAttrs: string
        tagName: string
        id: string
        classNames: string[]
    }
    class TextNode implements Node {
        text: string
        rawText: string
        structuredText: string

        firstChild: Node
        lastChild: Node
        childNodes: Node[]

        removeWhitespace(): TextNode
        trimRight(): TextNode

        attributes: { [key: string]: string }
        rawAttributes: string
        rawAttrs: string
        tagName: string
        id: string
        classNames: string[]
    }
    class HTMLElement implements Node {
        text: string
        rawText: string
        structuredText: string

        firstChild: Node
        lastChild: Node
        childNodes: Node[]

        removeWhitespace(): HTMLElement
        trimRight(): HTMLElement

        attributes: { [key: string]: string }
        rawAttributes: string
        rawAttrs: string
        tagName: string
        id: string
        classNames: string[]

        querySelectorAll(selector: string): Node[]
        querySelector(selector: string): Node

        removeWhitespace(): HTMLElement
        trimRight(): HTMLElement
    }

    function parse(raw: string, options?: {
        lowerCaseTagName?: false,  // convert tag name to lower case (hurt performance heavily)
        script?: false,            // retrieve content in <script> (hurt performance slightly)
        style?: false,             // retrieve content in <style> (hurt performance slightly)
        pre?: false,
    }): HTMLElement;
}
