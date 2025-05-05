/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as cheerio from "cheerio";
import { CS2ItemType, CS2ItemTypeValues } from "../src/economy-types.js";
import { ensure } from "../src/utils.js";
import { CS2ExtendedItem } from "./item-generator-types.js";
import { dedupe, fetchText, readJson, shouldRun, sleep, writeJson } from "./utils.js";

export class BlueprintCase {
    async run(blueprints: string[]) {
        const containerContents: Record<string, string[]> = {};
        const containerName = 'Legendary Blueprints Case'
        containerContents[containerName] = []
        for (const blueprint of blueprints) {
            containerContents[containerName].push(blueprint);
        }
        writeJson("assets/data/blueprint-case.json", containerContents);
    }
}
