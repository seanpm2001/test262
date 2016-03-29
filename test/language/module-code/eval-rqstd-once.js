// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Requested modules are evaluated exactly once
esid: sec-moduleevaluation
info: |
    [...]
    4. If module.[[Evaluated]] is true, return undefined.
    5. Set module.[[Evaluated]] to true.
    6. For each String required that is an element of module.[[RequestedModules]] do,
       a. Let requiredModule be ? HostResolveImportedModule(module, required).
       b. Perform ? requiredModule.ModuleEvaluation().
    [...]
includes: [fnGlobalObject.js]
flags: [module]
---*/

import {} from './eval-rqstd-once_.js';
import './eval-rqstd-once_.js';
import * as ns1 from './eval-rqstd-once_.js';
import dflt1 from './eval-rqstd-once_.js';
export {} from './eval-rqstd-once_.js';
import dflt2, {} from './eval-rqstd-once_.js';
export * from './eval-rqstd-once_.js';
import dflt3, * as ns from './eval-rqstd-once_.js';
export default null;

var global = fnGlobalObject();

assert.sameValue(global.test262, 262, 'global property was defined');
