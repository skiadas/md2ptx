"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
  var __spreadValues = (a, b) => {
    for (var prop in b ||= {})
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name2 in all3)
      __defProp(target, name2, { get: all3[name2], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/extend/index.js
  var require_extend = __commonJS({
    "node_modules/extend/index.js"(exports, module) {
      "use strict";
      var hasOwn = Object.prototype.hasOwnProperty;
      var toStr = Object.prototype.toString;
      var defineProperty = Object.defineProperty;
      var gOPD = Object.getOwnPropertyDescriptor;
      var isArray = function isArray2(arr) {
        if (typeof Array.isArray === "function") {
          return Array.isArray(arr);
        }
        return toStr.call(arr) === "[object Array]";
      };
      var isPlainObject2 = function isPlainObject3(obj) {
        if (!obj || toStr.call(obj) !== "[object Object]") {
          return false;
        }
        var hasOwnConstructor = hasOwn.call(obj, "constructor");
        var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
        if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
          return false;
        }
        var key;
        for (key in obj) {
        }
        return typeof key === "undefined" || hasOwn.call(obj, key);
      };
      var setProperty = function setProperty2(target, options) {
        if (defineProperty && options.name === "__proto__") {
          defineProperty(target, options.name, {
            enumerable: true,
            configurable: true,
            value: options.newValue,
            writable: true
          });
        } else {
          target[options.name] = options.newValue;
        }
      };
      var getProperty = function getProperty2(obj, name2) {
        if (name2 === "__proto__") {
          if (!hasOwn.call(obj, name2)) {
            return void 0;
          } else if (gOPD) {
            return gOPD(obj, name2).value;
          }
        }
        return obj[name2];
      };
      module.exports = function extend2() {
        var options, name2, src, copy, copyIsArray, clone;
        var target = arguments[0];
        var i = 1;
        var length = arguments.length;
        var deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[1] || {};
          i = 2;
        }
        if (target == null || typeof target !== "object" && typeof target !== "function") {
          target = {};
        }
        for (; i < length; ++i) {
          options = arguments[i];
          if (options != null) {
            for (name2 in options) {
              src = getProperty(target, name2);
              copy = getProperty(options, name2);
              if (target !== copy) {
                if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                  if (copyIsArray) {
                    copyIsArray = false;
                    clone = src && isArray(src) ? src : [];
                  } else {
                    clone = src && isPlainObject2(src) ? src : {};
                  }
                  setProperty(target, { name: name2, newValue: extend2(deep, clone, copy) });
                } else if (typeof copy !== "undefined") {
                  setProperty(target, { name: name2, newValue: copy });
                }
              }
            }
          }
        }
        return target;
      };
    }
  });

  // node_modules/mdast-util-to-string/lib/index.js
  var emptyOptions = {};
  function toString(value2, options) {
    const settings = options || emptyOptions;
    const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
    const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
    return one(value2, includeImageAlt, includeHtml);
  }
  function one(value2, includeImageAlt, includeHtml) {
    if (node(value2)) {
      if ("value" in value2) {
        return value2.type === "html" && !includeHtml ? "" : value2.value;
      }
      if (includeImageAlt && "alt" in value2 && value2.alt) {
        return value2.alt;
      }
      if ("children" in value2) {
        return all(value2.children, includeImageAlt, includeHtml);
      }
    }
    if (Array.isArray(value2)) {
      return all(value2, includeImageAlt, includeHtml);
    }
    return "";
  }
  function all(values, includeImageAlt, includeHtml) {
    const result = [];
    let index2 = -1;
    while (++index2 < values.length) {
      result[index2] = one(values[index2], includeImageAlt, includeHtml);
    }
    return result.join("");
  }
  function node(value2) {
    return Boolean(value2 && typeof value2 === "object");
  }

  // node_modules/decode-named-character-reference/index.dom.js
  var element = document.createElement("i");
  function decodeNamedCharacterReference(value2) {
    const characterReference2 = "&" + value2 + ";";
    element.innerHTML = characterReference2;
    const char = element.textContent;
    if (char.charCodeAt(char.length - 1) === 59 && value2 !== "semi") {
      return false;
    }
    return char === characterReference2 ? false : char;
  }

  // node_modules/micromark-util-chunked/index.js
  function splice(list3, start, remove, items) {
    const end = list3.length;
    let chunkStart = 0;
    let parameters;
    if (start < 0) {
      start = -start > end ? 0 : end + start;
    } else {
      start = start > end ? end : start;
    }
    remove = remove > 0 ? remove : 0;
    if (items.length < 1e4) {
      parameters = Array.from(items);
      parameters.unshift(start, remove);
      list3.splice(...parameters);
    } else {
      if (remove)
        list3.splice(start, remove);
      while (chunkStart < items.length) {
        parameters = items.slice(chunkStart, chunkStart + 1e4);
        parameters.unshift(start, 0);
        list3.splice(...parameters);
        chunkStart += 1e4;
        start += 1e4;
      }
    }
  }
  function push(list3, items) {
    if (list3.length > 0) {
      splice(list3, list3.length, 0, items);
      return list3;
    }
    return items;
  }

  // node_modules/micromark-util-combine-extensions/index.js
  var hasOwnProperty = {}.hasOwnProperty;
  function combineExtensions(extensions) {
    const all3 = {};
    let index2 = -1;
    while (++index2 < extensions.length) {
      syntaxExtension(all3, extensions[index2]);
    }
    return all3;
  }
  function syntaxExtension(all3, extension2) {
    let hook;
    for (hook in extension2) {
      const maybe = hasOwnProperty.call(all3, hook) ? all3[hook] : void 0;
      const left = maybe || (all3[hook] = {});
      const right = extension2[hook];
      let code3;
      if (right) {
        for (code3 in right) {
          if (!hasOwnProperty.call(left, code3))
            left[code3] = [];
          const value2 = right[code3];
          constructs(
            // @ts-expect-error Looks like a list.
            left[code3],
            Array.isArray(value2) ? value2 : value2 ? [value2] : []
          );
        }
      }
    }
  }
  function constructs(existing, list3) {
    let index2 = -1;
    const before = [];
    while (++index2 < list3.length) {
      ;
      (list3[index2].add === "after" ? existing : before).push(list3[index2]);
    }
    splice(existing, 0, 0, before);
  }

  // node_modules/micromark-util-decode-numeric-character-reference/index.js
  function decodeNumericCharacterReference(value2, base) {
    const code3 = Number.parseInt(value2, base);
    if (
      // C0 except for HT, LF, FF, CR, space.
      code3 < 9 || code3 === 11 || code3 > 13 && code3 < 32 || // Control character (DEL) of C0, and C1 controls.
      code3 > 126 && code3 < 160 || // Lone high surrogates and low surrogates.
      code3 > 55295 && code3 < 57344 || // Noncharacters.
      code3 > 64975 && code3 < 65008 || /* eslint-disable no-bitwise */
      (code3 & 65535) === 65535 || (code3 & 65535) === 65534 || /* eslint-enable no-bitwise */
      // Out of range
      code3 > 1114111
    ) {
      return "\uFFFD";
    }
    return String.fromCodePoint(code3);
  }

  // node_modules/micromark-util-normalize-identifier/index.js
  function normalizeIdentifier(value2) {
    return value2.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }

  // node_modules/micromark-util-character/index.js
  var asciiAlpha = regexCheck(/[A-Za-z]/);
  var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
  var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
  function asciiControl(code3) {
    return (
      // Special whitespace codes (which have negative values), C0 and Control
      // character DEL
      code3 !== null && (code3 < 32 || code3 === 127)
    );
  }
  var asciiDigit = regexCheck(/\d/);
  var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
  var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
  function markdownLineEnding(code3) {
    return code3 !== null && code3 < -2;
  }
  function markdownLineEndingOrSpace(code3) {
    return code3 !== null && (code3 < 0 || code3 === 32);
  }
  function markdownSpace(code3) {
    return code3 === -2 || code3 === -1 || code3 === 32;
  }
  var unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
  var unicodeWhitespace = regexCheck(/\s/);
  function regexCheck(regex) {
    return check;
    function check(code3) {
      return code3 !== null && code3 > -1 && regex.test(String.fromCharCode(code3));
    }
  }

  // node_modules/micromark-factory-space/index.js
  function factorySpace(effects, ok3, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start;
    function start(code3) {
      if (markdownSpace(code3)) {
        effects.enter(type);
        return prefix(code3);
      }
      return ok3(code3);
    }
    function prefix(code3) {
      if (markdownSpace(code3) && size++ < limit) {
        effects.consume(code3);
        return prefix;
      }
      effects.exit(type);
      return ok3(code3);
    }
  }

  // node_modules/micromark/lib/initialize/content.js
  var content = {
    tokenize: initializeContent
  };
  function initializeContent(effects) {
    const contentStart = effects.attempt(
      this.parser.constructs.contentInitial,
      afterContentStartConstruct,
      paragraphInitial
    );
    let previous3;
    return contentStart;
    function afterContentStartConstruct(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return factorySpace(effects, contentStart, "linePrefix");
    }
    function paragraphInitial(code3) {
      effects.enter("paragraph");
      return lineStart(code3);
    }
    function lineStart(code3) {
      const token = effects.enter("chunkText", {
        contentType: "text",
        previous: previous3
      });
      if (previous3) {
        previous3.next = token;
      }
      previous3 = token;
      return data(code3);
    }
    function data(code3) {
      if (code3 === null) {
        effects.exit("chunkText");
        effects.exit("paragraph");
        effects.consume(code3);
        return;
      }
      if (markdownLineEnding(code3)) {
        effects.consume(code3);
        effects.exit("chunkText");
        return lineStart;
      }
      effects.consume(code3);
      return data;
    }
  }

  // node_modules/micromark/lib/initialize/document.js
  var document2 = {
    tokenize: initializeDocument
  };
  var containerConstruct = {
    tokenize: tokenizeContainer
  };
  function initializeDocument(effects) {
    const self = this;
    const stack = [];
    let continued = 0;
    let childFlow;
    let childToken;
    let lineStartOffset;
    return start;
    function start(code3) {
      if (continued < stack.length) {
        const item = stack[continued];
        self.containerState = item[1];
        return effects.attempt(
          item[0].continuation,
          documentContinue,
          checkNewContainers
        )(code3);
      }
      return checkNewContainers(code3);
    }
    function documentContinue(code3) {
      continued++;
      if (self.containerState._closeFlow) {
        self.containerState._closeFlow = void 0;
        if (childFlow) {
          closeFlow();
        }
        const indexBeforeExits = self.events.length;
        let indexBeforeFlow = indexBeforeExits;
        let point3;
        while (indexBeforeFlow--) {
          if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
            point3 = self.events[indexBeforeFlow][1].end;
            break;
          }
        }
        exitContainers(continued);
        let index2 = indexBeforeExits;
        while (index2 < self.events.length) {
          self.events[index2][1].end = Object.assign({}, point3);
          index2++;
        }
        splice(
          self.events,
          indexBeforeFlow + 1,
          0,
          self.events.slice(indexBeforeExits)
        );
        self.events.length = index2;
        return checkNewContainers(code3);
      }
      return start(code3);
    }
    function checkNewContainers(code3) {
      if (continued === stack.length) {
        if (!childFlow) {
          return documentContinued(code3);
        }
        if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
          return flowStart(code3);
        }
        self.interrupt = Boolean(
          childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
        );
      }
      self.containerState = {};
      return effects.check(
        containerConstruct,
        thereIsANewContainer,
        thereIsNoNewContainer
      )(code3);
    }
    function thereIsANewContainer(code3) {
      if (childFlow)
        closeFlow();
      exitContainers(continued);
      return documentContinued(code3);
    }
    function thereIsNoNewContainer(code3) {
      self.parser.lazy[self.now().line] = continued !== stack.length;
      lineStartOffset = self.now().offset;
      return flowStart(code3);
    }
    function documentContinued(code3) {
      self.containerState = {};
      return effects.attempt(
        containerConstruct,
        containerContinue,
        flowStart
      )(code3);
    }
    function containerContinue(code3) {
      continued++;
      stack.push([self.currentConstruct, self.containerState]);
      return documentContinued(code3);
    }
    function flowStart(code3) {
      if (code3 === null) {
        if (childFlow)
          closeFlow();
        exitContainers(0);
        effects.consume(code3);
        return;
      }
      childFlow = childFlow || self.parser.flow(self.now());
      effects.enter("chunkFlow", {
        contentType: "flow",
        previous: childToken,
        _tokenizer: childFlow
      });
      return flowContinue(code3);
    }
    function flowContinue(code3) {
      if (code3 === null) {
        writeToChild(effects.exit("chunkFlow"), true);
        exitContainers(0);
        effects.consume(code3);
        return;
      }
      if (markdownLineEnding(code3)) {
        effects.consume(code3);
        writeToChild(effects.exit("chunkFlow"));
        continued = 0;
        self.interrupt = void 0;
        return start;
      }
      effects.consume(code3);
      return flowContinue;
    }
    function writeToChild(token, eof) {
      const stream = self.sliceStream(token);
      if (eof)
        stream.push(null);
      token.previous = childToken;
      if (childToken)
        childToken.next = token;
      childToken = token;
      childFlow.defineSkip(token.start);
      childFlow.write(stream);
      if (self.parser.lazy[token.start.line]) {
        let index2 = childFlow.events.length;
        while (index2--) {
          if (
            // The token starts before the line ending…
            childFlow.events[index2][1].start.offset < lineStartOffset && // …and either is not ended yet…
            (!childFlow.events[index2][1].end || // …or ends after it.
            childFlow.events[index2][1].end.offset > lineStartOffset)
          ) {
            return;
          }
        }
        const indexBeforeExits = self.events.length;
        let indexBeforeFlow = indexBeforeExits;
        let seen;
        let point3;
        while (indexBeforeFlow--) {
          if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
            if (seen) {
              point3 = self.events[indexBeforeFlow][1].end;
              break;
            }
            seen = true;
          }
        }
        exitContainers(continued);
        index2 = indexBeforeExits;
        while (index2 < self.events.length) {
          self.events[index2][1].end = Object.assign({}, point3);
          index2++;
        }
        splice(
          self.events,
          indexBeforeFlow + 1,
          0,
          self.events.slice(indexBeforeExits)
        );
        self.events.length = index2;
      }
    }
    function exitContainers(size) {
      let index2 = stack.length;
      while (index2-- > size) {
        const entry = stack[index2];
        self.containerState = entry[1];
        entry[0].exit.call(self, effects);
      }
      stack.length = size;
    }
    function closeFlow() {
      childFlow.write([null]);
      childToken = void 0;
      childFlow = void 0;
      self.containerState._closeFlow = void 0;
    }
  }
  function tokenizeContainer(effects, ok3, nok) {
    return factorySpace(
      effects,
      effects.attempt(this.parser.constructs.document, ok3, nok),
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }

  // node_modules/micromark-util-classify-character/index.js
  function classifyCharacter(code3) {
    if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
      return 1;
    }
    if (unicodePunctuation(code3)) {
      return 2;
    }
  }

  // node_modules/micromark-util-resolve-all/index.js
  function resolveAll(constructs2, events, context) {
    const called = [];
    let index2 = -1;
    while (++index2 < constructs2.length) {
      const resolve = constructs2[index2].resolveAll;
      if (resolve && !called.includes(resolve)) {
        events = resolve(events, context);
        called.push(resolve);
      }
    }
    return events;
  }

  // node_modules/micromark-core-commonmark/lib/attention.js
  var attention = {
    name: "attention",
    tokenize: tokenizeAttention,
    resolveAll: resolveAllAttention
  };
  function resolveAllAttention(events, context) {
    let index2 = -1;
    let open;
    let group;
    let text6;
    let openingSequence;
    let closingSequence;
    let use;
    let nextEvents;
    let offset;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
        open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
          context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
            if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
              continue;
            }
            use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
            const start = Object.assign({}, events[open][1].end);
            const end = Object.assign({}, events[index2][1].start);
            movePoint(start, -use);
            movePoint(end, use);
            openingSequence = {
              type: use > 1 ? "strongSequence" : "emphasisSequence",
              start,
              end: Object.assign({}, events[open][1].end)
            };
            closingSequence = {
              type: use > 1 ? "strongSequence" : "emphasisSequence",
              start: Object.assign({}, events[index2][1].start),
              end
            };
            text6 = {
              type: use > 1 ? "strongText" : "emphasisText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            group = {
              type: use > 1 ? "strong" : "emphasis",
              start: Object.assign({}, openingSequence.start),
              end: Object.assign({}, closingSequence.end)
            };
            events[open][1].end = Object.assign({}, openingSequence.start);
            events[index2][1].start = Object.assign({}, closingSequence.end);
            nextEvents = [];
            if (events[open][1].end.offset - events[open][1].start.offset) {
              nextEvents = push(nextEvents, [["enter", events[open][1], context], ["exit", events[open][1], context]]);
            }
            nextEvents = push(nextEvents, [["enter", group, context], ["enter", openingSequence, context], ["exit", openingSequence, context], ["enter", text6, context]]);
            nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
            nextEvents = push(nextEvents, [["exit", text6, context], ["enter", closingSequence, context], ["exit", closingSequence, context], ["exit", group, context]]);
            if (events[index2][1].end.offset - events[index2][1].start.offset) {
              offset = 2;
              nextEvents = push(nextEvents, [["enter", events[index2][1], context], ["exit", events[index2][1], context]]);
            } else {
              offset = 0;
            }
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - offset - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "attentionSequence") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeAttention(effects, ok3) {
    const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
    const previous3 = this.previous;
    const before = classifyCharacter(previous3);
    let marker;
    return start;
    function start(code3) {
      marker = code3;
      effects.enter("attentionSequence");
      return inside(code3);
    }
    function inside(code3) {
      if (code3 === marker) {
        effects.consume(code3);
        return inside;
      }
      const token = effects.exit("attentionSequence");
      const after = classifyCharacter(code3);
      const open = !after || after === 2 && before || attentionMarkers2.includes(code3);
      const close = !before || before === 2 && after || attentionMarkers2.includes(previous3);
      token._open = Boolean(marker === 42 ? open : open && (before || !close));
      token._close = Boolean(marker === 42 ? close : close && (after || !open));
      return ok3(code3);
    }
  }
  function movePoint(point3, offset) {
    point3.column += offset;
    point3.offset += offset;
    point3._bufferIndex += offset;
  }

  // node_modules/micromark-core-commonmark/lib/autolink.js
  var autolink = {
    name: "autolink",
    tokenize: tokenizeAutolink
  };
  function tokenizeAutolink(effects, ok3, nok) {
    let size = 0;
    return start;
    function start(code3) {
      effects.enter("autolink");
      effects.enter("autolinkMarker");
      effects.consume(code3);
      effects.exit("autolinkMarker");
      effects.enter("autolinkProtocol");
      return open;
    }
    function open(code3) {
      if (asciiAlpha(code3)) {
        effects.consume(code3);
        return schemeOrEmailAtext;
      }
      if (code3 === 64) {
        return nok(code3);
      }
      return emailAtext(code3);
    }
    function schemeOrEmailAtext(code3) {
      if (code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) {
        size = 1;
        return schemeInsideOrEmailAtext(code3);
      }
      return emailAtext(code3);
    }
    function schemeInsideOrEmailAtext(code3) {
      if (code3 === 58) {
        effects.consume(code3);
        size = 0;
        return urlInside;
      }
      if ((code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) && size++ < 32) {
        effects.consume(code3);
        return schemeInsideOrEmailAtext;
      }
      size = 0;
      return emailAtext(code3);
    }
    function urlInside(code3) {
      if (code3 === 62) {
        effects.exit("autolinkProtocol");
        effects.enter("autolinkMarker");
        effects.consume(code3);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok3;
      }
      if (code3 === null || code3 === 32 || code3 === 60 || asciiControl(code3)) {
        return nok(code3);
      }
      effects.consume(code3);
      return urlInside;
    }
    function emailAtext(code3) {
      if (code3 === 64) {
        effects.consume(code3);
        return emailAtSignOrDot;
      }
      if (asciiAtext(code3)) {
        effects.consume(code3);
        return emailAtext;
      }
      return nok(code3);
    }
    function emailAtSignOrDot(code3) {
      return asciiAlphanumeric(code3) ? emailLabel(code3) : nok(code3);
    }
    function emailLabel(code3) {
      if (code3 === 46) {
        effects.consume(code3);
        size = 0;
        return emailAtSignOrDot;
      }
      if (code3 === 62) {
        effects.exit("autolinkProtocol").type = "autolinkEmail";
        effects.enter("autolinkMarker");
        effects.consume(code3);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok3;
      }
      return emailValue(code3);
    }
    function emailValue(code3) {
      if ((code3 === 45 || asciiAlphanumeric(code3)) && size++ < 63) {
        const next = code3 === 45 ? emailValue : emailLabel;
        effects.consume(code3);
        return next;
      }
      return nok(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/blank-line.js
  var blankLine = {
    tokenize: tokenizeBlankLine,
    partial: true
  };
  function tokenizeBlankLine(effects, ok3, nok) {
    return start;
    function start(code3) {
      return markdownSpace(code3) ? factorySpace(effects, after, "linePrefix")(code3) : after(code3);
    }
    function after(code3) {
      return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/block-quote.js
  var blockQuote = {
    name: "blockQuote",
    tokenize: tokenizeBlockQuoteStart,
    continuation: {
      tokenize: tokenizeBlockQuoteContinuation
    },
    exit
  };
  function tokenizeBlockQuoteStart(effects, ok3, nok) {
    const self = this;
    return start;
    function start(code3) {
      if (code3 === 62) {
        const state = self.containerState;
        if (!state.open) {
          effects.enter("blockQuote", {
            _container: true
          });
          state.open = true;
        }
        effects.enter("blockQuotePrefix");
        effects.enter("blockQuoteMarker");
        effects.consume(code3);
        effects.exit("blockQuoteMarker");
        return after;
      }
      return nok(code3);
    }
    function after(code3) {
      if (markdownSpace(code3)) {
        effects.enter("blockQuotePrefixWhitespace");
        effects.consume(code3);
        effects.exit("blockQuotePrefixWhitespace");
        effects.exit("blockQuotePrefix");
        return ok3;
      }
      effects.exit("blockQuotePrefix");
      return ok3(code3);
    }
  }
  function tokenizeBlockQuoteContinuation(effects, ok3, nok) {
    const self = this;
    return contStart;
    function contStart(code3) {
      if (markdownSpace(code3)) {
        return factorySpace(effects, contBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
      }
      return contBefore(code3);
    }
    function contBefore(code3) {
      return effects.attempt(blockQuote, ok3, nok)(code3);
    }
  }
  function exit(effects) {
    effects.exit("blockQuote");
  }

  // node_modules/micromark-core-commonmark/lib/character-escape.js
  var characterEscape = {
    name: "characterEscape",
    tokenize: tokenizeCharacterEscape
  };
  function tokenizeCharacterEscape(effects, ok3, nok) {
    return start;
    function start(code3) {
      effects.enter("characterEscape");
      effects.enter("escapeMarker");
      effects.consume(code3);
      effects.exit("escapeMarker");
      return inside;
    }
    function inside(code3) {
      if (asciiPunctuation(code3)) {
        effects.enter("characterEscapeValue");
        effects.consume(code3);
        effects.exit("characterEscapeValue");
        effects.exit("characterEscape");
        return ok3;
      }
      return nok(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/character-reference.js
  var characterReference = {
    name: "characterReference",
    tokenize: tokenizeCharacterReference
  };
  function tokenizeCharacterReference(effects, ok3, nok) {
    const self = this;
    let size = 0;
    let max;
    let test;
    return start;
    function start(code3) {
      effects.enter("characterReference");
      effects.enter("characterReferenceMarker");
      effects.consume(code3);
      effects.exit("characterReferenceMarker");
      return open;
    }
    function open(code3) {
      if (code3 === 35) {
        effects.enter("characterReferenceMarkerNumeric");
        effects.consume(code3);
        effects.exit("characterReferenceMarkerNumeric");
        return numeric;
      }
      effects.enter("characterReferenceValue");
      max = 31;
      test = asciiAlphanumeric;
      return value2(code3);
    }
    function numeric(code3) {
      if (code3 === 88 || code3 === 120) {
        effects.enter("characterReferenceMarkerHexadecimal");
        effects.consume(code3);
        effects.exit("characterReferenceMarkerHexadecimal");
        effects.enter("characterReferenceValue");
        max = 6;
        test = asciiHexDigit;
        return value2;
      }
      effects.enter("characterReferenceValue");
      max = 7;
      test = asciiDigit;
      return value2(code3);
    }
    function value2(code3) {
      if (code3 === 59 && size) {
        const token = effects.exit("characterReferenceValue");
        if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
          return nok(code3);
        }
        effects.enter("characterReferenceMarker");
        effects.consume(code3);
        effects.exit("characterReferenceMarker");
        effects.exit("characterReference");
        return ok3;
      }
      if (test(code3) && size++ < max) {
        effects.consume(code3);
        return value2;
      }
      return nok(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/code-fenced.js
  var nonLazyContinuation = {
    tokenize: tokenizeNonLazyContinuation,
    partial: true
  };
  var codeFenced = {
    name: "codeFenced",
    tokenize: tokenizeCodeFenced,
    concrete: true
  };
  function tokenizeCodeFenced(effects, ok3, nok) {
    const self = this;
    const closeStart = {
      tokenize: tokenizeCloseStart,
      partial: true
    };
    let initialPrefix = 0;
    let sizeOpen = 0;
    let marker;
    return start;
    function start(code3) {
      return beforeSequenceOpen(code3);
    }
    function beforeSequenceOpen(code3) {
      const tail = self.events[self.events.length - 1];
      initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
      marker = code3;
      effects.enter("codeFenced");
      effects.enter("codeFencedFence");
      effects.enter("codeFencedFenceSequence");
      return sequenceOpen(code3);
    }
    function sequenceOpen(code3) {
      if (code3 === marker) {
        sizeOpen++;
        effects.consume(code3);
        return sequenceOpen;
      }
      if (sizeOpen < 3) {
        return nok(code3);
      }
      effects.exit("codeFencedFenceSequence");
      return markdownSpace(code3) ? factorySpace(effects, infoBefore, "whitespace")(code3) : infoBefore(code3);
    }
    function infoBefore(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("codeFencedFence");
        return self.interrupt ? ok3(code3) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3);
      }
      effects.enter("codeFencedFenceInfo");
      effects.enter("chunkString", {
        contentType: "string"
      });
      return info(code3);
    }
    function info(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("chunkString");
        effects.exit("codeFencedFenceInfo");
        return infoBefore(code3);
      }
      if (markdownSpace(code3)) {
        effects.exit("chunkString");
        effects.exit("codeFencedFenceInfo");
        return factorySpace(effects, metaBefore, "whitespace")(code3);
      }
      if (code3 === 96 && code3 === marker) {
        return nok(code3);
      }
      effects.consume(code3);
      return info;
    }
    function metaBefore(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        return infoBefore(code3);
      }
      effects.enter("codeFencedFenceMeta");
      effects.enter("chunkString", {
        contentType: "string"
      });
      return meta(code3);
    }
    function meta(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("chunkString");
        effects.exit("codeFencedFenceMeta");
        return infoBefore(code3);
      }
      if (code3 === 96 && code3 === marker) {
        return nok(code3);
      }
      effects.consume(code3);
      return meta;
    }
    function atNonLazyBreak(code3) {
      return effects.attempt(closeStart, after, contentBefore)(code3);
    }
    function contentBefore(code3) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return contentStart;
    }
    function contentStart(code3) {
      return initialPrefix > 0 && markdownSpace(code3) ? factorySpace(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code3) : beforeContentChunk(code3);
    }
    function beforeContentChunk(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3);
      }
      effects.enter("codeFlowValue");
      return contentChunk(code3);
    }
    function contentChunk(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("codeFlowValue");
        return beforeContentChunk(code3);
      }
      effects.consume(code3);
      return contentChunk;
    }
    function after(code3) {
      effects.exit("codeFenced");
      return ok3(code3);
    }
    function tokenizeCloseStart(effects2, ok4, nok2) {
      let size = 0;
      return startBefore;
      function startBefore(code3) {
        effects2.enter("lineEnding");
        effects2.consume(code3);
        effects2.exit("lineEnding");
        return start2;
      }
      function start2(code3) {
        effects2.enter("codeFencedFence");
        return markdownSpace(code3) ? factorySpace(effects2, beforeSequenceClose, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3) : beforeSequenceClose(code3);
      }
      function beforeSequenceClose(code3) {
        if (code3 === marker) {
          effects2.enter("codeFencedFenceSequence");
          return sequenceClose(code3);
        }
        return nok2(code3);
      }
      function sequenceClose(code3) {
        if (code3 === marker) {
          size++;
          effects2.consume(code3);
          return sequenceClose;
        }
        if (size >= sizeOpen) {
          effects2.exit("codeFencedFenceSequence");
          return markdownSpace(code3) ? factorySpace(effects2, sequenceCloseAfter, "whitespace")(code3) : sequenceCloseAfter(code3);
        }
        return nok2(code3);
      }
      function sequenceCloseAfter(code3) {
        if (code3 === null || markdownLineEnding(code3)) {
          effects2.exit("codeFencedFence");
          return ok4(code3);
        }
        return nok2(code3);
      }
    }
  }
  function tokenizeNonLazyContinuation(effects, ok3, nok) {
    const self = this;
    return start;
    function start(code3) {
      if (code3 === null) {
        return nok(code3);
      }
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code3) {
      return self.parser.lazy[self.now().line] ? nok(code3) : ok3(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/code-indented.js
  var codeIndented = {
    name: "codeIndented",
    tokenize: tokenizeCodeIndented
  };
  var furtherStart = {
    tokenize: tokenizeFurtherStart,
    partial: true
  };
  function tokenizeCodeIndented(effects, ok3, nok) {
    const self = this;
    return start;
    function start(code3) {
      effects.enter("codeIndented");
      return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
    }
    function afterPrefix(code3) {
      const tail = self.events[self.events.length - 1];
      return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code3) : nok(code3);
    }
    function atBreak(code3) {
      if (code3 === null) {
        return after(code3);
      }
      if (markdownLineEnding(code3)) {
        return effects.attempt(furtherStart, atBreak, after)(code3);
      }
      effects.enter("codeFlowValue");
      return inside(code3);
    }
    function inside(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("codeFlowValue");
        return atBreak(code3);
      }
      effects.consume(code3);
      return inside;
    }
    function after(code3) {
      effects.exit("codeIndented");
      return ok3(code3);
    }
  }
  function tokenizeFurtherStart(effects, ok3, nok) {
    const self = this;
    return furtherStart2;
    function furtherStart2(code3) {
      if (self.parser.lazy[self.now().line]) {
        return nok(code3);
      }
      if (markdownLineEnding(code3)) {
        effects.enter("lineEnding");
        effects.consume(code3);
        effects.exit("lineEnding");
        return furtherStart2;
      }
      return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
    }
    function afterPrefix(code3) {
      const tail = self.events[self.events.length - 1];
      return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok3(code3) : markdownLineEnding(code3) ? furtherStart2(code3) : nok(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/code-text.js
  var codeText = {
    name: "codeText",
    tokenize: tokenizeCodeText,
    resolve: resolveCodeText,
    previous
  };
  function resolveCodeText(events) {
    let tailExitIndex = events.length - 4;
    let headEnterIndex = 3;
    let index2;
    let enter;
    if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
      index2 = headEnterIndex;
      while (++index2 < tailExitIndex) {
        if (events[index2][1].type === "codeTextData") {
          events[headEnterIndex][1].type = "codeTextPadding";
          events[tailExitIndex][1].type = "codeTextPadding";
          headEnterIndex += 2;
          tailExitIndex -= 2;
          break;
        }
      }
    }
    index2 = headEnterIndex - 1;
    tailExitIndex++;
    while (++index2 <= tailExitIndex) {
      if (enter === void 0) {
        if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
          enter = index2;
        }
      } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
        events[enter][1].type = "codeTextData";
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          tailExitIndex -= index2 - enter - 2;
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return events;
  }
  function previous(code3) {
    return code3 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function tokenizeCodeText(effects, ok3, nok) {
    const self = this;
    let sizeOpen = 0;
    let size;
    let token;
    return start;
    function start(code3) {
      effects.enter("codeText");
      effects.enter("codeTextSequence");
      return sequenceOpen(code3);
    }
    function sequenceOpen(code3) {
      if (code3 === 96) {
        effects.consume(code3);
        sizeOpen++;
        return sequenceOpen;
      }
      effects.exit("codeTextSequence");
      return between(code3);
    }
    function between(code3) {
      if (code3 === null) {
        return nok(code3);
      }
      if (code3 === 32) {
        effects.enter("space");
        effects.consume(code3);
        effects.exit("space");
        return between;
      }
      if (code3 === 96) {
        token = effects.enter("codeTextSequence");
        size = 0;
        return sequenceClose(code3);
      }
      if (markdownLineEnding(code3)) {
        effects.enter("lineEnding");
        effects.consume(code3);
        effects.exit("lineEnding");
        return between;
      }
      effects.enter("codeTextData");
      return data(code3);
    }
    function data(code3) {
      if (code3 === null || code3 === 32 || code3 === 96 || markdownLineEnding(code3)) {
        effects.exit("codeTextData");
        return between(code3);
      }
      effects.consume(code3);
      return data;
    }
    function sequenceClose(code3) {
      if (code3 === 96) {
        effects.consume(code3);
        size++;
        return sequenceClose;
      }
      if (size === sizeOpen) {
        effects.exit("codeTextSequence");
        effects.exit("codeText");
        return ok3(code3);
      }
      token.type = "codeTextData";
      return data(code3);
    }
  }

  // node_modules/micromark-util-subtokenize/lib/splice-buffer.js
  var SpliceBuffer = class {
    /**
     * @param {ReadonlyArray<T> | null | undefined} [initial]
     *   Initial items (optional).
     * @returns
     *   Splice buffer.
     */
    constructor(initial) {
      this.left = initial ? [...initial] : [];
      this.right = [];
    }
    /**
     * Array access;
     * does not move the cursor.
     *
     * @param {number} index
     *   Index.
     * @return {T}
     *   Item.
     */
    get(index2) {
      if (index2 < 0 || index2 >= this.left.length + this.right.length) {
        throw new RangeError("Cannot access index `" + index2 + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      }
      if (index2 < this.left.length)
        return this.left[index2];
      return this.right[this.right.length - index2 + this.left.length - 1];
    }
    /**
     * The length of the splice buffer, one greater than the largest index in the
     * array.
     */
    get length() {
      return this.left.length + this.right.length;
    }
    /**
     * Remove and return `list[0]`;
     * moves the cursor to `0`.
     *
     * @returns {T | undefined}
     *   Item, optional.
     */
    shift() {
      this.setCursor(0);
      return this.right.pop();
    }
    /**
     * Slice the buffer to get an array;
     * does not move the cursor.
     *
     * @param {number} start
     *   Start.
     * @param {number | null | undefined} [end]
     *   End (optional).
     * @returns {Array<T>}
     *   Array of items.
     */
    slice(start, end) {
      const stop = end === null || end === void 0 ? Number.POSITIVE_INFINITY : end;
      if (stop < this.left.length) {
        return this.left.slice(start, stop);
      }
      if (start > this.left.length) {
        return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
      }
      return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
    }
    /**
     * Mimics the behavior of Array.prototype.splice() except for the change of
     * interface necessary to avoid segfaults when patching in very large arrays.
     *
     * This operation moves cursor is moved to `start` and results in the cursor
     * placed after any inserted items.
     *
     * @param {number} start
     *   Start;
     *   zero-based index at which to start changing the array;
     *   negative numbers count backwards from the end of the array and values
     *   that are out-of bounds are clamped to the appropriate end of the array.
     * @param {number | null | undefined} [deleteCount=0]
     *   Delete count (default: `0`);
     *   maximum number of elements to delete, starting from start.
     * @param {Array<T> | null | undefined} [items=[]]
     *   Items to include in place of the deleted items (default: `[]`).
     * @return {Array<T>}
     *   Any removed items.
     */
    splice(start, deleteCount, items) {
      const count = deleteCount || 0;
      this.setCursor(Math.trunc(start));
      const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
      if (items)
        chunkedPush(this.left, items);
      return removed.reverse();
    }
    /**
     * Remove and return the highest-numbered item in the array, so
     * `list[list.length - 1]`;
     * Moves the cursor to `length`.
     *
     * @returns {T | undefined}
     *   Item, optional.
     */
    pop() {
      this.setCursor(Number.POSITIVE_INFINITY);
      return this.left.pop();
    }
    /**
     * Inserts a single item to the high-numbered side of the array;
     * moves the cursor to `length`.
     *
     * @param {T} item
     *   Item.
     * @returns {undefined}
     *   Nothing.
     */
    push(item) {
      this.setCursor(Number.POSITIVE_INFINITY);
      this.left.push(item);
    }
    /**
     * Inserts many items to the high-numbered side of the array.
     * Moves the cursor to `length`.
     *
     * @param {Array<T>} items
     *   Items.
     * @returns {undefined}
     *   Nothing.
     */
    pushMany(items) {
      this.setCursor(Number.POSITIVE_INFINITY);
      chunkedPush(this.left, items);
    }
    /**
     * Inserts a single item to the low-numbered side of the array;
     * Moves the cursor to `0`.
     *
     * @param {T} item
     *   Item.
     * @returns {undefined}
     *   Nothing.
     */
    unshift(item) {
      this.setCursor(0);
      this.right.push(item);
    }
    /**
     * Inserts many items to the low-numbered side of the array;
     * moves the cursor to `0`.
     *
     * @param {Array<T>} items
     *   Items.
     * @returns {undefined}
     *   Nothing.
     */
    unshiftMany(items) {
      this.setCursor(0);
      chunkedPush(this.right, items.reverse());
    }
    /**
     * Move the cursor to a specific position in the array. Requires
     * time proportional to the distance moved.
     *
     * If `n < 0`, the cursor will end up at the beginning.
     * If `n > length`, the cursor will end up at the end.
     *
     * @param {number} n
     *   Position.
     * @return {undefined}
     *   Nothing.
     */
    setCursor(n) {
      if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0)
        return;
      if (n < this.left.length) {
        const removed = this.left.splice(n, Number.POSITIVE_INFINITY);
        chunkedPush(this.right, removed.reverse());
      } else {
        const removed = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        chunkedPush(this.left, removed.reverse());
      }
    }
  };
  function chunkedPush(list3, right) {
    let chunkStart = 0;
    if (right.length < 1e4) {
      list3.push(...right);
    } else {
      while (chunkStart < right.length) {
        list3.push(...right.slice(chunkStart, chunkStart + 1e4));
        chunkStart += 1e4;
      }
    }
  }

  // node_modules/micromark-util-subtokenize/index.js
  function subtokenize(eventsArray) {
    const jumps = {};
    let index2 = -1;
    let event;
    let lineIndex;
    let otherIndex;
    let otherEvent;
    let parameters;
    let subevents;
    let more;
    const events = new SpliceBuffer(eventsArray);
    while (++index2 < events.length) {
      while (index2 in jumps) {
        index2 = jumps[index2];
      }
      event = events.get(index2);
      if (index2 && event[1].type === "chunkFlow" && events.get(index2 - 1)[1].type === "listItemPrefix") {
        subevents = event[1]._tokenizer.events;
        otherIndex = 0;
        if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
          otherIndex += 2;
        }
        if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
          while (++otherIndex < subevents.length) {
            if (subevents[otherIndex][1].type === "content") {
              break;
            }
            if (subevents[otherIndex][1].type === "chunkText") {
              subevents[otherIndex][1]._isInFirstContentOfListItem = true;
              otherIndex++;
            }
          }
        }
      }
      if (event[0] === "enter") {
        if (event[1].contentType) {
          Object.assign(jumps, subcontent(events, index2));
          index2 = jumps[index2];
          more = true;
        }
      } else if (event[1]._container) {
        otherIndex = index2;
        lineIndex = void 0;
        while (otherIndex--) {
          otherEvent = events.get(otherIndex);
          if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
            if (otherEvent[0] === "enter") {
              if (lineIndex) {
                events.get(lineIndex)[1].type = "lineEndingBlank";
              }
              otherEvent[1].type = "lineEnding";
              lineIndex = otherIndex;
            }
          } else {
            break;
          }
        }
        if (lineIndex) {
          event[1].end = Object.assign({}, events.get(lineIndex)[1].start);
          parameters = events.slice(lineIndex, index2);
          parameters.unshift(event);
          events.splice(lineIndex, index2 - lineIndex + 1, parameters);
        }
      }
    }
    splice(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
    return !more;
  }
  function subcontent(events, eventIndex) {
    const token = events.get(eventIndex)[1];
    const context = events.get(eventIndex)[2];
    let startPosition = eventIndex - 1;
    const startPositions = [];
    const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
    const childEvents = tokenizer.events;
    const jumps = [];
    const gaps = {};
    let stream;
    let previous3;
    let index2 = -1;
    let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [start];
    while (current) {
      while (events.get(++startPosition)[1] !== current) {
      }
      startPositions.push(startPosition);
      if (!current._tokenizer) {
        stream = context.sliceStream(current);
        if (!current.next) {
          stream.push(null);
        }
        if (previous3) {
          tokenizer.defineSkip(current.start);
        }
        if (current._isInFirstContentOfListItem) {
          tokenizer._gfmTasklistFirstContentOfListItem = true;
        }
        tokenizer.write(stream);
        if (current._isInFirstContentOfListItem) {
          tokenizer._gfmTasklistFirstContentOfListItem = void 0;
        }
      }
      previous3 = current;
      current = current.next;
    }
    current = token;
    while (++index2 < childEvents.length) {
      if (
        // Find a void token that includes a break.
        childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line
      ) {
        start = index2 + 1;
        breaks.push(start);
        current._tokenizer = void 0;
        current.previous = void 0;
        current = current.next;
      }
    }
    tokenizer.events = [];
    if (current) {
      current._tokenizer = void 0;
      current.previous = void 0;
    } else {
      breaks.pop();
    }
    index2 = breaks.length;
    while (index2--) {
      const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
      const start2 = startPositions.pop();
      jumps.push([start2, start2 + slice.length - 1]);
      events.splice(start2, 2, slice);
    }
    jumps.reverse();
    index2 = -1;
    while (++index2 < jumps.length) {
      gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
      adjust += jumps[index2][1] - jumps[index2][0] - 1;
    }
    return gaps;
  }

  // node_modules/micromark-core-commonmark/lib/content.js
  var content2 = {
    tokenize: tokenizeContent,
    resolve: resolveContent
  };
  var continuationConstruct = {
    tokenize: tokenizeContinuation,
    partial: true
  };
  function resolveContent(events) {
    subtokenize(events);
    return events;
  }
  function tokenizeContent(effects, ok3) {
    let previous3;
    return chunkStart;
    function chunkStart(code3) {
      effects.enter("content");
      previous3 = effects.enter("chunkContent", {
        contentType: "content"
      });
      return chunkInside(code3);
    }
    function chunkInside(code3) {
      if (code3 === null) {
        return contentEnd(code3);
      }
      if (markdownLineEnding(code3)) {
        return effects.check(continuationConstruct, contentContinue, contentEnd)(code3);
      }
      effects.consume(code3);
      return chunkInside;
    }
    function contentEnd(code3) {
      effects.exit("chunkContent");
      effects.exit("content");
      return ok3(code3);
    }
    function contentContinue(code3) {
      effects.consume(code3);
      effects.exit("chunkContent");
      previous3.next = effects.enter("chunkContent", {
        contentType: "content",
        previous: previous3
      });
      previous3 = previous3.next;
      return chunkInside;
    }
  }
  function tokenizeContinuation(effects, ok3, nok) {
    const self = this;
    return startLookahead;
    function startLookahead(code3) {
      effects.exit("chunkContent");
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return factorySpace(effects, prefixed, "linePrefix");
    }
    function prefixed(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        return nok(code3);
      }
      const tail = self.events[self.events.length - 1];
      if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
        return ok3(code3);
      }
      return effects.interrupt(self.parser.constructs.flow, nok, ok3)(code3);
    }
  }

  // node_modules/micromark-factory-destination/index.js
  function factoryDestination(effects, ok3, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    function start(code3) {
      if (code3 === 60) {
        effects.enter(type);
        effects.enter(literalType);
        effects.enter(literalMarkerType);
        effects.consume(code3);
        effects.exit(literalMarkerType);
        return enclosedBefore;
      }
      if (code3 === null || code3 === 32 || code3 === 41 || asciiControl(code3)) {
        return nok(code3);
      }
      effects.enter(type);
      effects.enter(rawType);
      effects.enter(stringType);
      effects.enter("chunkString", {
        contentType: "string"
      });
      return raw2(code3);
    }
    function enclosedBefore(code3) {
      if (code3 === 62) {
        effects.enter(literalMarkerType);
        effects.consume(code3);
        effects.exit(literalMarkerType);
        effects.exit(literalType);
        effects.exit(type);
        return ok3;
      }
      effects.enter(stringType);
      effects.enter("chunkString", {
        contentType: "string"
      });
      return enclosed(code3);
    }
    function enclosed(code3) {
      if (code3 === 62) {
        effects.exit("chunkString");
        effects.exit(stringType);
        return enclosedBefore(code3);
      }
      if (code3 === null || code3 === 60 || markdownLineEnding(code3)) {
        return nok(code3);
      }
      effects.consume(code3);
      return code3 === 92 ? enclosedEscape : enclosed;
    }
    function enclosedEscape(code3) {
      if (code3 === 60 || code3 === 62 || code3 === 92) {
        effects.consume(code3);
        return enclosed;
      }
      return enclosed(code3);
    }
    function raw2(code3) {
      if (!balance && (code3 === null || code3 === 41 || markdownLineEndingOrSpace(code3))) {
        effects.exit("chunkString");
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok3(code3);
      }
      if (balance < limit && code3 === 40) {
        effects.consume(code3);
        balance++;
        return raw2;
      }
      if (code3 === 41) {
        effects.consume(code3);
        balance--;
        return raw2;
      }
      if (code3 === null || code3 === 32 || code3 === 40 || asciiControl(code3)) {
        return nok(code3);
      }
      effects.consume(code3);
      return code3 === 92 ? rawEscape : raw2;
    }
    function rawEscape(code3) {
      if (code3 === 40 || code3 === 41 || code3 === 92) {
        effects.consume(code3);
        return raw2;
      }
      return raw2(code3);
    }
  }

  // node_modules/micromark-factory-label/index.js
  function factoryLabel(effects, ok3, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    let seen;
    return start;
    function start(code3) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.enter(stringType);
      return atBreak;
    }
    function atBreak(code3) {
      if (size > 999 || code3 === null || code3 === 91 || code3 === 93 && !seen || // To do: remove in the future once we’ve switched from
      // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
      // which doesn’t need this.
      // Hidden footnotes hook.
      /* c8 ignore next 3 */
      code3 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs) {
        return nok(code3);
      }
      if (code3 === 93) {
        effects.exit(stringType);
        effects.enter(markerType);
        effects.consume(code3);
        effects.exit(markerType);
        effects.exit(type);
        return ok3;
      }
      if (markdownLineEnding(code3)) {
        effects.enter("lineEnding");
        effects.consume(code3);
        effects.exit("lineEnding");
        return atBreak;
      }
      effects.enter("chunkString", {
        contentType: "string"
      });
      return labelInside(code3);
    }
    function labelInside(code3) {
      if (code3 === null || code3 === 91 || code3 === 93 || markdownLineEnding(code3) || size++ > 999) {
        effects.exit("chunkString");
        return atBreak(code3);
      }
      effects.consume(code3);
      if (!seen)
        seen = !markdownSpace(code3);
      return code3 === 92 ? labelEscape : labelInside;
    }
    function labelEscape(code3) {
      if (code3 === 91 || code3 === 92 || code3 === 93) {
        effects.consume(code3);
        size++;
        return labelInside;
      }
      return labelInside(code3);
    }
  }

  // node_modules/micromark-factory-title/index.js
  function factoryTitle(effects, ok3, nok, type, markerType, stringType) {
    let marker;
    return start;
    function start(code3) {
      if (code3 === 34 || code3 === 39 || code3 === 40) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code3);
        effects.exit(markerType);
        marker = code3 === 40 ? 41 : code3;
        return begin;
      }
      return nok(code3);
    }
    function begin(code3) {
      if (code3 === marker) {
        effects.enter(markerType);
        effects.consume(code3);
        effects.exit(markerType);
        effects.exit(type);
        return ok3;
      }
      effects.enter(stringType);
      return atBreak(code3);
    }
    function atBreak(code3) {
      if (code3 === marker) {
        effects.exit(stringType);
        return begin(marker);
      }
      if (code3 === null) {
        return nok(code3);
      }
      if (markdownLineEnding(code3)) {
        effects.enter("lineEnding");
        effects.consume(code3);
        effects.exit("lineEnding");
        return factorySpace(effects, atBreak, "linePrefix");
      }
      effects.enter("chunkString", {
        contentType: "string"
      });
      return inside(code3);
    }
    function inside(code3) {
      if (code3 === marker || code3 === null || markdownLineEnding(code3)) {
        effects.exit("chunkString");
        return atBreak(code3);
      }
      effects.consume(code3);
      return code3 === 92 ? escape2 : inside;
    }
    function escape2(code3) {
      if (code3 === marker || code3 === 92) {
        effects.consume(code3);
        return inside;
      }
      return inside(code3);
    }
  }

  // node_modules/micromark-factory-whitespace/index.js
  function factoryWhitespace(effects, ok3) {
    let seen;
    return start;
    function start(code3) {
      if (markdownLineEnding(code3)) {
        effects.enter("lineEnding");
        effects.consume(code3);
        effects.exit("lineEnding");
        seen = true;
        return start;
      }
      if (markdownSpace(code3)) {
        return factorySpace(
          effects,
          start,
          seen ? "linePrefix" : "lineSuffix"
        )(code3);
      }
      return ok3(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/definition.js
  var definition = {
    name: "definition",
    tokenize: tokenizeDefinition
  };
  var titleBefore = {
    tokenize: tokenizeTitleBefore,
    partial: true
  };
  function tokenizeDefinition(effects, ok3, nok) {
    const self = this;
    let identifier;
    return start;
    function start(code3) {
      effects.enter("definition");
      return before(code3);
    }
    function before(code3) {
      return factoryLabel.call(
        self,
        effects,
        labelAfter,
        // Note: we don’t need to reset the way `markdown-rs` does.
        nok,
        "definitionLabel",
        "definitionLabelMarker",
        "definitionLabelString"
      )(code3);
    }
    function labelAfter(code3) {
      identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
      if (code3 === 58) {
        effects.enter("definitionMarker");
        effects.consume(code3);
        effects.exit("definitionMarker");
        return markerAfter;
      }
      return nok(code3);
    }
    function markerAfter(code3) {
      return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, destinationBefore)(code3) : destinationBefore(code3);
    }
    function destinationBefore(code3) {
      return factoryDestination(
        effects,
        destinationAfter,
        // Note: we don’t need to reset the way `markdown-rs` does.
        nok,
        "definitionDestination",
        "definitionDestinationLiteral",
        "definitionDestinationLiteralMarker",
        "definitionDestinationRaw",
        "definitionDestinationString"
      )(code3);
    }
    function destinationAfter(code3) {
      return effects.attempt(titleBefore, after, after)(code3);
    }
    function after(code3) {
      return markdownSpace(code3) ? factorySpace(effects, afterWhitespace, "whitespace")(code3) : afterWhitespace(code3);
    }
    function afterWhitespace(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("definition");
        self.parser.defined.push(identifier);
        return ok3(code3);
      }
      return nok(code3);
    }
  }
  function tokenizeTitleBefore(effects, ok3, nok) {
    return titleBefore2;
    function titleBefore2(code3) {
      return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, beforeMarker)(code3) : nok(code3);
    }
    function beforeMarker(code3) {
      return factoryTitle(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code3);
    }
    function titleAfter(code3) {
      return markdownSpace(code3) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code3) : titleAfterOptionalWhitespace(code3);
    }
    function titleAfterOptionalWhitespace(code3) {
      return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/hard-break-escape.js
  var hardBreakEscape = {
    name: "hardBreakEscape",
    tokenize: tokenizeHardBreakEscape
  };
  function tokenizeHardBreakEscape(effects, ok3, nok) {
    return start;
    function start(code3) {
      effects.enter("hardBreakEscape");
      effects.consume(code3);
      return after;
    }
    function after(code3) {
      if (markdownLineEnding(code3)) {
        effects.exit("hardBreakEscape");
        return ok3(code3);
      }
      return nok(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/heading-atx.js
  var headingAtx = {
    name: "headingAtx",
    tokenize: tokenizeHeadingAtx,
    resolve: resolveHeadingAtx
  };
  function resolveHeadingAtx(events, context) {
    let contentEnd = events.length - 2;
    let contentStart = 3;
    let content3;
    let text6;
    if (events[contentStart][1].type === "whitespace") {
      contentStart += 2;
    }
    if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
      contentEnd -= 2;
    }
    if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
      contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    }
    if (contentEnd > contentStart) {
      content3 = {
        type: "atxHeadingText",
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end
      };
      text6 = {
        type: "chunkText",
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end,
        contentType: "text"
      };
      splice(events, contentStart, contentEnd - contentStart + 1, [["enter", content3, context], ["enter", text6, context], ["exit", text6, context], ["exit", content3, context]]);
    }
    return events;
  }
  function tokenizeHeadingAtx(effects, ok3, nok) {
    let size = 0;
    return start;
    function start(code3) {
      effects.enter("atxHeading");
      return before(code3);
    }
    function before(code3) {
      effects.enter("atxHeadingSequence");
      return sequenceOpen(code3);
    }
    function sequenceOpen(code3) {
      if (code3 === 35 && size++ < 6) {
        effects.consume(code3);
        return sequenceOpen;
      }
      if (code3 === null || markdownLineEndingOrSpace(code3)) {
        effects.exit("atxHeadingSequence");
        return atBreak(code3);
      }
      return nok(code3);
    }
    function atBreak(code3) {
      if (code3 === 35) {
        effects.enter("atxHeadingSequence");
        return sequenceFurther(code3);
      }
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("atxHeading");
        return ok3(code3);
      }
      if (markdownSpace(code3)) {
        return factorySpace(effects, atBreak, "whitespace")(code3);
      }
      effects.enter("atxHeadingText");
      return data(code3);
    }
    function sequenceFurther(code3) {
      if (code3 === 35) {
        effects.consume(code3);
        return sequenceFurther;
      }
      effects.exit("atxHeadingSequence");
      return atBreak(code3);
    }
    function data(code3) {
      if (code3 === null || code3 === 35 || markdownLineEndingOrSpace(code3)) {
        effects.exit("atxHeadingText");
        return atBreak(code3);
      }
      effects.consume(code3);
      return data;
    }
  }

  // node_modules/micromark-util-html-tag-name/index.js
  var htmlBlockNames = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ];
  var htmlRawNames = ["pre", "script", "style", "textarea"];

  // node_modules/micromark-core-commonmark/lib/html-flow.js
  var htmlFlow = {
    name: "htmlFlow",
    tokenize: tokenizeHtmlFlow,
    resolveTo: resolveToHtmlFlow,
    concrete: true
  };
  var blankLineBefore = {
    tokenize: tokenizeBlankLineBefore,
    partial: true
  };
  var nonLazyContinuationStart = {
    tokenize: tokenizeNonLazyContinuationStart,
    partial: true
  };
  function resolveToHtmlFlow(events) {
    let index2 = events.length;
    while (index2--) {
      if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
        break;
      }
    }
    if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
      events[index2][1].start = events[index2 - 2][1].start;
      events[index2 + 1][1].start = events[index2 - 2][1].start;
      events.splice(index2 - 2, 2);
    }
    return events;
  }
  function tokenizeHtmlFlow(effects, ok3, nok) {
    const self = this;
    let marker;
    let closingTag;
    let buffer;
    let index2;
    let markerB;
    return start;
    function start(code3) {
      return before(code3);
    }
    function before(code3) {
      effects.enter("htmlFlow");
      effects.enter("htmlFlowData");
      effects.consume(code3);
      return open;
    }
    function open(code3) {
      if (code3 === 33) {
        effects.consume(code3);
        return declarationOpen;
      }
      if (code3 === 47) {
        effects.consume(code3);
        closingTag = true;
        return tagCloseStart;
      }
      if (code3 === 63) {
        effects.consume(code3);
        marker = 3;
        return self.interrupt ? ok3 : continuationDeclarationInside;
      }
      if (asciiAlpha(code3)) {
        effects.consume(code3);
        buffer = String.fromCharCode(code3);
        return tagName;
      }
      return nok(code3);
    }
    function declarationOpen(code3) {
      if (code3 === 45) {
        effects.consume(code3);
        marker = 2;
        return commentOpenInside;
      }
      if (code3 === 91) {
        effects.consume(code3);
        marker = 5;
        index2 = 0;
        return cdataOpenInside;
      }
      if (asciiAlpha(code3)) {
        effects.consume(code3);
        marker = 4;
        return self.interrupt ? ok3 : continuationDeclarationInside;
      }
      return nok(code3);
    }
    function commentOpenInside(code3) {
      if (code3 === 45) {
        effects.consume(code3);
        return self.interrupt ? ok3 : continuationDeclarationInside;
      }
      return nok(code3);
    }
    function cdataOpenInside(code3) {
      const value2 = "CDATA[";
      if (code3 === value2.charCodeAt(index2++)) {
        effects.consume(code3);
        if (index2 === value2.length) {
          return self.interrupt ? ok3 : continuation;
        }
        return cdataOpenInside;
      }
      return nok(code3);
    }
    function tagCloseStart(code3) {
      if (asciiAlpha(code3)) {
        effects.consume(code3);
        buffer = String.fromCharCode(code3);
        return tagName;
      }
      return nok(code3);
    }
    function tagName(code3) {
      if (code3 === null || code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
        const slash = code3 === 47;
        const name2 = buffer.toLowerCase();
        if (!slash && !closingTag && htmlRawNames.includes(name2)) {
          marker = 1;
          return self.interrupt ? ok3(code3) : continuation(code3);
        }
        if (htmlBlockNames.includes(buffer.toLowerCase())) {
          marker = 6;
          if (slash) {
            effects.consume(code3);
            return basicSelfClosing;
          }
          return self.interrupt ? ok3(code3) : continuation(code3);
        }
        marker = 7;
        return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code3) : closingTag ? completeClosingTagAfter(code3) : completeAttributeNameBefore(code3);
      }
      if (code3 === 45 || asciiAlphanumeric(code3)) {
        effects.consume(code3);
        buffer += String.fromCharCode(code3);
        return tagName;
      }
      return nok(code3);
    }
    function basicSelfClosing(code3) {
      if (code3 === 62) {
        effects.consume(code3);
        return self.interrupt ? ok3 : continuation;
      }
      return nok(code3);
    }
    function completeClosingTagAfter(code3) {
      if (markdownSpace(code3)) {
        effects.consume(code3);
        return completeClosingTagAfter;
      }
      return completeEnd(code3);
    }
    function completeAttributeNameBefore(code3) {
      if (code3 === 47) {
        effects.consume(code3);
        return completeEnd;
      }
      if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
        effects.consume(code3);
        return completeAttributeName;
      }
      if (markdownSpace(code3)) {
        effects.consume(code3);
        return completeAttributeNameBefore;
      }
      return completeEnd(code3);
    }
    function completeAttributeName(code3) {
      if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
        effects.consume(code3);
        return completeAttributeName;
      }
      return completeAttributeNameAfter(code3);
    }
    function completeAttributeNameAfter(code3) {
      if (code3 === 61) {
        effects.consume(code3);
        return completeAttributeValueBefore;
      }
      if (markdownSpace(code3)) {
        effects.consume(code3);
        return completeAttributeNameAfter;
      }
      return completeAttributeNameBefore(code3);
    }
    function completeAttributeValueBefore(code3) {
      if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
        return nok(code3);
      }
      if (code3 === 34 || code3 === 39) {
        effects.consume(code3);
        markerB = code3;
        return completeAttributeValueQuoted;
      }
      if (markdownSpace(code3)) {
        effects.consume(code3);
        return completeAttributeValueBefore;
      }
      return completeAttributeValueUnquoted(code3);
    }
    function completeAttributeValueQuoted(code3) {
      if (code3 === markerB) {
        effects.consume(code3);
        markerB = null;
        return completeAttributeValueQuotedAfter;
      }
      if (code3 === null || markdownLineEnding(code3)) {
        return nok(code3);
      }
      effects.consume(code3);
      return completeAttributeValueQuoted;
    }
    function completeAttributeValueUnquoted(code3) {
      if (code3 === null || code3 === 34 || code3 === 39 || code3 === 47 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || markdownLineEndingOrSpace(code3)) {
        return completeAttributeNameAfter(code3);
      }
      effects.consume(code3);
      return completeAttributeValueUnquoted;
    }
    function completeAttributeValueQuotedAfter(code3) {
      if (code3 === 47 || code3 === 62 || markdownSpace(code3)) {
        return completeAttributeNameBefore(code3);
      }
      return nok(code3);
    }
    function completeEnd(code3) {
      if (code3 === 62) {
        effects.consume(code3);
        return completeAfter;
      }
      return nok(code3);
    }
    function completeAfter(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        return continuation(code3);
      }
      if (markdownSpace(code3)) {
        effects.consume(code3);
        return completeAfter;
      }
      return nok(code3);
    }
    function continuation(code3) {
      if (code3 === 45 && marker === 2) {
        effects.consume(code3);
        return continuationCommentInside;
      }
      if (code3 === 60 && marker === 1) {
        effects.consume(code3);
        return continuationRawTagOpen;
      }
      if (code3 === 62 && marker === 4) {
        effects.consume(code3);
        return continuationClose;
      }
      if (code3 === 63 && marker === 3) {
        effects.consume(code3);
        return continuationDeclarationInside;
      }
      if (code3 === 93 && marker === 5) {
        effects.consume(code3);
        return continuationCdataInside;
      }
      if (markdownLineEnding(code3) && (marker === 6 || marker === 7)) {
        effects.exit("htmlFlowData");
        return effects.check(blankLineBefore, continuationAfter, continuationStart)(code3);
      }
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("htmlFlowData");
        return continuationStart(code3);
      }
      effects.consume(code3);
      return continuation;
    }
    function continuationStart(code3) {
      return effects.check(nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code3);
    }
    function continuationStartNonLazy(code3) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return continuationBefore;
    }
    function continuationBefore(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        return continuationStart(code3);
      }
      effects.enter("htmlFlowData");
      return continuation(code3);
    }
    function continuationCommentInside(code3) {
      if (code3 === 45) {
        effects.consume(code3);
        return continuationDeclarationInside;
      }
      return continuation(code3);
    }
    function continuationRawTagOpen(code3) {
      if (code3 === 47) {
        effects.consume(code3);
        buffer = "";
        return continuationRawEndTag;
      }
      return continuation(code3);
    }
    function continuationRawEndTag(code3) {
      if (code3 === 62) {
        const name2 = buffer.toLowerCase();
        if (htmlRawNames.includes(name2)) {
          effects.consume(code3);
          return continuationClose;
        }
        return continuation(code3);
      }
      if (asciiAlpha(code3) && buffer.length < 8) {
        effects.consume(code3);
        buffer += String.fromCharCode(code3);
        return continuationRawEndTag;
      }
      return continuation(code3);
    }
    function continuationCdataInside(code3) {
      if (code3 === 93) {
        effects.consume(code3);
        return continuationDeclarationInside;
      }
      return continuation(code3);
    }
    function continuationDeclarationInside(code3) {
      if (code3 === 62) {
        effects.consume(code3);
        return continuationClose;
      }
      if (code3 === 45 && marker === 2) {
        effects.consume(code3);
        return continuationDeclarationInside;
      }
      return continuation(code3);
    }
    function continuationClose(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("htmlFlowData");
        return continuationAfter(code3);
      }
      effects.consume(code3);
      return continuationClose;
    }
    function continuationAfter(code3) {
      effects.exit("htmlFlow");
      return ok3(code3);
    }
  }
  function tokenizeNonLazyContinuationStart(effects, ok3, nok) {
    const self = this;
    return start;
    function start(code3) {
      if (markdownLineEnding(code3)) {
        effects.enter("lineEnding");
        effects.consume(code3);
        effects.exit("lineEnding");
        return after;
      }
      return nok(code3);
    }
    function after(code3) {
      return self.parser.lazy[self.now().line] ? nok(code3) : ok3(code3);
    }
  }
  function tokenizeBlankLineBefore(effects, ok3, nok) {
    return start;
    function start(code3) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return effects.attempt(blankLine, ok3, nok);
    }
  }

  // node_modules/micromark-core-commonmark/lib/html-text.js
  var htmlText = {
    name: "htmlText",
    tokenize: tokenizeHtmlText
  };
  function tokenizeHtmlText(effects, ok3, nok) {
    const self = this;
    let marker;
    let index2;
    let returnState;
    return start;
    function start(code3) {
      effects.enter("htmlText");
      effects.enter("htmlTextData");
      effects.consume(code3);
      return open;
    }
    function open(code3) {
      if (code3 === 33) {
        effects.consume(code3);
        return declarationOpen;
      }
      if (code3 === 47) {
        effects.consume(code3);
        return tagCloseStart;
      }
      if (code3 === 63) {
        effects.consume(code3);
        return instruction2;
      }
      if (asciiAlpha(code3)) {
        effects.consume(code3);
        return tagOpen;
      }
      return nok(code3);
    }
    function declarationOpen(code3) {
      if (code3 === 45) {
        effects.consume(code3);
        return commentOpenInside;
      }
      if (code3 === 91) {
        effects.consume(code3);
        index2 = 0;
        return cdataOpenInside;
      }
      if (asciiAlpha(code3)) {
        effects.consume(code3);
        return declaration;
      }
      return nok(code3);
    }
    function commentOpenInside(code3) {
      if (code3 === 45) {
        effects.consume(code3);
        return commentEnd;
      }
      return nok(code3);
    }
    function comment2(code3) {
      if (code3 === null) {
        return nok(code3);
      }
      if (code3 === 45) {
        effects.consume(code3);
        return commentClose;
      }
      if (markdownLineEnding(code3)) {
        returnState = comment2;
        return lineEndingBefore(code3);
      }
      effects.consume(code3);
      return comment2;
    }
    function commentClose(code3) {
      if (code3 === 45) {
        effects.consume(code3);
        return commentEnd;
      }
      return comment2(code3);
    }
    function commentEnd(code3) {
      return code3 === 62 ? end(code3) : code3 === 45 ? commentClose(code3) : comment2(code3);
    }
    function cdataOpenInside(code3) {
      const value2 = "CDATA[";
      if (code3 === value2.charCodeAt(index2++)) {
        effects.consume(code3);
        return index2 === value2.length ? cdata2 : cdataOpenInside;
      }
      return nok(code3);
    }
    function cdata2(code3) {
      if (code3 === null) {
        return nok(code3);
      }
      if (code3 === 93) {
        effects.consume(code3);
        return cdataClose;
      }
      if (markdownLineEnding(code3)) {
        returnState = cdata2;
        return lineEndingBefore(code3);
      }
      effects.consume(code3);
      return cdata2;
    }
    function cdataClose(code3) {
      if (code3 === 93) {
        effects.consume(code3);
        return cdataEnd;
      }
      return cdata2(code3);
    }
    function cdataEnd(code3) {
      if (code3 === 62) {
        return end(code3);
      }
      if (code3 === 93) {
        effects.consume(code3);
        return cdataEnd;
      }
      return cdata2(code3);
    }
    function declaration(code3) {
      if (code3 === null || code3 === 62) {
        return end(code3);
      }
      if (markdownLineEnding(code3)) {
        returnState = declaration;
        return lineEndingBefore(code3);
      }
      effects.consume(code3);
      return declaration;
    }
    function instruction2(code3) {
      if (code3 === null) {
        return nok(code3);
      }
      if (code3 === 63) {
        effects.consume(code3);
        return instructionClose;
      }
      if (markdownLineEnding(code3)) {
        returnState = instruction2;
        return lineEndingBefore(code3);
      }
      effects.consume(code3);
      return instruction2;
    }
    function instructionClose(code3) {
      return code3 === 62 ? end(code3) : instruction2(code3);
    }
    function tagCloseStart(code3) {
      if (asciiAlpha(code3)) {
        effects.consume(code3);
        return tagClose;
      }
      return nok(code3);
    }
    function tagClose(code3) {
      if (code3 === 45 || asciiAlphanumeric(code3)) {
        effects.consume(code3);
        return tagClose;
      }
      return tagCloseBetween(code3);
    }
    function tagCloseBetween(code3) {
      if (markdownLineEnding(code3)) {
        returnState = tagCloseBetween;
        return lineEndingBefore(code3);
      }
      if (markdownSpace(code3)) {
        effects.consume(code3);
        return tagCloseBetween;
      }
      return end(code3);
    }
    function tagOpen(code3) {
      if (code3 === 45 || asciiAlphanumeric(code3)) {
        effects.consume(code3);
        return tagOpen;
      }
      if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
        return tagOpenBetween(code3);
      }
      return nok(code3);
    }
    function tagOpenBetween(code3) {
      if (code3 === 47) {
        effects.consume(code3);
        return end;
      }
      if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
        effects.consume(code3);
        return tagOpenAttributeName;
      }
      if (markdownLineEnding(code3)) {
        returnState = tagOpenBetween;
        return lineEndingBefore(code3);
      }
      if (markdownSpace(code3)) {
        effects.consume(code3);
        return tagOpenBetween;
      }
      return end(code3);
    }
    function tagOpenAttributeName(code3) {
      if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
        effects.consume(code3);
        return tagOpenAttributeName;
      }
      return tagOpenAttributeNameAfter(code3);
    }
    function tagOpenAttributeNameAfter(code3) {
      if (code3 === 61) {
        effects.consume(code3);
        return tagOpenAttributeValueBefore;
      }
      if (markdownLineEnding(code3)) {
        returnState = tagOpenAttributeNameAfter;
        return lineEndingBefore(code3);
      }
      if (markdownSpace(code3)) {
        effects.consume(code3);
        return tagOpenAttributeNameAfter;
      }
      return tagOpenBetween(code3);
    }
    function tagOpenAttributeValueBefore(code3) {
      if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
        return nok(code3);
      }
      if (code3 === 34 || code3 === 39) {
        effects.consume(code3);
        marker = code3;
        return tagOpenAttributeValueQuoted;
      }
      if (markdownLineEnding(code3)) {
        returnState = tagOpenAttributeValueBefore;
        return lineEndingBefore(code3);
      }
      if (markdownSpace(code3)) {
        effects.consume(code3);
        return tagOpenAttributeValueBefore;
      }
      effects.consume(code3);
      return tagOpenAttributeValueUnquoted;
    }
    function tagOpenAttributeValueQuoted(code3) {
      if (code3 === marker) {
        effects.consume(code3);
        marker = void 0;
        return tagOpenAttributeValueQuotedAfter;
      }
      if (code3 === null) {
        return nok(code3);
      }
      if (markdownLineEnding(code3)) {
        returnState = tagOpenAttributeValueQuoted;
        return lineEndingBefore(code3);
      }
      effects.consume(code3);
      return tagOpenAttributeValueQuoted;
    }
    function tagOpenAttributeValueUnquoted(code3) {
      if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 96) {
        return nok(code3);
      }
      if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
        return tagOpenBetween(code3);
      }
      effects.consume(code3);
      return tagOpenAttributeValueUnquoted;
    }
    function tagOpenAttributeValueQuotedAfter(code3) {
      if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
        return tagOpenBetween(code3);
      }
      return nok(code3);
    }
    function end(code3) {
      if (code3 === 62) {
        effects.consume(code3);
        effects.exit("htmlTextData");
        effects.exit("htmlText");
        return ok3;
      }
      return nok(code3);
    }
    function lineEndingBefore(code3) {
      effects.exit("htmlTextData");
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return lineEndingAfter;
    }
    function lineEndingAfter(code3) {
      return markdownSpace(code3) ? factorySpace(effects, lineEndingAfterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3) : lineEndingAfterPrefix(code3);
    }
    function lineEndingAfterPrefix(code3) {
      effects.enter("htmlTextData");
      return returnState(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/label-end.js
  var labelEnd = {
    name: "labelEnd",
    tokenize: tokenizeLabelEnd,
    resolveTo: resolveToLabelEnd,
    resolveAll: resolveAllLabelEnd
  };
  var resourceConstruct = {
    tokenize: tokenizeResource
  };
  var referenceFullConstruct = {
    tokenize: tokenizeReferenceFull
  };
  var referenceCollapsedConstruct = {
    tokenize: tokenizeReferenceCollapsed
  };
  function resolveAllLabelEnd(events) {
    let index2 = -1;
    while (++index2 < events.length) {
      const token = events[index2][1];
      if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
        events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
        token.type = "data";
        index2++;
      }
    }
    return events;
  }
  function resolveToLabelEnd(events, context) {
    let index2 = events.length;
    let offset = 0;
    let token;
    let open;
    let close;
    let media;
    while (index2--) {
      token = events[index2][1];
      if (open) {
        if (token.type === "link" || token.type === "labelLink" && token._inactive) {
          break;
        }
        if (events[index2][0] === "enter" && token.type === "labelLink") {
          token._inactive = true;
        }
      } else if (close) {
        if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
          open = index2;
          if (token.type !== "labelLink") {
            offset = 2;
            break;
          }
        }
      } else if (token.type === "labelEnd") {
        close = index2;
      }
    }
    const group = {
      type: events[open][1].type === "labelLink" ? "link" : "image",
      start: Object.assign({}, events[open][1].start),
      end: Object.assign({}, events[events.length - 1][1].end)
    };
    const label = {
      type: "label",
      start: Object.assign({}, events[open][1].start),
      end: Object.assign({}, events[close][1].end)
    };
    const text6 = {
      type: "labelText",
      start: Object.assign({}, events[open + offset + 2][1].end),
      end: Object.assign({}, events[close - 2][1].start)
    };
    media = [["enter", group, context], ["enter", label, context]];
    media = push(media, events.slice(open + 1, open + offset + 3));
    media = push(media, [["enter", text6, context]]);
    media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
    media = push(media, [["exit", text6, context], events[close - 2], events[close - 1], ["exit", label, context]]);
    media = push(media, events.slice(close + 1));
    media = push(media, [["exit", group, context]]);
    splice(events, open, events.length, media);
    return events;
  }
  function tokenizeLabelEnd(effects, ok3, nok) {
    const self = this;
    let index2 = self.events.length;
    let labelStart;
    let defined;
    while (index2--) {
      if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
        labelStart = self.events[index2][1];
        break;
      }
    }
    return start;
    function start(code3) {
      if (!labelStart) {
        return nok(code3);
      }
      if (labelStart._inactive) {
        return labelEndNok(code3);
      }
      defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
        start: labelStart.end,
        end: self.now()
      })));
      effects.enter("labelEnd");
      effects.enter("labelMarker");
      effects.consume(code3);
      effects.exit("labelMarker");
      effects.exit("labelEnd");
      return after;
    }
    function after(code3) {
      if (code3 === 40) {
        return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code3);
      }
      if (code3 === 91) {
        return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code3);
      }
      return defined ? labelEndOk(code3) : labelEndNok(code3);
    }
    function referenceNotFull(code3) {
      return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code3);
    }
    function labelEndOk(code3) {
      return ok3(code3);
    }
    function labelEndNok(code3) {
      labelStart._balanced = true;
      return nok(code3);
    }
  }
  function tokenizeResource(effects, ok3, nok) {
    return resourceStart;
    function resourceStart(code3) {
      effects.enter("resource");
      effects.enter("resourceMarker");
      effects.consume(code3);
      effects.exit("resourceMarker");
      return resourceBefore;
    }
    function resourceBefore(code3) {
      return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceOpen)(code3) : resourceOpen(code3);
    }
    function resourceOpen(code3) {
      if (code3 === 41) {
        return resourceEnd(code3);
      }
      return factoryDestination(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code3);
    }
    function resourceDestinationAfter(code3) {
      return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceBetween)(code3) : resourceEnd(code3);
    }
    function resourceDestinationMissing(code3) {
      return nok(code3);
    }
    function resourceBetween(code3) {
      if (code3 === 34 || code3 === 39 || code3 === 40) {
        return factoryTitle(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code3);
      }
      return resourceEnd(code3);
    }
    function resourceTitleAfter(code3) {
      return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceEnd)(code3) : resourceEnd(code3);
    }
    function resourceEnd(code3) {
      if (code3 === 41) {
        effects.enter("resourceMarker");
        effects.consume(code3);
        effects.exit("resourceMarker");
        effects.exit("resource");
        return ok3;
      }
      return nok(code3);
    }
  }
  function tokenizeReferenceFull(effects, ok3, nok) {
    const self = this;
    return referenceFull;
    function referenceFull(code3) {
      return factoryLabel.call(self, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code3);
    }
    function referenceFullAfter(code3) {
      return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok3(code3) : nok(code3);
    }
    function referenceFullMissing(code3) {
      return nok(code3);
    }
  }
  function tokenizeReferenceCollapsed(effects, ok3, nok) {
    return referenceCollapsedStart;
    function referenceCollapsedStart(code3) {
      effects.enter("reference");
      effects.enter("referenceMarker");
      effects.consume(code3);
      effects.exit("referenceMarker");
      return referenceCollapsedOpen;
    }
    function referenceCollapsedOpen(code3) {
      if (code3 === 93) {
        effects.enter("referenceMarker");
        effects.consume(code3);
        effects.exit("referenceMarker");
        effects.exit("reference");
        return ok3;
      }
      return nok(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/label-start-image.js
  var labelStartImage = {
    name: "labelStartImage",
    tokenize: tokenizeLabelStartImage,
    resolveAll: labelEnd.resolveAll
  };
  function tokenizeLabelStartImage(effects, ok3, nok) {
    const self = this;
    return start;
    function start(code3) {
      effects.enter("labelImage");
      effects.enter("labelImageMarker");
      effects.consume(code3);
      effects.exit("labelImageMarker");
      return open;
    }
    function open(code3) {
      if (code3 === 91) {
        effects.enter("labelMarker");
        effects.consume(code3);
        effects.exit("labelMarker");
        effects.exit("labelImage");
        return after;
      }
      return nok(code3);
    }
    function after(code3) {
      return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok3(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/label-start-link.js
  var labelStartLink = {
    name: "labelStartLink",
    tokenize: tokenizeLabelStartLink,
    resolveAll: labelEnd.resolveAll
  };
  function tokenizeLabelStartLink(effects, ok3, nok) {
    const self = this;
    return start;
    function start(code3) {
      effects.enter("labelLink");
      effects.enter("labelMarker");
      effects.consume(code3);
      effects.exit("labelMarker");
      effects.exit("labelLink");
      return after;
    }
    function after(code3) {
      return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok3(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/line-ending.js
  var lineEnding = {
    name: "lineEnding",
    tokenize: tokenizeLineEnding
  };
  function tokenizeLineEnding(effects, ok3) {
    return start;
    function start(code3) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return factorySpace(effects, ok3, "linePrefix");
    }
  }

  // node_modules/micromark-core-commonmark/lib/thematic-break.js
  var thematicBreak = {
    name: "thematicBreak",
    tokenize: tokenizeThematicBreak
  };
  function tokenizeThematicBreak(effects, ok3, nok) {
    let size = 0;
    let marker;
    return start;
    function start(code3) {
      effects.enter("thematicBreak");
      return before(code3);
    }
    function before(code3) {
      marker = code3;
      return atBreak(code3);
    }
    function atBreak(code3) {
      if (code3 === marker) {
        effects.enter("thematicBreakSequence");
        return sequence(code3);
      }
      if (size >= 3 && (code3 === null || markdownLineEnding(code3))) {
        effects.exit("thematicBreak");
        return ok3(code3);
      }
      return nok(code3);
    }
    function sequence(code3) {
      if (code3 === marker) {
        effects.consume(code3);
        size++;
        return sequence;
      }
      effects.exit("thematicBreakSequence");
      return markdownSpace(code3) ? factorySpace(effects, atBreak, "whitespace")(code3) : atBreak(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/list.js
  var list = {
    name: "list",
    tokenize: tokenizeListStart,
    continuation: {
      tokenize: tokenizeListContinuation
    },
    exit: tokenizeListEnd
  };
  var listItemPrefixWhitespaceConstruct = {
    tokenize: tokenizeListItemPrefixWhitespace,
    partial: true
  };
  var indentConstruct = {
    tokenize: tokenizeIndent,
    partial: true
  };
  function tokenizeListStart(effects, ok3, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let size = 0;
    return start;
    function start(code3) {
      const kind = self.containerState.type || (code3 === 42 || code3 === 43 || code3 === 45 ? "listUnordered" : "listOrdered");
      if (kind === "listUnordered" ? !self.containerState.marker || code3 === self.containerState.marker : asciiDigit(code3)) {
        if (!self.containerState.type) {
          self.containerState.type = kind;
          effects.enter(kind, {
            _container: true
          });
        }
        if (kind === "listUnordered") {
          effects.enter("listItemPrefix");
          return code3 === 42 || code3 === 45 ? effects.check(thematicBreak, nok, atMarker)(code3) : atMarker(code3);
        }
        if (!self.interrupt || code3 === 49) {
          effects.enter("listItemPrefix");
          effects.enter("listItemValue");
          return inside(code3);
        }
      }
      return nok(code3);
    }
    function inside(code3) {
      if (asciiDigit(code3) && ++size < 10) {
        effects.consume(code3);
        return inside;
      }
      if ((!self.interrupt || size < 2) && (self.containerState.marker ? code3 === self.containerState.marker : code3 === 41 || code3 === 46)) {
        effects.exit("listItemValue");
        return atMarker(code3);
      }
      return nok(code3);
    }
    function atMarker(code3) {
      effects.enter("listItemMarker");
      effects.consume(code3);
      effects.exit("listItemMarker");
      self.containerState.marker = self.containerState.marker || code3;
      return effects.check(
        blankLine,
        // Can’t be empty when interrupting.
        self.interrupt ? nok : onBlank,
        effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix)
      );
    }
    function onBlank(code3) {
      self.containerState.initialBlankLine = true;
      initialSize++;
      return endOfPrefix(code3);
    }
    function otherPrefix(code3) {
      if (markdownSpace(code3)) {
        effects.enter("listItemPrefixWhitespace");
        effects.consume(code3);
        effects.exit("listItemPrefixWhitespace");
        return endOfPrefix;
      }
      return nok(code3);
    }
    function endOfPrefix(code3) {
      self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
      return ok3(code3);
    }
  }
  function tokenizeListContinuation(effects, ok3, nok) {
    const self = this;
    self.containerState._closeFlow = void 0;
    return effects.check(blankLine, onBlank, notBlank);
    function onBlank(code3) {
      self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
      return factorySpace(effects, ok3, "listItemIndent", self.containerState.size + 1)(code3);
    }
    function notBlank(code3) {
      if (self.containerState.furtherBlankLines || !markdownSpace(code3)) {
        self.containerState.furtherBlankLines = void 0;
        self.containerState.initialBlankLine = void 0;
        return notInCurrentItem(code3);
      }
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return effects.attempt(indentConstruct, ok3, notInCurrentItem)(code3);
    }
    function notInCurrentItem(code3) {
      self.containerState._closeFlow = true;
      self.interrupt = void 0;
      return factorySpace(effects, effects.attempt(list, ok3, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
    }
  }
  function tokenizeIndent(effects, ok3, nok) {
    const self = this;
    return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
    function afterPrefix(code3) {
      const tail = self.events[self.events.length - 1];
      return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok3(code3) : nok(code3);
    }
  }
  function tokenizeListEnd(effects) {
    effects.exit(this.containerState.type);
  }
  function tokenizeListItemPrefixWhitespace(effects, ok3, nok) {
    const self = this;
    return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
    function afterPrefix(code3) {
      const tail = self.events[self.events.length - 1];
      return !markdownSpace(code3) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok3(code3) : nok(code3);
    }
  }

  // node_modules/micromark-core-commonmark/lib/setext-underline.js
  var setextUnderline = {
    name: "setextUnderline",
    tokenize: tokenizeSetextUnderline,
    resolveTo: resolveToSetextUnderline
  };
  function resolveToSetextUnderline(events, context) {
    let index2 = events.length;
    let content3;
    let text6;
    let definition3;
    while (index2--) {
      if (events[index2][0] === "enter") {
        if (events[index2][1].type === "content") {
          content3 = index2;
          break;
        }
        if (events[index2][1].type === "paragraph") {
          text6 = index2;
        }
      } else {
        if (events[index2][1].type === "content") {
          events.splice(index2, 1);
        }
        if (!definition3 && events[index2][1].type === "definition") {
          definition3 = index2;
        }
      }
    }
    const heading2 = {
      type: "setextHeading",
      start: Object.assign({}, events[text6][1].start),
      end: Object.assign({}, events[events.length - 1][1].end)
    };
    events[text6][1].type = "setextHeadingText";
    if (definition3) {
      events.splice(text6, 0, ["enter", heading2, context]);
      events.splice(definition3 + 1, 0, ["exit", events[content3][1], context]);
      events[content3][1].end = Object.assign({}, events[definition3][1].end);
    } else {
      events[content3][1] = heading2;
    }
    events.push(["exit", heading2, context]);
    return events;
  }
  function tokenizeSetextUnderline(effects, ok3, nok) {
    const self = this;
    let marker;
    return start;
    function start(code3) {
      let index2 = self.events.length;
      let paragraph2;
      while (index2--) {
        if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
          paragraph2 = self.events[index2][1].type === "paragraph";
          break;
        }
      }
      if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph2)) {
        effects.enter("setextHeadingLine");
        marker = code3;
        return before(code3);
      }
      return nok(code3);
    }
    function before(code3) {
      effects.enter("setextHeadingLineSequence");
      return inside(code3);
    }
    function inside(code3) {
      if (code3 === marker) {
        effects.consume(code3);
        return inside;
      }
      effects.exit("setextHeadingLineSequence");
      return markdownSpace(code3) ? factorySpace(effects, after, "lineSuffix")(code3) : after(code3);
    }
    function after(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("setextHeadingLine");
        return ok3(code3);
      }
      return nok(code3);
    }
  }

  // node_modules/micromark/lib/initialize/flow.js
  var flow = {
    tokenize: initializeFlow
  };
  function initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(
      // Try to parse a blank line.
      blankLine,
      atBlankEnding,
      // Try to parse initial flow (essentially, only code).
      effects.attempt(
        this.parser.constructs.flowInitial,
        afterConstruct,
        factorySpace(
          effects,
          effects.attempt(
            this.parser.constructs.flow,
            afterConstruct,
            effects.attempt(content2, afterConstruct)
          ),
          "linePrefix"
        )
      )
    );
    return initial;
    function atBlankEnding(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      effects.enter("lineEndingBlank");
      effects.consume(code3);
      effects.exit("lineEndingBlank");
      self.currentConstruct = void 0;
      return initial;
    }
    function afterConstruct(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      self.currentConstruct = void 0;
      return initial;
    }
  }

  // node_modules/micromark/lib/initialize/text.js
  var resolver = {
    resolveAll: createResolver()
  };
  var string = initializeFactory("string");
  var text = initializeFactory("text");
  function initializeFactory(field) {
    return {
      tokenize: initializeText,
      resolveAll: createResolver(
        field === "text" ? resolveAllLineSuffixes : void 0
      )
    };
    function initializeText(effects) {
      const self = this;
      const constructs2 = this.parser.constructs[field];
      const text6 = effects.attempt(constructs2, start, notText);
      return start;
      function start(code3) {
        return atBreak(code3) ? text6(code3) : notText(code3);
      }
      function notText(code3) {
        if (code3 === null) {
          effects.consume(code3);
          return;
        }
        effects.enter("data");
        effects.consume(code3);
        return data;
      }
      function data(code3) {
        if (atBreak(code3)) {
          effects.exit("data");
          return text6(code3);
        }
        effects.consume(code3);
        return data;
      }
      function atBreak(code3) {
        if (code3 === null) {
          return true;
        }
        const list3 = constructs2[code3];
        let index2 = -1;
        if (list3) {
          while (++index2 < list3.length) {
            const item = list3[index2];
            if (!item.previous || item.previous.call(self, self.previous)) {
              return true;
            }
          }
        }
        return false;
      }
    }
  }
  function createResolver(extraResolver) {
    return resolveAllText;
    function resolveAllText(events, context) {
      let index2 = -1;
      let enter;
      while (++index2 <= events.length) {
        if (enter === void 0) {
          if (events[index2] && events[index2][1].type === "data") {
            enter = index2;
            index2++;
          }
        } else if (!events[index2] || events[index2][1].type !== "data") {
          if (index2 !== enter + 2) {
            events[enter][1].end = events[index2 - 1][1].end;
            events.splice(enter + 2, index2 - enter - 2);
            index2 = enter + 2;
          }
          enter = void 0;
        }
      }
      return extraResolver ? extraResolver(events, context) : events;
    }
  }
  function resolveAllLineSuffixes(events, context) {
    let eventIndex = 0;
    while (++eventIndex <= events.length) {
      if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
        const data = events[eventIndex - 1][1];
        const chunks = context.sliceStream(data);
        let index2 = chunks.length;
        let bufferIndex = -1;
        let size = 0;
        let tabs;
        while (index2--) {
          const chunk = chunks[index2];
          if (typeof chunk === "string") {
            bufferIndex = chunk.length;
            while (chunk.charCodeAt(bufferIndex - 1) === 32) {
              size++;
              bufferIndex--;
            }
            if (bufferIndex)
              break;
            bufferIndex = -1;
          } else if (chunk === -2) {
            tabs = true;
            size++;
          } else if (chunk === -1) {
          } else {
            index2++;
            break;
          }
        }
        if (size) {
          const token = {
            type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
            start: {
              line: data.end.line,
              column: data.end.column - size,
              offset: data.end.offset - size,
              _index: data.start._index + index2,
              _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
            },
            end: Object.assign({}, data.end)
          };
          data.end = Object.assign({}, token.start);
          if (data.start.offset === data.end.offset) {
            Object.assign(data, token);
          } else {
            events.splice(
              eventIndex,
              0,
              ["enter", token, context],
              ["exit", token, context]
            );
            eventIndex += 2;
          }
        }
        eventIndex++;
      }
    }
    return events;
  }

  // node_modules/micromark/lib/create-tokenizer.js
  function createTokenizer(parser, initialize, from) {
    let point3 = Object.assign(
      from ? Object.assign({}, from) : {
        line: 1,
        column: 1,
        offset: 0
      },
      {
        _index: 0,
        _bufferIndex: -1
      }
    );
    const columnStart = {};
    const resolveAllConstructs = [];
    let chunks = [];
    let stack = [];
    let consumed = true;
    const effects = {
      consume,
      enter,
      exit: exit3,
      attempt: constructFactory(onsuccessfulconstruct),
      check: constructFactory(onsuccessfulcheck),
      interrupt: constructFactory(onsuccessfulcheck, {
        interrupt: true
      })
    };
    const context = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser,
      sliceStream,
      sliceSerialize,
      now,
      defineSkip,
      write
    };
    let state = initialize.tokenize.call(context, effects);
    let expectedCode;
    if (initialize.resolveAll) {
      resolveAllConstructs.push(initialize);
    }
    return context;
    function write(slice) {
      chunks = push(chunks, slice);
      main();
      if (chunks[chunks.length - 1] !== null) {
        return [];
      }
      addResult(initialize, 0);
      context.events = resolveAll(resolveAllConstructs, context.events, context);
      return context.events;
    }
    function sliceSerialize(token, expandTabs) {
      return serializeChunks(sliceStream(token), expandTabs);
    }
    function sliceStream(token) {
      return sliceChunks(chunks, token);
    }
    function now() {
      const { line, column, offset, _index, _bufferIndex } = point3;
      return {
        line,
        column,
        offset,
        _index,
        _bufferIndex
      };
    }
    function defineSkip(value2) {
      columnStart[value2.line] = value2.column;
      accountForPotentialSkip();
    }
    function main() {
      let chunkIndex;
      while (point3._index < chunks.length) {
        const chunk = chunks[point3._index];
        if (typeof chunk === "string") {
          chunkIndex = point3._index;
          if (point3._bufferIndex < 0) {
            point3._bufferIndex = 0;
          }
          while (point3._index === chunkIndex && point3._bufferIndex < chunk.length) {
            go(chunk.charCodeAt(point3._bufferIndex));
          }
        } else {
          go(chunk);
        }
      }
    }
    function go(code3) {
      consumed = void 0;
      expectedCode = code3;
      state = state(code3);
    }
    function consume(code3) {
      if (markdownLineEnding(code3)) {
        point3.line++;
        point3.column = 1;
        point3.offset += code3 === -3 ? 2 : 1;
        accountForPotentialSkip();
      } else if (code3 !== -1) {
        point3.column++;
        point3.offset++;
      }
      if (point3._bufferIndex < 0) {
        point3._index++;
      } else {
        point3._bufferIndex++;
        if (point3._bufferIndex === chunks[point3._index].length) {
          point3._bufferIndex = -1;
          point3._index++;
        }
      }
      context.previous = code3;
      consumed = true;
    }
    function enter(type, fields) {
      const token = fields || {};
      token.type = type;
      token.start = now();
      context.events.push(["enter", token, context]);
      stack.push(token);
      return token;
    }
    function exit3(type) {
      const token = stack.pop();
      token.end = now();
      context.events.push(["exit", token, context]);
      return token;
    }
    function onsuccessfulconstruct(construct, info) {
      addResult(construct, info.from);
    }
    function onsuccessfulcheck(_, info) {
      info.restore();
    }
    function constructFactory(onreturn, fields) {
      return hook;
      function hook(constructs2, returnState, bogusState) {
        let listOfConstructs;
        let constructIndex;
        let currentConstruct;
        let info;
        return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? (
          // @ts-expect-error Looks like a construct.
          handleListOfConstructs([constructs2])
        ) : handleMapOfConstructs(constructs2);
        function handleMapOfConstructs(map4) {
          return start;
          function start(code3) {
            const def = code3 !== null && map4[code3];
            const all3 = code3 !== null && map4.null;
            const list3 = [
              // To do: add more extension tests.
              /* c8 ignore next 2 */
              ...Array.isArray(def) ? def : def ? [def] : [],
              ...Array.isArray(all3) ? all3 : all3 ? [all3] : []
            ];
            return handleListOfConstructs(list3)(code3);
          }
        }
        function handleListOfConstructs(list3) {
          listOfConstructs = list3;
          constructIndex = 0;
          if (list3.length === 0) {
            return bogusState;
          }
          return handleConstruct(list3[constructIndex]);
        }
        function handleConstruct(construct) {
          return start;
          function start(code3) {
            info = store();
            currentConstruct = construct;
            if (!construct.partial) {
              context.currentConstruct = construct;
            }
            if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
              return nok(code3);
            }
            return construct.tokenize.call(
              // If we do have fields, create an object w/ `context` as its
              // prototype.
              // This allows a “live binding”, which is needed for `interrupt`.
              fields ? Object.assign(Object.create(context), fields) : context,
              effects,
              ok3,
              nok
            )(code3);
          }
        }
        function ok3(code3) {
          consumed = true;
          onreturn(currentConstruct, info);
          return returnState;
        }
        function nok(code3) {
          consumed = true;
          info.restore();
          if (++constructIndex < listOfConstructs.length) {
            return handleConstruct(listOfConstructs[constructIndex]);
          }
          return bogusState;
        }
      }
    }
    function addResult(construct, from2) {
      if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
        resolveAllConstructs.push(construct);
      }
      if (construct.resolve) {
        splice(
          context.events,
          from2,
          context.events.length - from2,
          construct.resolve(context.events.slice(from2), context)
        );
      }
      if (construct.resolveTo) {
        context.events = construct.resolveTo(context.events, context);
      }
    }
    function store() {
      const startPoint = now();
      const startPrevious = context.previous;
      const startCurrentConstruct = context.currentConstruct;
      const startEventsIndex = context.events.length;
      const startStack = Array.from(stack);
      return {
        restore,
        from: startEventsIndex
      };
      function restore() {
        point3 = startPoint;
        context.previous = startPrevious;
        context.currentConstruct = startCurrentConstruct;
        context.events.length = startEventsIndex;
        stack = startStack;
        accountForPotentialSkip();
      }
    }
    function accountForPotentialSkip() {
      if (point3.line in columnStart && point3.column < 2) {
        point3.column = columnStart[point3.line];
        point3.offset += columnStart[point3.line] - 1;
      }
    }
  }
  function sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    let view;
    if (startIndex === endIndex) {
      view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
    } else {
      view = chunks.slice(startIndex, endIndex);
      if (startBufferIndex > -1) {
        const head = view[0];
        if (typeof head === "string") {
          view[0] = head.slice(startBufferIndex);
        } else {
          view.shift();
        }
      }
      if (endBufferIndex > 0) {
        view.push(chunks[endIndex].slice(0, endBufferIndex));
      }
    }
    return view;
  }
  function serializeChunks(chunks, expandTabs) {
    let index2 = -1;
    const result = [];
    let atTab;
    while (++index2 < chunks.length) {
      const chunk = chunks[index2];
      let value2;
      if (typeof chunk === "string") {
        value2 = chunk;
      } else
        switch (chunk) {
          case -5: {
            value2 = "\r";
            break;
          }
          case -4: {
            value2 = "\n";
            break;
          }
          case -3: {
            value2 = "\r\n";
            break;
          }
          case -2: {
            value2 = expandTabs ? " " : "	";
            break;
          }
          case -1: {
            if (!expandTabs && atTab)
              continue;
            value2 = " ";
            break;
          }
          default: {
            value2 = String.fromCharCode(chunk);
          }
        }
      atTab = chunk === -2;
      result.push(value2);
    }
    return result.join("");
  }

  // node_modules/micromark/lib/constructs.js
  var constructs_exports = {};
  __export(constructs_exports, {
    attentionMarkers: () => attentionMarkers,
    contentInitial: () => contentInitial,
    disable: () => disable,
    document: () => document3,
    flow: () => flow2,
    flowInitial: () => flowInitial,
    insideSpan: () => insideSpan,
    string: () => string2,
    text: () => text2
  });
  var document3 = {
    [42]: list,
    [43]: list,
    [45]: list,
    [48]: list,
    [49]: list,
    [50]: list,
    [51]: list,
    [52]: list,
    [53]: list,
    [54]: list,
    [55]: list,
    [56]: list,
    [57]: list,
    [62]: blockQuote
  };
  var contentInitial = {
    [91]: definition
  };
  var flowInitial = {
    [-2]: codeIndented,
    [-1]: codeIndented,
    [32]: codeIndented
  };
  var flow2 = {
    [35]: headingAtx,
    [42]: thematicBreak,
    [45]: [setextUnderline, thematicBreak],
    [60]: htmlFlow,
    [61]: setextUnderline,
    [95]: thematicBreak,
    [96]: codeFenced,
    [126]: codeFenced
  };
  var string2 = {
    [38]: characterReference,
    [92]: characterEscape
  };
  var text2 = {
    [-5]: lineEnding,
    [-4]: lineEnding,
    [-3]: lineEnding,
    [33]: labelStartImage,
    [38]: characterReference,
    [42]: attention,
    [60]: [autolink, htmlText],
    [91]: labelStartLink,
    [92]: [hardBreakEscape, characterEscape],
    [93]: labelEnd,
    [95]: attention,
    [96]: codeText
  };
  var insideSpan = {
    null: [attention, resolver]
  };
  var attentionMarkers = {
    null: [42, 95]
  };
  var disable = {
    null: []
  };

  // node_modules/micromark/lib/parse.js
  function parse(options) {
    const settings = options || {};
    const constructs2 = (
      /** @type {FullNormalizedExtension} */
      combineExtensions([constructs_exports, ...settings.extensions || []])
    );
    const parser = {
      defined: [],
      lazy: {},
      constructs: constructs2,
      content: create(content),
      document: create(document2),
      flow: create(flow),
      string: create(string),
      text: create(text)
    };
    return parser;
    function create(initial) {
      return creator;
      function creator(from) {
        return createTokenizer(parser, initial, from);
      }
    }
  }

  // node_modules/micromark/lib/postprocess.js
  function postprocess(events) {
    while (!subtokenize(events)) {
    }
    return events;
  }

  // node_modules/micromark/lib/preprocess.js
  var search = /[\0\t\n\r]/g;
  function preprocess() {
    let column = 1;
    let buffer = "";
    let start = true;
    let atCarriageReturn;
    return preprocessor;
    function preprocessor(value2, encoding, end) {
      const chunks = [];
      let match;
      let next;
      let startPosition;
      let endPosition;
      let code3;
      value2 = buffer + (typeof value2 === "string" ? value2.toString() : new TextDecoder(encoding || void 0).decode(value2));
      startPosition = 0;
      buffer = "";
      if (start) {
        if (value2.charCodeAt(0) === 65279) {
          startPosition++;
        }
        start = void 0;
      }
      while (startPosition < value2.length) {
        search.lastIndex = startPosition;
        match = search.exec(value2);
        endPosition = match && match.index !== void 0 ? match.index : value2.length;
        code3 = value2.charCodeAt(endPosition);
        if (!match) {
          buffer = value2.slice(startPosition);
          break;
        }
        if (code3 === 10 && startPosition === endPosition && atCarriageReturn) {
          chunks.push(-3);
          atCarriageReturn = void 0;
        } else {
          if (atCarriageReturn) {
            chunks.push(-5);
            atCarriageReturn = void 0;
          }
          if (startPosition < endPosition) {
            chunks.push(value2.slice(startPosition, endPosition));
            column += endPosition - startPosition;
          }
          switch (code3) {
            case 0: {
              chunks.push(65533);
              column++;
              break;
            }
            case 9: {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next)
                chunks.push(-1);
              break;
            }
            case 10: {
              chunks.push(-4);
              column = 1;
              break;
            }
            default: {
              atCarriageReturn = true;
              column = 1;
            }
          }
        }
        startPosition = endPosition + 1;
      }
      if (end) {
        if (atCarriageReturn)
          chunks.push(-5);
        if (buffer)
          chunks.push(buffer);
        chunks.push(null);
      }
      return chunks;
    }
  }

  // node_modules/micromark-util-decode-string/index.js
  var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function decodeString(value2) {
    return value2.replace(characterEscapeOrReference, decode);
  }
  function decode($0, $1, $2) {
    if ($1) {
      return $1;
    }
    const head = $2.charCodeAt(0);
    if (head === 35) {
      const head2 = $2.charCodeAt(1);
      const hex = head2 === 120 || head2 === 88;
      return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
    }
    return decodeNamedCharacterReference($2) || $0;
  }

  // node_modules/unist-util-stringify-position/lib/index.js
  function stringifyPosition(value2) {
    if (!value2 || typeof value2 !== "object") {
      return "";
    }
    if ("position" in value2 || "type" in value2) {
      return position(value2.position);
    }
    if ("start" in value2 || "end" in value2) {
      return position(value2);
    }
    if ("line" in value2 || "column" in value2) {
      return point(value2);
    }
    return "";
  }
  function point(point3) {
    return index(point3 && point3.line) + ":" + index(point3 && point3.column);
  }
  function position(pos) {
    return point(pos && pos.start) + "-" + point(pos && pos.end);
  }
  function index(value2) {
    return value2 && typeof value2 === "number" ? value2 : 1;
  }

  // node_modules/mdast-util-from-markdown/lib/index.js
  var own = {}.hasOwnProperty;
  function fromMarkdown(value2, encoding, options) {
    if (typeof encoding !== "string") {
      options = encoding;
      encoding = void 0;
    }
    return compiler(options)(postprocess(parse(options).document().write(preprocess()(value2, encoding, true))));
  }
  function compiler(options) {
    const config = {
      transforms: [],
      canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
      enter: {
        autolink: opener(link2),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading2),
        blockQuote: opener(blockQuote2),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText2, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition3),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis2),
        hardBreakEscape: opener(hardBreak2),
        hardBreakTrailing: opener(hardBreak2),
        htmlFlow: opener(html2, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html2, buffer),
        htmlTextData: onenterdata,
        image: opener(image2),
        label: buffer,
        link: opener(link2),
        listItem: opener(listItem2),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list3, onenterlistordered),
        listUnordered: opener(list3),
        paragraph: opener(paragraph2),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading2),
        strong: opener(strong2),
        thematicBreak: opener(thematicBreak3)
      },
      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        characterReference: onexitcharacterreference,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    };
    configure(config, (options || {}).mdastExtensions || []);
    const data = {};
    return compile;
    function compile(events) {
      let tree = {
        type: "root",
        children: []
      };
      const context = {
        stack: [tree],
        tokenStack: [],
        config,
        enter,
        exit: exit3,
        buffer,
        resume,
        data
      };
      const listStack = [];
      let index2 = -1;
      while (++index2 < events.length) {
        if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
          if (events[index2][0] === "enter") {
            listStack.push(index2);
          } else {
            const tail = listStack.pop();
            index2 = prepareList(events, tail, index2);
          }
        }
      }
      index2 = -1;
      while (++index2 < events.length) {
        const handler = config[events[index2][0]];
        if (own.call(handler, events[index2][1].type)) {
          handler[events[index2][1].type].call(Object.assign({
            sliceSerialize: events[index2][2].sliceSerialize
          }, context), events[index2][1]);
        }
      }
      if (context.tokenStack.length > 0) {
        const tail = context.tokenStack[context.tokenStack.length - 1];
        const handler = tail[1] || defaultOnError;
        handler.call(context, void 0, tail[0]);
      }
      tree.position = {
        start: point2(events.length > 0 ? events[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: point2(events.length > 0 ? events[events.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      };
      index2 = -1;
      while (++index2 < config.transforms.length) {
        tree = config.transforms[index2](tree) || tree;
      }
      return tree;
    }
    function prepareList(events, start, length) {
      let index2 = start - 1;
      let containerBalance = -1;
      let listSpread = false;
      let listItem3;
      let lineIndex;
      let firstBlankLineIndex;
      let atMarker;
      while (++index2 <= length) {
        const event = events[index2];
        switch (event[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            if (event[0] === "enter") {
              containerBalance++;
            } else {
              containerBalance--;
            }
            atMarker = void 0;
            break;
          }
          case "lineEndingBlank": {
            if (event[0] === "enter") {
              if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
                firstBlankLineIndex = index2;
              }
              atMarker = void 0;
            }
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace": {
            break;
          }
          default: {
            atMarker = void 0;
          }
        }
        if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
          if (listItem3) {
            let tailIndex = index2;
            lineIndex = void 0;
            while (tailIndex--) {
              const tailEvent = events[tailIndex];
              if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                if (tailEvent[0] === "exit")
                  continue;
                if (lineIndex) {
                  events[lineIndex][1].type = "lineEndingBlank";
                  listSpread = true;
                }
                tailEvent[1].type = "lineEnding";
                lineIndex = tailIndex;
              } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
              } else {
                break;
              }
            }
            if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
              listItem3._spread = true;
            }
            listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
            events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
            index2++;
            length++;
          }
          if (event[1].type === "listItemPrefix") {
            const item = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, event[1].start),
              // @ts-expect-error: we’ll add `end` in a second.
              end: void 0
            };
            listItem3 = item;
            events.splice(index2, 0, ["enter", item, event[2]]);
            index2++;
            length++;
            firstBlankLineIndex = void 0;
            atMarker = true;
          }
        }
      }
      events[start][1]._spread = listSpread;
      return length;
    }
    function opener(create, and) {
      return open;
      function open(token) {
        enter.call(this, create(token), token);
        if (and)
          and.call(this, token);
      }
    }
    function buffer() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function enter(node2, token, errorHandler) {
      const parent = this.stack[this.stack.length - 1];
      const siblings = parent.children;
      siblings.push(node2);
      this.stack.push(node2);
      this.tokenStack.push([token, errorHandler || void 0]);
      node2.position = {
        start: point2(token.start),
        // @ts-expect-error: `end` will be patched later.
        end: void 0
      };
    }
    function closer(and) {
      return close;
      function close(token) {
        if (and)
          and.call(this, token);
        exit3.call(this, token);
      }
    }
    function exit3(token, onExitError) {
      const node2 = this.stack.pop();
      const open = this.tokenStack.pop();
      if (!open) {
        throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open");
      } else if (open[0].type !== token.type) {
        if (onExitError) {
          onExitError.call(this, token, open[0]);
        } else {
          const handler = open[1] || defaultOnError;
          handler.call(this, token, open[0]);
        }
      }
      node2.position.end = point2(token.end);
    }
    function resume() {
      return toString(this.stack.pop());
    }
    function onenterlistordered() {
      this.data.expectingFirstListItemValue = true;
    }
    function onenterlistitemvalue(token) {
      if (this.data.expectingFirstListItemValue) {
        const ancestor = this.stack[this.stack.length - 2];
        ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
        this.data.expectingFirstListItemValue = void 0;
      }
    }
    function onexitcodefencedfenceinfo() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.lang = data2;
    }
    function onexitcodefencedfencemeta() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.meta = data2;
    }
    function onexitcodefencedfence() {
      if (this.data.flowCodeInside)
        return;
      this.buffer();
      this.data.flowCodeInside = true;
    }
    function onexitcodefenced() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
      this.data.flowCodeInside = void 0;
    }
    function onexitcodeindented() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2.replace(/(\r?\n|\r)$/g, "");
    }
    function onexitdefinitionlabelstring(token) {
      const label = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.label = label;
      node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    }
    function onexitdefinitiontitlestring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.title = data2;
    }
    function onexitdefinitiondestinationstring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.url = data2;
    }
    function onexitatxheadingsequence(token) {
      const node2 = this.stack[this.stack.length - 1];
      if (!node2.depth) {
        const depth = this.sliceSerialize(token).length;
        node2.depth = depth;
      }
    }
    function onexitsetextheadingtext() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function onexitsetextheadinglinesequence(token) {
      const node2 = this.stack[this.stack.length - 1];
      node2.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
    }
    function onexitsetextheading() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function onenterdata(token) {
      const node2 = this.stack[this.stack.length - 1];
      const siblings = node2.children;
      let tail = siblings[siblings.length - 1];
      if (!tail || tail.type !== "text") {
        tail = text6();
        tail.position = {
          start: point2(token.start),
          // @ts-expect-error: we’ll add `end` later.
          end: void 0
        };
        siblings.push(tail);
      }
      this.stack.push(tail);
    }
    function onexitdata(token) {
      const tail = this.stack.pop();
      tail.value += this.sliceSerialize(token);
      tail.position.end = point2(token.end);
    }
    function onexitlineending(token) {
      const context = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const tail = context.children[context.children.length - 1];
        tail.position.end = point2(token.end);
        this.data.atHardBreak = void 0;
        return;
      }
      if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
        onenterdata.call(this, token);
        onexitdata.call(this, token);
      }
    }
    function onexithardbreak() {
      this.data.atHardBreak = true;
    }
    function onexithtmlflow() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2;
    }
    function onexithtmltext() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2;
    }
    function onexitcodetext() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2;
    }
    function onexitlink() {
      const node2 = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const referenceType = this.data.referenceType || "shortcut";
        node2.type += "Reference";
        node2.referenceType = referenceType;
        delete node2.url;
        delete node2.title;
      } else {
        delete node2.identifier;
        delete node2.label;
      }
      this.data.referenceType = void 0;
    }
    function onexitimage() {
      const node2 = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const referenceType = this.data.referenceType || "shortcut";
        node2.type += "Reference";
        node2.referenceType = referenceType;
        delete node2.url;
        delete node2.title;
      } else {
        delete node2.identifier;
        delete node2.label;
      }
      this.data.referenceType = void 0;
    }
    function onexitlabeltext(token) {
      const string3 = this.sliceSerialize(token);
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.label = decodeString(string3);
      ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
    }
    function onexitlabel() {
      const fragment = this.stack[this.stack.length - 1];
      const value2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      this.data.inReference = true;
      if (node2.type === "link") {
        const children = fragment.children;
        node2.children = children;
      } else {
        node2.alt = value2;
      }
    }
    function onexitresourcedestinationstring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.url = data2;
    }
    function onexitresourcetitlestring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.title = data2;
    }
    function onexitresource() {
      this.data.inReference = void 0;
    }
    function onenterreference() {
      this.data.referenceType = "collapsed";
    }
    function onexitreferencestring(token) {
      const label = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.label = label;
      node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
      this.data.referenceType = "full";
    }
    function onexitcharacterreferencemarker(token) {
      this.data.characterReferenceType = token.type;
    }
    function onexitcharacterreferencevalue(token) {
      const data2 = this.sliceSerialize(token);
      const type = this.data.characterReferenceType;
      let value2;
      if (type) {
        value2 = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
        this.data.characterReferenceType = void 0;
      } else {
        const result = decodeNamedCharacterReference(data2);
        value2 = result;
      }
      const tail = this.stack[this.stack.length - 1];
      tail.value += value2;
    }
    function onexitcharacterreference(token) {
      const tail = this.stack.pop();
      tail.position.end = point2(token.end);
    }
    function onexitautolinkprotocol(token) {
      onexitdata.call(this, token);
      const node2 = this.stack[this.stack.length - 1];
      node2.url = this.sliceSerialize(token);
    }
    function onexitautolinkemail(token) {
      onexitdata.call(this, token);
      const node2 = this.stack[this.stack.length - 1];
      node2.url = "mailto:" + this.sliceSerialize(token);
    }
    function blockQuote2() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function codeFlow() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function codeText2() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function definition3() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function emphasis2() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function heading2() {
      return {
        type: "heading",
        // @ts-expect-error `depth` will be set later.
        depth: 0,
        children: []
      };
    }
    function hardBreak2() {
      return {
        type: "break"
      };
    }
    function html2() {
      return {
        type: "html",
        value: ""
      };
    }
    function image2() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function link2() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function list3(token) {
      return {
        type: "list",
        ordered: token.type === "listOrdered",
        start: null,
        spread: token._spread,
        children: []
      };
    }
    function listItem2(token) {
      return {
        type: "listItem",
        spread: token._spread,
        checked: null,
        children: []
      };
    }
    function paragraph2() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function strong2() {
      return {
        type: "strong",
        children: []
      };
    }
    function text6() {
      return {
        type: "text",
        value: ""
      };
    }
    function thematicBreak3() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function point2(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function configure(combined, extensions) {
    let index2 = -1;
    while (++index2 < extensions.length) {
      const value2 = extensions[index2];
      if (Array.isArray(value2)) {
        configure(combined, value2);
      } else {
        extension(combined, value2);
      }
    }
  }
  function extension(combined, extension2) {
    let key;
    for (key in extension2) {
      if (own.call(extension2, key)) {
        switch (key) {
          case "canContainEols": {
            const right = extension2[key];
            if (right) {
              combined[key].push(...right);
            }
            break;
          }
          case "transforms": {
            const right = extension2[key];
            if (right) {
              combined[key].push(...right);
            }
            break;
          }
          case "enter":
          case "exit": {
            const right = extension2[key];
            if (right) {
              Object.assign(combined[key], right);
            }
            break;
          }
        }
      }
    }
  }
  function defaultOnError(left, right) {
    if (left) {
      throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open");
    } else {
      throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open");
    }
  }

  // node_modules/remark-parse/lib/index.js
  function remarkParse(options) {
    const self = this;
    self.parser = parser;
    function parser(doc) {
      return fromMarkdown(doc, {
        ...self.data("settings"),
        ...options,
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: self.data("micromarkExtensions") || [],
        mdastExtensions: self.data("fromMarkdownExtensions") || []
      });
    }
  }

  // node_modules/unist-util-is/lib/index.js
  var convert = (
    // Note: overloads in JSDoc can’t yet use different `@template`s.
    /**
     * @type {(
     *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
     *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
     *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
     *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
     *   ((test?: Test) => Check)
     * )}
     */
    /**
     * @param {Test} [test]
     * @returns {Check}
     */
    function(test) {
      if (test === null || test === void 0) {
        return ok;
      }
      if (typeof test === "function") {
        return castFactory(test);
      }
      if (typeof test === "object") {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
      }
      if (typeof test === "string") {
        return typeFactory(test);
      }
      throw new Error("Expected function, string, or object as test");
    }
  );
  function anyFactory(tests) {
    const checks = [];
    let index2 = -1;
    while (++index2 < tests.length) {
      checks[index2] = convert(tests[index2]);
    }
    return castFactory(any);
    function any(...parameters) {
      let index3 = -1;
      while (++index3 < checks.length) {
        if (checks[index3].apply(this, parameters))
          return true;
      }
      return false;
    }
  }
  function propsFactory(check) {
    const checkAsRecord = (
      /** @type {Record<string, unknown>} */
      check
    );
    return castFactory(all3);
    function all3(node2) {
      const nodeAsRecord = (
        /** @type {Record<string, unknown>} */
        /** @type {unknown} */
        node2
      );
      let key;
      for (key in check) {
        if (nodeAsRecord[key] !== checkAsRecord[key])
          return false;
      }
      return true;
    }
  }
  function typeFactory(check) {
    return castFactory(type);
    function type(node2) {
      return node2 && node2.type === check;
    }
  }
  function castFactory(testFunction) {
    return check;
    function check(value2, index2, parent) {
      return Boolean(
        looksLikeANode(value2) && testFunction.call(
          this,
          value2,
          typeof index2 === "number" ? index2 : void 0,
          parent || void 0
        )
      );
    }
  }
  function ok() {
    return true;
  }
  function looksLikeANode(value2) {
    return value2 !== null && typeof value2 === "object" && "type" in value2;
  }

  // node_modules/unist-util-visit-parents/lib/color.js
  function color(d) {
    return d;
  }

  // node_modules/unist-util-visit-parents/lib/index.js
  var empty = [];
  var CONTINUE = true;
  var EXIT = false;
  var SKIP = "skip";
  function visitParents(tree, test, visitor, reverse) {
    let check;
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
    } else {
      check = test;
    }
    const is2 = convert(check);
    const step = reverse ? -1 : 1;
    factory(tree, void 0, [])();
    function factory(node2, index2, parents) {
      const value2 = (
        /** @type {Record<string, unknown>} */
        node2 && typeof node2 === "object" ? node2 : {}
      );
      if (typeof value2.type === "string") {
        const name2 = (
          // `hast`
          typeof value2.tagName === "string" ? value2.tagName : (
            // `xast`
            typeof value2.name === "string" ? value2.name : void 0
          )
        );
        Object.defineProperty(visit2, "name", {
          value: "node (" + color(node2.type + (name2 ? "<" + name2 + ">" : "")) + ")"
        });
      }
      return visit2;
      function visit2() {
        let result = empty;
        let subresult;
        let offset;
        let grandparents;
        if (!test || is2(node2, index2, parents[parents.length - 1] || void 0)) {
          result = toResult(visitor(node2, parents));
          if (result[0] === EXIT) {
            return result;
          }
        }
        if ("children" in node2 && node2.children) {
          const nodeAsParent = (
            /** @type {UnistParent} */
            node2
          );
          if (nodeAsParent.children && result[0] !== SKIP) {
            offset = (reverse ? nodeAsParent.children.length : -1) + step;
            grandparents = parents.concat(nodeAsParent);
            while (offset > -1 && offset < nodeAsParent.children.length) {
              const child = nodeAsParent.children[offset];
              subresult = factory(child, offset, grandparents)();
              if (subresult[0] === EXIT) {
                return subresult;
              }
              offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
        }
        return result;
      }
    }
  }
  function toResult(value2) {
    if (Array.isArray(value2)) {
      return value2;
    }
    if (typeof value2 === "number") {
      return [CONTINUE, value2];
    }
    return value2 === null || value2 === void 0 ? empty : [value2];
  }

  // node_modules/unist-util-visit/lib/index.js
  function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
    let reverse;
    let test;
    let visitor;
    if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
      test = void 0;
      visitor = testOrVisitor;
      reverse = visitorOrReverse;
    } else {
      test = testOrVisitor;
      visitor = visitorOrReverse;
      reverse = maybeReverse;
    }
    visitParents(tree, test, overload, reverse);
    function overload(node2, parents) {
      const parent = parents[parents.length - 1];
      const index2 = parent ? parent.children.indexOf(node2) : void 0;
      return visitor(node2, index2, parent);
    }
  }

  // node_modules/mdast-util-definitions/lib/index.js
  function definitions(tree) {
    const cache = /* @__PURE__ */ new Map();
    if (!tree || !tree.type) {
      throw new Error("mdast-util-definitions expected node");
    }
    visit(tree, "definition", function(definition4) {
      const id = clean(definition4.identifier);
      if (id && !cache.get(id)) {
        cache.set(id, definition4);
      }
    });
    return definition3;
    function definition3(identifier) {
      const id = clean(identifier);
      return cache.get(id);
    }
  }
  function clean(value2) {
    return String(value2 || "").toUpperCase();
  }

  // node_modules/remark-inline-links/lib/index.js
  function remarkInlineLinks() {
    return function(tree) {
      const definition3 = definitions(tree);
      visit(tree, function(node2, index2, parent) {
        if (node2.type === "definition" && parent !== void 0 && typeof index2 === "number") {
          parent.children.splice(index2, 1);
          return [SKIP, index2];
        }
        if (node2.type === "imageReference" || node2.type === "linkReference") {
          const def = definition3(node2.identifier);
          if (def && parent && typeof index2 === "number") {
            parent.children[index2] = node2.type === "imageReference" ? { type: "image", url: def.url, title: def.title, alt: node2.alt } : {
              type: "link",
              url: def.url,
              title: def.title,
              children: node2.children
            };
            return [SKIP, index2];
          }
        }
      });
    };
  }

  // node_modules/ccount/index.js
  function ccount(value2, character) {
    const source = String(value2);
    if (typeof character !== "string") {
      throw new TypeError("Expected character");
    }
    let count = 0;
    let index2 = source.indexOf(character);
    while (index2 !== -1) {
      count++;
      index2 = source.indexOf(character, index2 + character.length);
    }
    return count;
  }

  // node_modules/devlop/lib/default.js
  function ok2() {
  }

  // node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
  function escapeStringRegexp(string3) {
    if (typeof string3 !== "string") {
      throw new TypeError("Expected a string");
    }
    return string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }

  // node_modules/mdast-util-find-and-replace/lib/index.js
  function findAndReplace(tree, list3, options) {
    const settings = options || {};
    const ignored = convert(settings.ignore || []);
    const pairs = toPairs(list3);
    let pairIndex = -1;
    while (++pairIndex < pairs.length) {
      visitParents(tree, "text", visitor);
    }
    function visitor(node2, parents) {
      let index2 = -1;
      let grandparent;
      while (++index2 < parents.length) {
        const parent = parents[index2];
        const siblings = grandparent ? grandparent.children : void 0;
        if (ignored(
          parent,
          siblings ? siblings.indexOf(parent) : void 0,
          grandparent
        )) {
          return;
        }
        grandparent = parent;
      }
      if (grandparent) {
        return handler(node2, parents);
      }
    }
    function handler(node2, parents) {
      const parent = parents[parents.length - 1];
      const find = pairs[pairIndex][0];
      const replace2 = pairs[pairIndex][1];
      let start = 0;
      const siblings = parent.children;
      const index2 = siblings.indexOf(node2);
      let change = false;
      let nodes = [];
      find.lastIndex = 0;
      let match = find.exec(node2.value);
      while (match) {
        const position2 = match.index;
        const matchObject = {
          index: match.index,
          input: match.input,
          stack: [...parents, node2]
        };
        let value2 = replace2(...match, matchObject);
        if (typeof value2 === "string") {
          value2 = value2.length > 0 ? { type: "text", value: value2 } : void 0;
        }
        if (value2 === false) {
          find.lastIndex = position2 + 1;
        } else {
          if (start !== position2) {
            nodes.push({
              type: "text",
              value: node2.value.slice(start, position2)
            });
          }
          if (Array.isArray(value2)) {
            nodes.push(...value2);
          } else if (value2) {
            nodes.push(value2);
          }
          start = position2 + match[0].length;
          change = true;
        }
        if (!find.global) {
          break;
        }
        match = find.exec(node2.value);
      }
      if (change) {
        if (start < node2.value.length) {
          nodes.push({ type: "text", value: node2.value.slice(start) });
        }
        parent.children.splice(index2, 1, ...nodes);
      } else {
        nodes = [node2];
      }
      return index2 + nodes.length;
    }
  }
  function toPairs(tupleOrList) {
    const result = [];
    if (!Array.isArray(tupleOrList)) {
      throw new TypeError("Expected find and replace tuple or list of tuples");
    }
    const list3 = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList];
    let index2 = -1;
    while (++index2 < list3.length) {
      const tuple = list3[index2];
      result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
    }
    return result;
  }
  function toExpression(find) {
    return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
  }
  function toFunction(replace2) {
    return typeof replace2 === "function" ? replace2 : function() {
      return replace2;
    };
  }

  // node_modules/mdast-util-gfm-autolink-literal/lib/index.js
  var inConstruct = "phrasing";
  var notInConstruct = ["autolink", "link", "image", "label"];
  function gfmAutolinkLiteralFromMarkdown() {
    return {
      transforms: [transformGfmAutolinkLiterals],
      enter: {
        literalAutolink: enterLiteralAutolink,
        literalAutolinkEmail: enterLiteralAutolinkValue,
        literalAutolinkHttp: enterLiteralAutolinkValue,
        literalAutolinkWww: enterLiteralAutolinkValue
      },
      exit: {
        literalAutolink: exitLiteralAutolink,
        literalAutolinkEmail: exitLiteralAutolinkEmail,
        literalAutolinkHttp: exitLiteralAutolinkHttp,
        literalAutolinkWww: exitLiteralAutolinkWww
      }
    };
  }
  function gfmAutolinkLiteralToMarkdown() {
    return {
      unsafe: [
        {
          character: "@",
          before: "[+\\-.\\w]",
          after: "[\\-.\\w]",
          inConstruct,
          notInConstruct
        },
        {
          character: ".",
          before: "[Ww]",
          after: "[\\-.\\w]",
          inConstruct,
          notInConstruct
        },
        {
          character: ":",
          before: "[ps]",
          after: "\\/",
          inConstruct,
          notInConstruct
        }
      ]
    };
  }
  function enterLiteralAutolink(token) {
    this.enter({ type: "link", title: null, url: "", children: [] }, token);
  }
  function enterLiteralAutolinkValue(token) {
    this.config.enter.autolinkProtocol.call(this, token);
  }
  function exitLiteralAutolinkHttp(token) {
    this.config.exit.autolinkProtocol.call(this, token);
  }
  function exitLiteralAutolinkWww(token) {
    this.config.exit.data.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    ok2(node2.type === "link");
    node2.url = "http://" + this.sliceSerialize(token);
  }
  function exitLiteralAutolinkEmail(token) {
    this.config.exit.autolinkEmail.call(this, token);
  }
  function exitLiteralAutolink(token) {
    this.exit(token);
  }
  function transformGfmAutolinkLiterals(tree) {
    findAndReplace(
      tree,
      [
        [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
        [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, findEmail]
      ],
      { ignore: ["link", "linkReference"] }
    );
  }
  function findUrl(_, protocol, domain2, path2, match) {
    let prefix = "";
    if (!previous2(match)) {
      return false;
    }
    if (/^w/i.test(protocol)) {
      domain2 = protocol + domain2;
      protocol = "";
      prefix = "http://";
    }
    if (!isCorrectDomain(domain2)) {
      return false;
    }
    const parts = splitUrl(domain2 + path2);
    if (!parts[0])
      return false;
    const result = {
      type: "link",
      title: null,
      url: prefix + protocol + parts[0],
      children: [{ type: "text", value: protocol + parts[0] }]
    };
    if (parts[1]) {
      return [result, { type: "text", value: parts[1] }];
    }
    return result;
  }
  function findEmail(_, atext, label, match) {
    if (
      // Not an expected previous character.
      !previous2(match, true) || // Label ends in not allowed character.
      /[-\d_]$/.test(label)
    ) {
      return false;
    }
    return {
      type: "link",
      title: null,
      url: "mailto:" + atext + "@" + label,
      children: [{ type: "text", value: atext + "@" + label }]
    };
  }
  function isCorrectDomain(domain2) {
    const parts = domain2.split(".");
    if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
      return false;
    }
    return true;
  }
  function splitUrl(url) {
    const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
    if (!trailExec) {
      return [url, void 0];
    }
    url = url.slice(0, trailExec.index);
    let trail2 = trailExec[0];
    let closingParenIndex = trail2.indexOf(")");
    const openingParens = ccount(url, "(");
    let closingParens = ccount(url, ")");
    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail2.slice(0, closingParenIndex + 1);
      trail2 = trail2.slice(closingParenIndex + 1);
      closingParenIndex = trail2.indexOf(")");
      closingParens++;
    }
    return [url, trail2];
  }
  function previous2(match, email) {
    const code3 = match.input.charCodeAt(match.index - 1);
    return (match.index === 0 || unicodeWhitespace(code3) || unicodePunctuation(code3)) && // If it’s an email, the previous character should not be a slash.
    (!email || code3 !== 47);
  }

  // node_modules/mdast-util-gfm-footnote/lib/index.js
  footnoteReference.peek = footnoteReferencePeek;
  function gfmFootnoteFromMarkdown() {
    return {
      enter: {
        gfmFootnoteDefinition: enterFootnoteDefinition,
        gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
        gfmFootnoteCall: enterFootnoteCall,
        gfmFootnoteCallString: enterFootnoteCallString
      },
      exit: {
        gfmFootnoteDefinition: exitFootnoteDefinition,
        gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
        gfmFootnoteCall: exitFootnoteCall,
        gfmFootnoteCallString: exitFootnoteCallString
      }
    };
  }
  function gfmFootnoteToMarkdown() {
    return {
      // This is on by default already.
      unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
      handlers: { footnoteDefinition, footnoteReference }
    };
  }
  function enterFootnoteDefinition(token) {
    this.enter(
      { type: "footnoteDefinition", identifier: "", label: "", children: [] },
      token
    );
  }
  function enterFootnoteDefinitionLabelString() {
    this.buffer();
  }
  function exitFootnoteDefinitionLabelString(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    ok2(node2.type === "footnoteDefinition");
    node2.label = label;
    node2.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
  }
  function exitFootnoteDefinition(token) {
    this.exit(token);
  }
  function enterFootnoteCall(token) {
    this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
  }
  function enterFootnoteCallString() {
    this.buffer();
  }
  function exitFootnoteCallString(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    ok2(node2.type === "footnoteReference");
    node2.label = label;
    node2.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
  }
  function exitFootnoteCall(token) {
    this.exit(token);
  }
  function footnoteReference(node2, _, state, info) {
    const tracker = state.createTracker(info);
    let value2 = tracker.move("[^");
    const exit3 = state.enter("footnoteReference");
    const subexit = state.enter("reference");
    value2 += tracker.move(
      state.safe(state.associationId(node2), {
        ...tracker.current(),
        before: value2,
        after: "]"
      })
    );
    subexit();
    exit3();
    value2 += tracker.move("]");
    return value2;
  }
  function footnoteReferencePeek() {
    return "[";
  }
  function footnoteDefinition(node2, _, state, info) {
    const tracker = state.createTracker(info);
    let value2 = tracker.move("[^");
    const exit3 = state.enter("footnoteDefinition");
    const subexit = state.enter("label");
    value2 += tracker.move(
      state.safe(state.associationId(node2), {
        ...tracker.current(),
        before: value2,
        after: "]"
      })
    );
    subexit();
    value2 += tracker.move(
      "]:" + (node2.children && node2.children.length > 0 ? " " : "")
    );
    tracker.shift(4);
    value2 += tracker.move(
      state.indentLines(state.containerFlow(node2, tracker.current()), map)
    );
    exit3();
    return value2;
  }
  function map(line, index2, blank) {
    if (index2 === 0) {
      return line;
    }
    return (blank ? "" : "    ") + line;
  }

  // node_modules/mdast-util-gfm-strikethrough/lib/index.js
  var constructsWithoutStrikethrough = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
  ];
  handleDelete.peek = peekDelete;
  function gfmStrikethroughFromMarkdown() {
    return {
      canContainEols: ["delete"],
      enter: { strikethrough: enterStrikethrough },
      exit: { strikethrough: exitStrikethrough }
    };
  }
  function gfmStrikethroughToMarkdown() {
    return {
      unsafe: [
        {
          character: "~",
          inConstruct: "phrasing",
          notInConstruct: constructsWithoutStrikethrough
        }
      ],
      handlers: { delete: handleDelete }
    };
  }
  function enterStrikethrough(token) {
    this.enter({ type: "delete", children: [] }, token);
  }
  function exitStrikethrough(token) {
    this.exit(token);
  }
  function handleDelete(node2, _, state, info) {
    const tracker = state.createTracker(info);
    const exit3 = state.enter("strikethrough");
    let value2 = tracker.move("~~");
    value2 += state.containerPhrasing(node2, {
      ...tracker.current(),
      before: value2,
      after: "~"
    });
    value2 += tracker.move("~~");
    exit3();
    return value2;
  }
  function peekDelete() {
    return "~";
  }

  // node_modules/markdown-table/index.js
  function defaultStringLength(value2) {
    return value2.length;
  }
  function markdownTable(table, options) {
    const settings = options || {};
    const align = (settings.align || []).concat();
    const stringLength = settings.stringLength || defaultStringLength;
    const alignments = [];
    const cellMatrix = [];
    const sizeMatrix = [];
    const longestCellByColumn = [];
    let mostCellsPerRow = 0;
    let rowIndex = -1;
    while (++rowIndex < table.length) {
      const row2 = [];
      const sizes2 = [];
      let columnIndex2 = -1;
      if (table[rowIndex].length > mostCellsPerRow) {
        mostCellsPerRow = table[rowIndex].length;
      }
      while (++columnIndex2 < table[rowIndex].length) {
        const cell = serialize(table[rowIndex][columnIndex2]);
        if (settings.alignDelimiters !== false) {
          const size = stringLength(cell);
          sizes2[columnIndex2] = size;
          if (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) {
            longestCellByColumn[columnIndex2] = size;
          }
        }
        row2.push(cell);
      }
      cellMatrix[rowIndex] = row2;
      sizeMatrix[rowIndex] = sizes2;
    }
    let columnIndex = -1;
    if (typeof align === "object" && "length" in align) {
      while (++columnIndex < mostCellsPerRow) {
        alignments[columnIndex] = toAlignment(align[columnIndex]);
      }
    } else {
      const code3 = toAlignment(align);
      while (++columnIndex < mostCellsPerRow) {
        alignments[columnIndex] = code3;
      }
    }
    columnIndex = -1;
    const row = [];
    const sizes = [];
    while (++columnIndex < mostCellsPerRow) {
      const code3 = alignments[columnIndex];
      let before = "";
      let after = "";
      if (code3 === 99) {
        before = ":";
        after = ":";
      } else if (code3 === 108) {
        before = ":";
      } else if (code3 === 114) {
        after = ":";
      }
      let size = settings.alignDelimiters === false ? 1 : Math.max(
        1,
        longestCellByColumn[columnIndex] - before.length - after.length
      );
      const cell = before + "-".repeat(size) + after;
      if (settings.alignDelimiters !== false) {
        size = before.length + size + after.length;
        if (size > longestCellByColumn[columnIndex]) {
          longestCellByColumn[columnIndex] = size;
        }
        sizes[columnIndex] = size;
      }
      row[columnIndex] = cell;
    }
    cellMatrix.splice(1, 0, row);
    sizeMatrix.splice(1, 0, sizes);
    rowIndex = -1;
    const lines = [];
    while (++rowIndex < cellMatrix.length) {
      const row2 = cellMatrix[rowIndex];
      const sizes2 = sizeMatrix[rowIndex];
      columnIndex = -1;
      const line = [];
      while (++columnIndex < mostCellsPerRow) {
        const cell = row2[columnIndex] || "";
        let before = "";
        let after = "";
        if (settings.alignDelimiters !== false) {
          const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0);
          const code3 = alignments[columnIndex];
          if (code3 === 114) {
            before = " ".repeat(size);
          } else if (code3 === 99) {
            if (size % 2) {
              before = " ".repeat(size / 2 + 0.5);
              after = " ".repeat(size / 2 - 0.5);
            } else {
              before = " ".repeat(size / 2);
              after = before;
            }
          } else {
            after = " ".repeat(size);
          }
        }
        if (settings.delimiterStart !== false && !columnIndex) {
          line.push("|");
        }
        if (settings.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
        // empty: there will be a closing space.
        !(settings.alignDelimiters === false && cell === "") && (settings.delimiterStart !== false || columnIndex)) {
          line.push(" ");
        }
        if (settings.alignDelimiters !== false) {
          line.push(before);
        }
        line.push(cell);
        if (settings.alignDelimiters !== false) {
          line.push(after);
        }
        if (settings.padding !== false) {
          line.push(" ");
        }
        if (settings.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
          line.push("|");
        }
      }
      lines.push(
        settings.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join("")
      );
    }
    return lines.join("\n");
  }
  function serialize(value2) {
    return value2 === null || value2 === void 0 ? "" : String(value2);
  }
  function toAlignment(value2) {
    const code3 = typeof value2 === "string" ? value2.codePointAt(0) : 0;
    return code3 === 67 || code3 === 99 ? 99 : code3 === 76 || code3 === 108 ? 108 : code3 === 82 || code3 === 114 ? 114 : 0;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
  function blockquote(node2, _, state, info) {
    const exit3 = state.enter("blockquote");
    const tracker = state.createTracker(info);
    tracker.move("> ");
    tracker.shift(2);
    const value2 = state.indentLines(
      state.containerFlow(node2, tracker.current()),
      map2
    );
    exit3();
    return value2;
  }
  function map2(line, _, blank) {
    return ">" + (blank ? "" : " ") + line;
  }

  // node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
  function patternInScope(stack, pattern) {
    return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
  }
  function listInScope(stack, list3, none) {
    if (typeof list3 === "string") {
      list3 = [list3];
    }
    if (!list3 || list3.length === 0) {
      return none;
    }
    let index2 = -1;
    while (++index2 < list3.length) {
      if (stack.includes(list3[index2])) {
        return true;
      }
    }
    return false;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/break.js
  function hardBreak(_, _1, state, info) {
    let index2 = -1;
    while (++index2 < state.unsafe.length) {
      if (state.unsafe[index2].character === "\n" && patternInScope(state.stack, state.unsafe[index2])) {
        return /[ \t]/.test(info.before) ? "" : " ";
      }
    }
    return "\\\n";
  }

  // node_modules/longest-streak/index.js
  function longestStreak(value2, substring) {
    const source = String(value2);
    let index2 = source.indexOf(substring);
    let expected = index2;
    let count = 0;
    let max = 0;
    if (typeof substring !== "string") {
      throw new TypeError("Expected substring");
    }
    while (index2 !== -1) {
      if (index2 === expected) {
        if (++count > max) {
          max = count;
        }
      } else {
        count = 1;
      }
      expected = index2 + substring.length;
      index2 = source.indexOf(substring, expected);
    }
    return max;
  }

  // node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
  function formatCodeAsIndented(node2, state) {
    return Boolean(
      state.options.fences === false && node2.value && // If there’s no info…
      !node2.lang && // And there’s a non-whitespace character…
      /[^ \r\n]/.test(node2.value) && // And the value doesn’t start or end in a blank…
      !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node2.value)
    );
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-fence.js
  function checkFence(state) {
    const marker = state.options.fence || "`";
    if (marker !== "`" && marker !== "~") {
      throw new Error(
        "Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`"
      );
    }
    return marker;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/code.js
  function code(node2, _, state, info) {
    const marker = checkFence(state);
    const raw2 = node2.value || "";
    const suffix = marker === "`" ? "GraveAccent" : "Tilde";
    if (formatCodeAsIndented(node2, state)) {
      const exit4 = state.enter("codeIndented");
      const value3 = state.indentLines(raw2, map3);
      exit4();
      return value3;
    }
    const tracker = state.createTracker(info);
    const sequence = marker.repeat(Math.max(longestStreak(raw2, marker) + 1, 3));
    const exit3 = state.enter("codeFenced");
    let value2 = tracker.move(sequence);
    if (node2.lang) {
      const subexit = state.enter(`codeFencedLang${suffix}`);
      value2 += tracker.move(
        state.safe(node2.lang, {
          before: value2,
          after: " ",
          encode: ["`"],
          ...tracker.current()
        })
      );
      subexit();
    }
    if (node2.lang && node2.meta) {
      const subexit = state.enter(`codeFencedMeta${suffix}`);
      value2 += tracker.move(" ");
      value2 += tracker.move(
        state.safe(node2.meta, {
          before: value2,
          after: "\n",
          encode: ["`"],
          ...tracker.current()
        })
      );
      subexit();
    }
    value2 += tracker.move("\n");
    if (raw2) {
      value2 += tracker.move(raw2 + "\n");
    }
    value2 += tracker.move(sequence);
    exit3();
    return value2;
  }
  function map3(line, _, blank) {
    return (blank ? "" : "    ") + line;
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-quote.js
  function checkQuote(state) {
    const marker = state.options.quote || '"';
    if (marker !== '"' && marker !== "'") {
      throw new Error(
        "Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`"
      );
    }
    return marker;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/definition.js
  function definition2(node2, _, state, info) {
    const quote = checkQuote(state);
    const suffix = quote === '"' ? "Quote" : "Apostrophe";
    const exit3 = state.enter("definition");
    let subexit = state.enter("label");
    const tracker = state.createTracker(info);
    let value2 = tracker.move("[");
    value2 += tracker.move(
      state.safe(state.associationId(node2), {
        before: value2,
        after: "]",
        ...tracker.current()
      })
    );
    value2 += tracker.move("]: ");
    subexit();
    if (
      // If there’s no url, or…
      !node2.url || // If there are control characters or whitespace.
      /[\0- \u007F]/.test(node2.url)
    ) {
      subexit = state.enter("destinationLiteral");
      value2 += tracker.move("<");
      value2 += tracker.move(
        state.safe(node2.url, { before: value2, after: ">", ...tracker.current() })
      );
      value2 += tracker.move(">");
    } else {
      subexit = state.enter("destinationRaw");
      value2 += tracker.move(
        state.safe(node2.url, {
          before: value2,
          after: node2.title ? " " : "\n",
          ...tracker.current()
        })
      );
    }
    subexit();
    if (node2.title) {
      subexit = state.enter(`title${suffix}`);
      value2 += tracker.move(" " + quote);
      value2 += tracker.move(
        state.safe(node2.title, {
          before: value2,
          after: quote,
          ...tracker.current()
        })
      );
      value2 += tracker.move(quote);
      subexit();
    }
    exit3();
    return value2;
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
  function checkEmphasis(state) {
    const marker = state.options.emphasis || "*";
    if (marker !== "*" && marker !== "_") {
      throw new Error(
        "Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`"
      );
    }
    return marker;
  }

  // node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
  function encodeCharacterReference(code3) {
    return "&#x" + code3.toString(16).toUpperCase() + ";";
  }

  // node_modules/mdast-util-to-markdown/lib/util/encode-info.js
  function encodeInfo(outside, inside, marker) {
    const outsideKind = classifyCharacter(outside);
    const insideKind = classifyCharacter(inside);
    if (outsideKind === void 0) {
      return insideKind === void 0 ? (
        // Letter inside:
        // we have to encode *both* letters for `_` as it is looser.
        // it already forms for `*` (and GFMs `~`).
        marker === "_" ? { inside: true, outside: true } : { inside: false, outside: false }
      ) : insideKind === 1 ? (
        // Whitespace inside: encode both (letter, whitespace).
        { inside: true, outside: true }
      ) : (
        // Punctuation inside: encode outer (letter)
        { inside: false, outside: true }
      );
    }
    if (outsideKind === 1) {
      return insideKind === void 0 ? (
        // Letter inside: already forms.
        { inside: false, outside: false }
      ) : insideKind === 1 ? (
        // Whitespace inside: encode both (whitespace).
        { inside: true, outside: true }
      ) : (
        // Punctuation inside: already forms.
        { inside: false, outside: false }
      );
    }
    return insideKind === void 0 ? (
      // Letter inside: already forms.
      { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode inner (whitespace).
      { inside: true, outside: false }
    ) : (
      // Punctuation inside: already forms.
      { inside: false, outside: false }
    );
  }

  // node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
  emphasis.peek = emphasisPeek;
  function emphasis(node2, _, state, info) {
    const marker = checkEmphasis(state);
    const exit3 = state.enter("emphasis");
    const tracker = state.createTracker(info);
    const before = tracker.move(marker);
    let between = tracker.move(
      state.containerPhrasing(node2, {
        after: marker,
        before,
        ...tracker.current()
      })
    );
    const betweenHead = between.charCodeAt(0);
    const open = encodeInfo(
      info.before.charCodeAt(info.before.length - 1),
      betweenHead,
      marker
    );
    if (open.inside) {
      between = encodeCharacterReference(betweenHead) + between.slice(1);
    }
    const betweenTail = between.charCodeAt(between.length - 1);
    const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
    if (close.inside) {
      between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
    }
    const after = tracker.move(marker);
    exit3();
    state.attentionEncodeSurroundingInfo = {
      after: close.outside,
      before: open.outside
    };
    return before + between + after;
  }
  function emphasisPeek(_, _1, state) {
    return state.options.emphasis || "*";
  }

  // node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
  function formatHeadingAsSetext(node2, state) {
    let literalWithBreak = false;
    visit(node2, function(node3) {
      if ("value" in node3 && /\r?\n|\r/.test(node3.value) || node3.type === "break") {
        literalWithBreak = true;
        return EXIT;
      }
    });
    return Boolean(
      (!node2.depth || node2.depth < 3) && toString(node2) && (state.options.setext || literalWithBreak)
    );
  }

  // node_modules/mdast-util-to-markdown/lib/handle/heading.js
  function heading(node2, _, state, info) {
    const rank = Math.max(Math.min(6, node2.depth || 1), 1);
    const tracker = state.createTracker(info);
    if (formatHeadingAsSetext(node2, state)) {
      const exit4 = state.enter("headingSetext");
      const subexit2 = state.enter("phrasing");
      const value3 = state.containerPhrasing(node2, {
        ...tracker.current(),
        before: "\n",
        after: "\n"
      });
      subexit2();
      exit4();
      return value3 + "\n" + (rank === 1 ? "=" : "-").repeat(
        // The whole size…
        value3.length - // Minus the position of the character after the last EOL (or
        // 0 if there is none)…
        (Math.max(value3.lastIndexOf("\r"), value3.lastIndexOf("\n")) + 1)
      );
    }
    const sequence = "#".repeat(rank);
    const exit3 = state.enter("headingAtx");
    const subexit = state.enter("phrasing");
    tracker.move(sequence + " ");
    let value2 = state.containerPhrasing(node2, {
      before: "# ",
      after: "\n",
      ...tracker.current()
    });
    if (/^[\t ]/.test(value2)) {
      value2 = encodeCharacterReference(value2.charCodeAt(0)) + value2.slice(1);
    }
    value2 = value2 ? sequence + " " + value2 : sequence;
    if (state.options.closeAtx) {
      value2 += " " + sequence;
    }
    subexit();
    exit3();
    return value2;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/html.js
  html.peek = htmlPeek;
  function html(node2) {
    return node2.value || "";
  }
  function htmlPeek() {
    return "<";
  }

  // node_modules/mdast-util-to-markdown/lib/handle/image.js
  image.peek = imagePeek;
  function image(node2, _, state, info) {
    const quote = checkQuote(state);
    const suffix = quote === '"' ? "Quote" : "Apostrophe";
    const exit3 = state.enter("image");
    let subexit = state.enter("label");
    const tracker = state.createTracker(info);
    let value2 = tracker.move("![");
    value2 += tracker.move(
      state.safe(node2.alt, { before: value2, after: "]", ...tracker.current() })
    );
    value2 += tracker.move("](");
    subexit();
    if (
      // If there’s no url but there is a title…
      !node2.url && node2.title || // If there are control characters or whitespace.
      /[\0- \u007F]/.test(node2.url)
    ) {
      subexit = state.enter("destinationLiteral");
      value2 += tracker.move("<");
      value2 += tracker.move(
        state.safe(node2.url, { before: value2, after: ">", ...tracker.current() })
      );
      value2 += tracker.move(">");
    } else {
      subexit = state.enter("destinationRaw");
      value2 += tracker.move(
        state.safe(node2.url, {
          before: value2,
          after: node2.title ? " " : ")",
          ...tracker.current()
        })
      );
    }
    subexit();
    if (node2.title) {
      subexit = state.enter(`title${suffix}`);
      value2 += tracker.move(" " + quote);
      value2 += tracker.move(
        state.safe(node2.title, {
          before: value2,
          after: quote,
          ...tracker.current()
        })
      );
      value2 += tracker.move(quote);
      subexit();
    }
    value2 += tracker.move(")");
    exit3();
    return value2;
  }
  function imagePeek() {
    return "!";
  }

  // node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
  imageReference.peek = imageReferencePeek;
  function imageReference(node2, _, state, info) {
    const type = node2.referenceType;
    const exit3 = state.enter("imageReference");
    let subexit = state.enter("label");
    const tracker = state.createTracker(info);
    let value2 = tracker.move("![");
    const alt = state.safe(node2.alt, {
      before: value2,
      after: "]",
      ...tracker.current()
    });
    value2 += tracker.move(alt + "][");
    subexit();
    const stack = state.stack;
    state.stack = [];
    subexit = state.enter("reference");
    const reference = state.safe(state.associationId(node2), {
      before: value2,
      after: "]",
      ...tracker.current()
    });
    subexit();
    state.stack = stack;
    exit3();
    if (type === "full" || !alt || alt !== reference) {
      value2 += tracker.move(reference + "]");
    } else if (type === "shortcut") {
      value2 = value2.slice(0, -1);
    } else {
      value2 += tracker.move("]");
    }
    return value2;
  }
  function imageReferencePeek() {
    return "!";
  }

  // node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
  inlineCode.peek = inlineCodePeek;
  function inlineCode(node2, _, state) {
    let value2 = node2.value || "";
    let sequence = "`";
    let index2 = -1;
    while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value2)) {
      sequence += "`";
    }
    if (/[^ \r\n]/.test(value2) && (/^[ \r\n]/.test(value2) && /[ \r\n]$/.test(value2) || /^`|`$/.test(value2))) {
      value2 = " " + value2 + " ";
    }
    while (++index2 < state.unsafe.length) {
      const pattern = state.unsafe[index2];
      const expression = state.compilePattern(pattern);
      let match;
      if (!pattern.atBreak)
        continue;
      while (match = expression.exec(value2)) {
        let position2 = match.index;
        if (value2.charCodeAt(position2) === 10 && value2.charCodeAt(position2 - 1) === 13) {
          position2--;
        }
        value2 = value2.slice(0, position2) + " " + value2.slice(match.index + 1);
      }
    }
    return sequence + value2 + sequence;
  }
  function inlineCodePeek() {
    return "`";
  }

  // node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
  function formatLinkAsAutolink(node2, state) {
    const raw2 = toString(node2);
    return Boolean(
      !state.options.resourceLink && // If there’s a url…
      node2.url && // And there’s a no title…
      !node2.title && // And the content of `node` is a single text node…
      node2.children && node2.children.length === 1 && node2.children[0].type === "text" && // And if the url is the same as the content…
      (raw2 === node2.url || "mailto:" + raw2 === node2.url) && // And that starts w/ a protocol…
      /^[a-z][a-z+.-]+:/i.test(node2.url) && // And that doesn’t contain ASCII control codes (character escapes and
      // references don’t work), space, or angle brackets…
      !/[\0- <>\u007F]/.test(node2.url)
    );
  }

  // node_modules/mdast-util-to-markdown/lib/handle/link.js
  link.peek = linkPeek;
  function link(node2, _, state, info) {
    const quote = checkQuote(state);
    const suffix = quote === '"' ? "Quote" : "Apostrophe";
    const tracker = state.createTracker(info);
    let exit3;
    let subexit;
    if (formatLinkAsAutolink(node2, state)) {
      const stack = state.stack;
      state.stack = [];
      exit3 = state.enter("autolink");
      let value3 = tracker.move("<");
      value3 += tracker.move(
        state.containerPhrasing(node2, {
          before: value3,
          after: ">",
          ...tracker.current()
        })
      );
      value3 += tracker.move(">");
      exit3();
      state.stack = stack;
      return value3;
    }
    exit3 = state.enter("link");
    subexit = state.enter("label");
    let value2 = tracker.move("[");
    value2 += tracker.move(
      state.containerPhrasing(node2, {
        before: value2,
        after: "](",
        ...tracker.current()
      })
    );
    value2 += tracker.move("](");
    subexit();
    if (
      // If there’s no url but there is a title…
      !node2.url && node2.title || // If there are control characters or whitespace.
      /[\0- \u007F]/.test(node2.url)
    ) {
      subexit = state.enter("destinationLiteral");
      value2 += tracker.move("<");
      value2 += tracker.move(
        state.safe(node2.url, { before: value2, after: ">", ...tracker.current() })
      );
      value2 += tracker.move(">");
    } else {
      subexit = state.enter("destinationRaw");
      value2 += tracker.move(
        state.safe(node2.url, {
          before: value2,
          after: node2.title ? " " : ")",
          ...tracker.current()
        })
      );
    }
    subexit();
    if (node2.title) {
      subexit = state.enter(`title${suffix}`);
      value2 += tracker.move(" " + quote);
      value2 += tracker.move(
        state.safe(node2.title, {
          before: value2,
          after: quote,
          ...tracker.current()
        })
      );
      value2 += tracker.move(quote);
      subexit();
    }
    value2 += tracker.move(")");
    exit3();
    return value2;
  }
  function linkPeek(node2, _, state) {
    return formatLinkAsAutolink(node2, state) ? "<" : "[";
  }

  // node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
  linkReference.peek = linkReferencePeek;
  function linkReference(node2, _, state, info) {
    const type = node2.referenceType;
    const exit3 = state.enter("linkReference");
    let subexit = state.enter("label");
    const tracker = state.createTracker(info);
    let value2 = tracker.move("[");
    const text6 = state.containerPhrasing(node2, {
      before: value2,
      after: "]",
      ...tracker.current()
    });
    value2 += tracker.move(text6 + "][");
    subexit();
    const stack = state.stack;
    state.stack = [];
    subexit = state.enter("reference");
    const reference = state.safe(state.associationId(node2), {
      before: value2,
      after: "]",
      ...tracker.current()
    });
    subexit();
    state.stack = stack;
    exit3();
    if (type === "full" || !text6 || text6 !== reference) {
      value2 += tracker.move(reference + "]");
    } else if (type === "shortcut") {
      value2 = value2.slice(0, -1);
    } else {
      value2 += tracker.move("]");
    }
    return value2;
  }
  function linkReferencePeek() {
    return "[";
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
  function checkBullet(state) {
    const marker = state.options.bullet || "*";
    if (marker !== "*" && marker !== "+" && marker !== "-") {
      throw new Error(
        "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
      );
    }
    return marker;
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
  function checkBulletOther(state) {
    const bullet = checkBullet(state);
    const bulletOther = state.options.bulletOther;
    if (!bulletOther) {
      return bullet === "*" ? "-" : "*";
    }
    if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
      throw new Error(
        "Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
      );
    }
    if (bulletOther === bullet) {
      throw new Error(
        "Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different"
      );
    }
    return bulletOther;
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
  function checkBulletOrdered(state) {
    const marker = state.options.bulletOrdered || ".";
    if (marker !== "." && marker !== ")") {
      throw new Error(
        "Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`"
      );
    }
    return marker;
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-rule.js
  function checkRule(state) {
    const marker = state.options.rule || "*";
    if (marker !== "*" && marker !== "-" && marker !== "_") {
      throw new Error(
        "Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`"
      );
    }
    return marker;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/list.js
  function list2(node2, parent, state, info) {
    const exit3 = state.enter("list");
    const bulletCurrent = state.bulletCurrent;
    let bullet = node2.ordered ? checkBulletOrdered(state) : checkBullet(state);
    const bulletOther = node2.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state);
    let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
    if (!node2.ordered) {
      const firstListItem = node2.children ? node2.children[0] : void 0;
      if (
        // Bullet could be used as a thematic break marker:
        (bullet === "*" || bullet === "-") && // Empty first list item:
        firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
        state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && // That are each the first child.
        state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0
      ) {
        useDifferentMarker = true;
      }
      if (checkRule(state) === bullet && firstListItem) {
        let index2 = -1;
        while (++index2 < node2.children.length) {
          const item = node2.children[index2];
          if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
            useDifferentMarker = true;
            break;
          }
        }
      }
    }
    if (useDifferentMarker) {
      bullet = bulletOther;
    }
    state.bulletCurrent = bullet;
    const value2 = state.containerFlow(node2, info);
    state.bulletLastUsed = bullet;
    state.bulletCurrent = bulletCurrent;
    exit3();
    return value2;
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
  function checkListItemIndent(state) {
    const style = state.options.listItemIndent || "one";
    if (style !== "tab" && style !== "one" && style !== "mixed") {
      throw new Error(
        "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
      );
    }
    return style;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/list-item.js
  function listItem(node2, parent, state, info) {
    const listItemIndent = checkListItemIndent(state);
    let bullet = state.bulletCurrent || checkBullet(state);
    if (parent && parent.type === "list" && parent.ordered) {
      bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node2)) + bullet;
    }
    let size = bullet.length + 1;
    if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node2.spread)) {
      size = Math.ceil(size / 4) * 4;
    }
    const tracker = state.createTracker(info);
    tracker.move(bullet + " ".repeat(size - bullet.length));
    tracker.shift(size);
    const exit3 = state.enter("listItem");
    const value2 = state.indentLines(
      state.containerFlow(node2, tracker.current()),
      map4
    );
    exit3();
    return value2;
    function map4(line, index2, blank) {
      if (index2) {
        return (blank ? "" : " ".repeat(size)) + line;
      }
      return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
    }
  }

  // node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
  function paragraph(node2, _, state, info) {
    const exit3 = state.enter("paragraph");
    const subexit = state.enter("phrasing");
    const value2 = state.containerPhrasing(node2, info);
    subexit();
    exit3();
    return value2;
  }

  // node_modules/mdast-util-phrasing/lib/index.js
  var phrasing = (
    /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
    convert([
      "break",
      "delete",
      "emphasis",
      // To do: next major: removed since footnotes were added to GFM.
      "footnote",
      "footnoteReference",
      "image",
      "imageReference",
      "inlineCode",
      // Enabled by `mdast-util-math`:
      "inlineMath",
      "link",
      "linkReference",
      // Enabled by `mdast-util-mdx`:
      "mdxJsxTextElement",
      // Enabled by `mdast-util-mdx`:
      "mdxTextExpression",
      "strong",
      "text",
      // Enabled by `mdast-util-directive`:
      "textDirective"
    ])
  );

  // node_modules/mdast-util-to-markdown/lib/handle/root.js
  function root(node2, _, state, info) {
    const hasPhrasing = node2.children.some(function(d) {
      return phrasing(d);
    });
    const container = hasPhrasing ? state.containerPhrasing : state.containerFlow;
    return container.call(state, node2, info);
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-strong.js
  function checkStrong(state) {
    const marker = state.options.strong || "*";
    if (marker !== "*" && marker !== "_") {
      throw new Error(
        "Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`"
      );
    }
    return marker;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/strong.js
  strong.peek = strongPeek;
  function strong(node2, _, state, info) {
    const marker = checkStrong(state);
    const exit3 = state.enter("strong");
    const tracker = state.createTracker(info);
    const before = tracker.move(marker + marker);
    let between = tracker.move(
      state.containerPhrasing(node2, {
        after: marker,
        before,
        ...tracker.current()
      })
    );
    const betweenHead = between.charCodeAt(0);
    const open = encodeInfo(
      info.before.charCodeAt(info.before.length - 1),
      betweenHead,
      marker
    );
    if (open.inside) {
      between = encodeCharacterReference(betweenHead) + between.slice(1);
    }
    const betweenTail = between.charCodeAt(between.length - 1);
    const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
    if (close.inside) {
      between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
    }
    const after = tracker.move(marker + marker);
    exit3();
    state.attentionEncodeSurroundingInfo = {
      after: close.outside,
      before: open.outside
    };
    return before + between + after;
  }
  function strongPeek(_, _1, state) {
    return state.options.strong || "*";
  }

  // node_modules/mdast-util-to-markdown/lib/handle/text.js
  function text3(node2, _, state, info) {
    return state.safe(node2.value, info);
  }

  // node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
  function checkRuleRepetition(state) {
    const repetition = state.options.ruleRepetition || 3;
    if (repetition < 3) {
      throw new Error(
        "Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more"
      );
    }
    return repetition;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
  function thematicBreak2(_, _1, state) {
    const value2 = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
    return state.options.ruleSpaces ? value2.slice(0, -1) : value2;
  }

  // node_modules/mdast-util-to-markdown/lib/handle/index.js
  var handle = {
    blockquote,
    break: hardBreak,
    code,
    definition: definition2,
    emphasis,
    hardBreak,
    heading,
    html,
    image,
    imageReference,
    inlineCode,
    link,
    linkReference,
    list: list2,
    listItem,
    paragraph,
    root,
    strong,
    text: text3,
    thematicBreak: thematicBreak2
  };

  // node_modules/mdast-util-gfm-table/lib/index.js
  function gfmTableFromMarkdown() {
    return {
      enter: {
        table: enterTable,
        tableData: enterCell,
        tableHeader: enterCell,
        tableRow: enterRow
      },
      exit: {
        codeText: exitCodeText,
        table: exitTable,
        tableData: exit2,
        tableHeader: exit2,
        tableRow: exit2
      }
    };
  }
  function enterTable(token) {
    const align = token._align;
    ok2(align, "expected `_align` on table");
    this.enter(
      {
        type: "table",
        align: align.map(function(d) {
          return d === "none" ? null : d;
        }),
        children: []
      },
      token
    );
    this.data.inTable = true;
  }
  function exitTable(token) {
    this.exit(token);
    this.data.inTable = void 0;
  }
  function enterRow(token) {
    this.enter({ type: "tableRow", children: [] }, token);
  }
  function exit2(token) {
    this.exit(token);
  }
  function enterCell(token) {
    this.enter({ type: "tableCell", children: [] }, token);
  }
  function exitCodeText(token) {
    let value2 = this.resume();
    if (this.data.inTable) {
      value2 = value2.replace(/\\([\\|])/g, replace);
    }
    const node2 = this.stack[this.stack.length - 1];
    ok2(node2.type === "inlineCode");
    node2.value = value2;
    this.exit(token);
  }
  function replace($0, $1) {
    return $1 === "|" ? $1 : $0;
  }
  function gfmTableToMarkdown(options) {
    const settings = options || {};
    const padding = settings.tableCellPadding;
    const alignDelimiters = settings.tablePipeAlign;
    const stringLength = settings.stringLength;
    const around = padding ? " " : "|";
    return {
      unsafe: [
        { character: "\r", inConstruct: "tableCell" },
        { character: "\n", inConstruct: "tableCell" },
        // A pipe, when followed by a tab or space (padding), or a dash or colon
        // (unpadded delimiter row), could result in a table.
        { atBreak: true, character: "|", after: "[	 :-]" },
        // A pipe in a cell must be encoded.
        { character: "|", inConstruct: "tableCell" },
        // A colon must be followed by a dash, in which case it could start a
        // delimiter row.
        { atBreak: true, character: ":", after: "-" },
        // A delimiter row can also start with a dash, when followed by more
        // dashes, a colon, or a pipe.
        // This is a stricter version than the built in check for lists, thematic
        // breaks, and setex heading underlines though:
        // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
        { atBreak: true, character: "-", after: "[:|-]" }
      ],
      handlers: {
        inlineCode: inlineCodeWithTable,
        table: handleTable,
        tableCell: handleTableCell,
        tableRow: handleTableRow
      }
    };
    function handleTable(node2, _, state, info) {
      return serializeData(handleTableAsData(node2, state, info), node2.align);
    }
    function handleTableRow(node2, _, state, info) {
      const row = handleTableRowAsData(node2, state, info);
      const value2 = serializeData([row]);
      return value2.slice(0, value2.indexOf("\n"));
    }
    function handleTableCell(node2, _, state, info) {
      const exit3 = state.enter("tableCell");
      const subexit = state.enter("phrasing");
      const value2 = state.containerPhrasing(node2, {
        ...info,
        before: around,
        after: around
      });
      subexit();
      exit3();
      return value2;
    }
    function serializeData(matrix, align) {
      return markdownTable(matrix, {
        align,
        // @ts-expect-error: `markdown-table` types should support `null`.
        alignDelimiters,
        // @ts-expect-error: `markdown-table` types should support `null`.
        padding,
        // @ts-expect-error: `markdown-table` types should support `null`.
        stringLength
      });
    }
    function handleTableAsData(node2, state, info) {
      const children = node2.children;
      let index2 = -1;
      const result = [];
      const subexit = state.enter("table");
      while (++index2 < children.length) {
        result[index2] = handleTableRowAsData(children[index2], state, info);
      }
      subexit();
      return result;
    }
    function handleTableRowAsData(node2, state, info) {
      const children = node2.children;
      let index2 = -1;
      const result = [];
      const subexit = state.enter("tableRow");
      while (++index2 < children.length) {
        result[index2] = handleTableCell(children[index2], node2, state, info);
      }
      subexit();
      return result;
    }
    function inlineCodeWithTable(node2, parent, state) {
      let value2 = handle.inlineCode(node2, parent, state);
      if (state.stack.includes("tableCell")) {
        value2 = value2.replace(/\|/g, "\\$&");
      }
      return value2;
    }
  }

  // node_modules/mdast-util-gfm-task-list-item/lib/index.js
  function gfmTaskListItemFromMarkdown() {
    return {
      exit: {
        taskListCheckValueChecked: exitCheck,
        taskListCheckValueUnchecked: exitCheck,
        paragraph: exitParagraphWithTaskListItem
      }
    };
  }
  function gfmTaskListItemToMarkdown() {
    return {
      unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
      handlers: { listItem: listItemWithTaskListItem }
    };
  }
  function exitCheck(token) {
    const node2 = this.stack[this.stack.length - 2];
    ok2(node2.type === "listItem");
    node2.checked = token.type === "taskListCheckValueChecked";
  }
  function exitParagraphWithTaskListItem(token) {
    const parent = this.stack[this.stack.length - 2];
    if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
      const node2 = this.stack[this.stack.length - 1];
      ok2(node2.type === "paragraph");
      const head = node2.children[0];
      if (head && head.type === "text") {
        const siblings = parent.children;
        let index2 = -1;
        let firstParaghraph;
        while (++index2 < siblings.length) {
          const sibling = siblings[index2];
          if (sibling.type === "paragraph") {
            firstParaghraph = sibling;
            break;
          }
        }
        if (firstParaghraph === node2) {
          head.value = head.value.slice(1);
          if (head.value.length === 0) {
            node2.children.shift();
          } else if (node2.position && head.position && typeof head.position.start.offset === "number") {
            head.position.start.column++;
            head.position.start.offset++;
            node2.position.start = Object.assign({}, head.position.start);
          }
        }
      }
    }
    this.exit(token);
  }
  function listItemWithTaskListItem(node2, parent, state, info) {
    const head = node2.children[0];
    const checkable = typeof node2.checked === "boolean" && head && head.type === "paragraph";
    const checkbox = "[" + (node2.checked ? "x" : " ") + "] ";
    const tracker = state.createTracker(info);
    if (checkable) {
      tracker.move(checkbox);
    }
    let value2 = handle.listItem(node2, parent, state, {
      ...info,
      ...tracker.current()
    });
    if (checkable) {
      value2 = value2.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
    }
    return value2;
    function check($0) {
      return $0 + checkbox;
    }
  }

  // node_modules/mdast-util-gfm/lib/index.js
  function gfmFromMarkdown() {
    return [
      gfmAutolinkLiteralFromMarkdown(),
      gfmFootnoteFromMarkdown(),
      gfmStrikethroughFromMarkdown(),
      gfmTableFromMarkdown(),
      gfmTaskListItemFromMarkdown()
    ];
  }
  function gfmToMarkdown(options) {
    return {
      extensions: [
        gfmAutolinkLiteralToMarkdown(),
        gfmFootnoteToMarkdown(),
        gfmStrikethroughToMarkdown(),
        gfmTableToMarkdown(options),
        gfmTaskListItemToMarkdown()
      ]
    };
  }

  // node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
  var wwwPrefix = {
    tokenize: tokenizeWwwPrefix,
    partial: true
  };
  var domain = {
    tokenize: tokenizeDomain,
    partial: true
  };
  var path = {
    tokenize: tokenizePath,
    partial: true
  };
  var trail = {
    tokenize: tokenizeTrail,
    partial: true
  };
  var emailDomainDotTrail = {
    tokenize: tokenizeEmailDomainDotTrail,
    partial: true
  };
  var wwwAutolink = {
    name: "wwwAutolink",
    tokenize: tokenizeWwwAutolink,
    previous: previousWww
  };
  var protocolAutolink = {
    name: "protocolAutolink",
    tokenize: tokenizeProtocolAutolink,
    previous: previousProtocol
  };
  var emailAutolink = {
    name: "emailAutolink",
    tokenize: tokenizeEmailAutolink,
    previous: previousEmail
  };
  var text4 = {};
  function gfmAutolinkLiteral() {
    return {
      text: text4
    };
  }
  var code2 = 48;
  while (code2 < 123) {
    text4[code2] = emailAutolink;
    code2++;
    if (code2 === 58)
      code2 = 65;
    else if (code2 === 91)
      code2 = 97;
  }
  text4[43] = emailAutolink;
  text4[45] = emailAutolink;
  text4[46] = emailAutolink;
  text4[95] = emailAutolink;
  text4[72] = [emailAutolink, protocolAutolink];
  text4[104] = [emailAutolink, protocolAutolink];
  text4[87] = [emailAutolink, wwwAutolink];
  text4[119] = [emailAutolink, wwwAutolink];
  function tokenizeEmailAutolink(effects, ok3, nok) {
    const self = this;
    let dot;
    let data;
    return start;
    function start(code3) {
      if (!gfmAtext(code3) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) {
        return nok(code3);
      }
      effects.enter("literalAutolink");
      effects.enter("literalAutolinkEmail");
      return atext(code3);
    }
    function atext(code3) {
      if (gfmAtext(code3)) {
        effects.consume(code3);
        return atext;
      }
      if (code3 === 64) {
        effects.consume(code3);
        return emailDomain;
      }
      return nok(code3);
    }
    function emailDomain(code3) {
      if (code3 === 46) {
        return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code3);
      }
      if (code3 === 45 || code3 === 95 || asciiAlphanumeric(code3)) {
        data = true;
        effects.consume(code3);
        return emailDomain;
      }
      return emailDomainAfter(code3);
    }
    function emailDomainDot(code3) {
      effects.consume(code3);
      dot = true;
      return emailDomain;
    }
    function emailDomainAfter(code3) {
      if (data && dot && asciiAlpha(self.previous)) {
        effects.exit("literalAutolinkEmail");
        effects.exit("literalAutolink");
        return ok3(code3);
      }
      return nok(code3);
    }
  }
  function tokenizeWwwAutolink(effects, ok3, nok) {
    const self = this;
    return wwwStart;
    function wwwStart(code3) {
      if (code3 !== 87 && code3 !== 119 || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) {
        return nok(code3);
      }
      effects.enter("literalAutolink");
      effects.enter("literalAutolinkWww");
      return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code3);
    }
    function wwwAfter(code3) {
      effects.exit("literalAutolinkWww");
      effects.exit("literalAutolink");
      return ok3(code3);
    }
  }
  function tokenizeProtocolAutolink(effects, ok3, nok) {
    const self = this;
    let buffer = "";
    let seen = false;
    return protocolStart;
    function protocolStart(code3) {
      if ((code3 === 72 || code3 === 104) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkHttp");
        buffer += String.fromCodePoint(code3);
        effects.consume(code3);
        return protocolPrefixInside;
      }
      return nok(code3);
    }
    function protocolPrefixInside(code3) {
      if (asciiAlpha(code3) && buffer.length < 5) {
        buffer += String.fromCodePoint(code3);
        effects.consume(code3);
        return protocolPrefixInside;
      }
      if (code3 === 58) {
        const protocol = buffer.toLowerCase();
        if (protocol === "http" || protocol === "https") {
          effects.consume(code3);
          return protocolSlashesInside;
        }
      }
      return nok(code3);
    }
    function protocolSlashesInside(code3) {
      if (code3 === 47) {
        effects.consume(code3);
        if (seen) {
          return afterProtocol;
        }
        seen = true;
        return protocolSlashesInside;
      }
      return nok(code3);
    }
    function afterProtocol(code3) {
      return code3 === null || asciiControl(code3) || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) ? nok(code3) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code3);
    }
    function protocolAfter(code3) {
      effects.exit("literalAutolinkHttp");
      effects.exit("literalAutolink");
      return ok3(code3);
    }
  }
  function tokenizeWwwPrefix(effects, ok3, nok) {
    let size = 0;
    return wwwPrefixInside;
    function wwwPrefixInside(code3) {
      if ((code3 === 87 || code3 === 119) && size < 3) {
        size++;
        effects.consume(code3);
        return wwwPrefixInside;
      }
      if (code3 === 46 && size === 3) {
        effects.consume(code3);
        return wwwPrefixAfter;
      }
      return nok(code3);
    }
    function wwwPrefixAfter(code3) {
      return code3 === null ? nok(code3) : ok3(code3);
    }
  }
  function tokenizeDomain(effects, ok3, nok) {
    let underscoreInLastSegment;
    let underscoreInLastLastSegment;
    let seen;
    return domainInside;
    function domainInside(code3) {
      if (code3 === 46 || code3 === 95) {
        return effects.check(trail, domainAfter, domainAtPunctuation)(code3);
      }
      if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3) || code3 !== 45 && unicodePunctuation(code3)) {
        return domainAfter(code3);
      }
      seen = true;
      effects.consume(code3);
      return domainInside;
    }
    function domainAtPunctuation(code3) {
      if (code3 === 95) {
        underscoreInLastSegment = true;
      } else {
        underscoreInLastLastSegment = underscoreInLastSegment;
        underscoreInLastSegment = void 0;
      }
      effects.consume(code3);
      return domainInside;
    }
    function domainAfter(code3) {
      if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
        return nok(code3);
      }
      return ok3(code3);
    }
  }
  function tokenizePath(effects, ok3) {
    let sizeOpen = 0;
    let sizeClose = 0;
    return pathInside;
    function pathInside(code3) {
      if (code3 === 40) {
        sizeOpen++;
        effects.consume(code3);
        return pathInside;
      }
      if (code3 === 41 && sizeClose < sizeOpen) {
        return pathAtPunctuation(code3);
      }
      if (code3 === 33 || code3 === 34 || code3 === 38 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 60 || code3 === 63 || code3 === 93 || code3 === 95 || code3 === 126) {
        return effects.check(trail, ok3, pathAtPunctuation)(code3);
      }
      if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
        return ok3(code3);
      }
      effects.consume(code3);
      return pathInside;
    }
    function pathAtPunctuation(code3) {
      if (code3 === 41) {
        sizeClose++;
      }
      effects.consume(code3);
      return pathInside;
    }
  }
  function tokenizeTrail(effects, ok3, nok) {
    return trail2;
    function trail2(code3) {
      if (code3 === 33 || code3 === 34 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 63 || code3 === 95 || code3 === 126) {
        effects.consume(code3);
        return trail2;
      }
      if (code3 === 38) {
        effects.consume(code3);
        return trailCharacterReferenceStart;
      }
      if (code3 === 93) {
        effects.consume(code3);
        return trailBracketAfter;
      }
      if (
        // `<` is an end.
        code3 === 60 || // So is whitespace.
        code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)
      ) {
        return ok3(code3);
      }
      return nok(code3);
    }
    function trailBracketAfter(code3) {
      if (code3 === null || code3 === 40 || code3 === 91 || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
        return ok3(code3);
      }
      return trail2(code3);
    }
    function trailCharacterReferenceStart(code3) {
      return asciiAlpha(code3) ? trailCharacterReferenceInside(code3) : nok(code3);
    }
    function trailCharacterReferenceInside(code3) {
      if (code3 === 59) {
        effects.consume(code3);
        return trail2;
      }
      if (asciiAlpha(code3)) {
        effects.consume(code3);
        return trailCharacterReferenceInside;
      }
      return nok(code3);
    }
  }
  function tokenizeEmailDomainDotTrail(effects, ok3, nok) {
    return start;
    function start(code3) {
      effects.consume(code3);
      return after;
    }
    function after(code3) {
      return asciiAlphanumeric(code3) ? nok(code3) : ok3(code3);
    }
  }
  function previousWww(code3) {
    return code3 === null || code3 === 40 || code3 === 42 || code3 === 95 || code3 === 91 || code3 === 93 || code3 === 126 || markdownLineEndingOrSpace(code3);
  }
  function previousProtocol(code3) {
    return !asciiAlpha(code3);
  }
  function previousEmail(code3) {
    return !(code3 === 47 || gfmAtext(code3));
  }
  function gfmAtext(code3) {
    return code3 === 43 || code3 === 45 || code3 === 46 || code3 === 95 || asciiAlphanumeric(code3);
  }
  function previousUnbalanced(events) {
    let index2 = events.length;
    let result = false;
    while (index2--) {
      const token = events[index2][1];
      if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
        result = true;
        break;
      }
      if (token._gfmAutolinkLiteralWalkedInto) {
        result = false;
        break;
      }
    }
    if (events.length > 0 && !result) {
      events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
    }
    return result;
  }

  // node_modules/micromark-extension-gfm-footnote/lib/syntax.js
  var indent = {
    tokenize: tokenizeIndent2,
    partial: true
  };
  function gfmFootnote() {
    return {
      document: {
        [91]: {
          name: "gfmFootnoteDefinition",
          tokenize: tokenizeDefinitionStart,
          continuation: {
            tokenize: tokenizeDefinitionContinuation
          },
          exit: gfmFootnoteDefinitionEnd
        }
      },
      text: {
        [91]: {
          name: "gfmFootnoteCall",
          tokenize: tokenizeGfmFootnoteCall
        },
        [93]: {
          name: "gfmPotentialFootnoteCall",
          add: "after",
          tokenize: tokenizePotentialGfmFootnoteCall,
          resolveTo: resolveToPotentialGfmFootnoteCall
        }
      }
    };
  }
  function tokenizePotentialGfmFootnoteCall(effects, ok3, nok) {
    const self = this;
    let index2 = self.events.length;
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    let labelStart;
    while (index2--) {
      const token = self.events[index2][1];
      if (token.type === "labelImage") {
        labelStart = token;
        break;
      }
      if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
        break;
      }
    }
    return start;
    function start(code3) {
      if (!labelStart || !labelStart._balanced) {
        return nok(code3);
      }
      const id = normalizeIdentifier(self.sliceSerialize({
        start: labelStart.end,
        end: self.now()
      }));
      if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) {
        return nok(code3);
      }
      effects.enter("gfmFootnoteCallLabelMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteCallLabelMarker");
      return ok3(code3);
    }
  }
  function resolveToPotentialGfmFootnoteCall(events, context) {
    let index2 = events.length;
    let labelStart;
    while (index2--) {
      if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
        labelStart = events[index2][1];
        break;
      }
    }
    events[index2 + 1][1].type = "data";
    events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
    const call = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, events[index2 + 3][1].start),
      end: Object.assign({}, events[events.length - 1][1].end)
    };
    const marker = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, events[index2 + 3][1].end),
      end: Object.assign({}, events[index2 + 3][1].end)
    };
    marker.end.column++;
    marker.end.offset++;
    marker.end._bufferIndex++;
    const string3 = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, marker.end),
      end: Object.assign({}, events[events.length - 1][1].start)
    };
    const chunk = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, string3.start),
      end: Object.assign({}, string3.end)
    };
    const replacement = [
      // Take the `labelImageMarker` (now `data`, the `!`)
      events[index2 + 1],
      events[index2 + 2],
      ["enter", call, context],
      // The `[`
      events[index2 + 3],
      events[index2 + 4],
      // The `^`.
      ["enter", marker, context],
      ["exit", marker, context],
      // Everything in between.
      ["enter", string3, context],
      ["enter", chunk, context],
      ["exit", chunk, context],
      ["exit", string3, context],
      // The ending (`]`, properly parsed and labelled).
      events[events.length - 2],
      events[events.length - 1],
      ["exit", call, context]
    ];
    events.splice(index2, events.length - index2 + 1, ...replacement);
    return events;
  }
  function tokenizeGfmFootnoteCall(effects, ok3, nok) {
    const self = this;
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    let size = 0;
    let data;
    return start;
    function start(code3) {
      effects.enter("gfmFootnoteCall");
      effects.enter("gfmFootnoteCallLabelMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteCallLabelMarker");
      return callStart;
    }
    function callStart(code3) {
      if (code3 !== 94)
        return nok(code3);
      effects.enter("gfmFootnoteCallMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteCallMarker");
      effects.enter("gfmFootnoteCallString");
      effects.enter("chunkString").contentType = "string";
      return callData;
    }
    function callData(code3) {
      if (
        // Too long.
        size > 999 || // Closing brace with nothing.
        code3 === 93 && !data || // Space or tab is not supported by GFM for some reason.
        // `\n` and `[` not being supported makes sense.
        code3 === null || code3 === 91 || markdownLineEndingOrSpace(code3)
      ) {
        return nok(code3);
      }
      if (code3 === 93) {
        effects.exit("chunkString");
        const token = effects.exit("gfmFootnoteCallString");
        if (!defined.includes(normalizeIdentifier(self.sliceSerialize(token)))) {
          return nok(code3);
        }
        effects.enter("gfmFootnoteCallLabelMarker");
        effects.consume(code3);
        effects.exit("gfmFootnoteCallLabelMarker");
        effects.exit("gfmFootnoteCall");
        return ok3;
      }
      if (!markdownLineEndingOrSpace(code3)) {
        data = true;
      }
      size++;
      effects.consume(code3);
      return code3 === 92 ? callEscape : callData;
    }
    function callEscape(code3) {
      if (code3 === 91 || code3 === 92 || code3 === 93) {
        effects.consume(code3);
        size++;
        return callData;
      }
      return callData(code3);
    }
  }
  function tokenizeDefinitionStart(effects, ok3, nok) {
    const self = this;
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    let identifier;
    let size = 0;
    let data;
    return start;
    function start(code3) {
      effects.enter("gfmFootnoteDefinition")._container = true;
      effects.enter("gfmFootnoteDefinitionLabel");
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      return labelAtMarker;
    }
    function labelAtMarker(code3) {
      if (code3 === 94) {
        effects.enter("gfmFootnoteDefinitionMarker");
        effects.consume(code3);
        effects.exit("gfmFootnoteDefinitionMarker");
        effects.enter("gfmFootnoteDefinitionLabelString");
        effects.enter("chunkString").contentType = "string";
        return labelInside;
      }
      return nok(code3);
    }
    function labelInside(code3) {
      if (
        // Too long.
        size > 999 || // Closing brace with nothing.
        code3 === 93 && !data || // Space or tab is not supported by GFM for some reason.
        // `\n` and `[` not being supported makes sense.
        code3 === null || code3 === 91 || markdownLineEndingOrSpace(code3)
      ) {
        return nok(code3);
      }
      if (code3 === 93) {
        effects.exit("chunkString");
        const token = effects.exit("gfmFootnoteDefinitionLabelString");
        identifier = normalizeIdentifier(self.sliceSerialize(token));
        effects.enter("gfmFootnoteDefinitionLabelMarker");
        effects.consume(code3);
        effects.exit("gfmFootnoteDefinitionLabelMarker");
        effects.exit("gfmFootnoteDefinitionLabel");
        return labelAfter;
      }
      if (!markdownLineEndingOrSpace(code3)) {
        data = true;
      }
      size++;
      effects.consume(code3);
      return code3 === 92 ? labelEscape : labelInside;
    }
    function labelEscape(code3) {
      if (code3 === 91 || code3 === 92 || code3 === 93) {
        effects.consume(code3);
        size++;
        return labelInside;
      }
      return labelInside(code3);
    }
    function labelAfter(code3) {
      if (code3 === 58) {
        effects.enter("definitionMarker");
        effects.consume(code3);
        effects.exit("definitionMarker");
        if (!defined.includes(identifier)) {
          defined.push(identifier);
        }
        return factorySpace(effects, whitespaceAfter, "gfmFootnoteDefinitionWhitespace");
      }
      return nok(code3);
    }
    function whitespaceAfter(code3) {
      return ok3(code3);
    }
  }
  function tokenizeDefinitionContinuation(effects, ok3, nok) {
    return effects.check(blankLine, ok3, effects.attempt(indent, ok3, nok));
  }
  function gfmFootnoteDefinitionEnd(effects) {
    effects.exit("gfmFootnoteDefinition");
  }
  function tokenizeIndent2(effects, ok3, nok) {
    const self = this;
    return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 4 + 1);
    function afterPrefix(code3) {
      const tail = self.events[self.events.length - 1];
      return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok3(code3) : nok(code3);
    }
  }

  // node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
  function gfmStrikethrough(options) {
    const options_ = options || {};
    let single = options_.singleTilde;
    const tokenizer = {
      name: "strikethrough",
      tokenize: tokenizeStrikethrough,
      resolveAll: resolveAllStrikethrough
    };
    if (single === null || single === void 0) {
      single = true;
    }
    return {
      text: {
        [126]: tokenizer
      },
      insideSpan: {
        null: [tokenizer]
      },
      attentionMarkers: {
        null: [126]
      }
    };
    function resolveAllStrikethrough(events, context) {
      let index2 = -1;
      while (++index2 < events.length) {
        if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
          let open = index2;
          while (open--) {
            if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && // If the sizes are the same:
            events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
              events[index2][1].type = "strikethroughSequence";
              events[open][1].type = "strikethroughSequence";
              const strikethrough = {
                type: "strikethrough",
                start: Object.assign({}, events[open][1].start),
                end: Object.assign({}, events[index2][1].end)
              };
              const text6 = {
                type: "strikethroughText",
                start: Object.assign({}, events[open][1].end),
                end: Object.assign({}, events[index2][1].start)
              };
              const nextEvents = [["enter", strikethrough, context], ["enter", events[open][1], context], ["exit", events[open][1], context], ["enter", text6, context]];
              const insideSpan2 = context.parser.constructs.insideSpan.null;
              if (insideSpan2) {
                splice(nextEvents, nextEvents.length, 0, resolveAll(insideSpan2, events.slice(open + 1, index2), context));
              }
              splice(nextEvents, nextEvents.length, 0, [["exit", text6, context], ["enter", events[index2][1], context], ["exit", events[index2][1], context], ["exit", strikethrough, context]]);
              splice(events, open - 1, index2 - open + 3, nextEvents);
              index2 = open + nextEvents.length - 2;
              break;
            }
          }
        }
      }
      index2 = -1;
      while (++index2 < events.length) {
        if (events[index2][1].type === "strikethroughSequenceTemporary") {
          events[index2][1].type = "data";
        }
      }
      return events;
    }
    function tokenizeStrikethrough(effects, ok3, nok) {
      const previous3 = this.previous;
      const events = this.events;
      let size = 0;
      return start;
      function start(code3) {
        if (previous3 === 126 && events[events.length - 1][1].type !== "characterEscape") {
          return nok(code3);
        }
        effects.enter("strikethroughSequenceTemporary");
        return more(code3);
      }
      function more(code3) {
        const before = classifyCharacter(previous3);
        if (code3 === 126) {
          if (size > 1)
            return nok(code3);
          effects.consume(code3);
          size++;
          return more;
        }
        if (size < 2 && !single)
          return nok(code3);
        const token = effects.exit("strikethroughSequenceTemporary");
        const after = classifyCharacter(code3);
        token._open = !after || after === 2 && Boolean(before);
        token._close = !before || before === 2 && Boolean(after);
        return ok3(code3);
      }
    }
  }

  // node_modules/micromark-extension-gfm-table/lib/edit-map.js
  var EditMap = class {
    /**
     * Create a new edit map.
     */
    constructor() {
      this.map = [];
    }
    /**
     * Create an edit: a remove and/or add at a certain place.
     *
     * @param {number} index
     * @param {number} remove
     * @param {Array<Event>} add
     * @returns {undefined}
     */
    add(index2, remove, add) {
      addImplementation(this, index2, remove, add);
    }
    // To do: add this when moving to `micromark`.
    // /**
    //  * Create an edit: but insert `add` before existing additions.
    //  *
    //  * @param {number} index
    //  * @param {number} remove
    //  * @param {Array<Event>} add
    //  * @returns {undefined}
    //  */
    // addBefore(index, remove, add) {
    //   addImplementation(this, index, remove, add, true)
    // }
    /**
     * Done, change the events.
     *
     * @param {Array<Event>} events
     * @returns {undefined}
     */
    consume(events) {
      this.map.sort(function(a, b) {
        return a[0] - b[0];
      });
      if (this.map.length === 0) {
        return;
      }
      let index2 = this.map.length;
      const vecs = [];
      while (index2 > 0) {
        index2 -= 1;
        vecs.push(events.slice(this.map[index2][0] + this.map[index2][1]), this.map[index2][2]);
        events.length = this.map[index2][0];
      }
      vecs.push([...events]);
      events.length = 0;
      let slice = vecs.pop();
      while (slice) {
        events.push(...slice);
        slice = vecs.pop();
      }
      this.map.length = 0;
    }
  };
  function addImplementation(editMap, at, remove, add) {
    let index2 = 0;
    if (remove === 0 && add.length === 0) {
      return;
    }
    while (index2 < editMap.map.length) {
      if (editMap.map[index2][0] === at) {
        editMap.map[index2][1] += remove;
        editMap.map[index2][2].push(...add);
        return;
      }
      index2 += 1;
    }
    editMap.map.push([at, remove, add]);
  }

  // node_modules/micromark-extension-gfm-table/lib/infer.js
  function gfmTableAlign(events, index2) {
    let inDelimiterRow = false;
    const align = [];
    while (index2 < events.length) {
      const event = events[index2];
      if (inDelimiterRow) {
        if (event[0] === "enter") {
          if (event[1].type === "tableContent") {
            align.push(events[index2 + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
          }
        } else if (event[1].type === "tableContent") {
          if (events[index2 - 1][1].type === "tableDelimiterMarker") {
            const alignIndex = align.length - 1;
            align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
          }
        } else if (event[1].type === "tableDelimiterRow") {
          break;
        }
      } else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") {
        inDelimiterRow = true;
      }
      index2 += 1;
    }
    return align;
  }

  // node_modules/micromark-extension-gfm-table/lib/syntax.js
  function gfmTable() {
    return {
      flow: {
        null: {
          name: "table",
          tokenize: tokenizeTable,
          resolveAll: resolveTable
        }
      }
    };
  }
  function tokenizeTable(effects, ok3, nok) {
    const self = this;
    let size = 0;
    let sizeB = 0;
    let seen;
    return start;
    function start(code3) {
      let index2 = self.events.length - 1;
      while (index2 > -1) {
        const type = self.events[index2][1].type;
        if (type === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
        type === "linePrefix")
          index2--;
        else
          break;
      }
      const tail = index2 > -1 ? self.events[index2][1].type : null;
      const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
      if (next === bodyRowStart && self.parser.lazy[self.now().line]) {
        return nok(code3);
      }
      return next(code3);
    }
    function headRowBefore(code3) {
      effects.enter("tableHead");
      effects.enter("tableRow");
      return headRowStart(code3);
    }
    function headRowStart(code3) {
      if (code3 === 124) {
        return headRowBreak(code3);
      }
      seen = true;
      sizeB += 1;
      return headRowBreak(code3);
    }
    function headRowBreak(code3) {
      if (code3 === null) {
        return nok(code3);
      }
      if (markdownLineEnding(code3)) {
        if (sizeB > 1) {
          sizeB = 0;
          self.interrupt = true;
          effects.exit("tableRow");
          effects.enter("lineEnding");
          effects.consume(code3);
          effects.exit("lineEnding");
          return headDelimiterStart;
        }
        return nok(code3);
      }
      if (markdownSpace(code3)) {
        return factorySpace(effects, headRowBreak, "whitespace")(code3);
      }
      sizeB += 1;
      if (seen) {
        seen = false;
        size += 1;
      }
      if (code3 === 124) {
        effects.enter("tableCellDivider");
        effects.consume(code3);
        effects.exit("tableCellDivider");
        seen = true;
        return headRowBreak;
      }
      effects.enter("data");
      return headRowData(code3);
    }
    function headRowData(code3) {
      if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
        effects.exit("data");
        return headRowBreak(code3);
      }
      effects.consume(code3);
      return code3 === 92 ? headRowEscape : headRowData;
    }
    function headRowEscape(code3) {
      if (code3 === 92 || code3 === 124) {
        effects.consume(code3);
        return headRowData;
      }
      return headRowData(code3);
    }
    function headDelimiterStart(code3) {
      self.interrupt = false;
      if (self.parser.lazy[self.now().line]) {
        return nok(code3);
      }
      effects.enter("tableDelimiterRow");
      seen = false;
      if (markdownSpace(code3)) {
        return factorySpace(effects, headDelimiterBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
      }
      return headDelimiterBefore(code3);
    }
    function headDelimiterBefore(code3) {
      if (code3 === 45 || code3 === 58) {
        return headDelimiterValueBefore(code3);
      }
      if (code3 === 124) {
        seen = true;
        effects.enter("tableCellDivider");
        effects.consume(code3);
        effects.exit("tableCellDivider");
        return headDelimiterCellBefore;
      }
      return headDelimiterNok(code3);
    }
    function headDelimiterCellBefore(code3) {
      if (markdownSpace(code3)) {
        return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code3);
      }
      return headDelimiterValueBefore(code3);
    }
    function headDelimiterValueBefore(code3) {
      if (code3 === 58) {
        sizeB += 1;
        seen = true;
        effects.enter("tableDelimiterMarker");
        effects.consume(code3);
        effects.exit("tableDelimiterMarker");
        return headDelimiterLeftAlignmentAfter;
      }
      if (code3 === 45) {
        sizeB += 1;
        return headDelimiterLeftAlignmentAfter(code3);
      }
      if (code3 === null || markdownLineEnding(code3)) {
        return headDelimiterCellAfter(code3);
      }
      return headDelimiterNok(code3);
    }
    function headDelimiterLeftAlignmentAfter(code3) {
      if (code3 === 45) {
        effects.enter("tableDelimiterFiller");
        return headDelimiterFiller(code3);
      }
      return headDelimiterNok(code3);
    }
    function headDelimiterFiller(code3) {
      if (code3 === 45) {
        effects.consume(code3);
        return headDelimiterFiller;
      }
      if (code3 === 58) {
        seen = true;
        effects.exit("tableDelimiterFiller");
        effects.enter("tableDelimiterMarker");
        effects.consume(code3);
        effects.exit("tableDelimiterMarker");
        return headDelimiterRightAlignmentAfter;
      }
      effects.exit("tableDelimiterFiller");
      return headDelimiterRightAlignmentAfter(code3);
    }
    function headDelimiterRightAlignmentAfter(code3) {
      if (markdownSpace(code3)) {
        return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code3);
      }
      return headDelimiterCellAfter(code3);
    }
    function headDelimiterCellAfter(code3) {
      if (code3 === 124) {
        return headDelimiterBefore(code3);
      }
      if (code3 === null || markdownLineEnding(code3)) {
        if (!seen || size !== sizeB) {
          return headDelimiterNok(code3);
        }
        effects.exit("tableDelimiterRow");
        effects.exit("tableHead");
        return ok3(code3);
      }
      return headDelimiterNok(code3);
    }
    function headDelimiterNok(code3) {
      return nok(code3);
    }
    function bodyRowStart(code3) {
      effects.enter("tableRow");
      return bodyRowBreak(code3);
    }
    function bodyRowBreak(code3) {
      if (code3 === 124) {
        effects.enter("tableCellDivider");
        effects.consume(code3);
        effects.exit("tableCellDivider");
        return bodyRowBreak;
      }
      if (code3 === null || markdownLineEnding(code3)) {
        effects.exit("tableRow");
        return ok3(code3);
      }
      if (markdownSpace(code3)) {
        return factorySpace(effects, bodyRowBreak, "whitespace")(code3);
      }
      effects.enter("data");
      return bodyRowData(code3);
    }
    function bodyRowData(code3) {
      if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
        effects.exit("data");
        return bodyRowBreak(code3);
      }
      effects.consume(code3);
      return code3 === 92 ? bodyRowEscape : bodyRowData;
    }
    function bodyRowEscape(code3) {
      if (code3 === 92 || code3 === 124) {
        effects.consume(code3);
        return bodyRowData;
      }
      return bodyRowData(code3);
    }
  }
  function resolveTable(events, context) {
    let index2 = -1;
    let inFirstCellAwaitingPipe = true;
    let rowKind = 0;
    let lastCell = [0, 0, 0, 0];
    let cell = [0, 0, 0, 0];
    let afterHeadAwaitingFirstBodyRow = false;
    let lastTableEnd = 0;
    let currentTable;
    let currentBody;
    let currentCell;
    const map4 = new EditMap();
    while (++index2 < events.length) {
      const event = events[index2];
      const token = event[1];
      if (event[0] === "enter") {
        if (token.type === "tableHead") {
          afterHeadAwaitingFirstBodyRow = false;
          if (lastTableEnd !== 0) {
            flushTableEnd(map4, context, lastTableEnd, currentTable, currentBody);
            currentBody = void 0;
            lastTableEnd = 0;
          }
          currentTable = {
            type: "table",
            start: Object.assign({}, token.start),
            // Note: correct end is set later.
            end: Object.assign({}, token.end)
          };
          map4.add(index2, 0, [["enter", currentTable, context]]);
        } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
          inFirstCellAwaitingPipe = true;
          currentCell = void 0;
          lastCell = [0, 0, 0, 0];
          cell = [0, index2 + 1, 0, 0];
          if (afterHeadAwaitingFirstBodyRow) {
            afterHeadAwaitingFirstBodyRow = false;
            currentBody = {
              type: "tableBody",
              start: Object.assign({}, token.start),
              // Note: correct end is set later.
              end: Object.assign({}, token.end)
            };
            map4.add(index2, 0, [["enter", currentBody, context]]);
          }
          rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
        } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
          inFirstCellAwaitingPipe = false;
          if (cell[2] === 0) {
            if (lastCell[1] !== 0) {
              cell[0] = cell[1];
              currentCell = flushCell(map4, context, lastCell, rowKind, void 0, currentCell);
              lastCell = [0, 0, 0, 0];
            }
            cell[2] = index2;
          }
        } else if (token.type === "tableCellDivider") {
          if (inFirstCellAwaitingPipe) {
            inFirstCellAwaitingPipe = false;
          } else {
            if (lastCell[1] !== 0) {
              cell[0] = cell[1];
              currentCell = flushCell(map4, context, lastCell, rowKind, void 0, currentCell);
            }
            lastCell = cell;
            cell = [lastCell[1], index2, 0, 0];
          }
        }
      } else if (token.type === "tableHead") {
        afterHeadAwaitingFirstBodyRow = true;
        lastTableEnd = index2;
      } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
        lastTableEnd = index2;
        if (lastCell[1] !== 0) {
          cell[0] = cell[1];
          currentCell = flushCell(map4, context, lastCell, rowKind, index2, currentCell);
        } else if (cell[1] !== 0) {
          currentCell = flushCell(map4, context, cell, rowKind, index2, currentCell);
        }
        rowKind = 0;
      } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
        cell[3] = index2;
      }
    }
    if (lastTableEnd !== 0) {
      flushTableEnd(map4, context, lastTableEnd, currentTable, currentBody);
    }
    map4.consume(context.events);
    index2 = -1;
    while (++index2 < context.events.length) {
      const event = context.events[index2];
      if (event[0] === "enter" && event[1].type === "table") {
        event[1]._align = gfmTableAlign(context.events, index2);
      }
    }
    return events;
  }
  function flushCell(map4, context, range, rowKind, rowEnd, previousCell) {
    const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
    const valueName = "tableContent";
    if (range[0] !== 0) {
      previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
      map4.add(range[0], 0, [["exit", previousCell, context]]);
    }
    const now = getPoint(context.events, range[1]);
    previousCell = {
      type: groupName,
      start: Object.assign({}, now),
      // Note: correct end is set later.
      end: Object.assign({}, now)
    };
    map4.add(range[1], 0, [["enter", previousCell, context]]);
    if (range[2] !== 0) {
      const relatedStart = getPoint(context.events, range[2]);
      const relatedEnd = getPoint(context.events, range[3]);
      const valueToken = {
        type: valueName,
        start: Object.assign({}, relatedStart),
        end: Object.assign({}, relatedEnd)
      };
      map4.add(range[2], 0, [["enter", valueToken, context]]);
      if (rowKind !== 2) {
        const start = context.events[range[2]];
        const end = context.events[range[3]];
        start[1].end = Object.assign({}, end[1].end);
        start[1].type = "chunkText";
        start[1].contentType = "text";
        if (range[3] > range[2] + 1) {
          const a = range[2] + 1;
          const b = range[3] - range[2] - 1;
          map4.add(a, b, []);
        }
      }
      map4.add(range[3] + 1, 0, [["exit", valueToken, context]]);
    }
    if (rowEnd !== void 0) {
      previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
      map4.add(rowEnd, 0, [["exit", previousCell, context]]);
      previousCell = void 0;
    }
    return previousCell;
  }
  function flushTableEnd(map4, context, index2, table, tableBody) {
    const exits = [];
    const related = getPoint(context.events, index2);
    if (tableBody) {
      tableBody.end = Object.assign({}, related);
      exits.push(["exit", tableBody, context]);
    }
    table.end = Object.assign({}, related);
    exits.push(["exit", table, context]);
    map4.add(index2 + 1, 0, exits);
  }
  function getPoint(events, index2) {
    const event = events[index2];
    const side = event[0] === "enter" ? "start" : "end";
    return event[1][side];
  }

  // node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
  var tasklistCheck = {
    name: "tasklistCheck",
    tokenize: tokenizeTasklistCheck
  };
  function gfmTaskListItem() {
    return {
      text: {
        [91]: tasklistCheck
      }
    };
  }
  function tokenizeTasklistCheck(effects, ok3, nok) {
    const self = this;
    return open;
    function open(code3) {
      if (
        // Exit if there’s stuff before.
        self.previous !== null || // Exit if not in the first content that is the first child of a list
        // item.
        !self._gfmTasklistFirstContentOfListItem
      ) {
        return nok(code3);
      }
      effects.enter("taskListCheck");
      effects.enter("taskListCheckMarker");
      effects.consume(code3);
      effects.exit("taskListCheckMarker");
      return inside;
    }
    function inside(code3) {
      if (markdownLineEndingOrSpace(code3)) {
        effects.enter("taskListCheckValueUnchecked");
        effects.consume(code3);
        effects.exit("taskListCheckValueUnchecked");
        return close;
      }
      if (code3 === 88 || code3 === 120) {
        effects.enter("taskListCheckValueChecked");
        effects.consume(code3);
        effects.exit("taskListCheckValueChecked");
        return close;
      }
      return nok(code3);
    }
    function close(code3) {
      if (code3 === 93) {
        effects.enter("taskListCheckMarker");
        effects.consume(code3);
        effects.exit("taskListCheckMarker");
        effects.exit("taskListCheck");
        return after;
      }
      return nok(code3);
    }
    function after(code3) {
      if (markdownLineEnding(code3)) {
        return ok3(code3);
      }
      if (markdownSpace(code3)) {
        return effects.check({
          tokenize: spaceThenNonSpace
        }, ok3, nok)(code3);
      }
      return nok(code3);
    }
  }
  function spaceThenNonSpace(effects, ok3, nok) {
    return factorySpace(effects, after, "whitespace");
    function after(code3) {
      return code3 === null ? nok(code3) : ok3(code3);
    }
  }

  // node_modules/micromark-extension-gfm/index.js
  function gfm(options) {
    return combineExtensions([
      gfmAutolinkLiteral(),
      gfmFootnote(),
      gfmStrikethrough(options),
      gfmTable(),
      gfmTaskListItem()
    ]);
  }

  // node_modules/remark-gfm/lib/index.js
  var emptyOptions2 = {};
  function remarkGfm(options) {
    const self = (
      /** @type {Processor} */
      this
    );
    const settings = options || emptyOptions2;
    const data = self.data();
    const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
    const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
    const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);
    micromarkExtensions.push(gfm(settings));
    fromMarkdownExtensions.push(gfmFromMarkdown());
    toMarkdownExtensions.push(gfmToMarkdown(settings));
  }

  // node_modules/bail/index.js
  function bail(error) {
    if (error) {
      throw error;
    }
  }

  // node_modules/unified/lib/index.js
  var import_extend = __toESM(require_extend(), 1);

  // node_modules/is-plain-obj/index.js
  function isPlainObject(value2) {
    if (typeof value2 !== "object" || value2 === null) {
      return false;
    }
    const prototype = Object.getPrototypeOf(value2);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value2) && !(Symbol.iterator in value2);
  }

  // node_modules/trough/lib/index.js
  function trough() {
    const fns = [];
    const pipeline = { run, use };
    return pipeline;
    function run(...values) {
      let middlewareIndex = -1;
      const callback = values.pop();
      if (typeof callback !== "function") {
        throw new TypeError("Expected function as last argument, not " + callback);
      }
      next(null, ...values);
      function next(error, ...output) {
        const fn = fns[++middlewareIndex];
        let index2 = -1;
        if (error) {
          callback(error);
          return;
        }
        while (++index2 < values.length) {
          if (output[index2] === null || output[index2] === void 0) {
            output[index2] = values[index2];
          }
        }
        values = output;
        if (fn) {
          wrap(fn, next)(...output);
        } else {
          callback(null, ...output);
        }
      }
    }
    function use(middelware) {
      if (typeof middelware !== "function") {
        throw new TypeError(
          "Expected `middelware` to be a function, not " + middelware
        );
      }
      fns.push(middelware);
      return pipeline;
    }
  }
  function wrap(middleware, callback) {
    let called;
    return wrapped;
    function wrapped(...parameters) {
      const fnExpectsCallback = middleware.length > parameters.length;
      let result;
      if (fnExpectsCallback) {
        parameters.push(done);
      }
      try {
        result = middleware.apply(this, parameters);
      } catch (error) {
        const exception = (
          /** @type {Error} */
          error
        );
        if (fnExpectsCallback && called) {
          throw exception;
        }
        return done(exception);
      }
      if (!fnExpectsCallback) {
        if (result && result.then && typeof result.then === "function") {
          result.then(then, done);
        } else if (result instanceof Error) {
          done(result);
        } else {
          then(result);
        }
      }
    }
    function done(error, ...output) {
      if (!called) {
        called = true;
        callback(error, ...output);
      }
    }
    function then(value2) {
      done(null, value2);
    }
  }

  // node_modules/vfile-message/lib/index.js
  var VFileMessage = class extends Error {
    /**
     * Create a message for `reason`.
     *
     * > 🪦 **Note**: also has obsolete signatures.
     *
     * @overload
     * @param {string} reason
     * @param {Options | null | undefined} [options]
     * @returns
     *
     * @overload
     * @param {string} reason
     * @param {Node | NodeLike | null | undefined} parent
     * @param {string | null | undefined} [origin]
     * @returns
     *
     * @overload
     * @param {string} reason
     * @param {Point | Position | null | undefined} place
     * @param {string | null | undefined} [origin]
     * @returns
     *
     * @overload
     * @param {string} reason
     * @param {string | null | undefined} [origin]
     * @returns
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {Node | NodeLike | null | undefined} parent
     * @param {string | null | undefined} [origin]
     * @returns
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {Point | Position | null | undefined} place
     * @param {string | null | undefined} [origin]
     * @returns
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {string | null | undefined} [origin]
     * @returns
     *
     * @param {Error | VFileMessage | string} causeOrReason
     *   Reason for message, should use markdown.
     * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
     *   Configuration (optional).
     * @param {string | null | undefined} [origin]
     *   Place in code where the message originates (example:
     *   `'my-package:my-rule'` or `'my-rule'`).
     * @returns
     *   Instance of `VFileMessage`.
     */
    // eslint-disable-next-line complexity
    constructor(causeOrReason, optionsOrParentOrPlace, origin) {
      super();
      if (typeof optionsOrParentOrPlace === "string") {
        origin = optionsOrParentOrPlace;
        optionsOrParentOrPlace = void 0;
      }
      let reason = "";
      let options = {};
      let legacyCause = false;
      if (optionsOrParentOrPlace) {
        if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) {
          options = { place: optionsOrParentOrPlace };
        } else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) {
          options = { place: optionsOrParentOrPlace };
        } else if ("type" in optionsOrParentOrPlace) {
          options = {
            ancestors: [optionsOrParentOrPlace],
            place: optionsOrParentOrPlace.position
          };
        } else {
          options = { ...optionsOrParentOrPlace };
        }
      }
      if (typeof causeOrReason === "string") {
        reason = causeOrReason;
      } else if (!options.cause && causeOrReason) {
        legacyCause = true;
        reason = causeOrReason.message;
        options.cause = causeOrReason;
      }
      if (!options.ruleId && !options.source && typeof origin === "string") {
        const index2 = origin.indexOf(":");
        if (index2 === -1) {
          options.ruleId = origin;
        } else {
          options.source = origin.slice(0, index2);
          options.ruleId = origin.slice(index2 + 1);
        }
      }
      if (!options.place && options.ancestors && options.ancestors) {
        const parent = options.ancestors[options.ancestors.length - 1];
        if (parent) {
          options.place = parent.position;
        }
      }
      const start = options.place && "start" in options.place ? options.place.start : options.place;
      this.ancestors = options.ancestors || void 0;
      this.cause = options.cause || void 0;
      this.column = start ? start.column : void 0;
      this.fatal = void 0;
      this.file;
      this.message = reason;
      this.line = start ? start.line : void 0;
      this.name = stringifyPosition(options.place) || "1:1";
      this.place = options.place || void 0;
      this.reason = this.message;
      this.ruleId = options.ruleId || void 0;
      this.source = options.source || void 0;
      this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
      this.actual;
      this.expected;
      this.note;
      this.url;
    }
  };
  VFileMessage.prototype.file = "";
  VFileMessage.prototype.name = "";
  VFileMessage.prototype.reason = "";
  VFileMessage.prototype.message = "";
  VFileMessage.prototype.stack = "";
  VFileMessage.prototype.column = void 0;
  VFileMessage.prototype.line = void 0;
  VFileMessage.prototype.ancestors = void 0;
  VFileMessage.prototype.cause = void 0;
  VFileMessage.prototype.fatal = void 0;
  VFileMessage.prototype.place = void 0;
  VFileMessage.prototype.ruleId = void 0;
  VFileMessage.prototype.source = void 0;

  // node_modules/vfile/lib/minpath.browser.js
  var minpath = { basename, dirname, extname, join, sep: "/" };
  function basename(path2, extname2) {
    if (extname2 !== void 0 && typeof extname2 !== "string") {
      throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path2);
    let start = 0;
    let end = -1;
    let index2 = path2.length;
    let seenNonSlash;
    if (extname2 === void 0 || extname2.length === 0 || extname2.length > path2.length) {
      while (index2--) {
        if (path2.codePointAt(index2) === 47) {
          if (seenNonSlash) {
            start = index2 + 1;
            break;
          }
        } else if (end < 0) {
          seenNonSlash = true;
          end = index2 + 1;
        }
      }
      return end < 0 ? "" : path2.slice(start, end);
    }
    if (extname2 === path2) {
      return "";
    }
    let firstNonSlashEnd = -1;
    let extnameIndex = extname2.length - 1;
    while (index2--) {
      if (path2.codePointAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd < 0) {
          seenNonSlash = true;
          firstNonSlashEnd = index2 + 1;
        }
        if (extnameIndex > -1) {
          if (path2.codePointAt(index2) === extname2.codePointAt(extnameIndex--)) {
            if (extnameIndex < 0) {
              end = index2;
            }
          } else {
            extnameIndex = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end) {
      end = firstNonSlashEnd;
    } else if (end < 0) {
      end = path2.length;
    }
    return path2.slice(start, end);
  }
  function dirname(path2) {
    assertPath(path2);
    if (path2.length === 0) {
      return ".";
    }
    let end = -1;
    let index2 = path2.length;
    let unmatchedSlash;
    while (--index2) {
      if (path2.codePointAt(index2) === 47) {
        if (unmatchedSlash) {
          end = index2;
          break;
        }
      } else if (!unmatchedSlash) {
        unmatchedSlash = true;
      }
    }
    return end < 0 ? path2.codePointAt(0) === 47 ? "/" : "." : end === 1 && path2.codePointAt(0) === 47 ? "//" : path2.slice(0, end);
  }
  function extname(path2) {
    assertPath(path2);
    let index2 = path2.length;
    let end = -1;
    let startPart = 0;
    let startDot = -1;
    let preDotState = 0;
    let unmatchedSlash;
    while (index2--) {
      const code3 = path2.codePointAt(index2);
      if (code3 === 47) {
        if (unmatchedSlash) {
          startPart = index2 + 1;
          break;
        }
        continue;
      }
      if (end < 0) {
        unmatchedSlash = true;
        end = index2 + 1;
      }
      if (code3 === 46) {
        if (startDot < 0) {
          startDot = index2;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot > -1) {
        preDotState = -1;
      }
    }
    if (startDot < 0 || end < 0 || // We saw a non-dot character immediately before the dot.
    preDotState === 0 || // The (right-most) trimmed path component is exactly `..`.
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path2.slice(startDot, end);
  }
  function join(...segments) {
    let index2 = -1;
    let joined;
    while (++index2 < segments.length) {
      assertPath(segments[index2]);
      if (segments[index2]) {
        joined = joined === void 0 ? segments[index2] : joined + "/" + segments[index2];
      }
    }
    return joined === void 0 ? "." : normalize(joined);
  }
  function normalize(path2) {
    assertPath(path2);
    const absolute = path2.codePointAt(0) === 47;
    let value2 = normalizeString(path2, !absolute);
    if (value2.length === 0 && !absolute) {
      value2 = ".";
    }
    if (value2.length > 0 && path2.codePointAt(path2.length - 1) === 47) {
      value2 += "/";
    }
    return absolute ? "/" + value2 : value2;
  }
  function normalizeString(path2, allowAboveRoot) {
    let result = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let index2 = -1;
    let code3;
    let lastSlashIndex;
    while (++index2 <= path2.length) {
      if (index2 < path2.length) {
        code3 = path2.codePointAt(index2);
      } else if (code3 === 47) {
        break;
      } else {
        code3 = 47;
      }
      if (code3 === 47) {
        if (lastSlash === index2 - 1 || dots === 1) {
        } else if (lastSlash !== index2 - 1 && dots === 2) {
          if (result.length < 2 || lastSegmentLength !== 2 || result.codePointAt(result.length - 1) !== 46 || result.codePointAt(result.length - 2) !== 46) {
            if (result.length > 2) {
              lastSlashIndex = result.lastIndexOf("/");
              if (lastSlashIndex !== result.length - 1) {
                if (lastSlashIndex < 0) {
                  result = "";
                  lastSegmentLength = 0;
                } else {
                  result = result.slice(0, lastSlashIndex);
                  lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
                }
                lastSlash = index2;
                dots = 0;
                continue;
              }
            } else if (result.length > 0) {
              result = "";
              lastSegmentLength = 0;
              lastSlash = index2;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            result = result.length > 0 ? result + "/.." : "..";
            lastSegmentLength = 2;
          }
        } else {
          if (result.length > 0) {
            result += "/" + path2.slice(lastSlash + 1, index2);
          } else {
            result = path2.slice(lastSlash + 1, index2);
          }
          lastSegmentLength = index2 - lastSlash - 1;
        }
        lastSlash = index2;
        dots = 0;
      } else if (code3 === 46 && dots > -1) {
        dots++;
      } else {
        dots = -1;
      }
    }
    return result;
  }
  function assertPath(path2) {
    if (typeof path2 !== "string") {
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(path2)
      );
    }
  }

  // node_modules/vfile/lib/minproc.browser.js
  var minproc = { cwd };
  function cwd() {
    return "/";
  }

  // node_modules/vfile/lib/minurl.shared.js
  function isUrl(fileUrlOrPath) {
    return Boolean(
      fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && "href" in fileUrlOrPath && fileUrlOrPath.href && "protocol" in fileUrlOrPath && fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
      fileUrlOrPath.auth === void 0
    );
  }

  // node_modules/vfile/lib/minurl.browser.js
  function urlToPath(path2) {
    if (typeof path2 === "string") {
      path2 = new URL(path2);
    } else if (!isUrl(path2)) {
      const error = new TypeError(
        'The "path" argument must be of type string or an instance of URL. Received `' + path2 + "`"
      );
      error.code = "ERR_INVALID_ARG_TYPE";
      throw error;
    }
    if (path2.protocol !== "file:") {
      const error = new TypeError("The URL must be of scheme file");
      error.code = "ERR_INVALID_URL_SCHEME";
      throw error;
    }
    return getPathFromURLPosix(path2);
  }
  function getPathFromURLPosix(url) {
    if (url.hostname !== "") {
      const error = new TypeError(
        'File URL host must be "localhost" or empty on darwin'
      );
      error.code = "ERR_INVALID_FILE_URL_HOST";
      throw error;
    }
    const pathname = url.pathname;
    let index2 = -1;
    while (++index2 < pathname.length) {
      if (pathname.codePointAt(index2) === 37 && pathname.codePointAt(index2 + 1) === 50) {
        const third = pathname.codePointAt(index2 + 2);
        if (third === 70 || third === 102) {
          const error = new TypeError(
            "File URL path must not include encoded / characters"
          );
          error.code = "ERR_INVALID_FILE_URL_PATH";
          throw error;
        }
      }
    }
    return decodeURIComponent(pathname);
  }

  // node_modules/vfile/lib/index.js
  var order = (
    /** @type {const} */
    [
      "history",
      "path",
      "basename",
      "stem",
      "extname",
      "dirname"
    ]
  );
  var VFile = class {
    /**
     * Create a new virtual file.
     *
     * `options` is treated as:
     *
     * *   `string` or `Uint8Array` — `{value: options}`
     * *   `URL` — `{path: options}`
     * *   `VFile` — shallow copies its data over to the new file
     * *   `object` — all fields are shallow copied over to the new file
     *
     * Path related fields are set in the following order (least specific to
     * most specific): `history`, `path`, `basename`, `stem`, `extname`,
     * `dirname`.
     *
     * You cannot set `dirname` or `extname` without setting either `history`,
     * `path`, `basename`, or `stem` too.
     *
     * @param {Compatible | null | undefined} [value]
     *   File value.
     * @returns
     *   New instance.
     */
    constructor(value2) {
      let options;
      if (!value2) {
        options = {};
      } else if (isUrl(value2)) {
        options = { path: value2 };
      } else if (typeof value2 === "string" || isUint8Array(value2)) {
        options = { value: value2 };
      } else {
        options = value2;
      }
      this.cwd = "cwd" in options ? "" : minproc.cwd();
      this.data = {};
      this.history = [];
      this.messages = [];
      this.value;
      this.map;
      this.result;
      this.stored;
      let index2 = -1;
      while (++index2 < order.length) {
        const field2 = order[index2];
        if (field2 in options && options[field2] !== void 0 && options[field2] !== null) {
          this[field2] = field2 === "history" ? [...options[field2]] : options[field2];
        }
      }
      let field;
      for (field in options) {
        if (!order.includes(field)) {
          this[field] = options[field];
        }
      }
    }
    /**
     * Get the basename (including extname) (example: `'index.min.js'`).
     *
     * @returns {string | undefined}
     *   Basename.
     */
    get basename() {
      return typeof this.path === "string" ? minpath.basename(this.path) : void 0;
    }
    /**
     * Set basename (including extname) (`'index.min.js'`).
     *
     * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
     * on windows).
     * Cannot be nullified (use `file.path = file.dirname` instead).
     *
     * @param {string} basename
     *   Basename.
     * @returns {undefined}
     *   Nothing.
     */
    set basename(basename2) {
      assertNonEmpty(basename2, "basename");
      assertPart(basename2, "basename");
      this.path = minpath.join(this.dirname || "", basename2);
    }
    /**
     * Get the parent path (example: `'~'`).
     *
     * @returns {string | undefined}
     *   Dirname.
     */
    get dirname() {
      return typeof this.path === "string" ? minpath.dirname(this.path) : void 0;
    }
    /**
     * Set the parent path (example: `'~'`).
     *
     * Cannot be set if there’s no `path` yet.
     *
     * @param {string | undefined} dirname
     *   Dirname.
     * @returns {undefined}
     *   Nothing.
     */
    set dirname(dirname2) {
      assertPath2(this.basename, "dirname");
      this.path = minpath.join(dirname2 || "", this.basename);
    }
    /**
     * Get the extname (including dot) (example: `'.js'`).
     *
     * @returns {string | undefined}
     *   Extname.
     */
    get extname() {
      return typeof this.path === "string" ? minpath.extname(this.path) : void 0;
    }
    /**
     * Set the extname (including dot) (example: `'.js'`).
     *
     * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
     * on windows).
     * Cannot be set if there’s no `path` yet.
     *
     * @param {string | undefined} extname
     *   Extname.
     * @returns {undefined}
     *   Nothing.
     */
    set extname(extname2) {
      assertPart(extname2, "extname");
      assertPath2(this.dirname, "extname");
      if (extname2) {
        if (extname2.codePointAt(0) !== 46) {
          throw new Error("`extname` must start with `.`");
        }
        if (extname2.includes(".", 1)) {
          throw new Error("`extname` cannot contain multiple dots");
        }
      }
      this.path = minpath.join(this.dirname, this.stem + (extname2 || ""));
    }
    /**
     * Get the full path (example: `'~/index.min.js'`).
     *
     * @returns {string}
     *   Path.
     */
    get path() {
      return this.history[this.history.length - 1];
    }
    /**
     * Set the full path (example: `'~/index.min.js'`).
     *
     * Cannot be nullified.
     * You can set a file URL (a `URL` object with a `file:` protocol) which will
     * be turned into a path with `url.fileURLToPath`.
     *
     * @param {URL | string} path
     *   Path.
     * @returns {undefined}
     *   Nothing.
     */
    set path(path2) {
      if (isUrl(path2)) {
        path2 = urlToPath(path2);
      }
      assertNonEmpty(path2, "path");
      if (this.path !== path2) {
        this.history.push(path2);
      }
    }
    /**
     * Get the stem (basename w/o extname) (example: `'index.min'`).
     *
     * @returns {string | undefined}
     *   Stem.
     */
    get stem() {
      return typeof this.path === "string" ? minpath.basename(this.path, this.extname) : void 0;
    }
    /**
     * Set the stem (basename w/o extname) (example: `'index.min'`).
     *
     * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
     * on windows).
     * Cannot be nullified (use `file.path = file.dirname` instead).
     *
     * @param {string} stem
     *   Stem.
     * @returns {undefined}
     *   Nothing.
     */
    set stem(stem) {
      assertNonEmpty(stem, "stem");
      assertPart(stem, "stem");
      this.path = minpath.join(this.dirname || "", stem + (this.extname || ""));
    }
    // Normal prototypal methods.
    /**
     * Create a fatal message for `reason` associated with the file.
     *
     * The `fatal` field of the message is set to `true` (error; file not usable)
     * and the `file` field is set to the current file path.
     * The message is added to the `messages` field on `file`.
     *
     * > 🪦 **Note**: also has obsolete signatures.
     *
     * @overload
     * @param {string} reason
     * @param {MessageOptions | null | undefined} [options]
     * @returns {never}
     *
     * @overload
     * @param {string} reason
     * @param {Node | NodeLike | null | undefined} parent
     * @param {string | null | undefined} [origin]
     * @returns {never}
     *
     * @overload
     * @param {string} reason
     * @param {Point | Position | null | undefined} place
     * @param {string | null | undefined} [origin]
     * @returns {never}
     *
     * @overload
     * @param {string} reason
     * @param {string | null | undefined} [origin]
     * @returns {never}
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {Node | NodeLike | null | undefined} parent
     * @param {string | null | undefined} [origin]
     * @returns {never}
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {Point | Position | null | undefined} place
     * @param {string | null | undefined} [origin]
     * @returns {never}
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {string | null | undefined} [origin]
     * @returns {never}
     *
     * @param {Error | VFileMessage | string} causeOrReason
     *   Reason for message, should use markdown.
     * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
     *   Configuration (optional).
     * @param {string | null | undefined} [origin]
     *   Place in code where the message originates (example:
     *   `'my-package:my-rule'` or `'my-rule'`).
     * @returns {never}
     *   Never.
     * @throws {VFileMessage}
     *   Message.
     */
    fail(causeOrReason, optionsOrParentOrPlace, origin) {
      const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
      message.fatal = true;
      throw message;
    }
    /**
     * Create an info message for `reason` associated with the file.
     *
     * The `fatal` field of the message is set to `undefined` (info; change
     * likely not needed) and the `file` field is set to the current file path.
     * The message is added to the `messages` field on `file`.
     *
     * > 🪦 **Note**: also has obsolete signatures.
     *
     * @overload
     * @param {string} reason
     * @param {MessageOptions | null | undefined} [options]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {string} reason
     * @param {Node | NodeLike | null | undefined} parent
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {string} reason
     * @param {Point | Position | null | undefined} place
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {string} reason
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {Node | NodeLike | null | undefined} parent
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {Point | Position | null | undefined} place
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @param {Error | VFileMessage | string} causeOrReason
     *   Reason for message, should use markdown.
     * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
     *   Configuration (optional).
     * @param {string | null | undefined} [origin]
     *   Place in code where the message originates (example:
     *   `'my-package:my-rule'` or `'my-rule'`).
     * @returns {VFileMessage}
     *   Message.
     */
    info(causeOrReason, optionsOrParentOrPlace, origin) {
      const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
      message.fatal = void 0;
      return message;
    }
    /**
     * Create a message for `reason` associated with the file.
     *
     * The `fatal` field of the message is set to `false` (warning; change may be
     * needed) and the `file` field is set to the current file path.
     * The message is added to the `messages` field on `file`.
     *
     * > 🪦 **Note**: also has obsolete signatures.
     *
     * @overload
     * @param {string} reason
     * @param {MessageOptions | null | undefined} [options]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {string} reason
     * @param {Node | NodeLike | null | undefined} parent
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {string} reason
     * @param {Point | Position | null | undefined} place
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {string} reason
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {Node | NodeLike | null | undefined} parent
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {Point | Position | null | undefined} place
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @overload
     * @param {Error | VFileMessage} cause
     * @param {string | null | undefined} [origin]
     * @returns {VFileMessage}
     *
     * @param {Error | VFileMessage | string} causeOrReason
     *   Reason for message, should use markdown.
     * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
     *   Configuration (optional).
     * @param {string | null | undefined} [origin]
     *   Place in code where the message originates (example:
     *   `'my-package:my-rule'` or `'my-rule'`).
     * @returns {VFileMessage}
     *   Message.
     */
    message(causeOrReason, optionsOrParentOrPlace, origin) {
      const message = new VFileMessage(
        // @ts-expect-error: the overloads are fine.
        causeOrReason,
        optionsOrParentOrPlace,
        origin
      );
      if (this.path) {
        message.name = this.path + ":" + message.name;
        message.file = this.path;
      }
      message.fatal = false;
      this.messages.push(message);
      return message;
    }
    /**
     * Serialize the file.
     *
     * > **Note**: which encodings are supported depends on the engine.
     * > For info on Node.js, see:
     * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
     *
     * @param {string | null | undefined} [encoding='utf8']
     *   Character encoding to understand `value` as when it’s a `Uint8Array`
     *   (default: `'utf-8'`).
     * @returns {string}
     *   Serialized file.
     */
    toString(encoding) {
      if (this.value === void 0) {
        return "";
      }
      if (typeof this.value === "string") {
        return this.value;
      }
      const decoder = new TextDecoder(encoding || void 0);
      return decoder.decode(this.value);
    }
  };
  function assertPart(part, name2) {
    if (part && part.includes(minpath.sep)) {
      throw new Error(
        "`" + name2 + "` cannot be a path: did not expect `" + minpath.sep + "`"
      );
    }
  }
  function assertNonEmpty(part, name2) {
    if (!part) {
      throw new Error("`" + name2 + "` cannot be empty");
    }
  }
  function assertPath2(path2, name2) {
    if (!path2) {
      throw new Error("Setting `" + name2 + "` requires `path` to be set too");
    }
  }
  function isUint8Array(value2) {
    return Boolean(
      value2 && typeof value2 === "object" && "byteLength" in value2 && "byteOffset" in value2
    );
  }

  // node_modules/unified/lib/callable-instance.js
  var CallableInstance = (
    /**
     * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
     */
    /** @type {unknown} */
    /**
     * @this {Function}
     * @param {string | symbol} property
     * @returns {(...parameters: Array<unknown>) => unknown}
     */
    function(property) {
      const self = this;
      const constr = self.constructor;
      const proto = (
        /** @type {Record<string | symbol, Function>} */
        // Prototypes do exist.
        // type-coverage:ignore-next-line
        constr.prototype
      );
      const value2 = proto[property];
      const apply = function() {
        return value2.apply(apply, arguments);
      };
      Object.setPrototypeOf(apply, proto);
      return apply;
    }
  );

  // node_modules/unified/lib/index.js
  var own2 = {}.hasOwnProperty;
  var Processor = class extends CallableInstance {
    /**
     * Create a processor.
     */
    constructor() {
      super("copy");
      this.Compiler = void 0;
      this.Parser = void 0;
      this.attachers = [];
      this.compiler = void 0;
      this.freezeIndex = -1;
      this.frozen = void 0;
      this.namespace = {};
      this.parser = void 0;
      this.transformers = trough();
    }
    /**
     * Copy a processor.
     *
     * @deprecated
     *   This is a private internal method and should not be used.
     * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
     *   New *unfrozen* processor ({@linkcode Processor}) that is
     *   configured to work the same as its ancestor.
     *   When the descendant processor is configured in the future it does not
     *   affect the ancestral processor.
     */
    copy() {
      const destination = (
        /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
        new Processor()
      );
      let index2 = -1;
      while (++index2 < this.attachers.length) {
        const attacher = this.attachers[index2];
        destination.use(...attacher);
      }
      destination.data((0, import_extend.default)(true, {}, this.namespace));
      return destination;
    }
    /**
     * Configure the processor with info available to all plugins.
     * Information is stored in an object.
     *
     * Typically, options can be given to a specific plugin, but sometimes it
     * makes sense to have information shared with several plugins.
     * For example, a list of HTML elements that are self-closing, which is
     * needed during all phases.
     *
     * > **Note**: setting information cannot occur on *frozen* processors.
     * > Call the processor first to create a new unfrozen processor.
     *
     * > **Note**: to register custom data in TypeScript, augment the
     * > {@linkcode Data} interface.
     *
     * @example
     *   This example show how to get and set info:
     *
     *   ```js
     *   import {unified} from 'unified'
     *
     *   const processor = unified().data('alpha', 'bravo')
     *
     *   processor.data('alpha') // => 'bravo'
     *
     *   processor.data() // => {alpha: 'bravo'}
     *
     *   processor.data({charlie: 'delta'})
     *
     *   processor.data() // => {charlie: 'delta'}
     *   ```
     *
     * @template {keyof Data} Key
     *
     * @overload
     * @returns {Data}
     *
     * @overload
     * @param {Data} dataset
     * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
     *
     * @overload
     * @param {Key} key
     * @returns {Data[Key]}
     *
     * @overload
     * @param {Key} key
     * @param {Data[Key]} value
     * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
     *
     * @param {Data | Key} [key]
     *   Key to get or set, or entire dataset to set, or nothing to get the
     *   entire dataset (optional).
     * @param {Data[Key]} [value]
     *   Value to set (optional).
     * @returns {unknown}
     *   The current processor when setting, the value at `key` when getting, or
     *   the entire dataset when getting without key.
     */
    data(key, value2) {
      if (typeof key === "string") {
        if (arguments.length === 2) {
          assertUnfrozen("data", this.frozen);
          this.namespace[key] = value2;
          return this;
        }
        return own2.call(this.namespace, key) && this.namespace[key] || void 0;
      }
      if (key) {
        assertUnfrozen("data", this.frozen);
        this.namespace = key;
        return this;
      }
      return this.namespace;
    }
    /**
     * Freeze a processor.
     *
     * Frozen processors are meant to be extended and not to be configured
     * directly.
     *
     * When a processor is frozen it cannot be unfrozen.
     * New processors working the same way can be created by calling the
     * processor.
     *
     * It’s possible to freeze processors explicitly by calling `.freeze()`.
     * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
     * `.stringify()`, `.process()`, or `.processSync()` are called.
     *
     * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
     *   The current processor.
     */
    freeze() {
      if (this.frozen) {
        return this;
      }
      const self = (
        /** @type {Processor} */
        /** @type {unknown} */
        this
      );
      while (++this.freezeIndex < this.attachers.length) {
        const [attacher, ...options] = this.attachers[this.freezeIndex];
        if (options[0] === false) {
          continue;
        }
        if (options[0] === true) {
          options[0] = void 0;
        }
        const transformer = attacher.call(self, ...options);
        if (typeof transformer === "function") {
          this.transformers.use(transformer);
        }
      }
      this.frozen = true;
      this.freezeIndex = Number.POSITIVE_INFINITY;
      return this;
    }
    /**
     * Parse text to a syntax tree.
     *
     * > **Note**: `parse` freezes the processor if not already *frozen*.
     *
     * > **Note**: `parse` performs the parse phase, not the run phase or other
     * > phases.
     *
     * @param {Compatible | undefined} [file]
     *   file to parse (optional); typically `string` or `VFile`; any value
     *   accepted as `x` in `new VFile(x)`.
     * @returns {ParseTree extends undefined ? Node : ParseTree}
     *   Syntax tree representing `file`.
     */
    parse(file) {
      this.freeze();
      const realFile = vfile(file);
      const parser = this.parser || this.Parser;
      assertParser("parse", parser);
      return parser(String(realFile), realFile);
    }
    /**
     * Process the given file as configured on the processor.
     *
     * > **Note**: `process` freezes the processor if not already *frozen*.
     *
     * > **Note**: `process` performs the parse, run, and stringify phases.
     *
     * @overload
     * @param {Compatible | undefined} file
     * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
     * @returns {undefined}
     *
     * @overload
     * @param {Compatible | undefined} [file]
     * @returns {Promise<VFileWithOutput<CompileResult>>}
     *
     * @param {Compatible | undefined} [file]
     *   File (optional); typically `string` or `VFile`]; any value accepted as
     *   `x` in `new VFile(x)`.
     * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
     *   Callback (optional).
     * @returns {Promise<VFile> | undefined}
     *   Nothing if `done` is given.
     *   Otherwise a promise, rejected with a fatal error or resolved with the
     *   processed file.
     *
     *   The parsed, transformed, and compiled value is available at
     *   `file.value` (see note).
     *
     *   > **Note**: unified typically compiles by serializing: most
     *   > compilers return `string` (or `Uint8Array`).
     *   > Some compilers, such as the one configured with
     *   > [`rehype-react`][rehype-react], return other values (in this case, a
     *   > React tree).
     *   > If you’re using a compiler that doesn’t serialize, expect different
     *   > result values.
     *   >
     *   > To register custom results in TypeScript, add them to
     *   > {@linkcode CompileResultMap}.
     *
     *   [rehype-react]: https://github.com/rehypejs/rehype-react
     */
    process(file, done) {
      const self = this;
      this.freeze();
      assertParser("process", this.parser || this.Parser);
      assertCompiler("process", this.compiler || this.Compiler);
      return done ? executor(void 0, done) : new Promise(executor);
      function executor(resolve, reject) {
        const realFile = vfile(file);
        const parseTree = (
          /** @type {HeadTree extends undefined ? Node : HeadTree} */
          /** @type {unknown} */
          self.parse(realFile)
        );
        self.run(parseTree, realFile, function(error, tree, file2) {
          if (error || !tree || !file2) {
            return realDone(error);
          }
          const compileTree = (
            /** @type {CompileTree extends undefined ? Node : CompileTree} */
            /** @type {unknown} */
            tree
          );
          const compileResult = self.stringify(compileTree, file2);
          if (looksLikeAValue(compileResult)) {
            file2.value = compileResult;
          } else {
            file2.result = compileResult;
          }
          realDone(
            error,
            /** @type {VFileWithOutput<CompileResult>} */
            file2
          );
        });
        function realDone(error, file2) {
          if (error || !file2) {
            reject(error);
          } else if (resolve) {
            resolve(file2);
          } else {
            ok2(done, "`done` is defined if `resolve` is not");
            done(void 0, file2);
          }
        }
      }
    }
    /**
     * Process the given file as configured on the processor.
     *
     * An error is thrown if asynchronous transforms are configured.
     *
     * > **Note**: `processSync` freezes the processor if not already *frozen*.
     *
     * > **Note**: `processSync` performs the parse, run, and stringify phases.
     *
     * @param {Compatible | undefined} [file]
     *   File (optional); typically `string` or `VFile`; any value accepted as
     *   `x` in `new VFile(x)`.
     * @returns {VFileWithOutput<CompileResult>}
     *   The processed file.
     *
     *   The parsed, transformed, and compiled value is available at
     *   `file.value` (see note).
     *
     *   > **Note**: unified typically compiles by serializing: most
     *   > compilers return `string` (or `Uint8Array`).
     *   > Some compilers, such as the one configured with
     *   > [`rehype-react`][rehype-react], return other values (in this case, a
     *   > React tree).
     *   > If you’re using a compiler that doesn’t serialize, expect different
     *   > result values.
     *   >
     *   > To register custom results in TypeScript, add them to
     *   > {@linkcode CompileResultMap}.
     *
     *   [rehype-react]: https://github.com/rehypejs/rehype-react
     */
    processSync(file) {
      let complete = false;
      let result;
      this.freeze();
      assertParser("processSync", this.parser || this.Parser);
      assertCompiler("processSync", this.compiler || this.Compiler);
      this.process(file, realDone);
      assertDone("processSync", "process", complete);
      ok2(result, "we either bailed on an error or have a tree");
      return result;
      function realDone(error, file2) {
        complete = true;
        bail(error);
        result = file2;
      }
    }
    /**
     * Run *transformers* on a syntax tree.
     *
     * > **Note**: `run` freezes the processor if not already *frozen*.
     *
     * > **Note**: `run` performs the run phase, not other phases.
     *
     * @overload
     * @param {HeadTree extends undefined ? Node : HeadTree} tree
     * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
     * @returns {undefined}
     *
     * @overload
     * @param {HeadTree extends undefined ? Node : HeadTree} tree
     * @param {Compatible | undefined} file
     * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
     * @returns {undefined}
     *
     * @overload
     * @param {HeadTree extends undefined ? Node : HeadTree} tree
     * @param {Compatible | undefined} [file]
     * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
     *
     * @param {HeadTree extends undefined ? Node : HeadTree} tree
     *   Tree to transform and inspect.
     * @param {(
     *   RunCallback<TailTree extends undefined ? Node : TailTree> |
     *   Compatible
     * )} [file]
     *   File associated with `node` (optional); any value accepted as `x` in
     *   `new VFile(x)`.
     * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
     *   Callback (optional).
     * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
     *   Nothing if `done` is given.
     *   Otherwise, a promise rejected with a fatal error or resolved with the
     *   transformed tree.
     */
    run(tree, file, done) {
      assertNode(tree);
      this.freeze();
      const transformers = this.transformers;
      if (!done && typeof file === "function") {
        done = file;
        file = void 0;
      }
      return done ? executor(void 0, done) : new Promise(executor);
      function executor(resolve, reject) {
        ok2(
          typeof file !== "function",
          "`file` can\u2019t be a `done` anymore, we checked"
        );
        const realFile = vfile(file);
        transformers.run(tree, realFile, realDone);
        function realDone(error, outputTree, file2) {
          const resultingTree = (
            /** @type {TailTree extends undefined ? Node : TailTree} */
            outputTree || tree
          );
          if (error) {
            reject(error);
          } else if (resolve) {
            resolve(resultingTree);
          } else {
            ok2(done, "`done` is defined if `resolve` is not");
            done(void 0, resultingTree, file2);
          }
        }
      }
    }
    /**
     * Run *transformers* on a syntax tree.
     *
     * An error is thrown if asynchronous transforms are configured.
     *
     * > **Note**: `runSync` freezes the processor if not already *frozen*.
     *
     * > **Note**: `runSync` performs the run phase, not other phases.
     *
     * @param {HeadTree extends undefined ? Node : HeadTree} tree
     *   Tree to transform and inspect.
     * @param {Compatible | undefined} [file]
     *   File associated with `node` (optional); any value accepted as `x` in
     *   `new VFile(x)`.
     * @returns {TailTree extends undefined ? Node : TailTree}
     *   Transformed tree.
     */
    runSync(tree, file) {
      let complete = false;
      let result;
      this.run(tree, file, realDone);
      assertDone("runSync", "run", complete);
      ok2(result, "we either bailed on an error or have a tree");
      return result;
      function realDone(error, tree2) {
        bail(error);
        result = tree2;
        complete = true;
      }
    }
    /**
     * Compile a syntax tree.
     *
     * > **Note**: `stringify` freezes the processor if not already *frozen*.
     *
     * > **Note**: `stringify` performs the stringify phase, not the run phase
     * > or other phases.
     *
     * @param {CompileTree extends undefined ? Node : CompileTree} tree
     *   Tree to compile.
     * @param {Compatible | undefined} [file]
     *   File associated with `node` (optional); any value accepted as `x` in
     *   `new VFile(x)`.
     * @returns {CompileResult extends undefined ? Value : CompileResult}
     *   Textual representation of the tree (see note).
     *
     *   > **Note**: unified typically compiles by serializing: most compilers
     *   > return `string` (or `Uint8Array`).
     *   > Some compilers, such as the one configured with
     *   > [`rehype-react`][rehype-react], return other values (in this case, a
     *   > React tree).
     *   > If you’re using a compiler that doesn’t serialize, expect different
     *   > result values.
     *   >
     *   > To register custom results in TypeScript, add them to
     *   > {@linkcode CompileResultMap}.
     *
     *   [rehype-react]: https://github.com/rehypejs/rehype-react
     */
    stringify(tree, file) {
      this.freeze();
      const realFile = vfile(file);
      const compiler2 = this.compiler || this.Compiler;
      assertCompiler("stringify", compiler2);
      assertNode(tree);
      return compiler2(tree, realFile);
    }
    /**
     * Configure the processor to use a plugin, a list of usable values, or a
     * preset.
     *
     * If the processor is already using a plugin, the previous plugin
     * configuration is changed based on the options that are passed in.
     * In other words, the plugin is not added a second time.
     *
     * > **Note**: `use` cannot be called on *frozen* processors.
     * > Call the processor first to create a new unfrozen processor.
     *
     * @example
     *   There are many ways to pass plugins to `.use()`.
     *   This example gives an overview:
     *
     *   ```js
     *   import {unified} from 'unified'
     *
     *   unified()
     *     // Plugin with options:
     *     .use(pluginA, {x: true, y: true})
     *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
     *     .use(pluginA, {y: false, z: true})
     *     // Plugins:
     *     .use([pluginB, pluginC])
     *     // Two plugins, the second with options:
     *     .use([pluginD, [pluginE, {}]])
     *     // Preset with plugins and settings:
     *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
     *     // Settings only:
     *     .use({settings: {position: false}})
     *   ```
     *
     * @template {Array<unknown>} [Parameters=[]]
     * @template {Node | string | undefined} [Input=undefined]
     * @template [Output=Input]
     *
     * @overload
     * @param {Preset | null | undefined} [preset]
     * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
     *
     * @overload
     * @param {PluggableList} list
     * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
     *
     * @overload
     * @param {Plugin<Parameters, Input, Output>} plugin
     * @param {...(Parameters | [boolean])} parameters
     * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
     *
     * @param {PluggableList | Plugin | Preset | null | undefined} value
     *   Usable value.
     * @param {...unknown} parameters
     *   Parameters, when a plugin is given as a usable value.
     * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
     *   Current processor.
     */
    use(value2, ...parameters) {
      const attachers = this.attachers;
      const namespace = this.namespace;
      assertUnfrozen("use", this.frozen);
      if (value2 === null || value2 === void 0) {
      } else if (typeof value2 === "function") {
        addPlugin(value2, parameters);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          addList(value2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
      return this;
      function add(value3) {
        if (typeof value3 === "function") {
          addPlugin(value3, []);
        } else if (typeof value3 === "object") {
          if (Array.isArray(value3)) {
            const [plugin, ...parameters2] = (
              /** @type {PluginTuple<Array<unknown>>} */
              value3
            );
            addPlugin(plugin, parameters2);
          } else {
            addPreset(value3);
          }
        } else {
          throw new TypeError("Expected usable value, not `" + value3 + "`");
        }
      }
      function addPreset(result) {
        if (!("plugins" in result) && !("settings" in result)) {
          throw new Error(
            "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
          );
        }
        addList(result.plugins);
        if (result.settings) {
          namespace.settings = (0, import_extend.default)(true, namespace.settings, result.settings);
        }
      }
      function addList(plugins) {
        let index2 = -1;
        if (plugins === null || plugins === void 0) {
        } else if (Array.isArray(plugins)) {
          while (++index2 < plugins.length) {
            const thing = plugins[index2];
            add(thing);
          }
        } else {
          throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
        }
      }
      function addPlugin(plugin, parameters2) {
        let index2 = -1;
        let entryIndex = -1;
        while (++index2 < attachers.length) {
          if (attachers[index2][0] === plugin) {
            entryIndex = index2;
            break;
          }
        }
        if (entryIndex === -1) {
          attachers.push([plugin, ...parameters2]);
        } else if (parameters2.length > 0) {
          let [primary, ...rest] = parameters2;
          const currentPrimary = attachers[entryIndex][1];
          if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
            primary = (0, import_extend.default)(true, currentPrimary, primary);
          }
          attachers[entryIndex] = [plugin, primary, ...rest];
        }
      }
    }
  };
  var unified = new Processor().freeze();
  function assertParser(name2, value2) {
    if (typeof value2 !== "function") {
      throw new TypeError("Cannot `" + name2 + "` without `parser`");
    }
  }
  function assertCompiler(name2, value2) {
    if (typeof value2 !== "function") {
      throw new TypeError("Cannot `" + name2 + "` without `compiler`");
    }
  }
  function assertUnfrozen(name2, frozen) {
    if (frozen) {
      throw new Error(
        "Cannot call `" + name2 + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
      );
    }
  }
  function assertNode(node2) {
    if (!isPlainObject(node2) || typeof node2.type !== "string") {
      throw new TypeError("Expected node, got `" + node2 + "`");
    }
  }
  function assertDone(name2, asyncName, complete) {
    if (!complete) {
      throw new Error(
        "`" + name2 + "` finished async. Use `" + asyncName + "` instead"
      );
    }
  }
  function vfile(value2) {
    return looksLikeAVFile(value2) ? value2 : new VFile(value2);
  }
  function looksLikeAVFile(value2) {
    return Boolean(
      value2 && typeof value2 === "object" && "message" in value2 && "messages" in value2
    );
  }
  function looksLikeAValue(value2) {
    return typeof value2 === "string" || isUint8Array2(value2);
  }
  function isUint8Array2(value2) {
    return Boolean(
      value2 && typeof value2 === "object" && "byteLength" in value2 && "byteOffset" in value2
    );
  }

  // node_modules/xastscript/lib/index.js
  var x = (
    // Note: not yet possible to use the spread `...children` in JSDoc overloads.
    /**
     * @type {{
     *   (): Root
     *   (name: null | undefined, ...children: Array<Child>): Root
     *   (name: string, attributes?: Attributes, ...children: Array<Child>): Element
     *   (name: string, ...children: Array<Child>): Element
     * }}
     */
    /**
     * @param {string | null | undefined} [name]
     * @param {Attributes | Child | null | undefined} [attributes]
     * @param {Array<Child>} children
     * @returns {Result}
     */
    function(name2, attributes, ...children) {
      let index2 = -1;
      let node2;
      if (name2 === void 0 || name2 === null) {
        node2 = { type: "root", children: [] };
        children.unshift(attributes);
      } else if (typeof name2 === "string") {
        node2 = { type: "element", name: name2, attributes: {}, children: [] };
        if (isAttributes(attributes)) {
          let key;
          for (key in attributes) {
            if (attributes[key] !== void 0 && attributes[key] !== null && (typeof attributes[key] !== "number" || !Number.isNaN(attributes[key]))) {
              node2.attributes[key] = String(attributes[key]);
            }
          }
        } else {
          children.unshift(attributes);
        }
      } else {
        throw new TypeError("Expected element name, got `" + name2 + "`");
      }
      while (++index2 < children.length) {
        addChild(node2.children, children[index2]);
      }
      return node2;
    }
  );
  function addChild(nodes, value2) {
    let index2 = -1;
    if (value2 === void 0 || value2 === null) {
    } else if (typeof value2 === "string" || typeof value2 === "number") {
      nodes.push({ type: "text", value: String(value2) });
    } else if (Array.isArray(value2)) {
      while (++index2 < value2.length) {
        addChild(nodes, value2[index2]);
      }
    } else if (typeof value2 === "object" && "type" in value2) {
      if (value2.type === "root") {
        addChild(nodes, value2.children);
      } else {
        nodes.push(value2);
      }
    } else {
      throw new TypeError("Expected node, nodes, string, got `" + value2 + "`");
    }
  }
  function isAttributes(value2) {
    if (value2 === null || value2 === void 0 || typeof value2 !== "object" || Array.isArray(value2)) {
      return false;
    }
    return true;
  }

  // node_modules/stringify-entities/lib/core.js
  var defaultSubsetRegex = /["&'<>`]/g;
  var surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var controlCharactersRegex = (
    // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
    /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
  );
  var regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
  var subsetToRegexCache = /* @__PURE__ */ new WeakMap();
  function core(value2, options) {
    value2 = value2.replace(
      options.subset ? charactersToExpressionCached(options.subset) : defaultSubsetRegex,
      basic
    );
    if (options.subset || options.escapeOnly) {
      return value2;
    }
    return value2.replace(surrogatePairsRegex, surrogate).replace(controlCharactersRegex, basic);
    function surrogate(pair, index2, all3) {
      return options.format(
        (pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536,
        all3.charCodeAt(index2 + 2),
        options
      );
    }
    function basic(character, index2, all3) {
      return options.format(
        character.charCodeAt(0),
        all3.charCodeAt(index2 + 1),
        options
      );
    }
  }
  function charactersToExpressionCached(subset5) {
    let cached = subsetToRegexCache.get(subset5);
    if (!cached) {
      cached = charactersToExpression(subset5);
      subsetToRegexCache.set(subset5, cached);
    }
    return cached;
  }
  function charactersToExpression(subset5) {
    const groups = [];
    let index2 = -1;
    while (++index2 < subset5.length) {
      groups.push(subset5[index2].replace(regexEscapeRegex, "\\$&"));
    }
    return new RegExp("(?:" + groups.join("|") + ")", "g");
  }

  // node_modules/stringify-entities/lib/util/format-basic.js
  function formatBasic(code3) {
    return "&#x" + code3.toString(16).toUpperCase() + ";";
  }

  // node_modules/stringify-entities/lib/index.js
  function stringifyEntitiesLight(value2, options) {
    return core(value2, Object.assign({ format: formatBasic }, options));
  }

  // node_modules/xast-util-to-xml/lib/util-escape.js
  var noncharacter = /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g;
  function escape(value2, subset5, unsafe3) {
    const result = clean2(value2);
    return unsafe3 ? result.replace(unsafe3, encode) : encode(result);
    function encode(value3) {
      return stringifyEntitiesLight(value3, { subset: subset5 });
    }
  }
  function clean2(value2) {
    return String(value2 || "").replace(noncharacter, "");
  }

  // node_modules/xast-util-to-xml/lib/cdata.js
  var unsafe = /]]>/g;
  var subset = [">"];
  function cdata(node2) {
    return "<![CDATA[" + escape(node2.value, subset, unsafe) + "]]>";
  }

  // node_modules/xast-util-to-xml/lib/comment.js
  function comment(node2) {
    return "<!--" + escape(node2.value, ["-"]) + "-->";
  }

  // node_modules/xast-util-to-xml/lib/name.js
  var subset2 = ["	", "\n", " ", '"', "&", "'", "/", "<", "=", ">"];
  function name(value2) {
    return escape(value2, subset2);
  }

  // node_modules/xast-util-to-xml/lib/value.js
  function value(value2, state) {
    const result = String(value2);
    let quote = state.options.quote || '"';
    if (state.options.quoteSmart) {
      const other = quote === '"' ? "'" : '"';
      if (ccount(result, quote) > ccount(result, other)) {
        quote = other;
      }
    }
    return quote + escape(result, ["<", "&", quote]) + quote;
  }

  // node_modules/xast-util-to-xml/lib/doctype.js
  function doctype(node2, state) {
    const nodeName = name(node2.name);
    const pub = node2.public;
    const sys = node2.system;
    let result = "<!DOCTYPE";
    if (nodeName !== "") {
      result += " " + nodeName;
    }
    if (pub) {
      result += " PUBLIC " + value(pub, state);
    } else if (sys) {
      result += " SYSTEM";
    }
    if (sys) {
      result += " " + value(sys, state);
    }
    return result + ">";
  }

  // node_modules/xast-util-to-xml/lib/element.js
  var own3 = {}.hasOwnProperty;
  function element2(node2, state) {
    const nodeName = name(node2.name);
    const content3 = all2(node2, state);
    const attributes = node2.attributes || {};
    const close = content3 ? false : state.options.closeEmptyElements;
    const attrs = [];
    let key;
    for (key in attributes) {
      if (own3.call(attributes, key)) {
        const result = attributes[key];
        if (result !== null && result !== void 0) {
          attrs.push(name(key) + "=" + value(result, state));
        }
      }
    }
    return "<" + nodeName + (attrs.length === 0 ? "" : " " + attrs.join(" ")) + (close ? (state.options.tightClose ? "" : " ") + "/" : "") + ">" + content3 + (close ? "" : "</" + nodeName + ">");
  }

  // node_modules/xast-util-to-xml/lib/instruction.js
  var unsafe2 = /\?>/g;
  var subset3 = [">"];
  function instruction(node2) {
    const nodeName = name(node2.name) || "x";
    const result = escape(node2.value, subset3, unsafe2);
    return "<?" + nodeName + (result ? " " + result : "") + "?>";
  }

  // node_modules/xast-util-to-xml/lib/text.js
  var subset4 = ["&", "<"];
  function text5(node2) {
    return escape(node2.value, subset4);
  }

  // node_modules/xast-util-to-xml/lib/raw.js
  function raw(node2, state) {
    return state.options.allowDangerousXml ? node2.value : text5(node2);
  }

  // node_modules/xast-util-to-xml/lib/one.js
  var own4 = {}.hasOwnProperty;
  var handlers = {
    cdata,
    comment,
    doctype,
    element: element2,
    instruction,
    raw,
    root: all2,
    text: text5
  };
  function one2(node2, state) {
    const type = node2 && node2.type;
    if (!type) {
      throw new Error("Expected node, not `" + node2 + "`");
    }
    if (!own4.call(handlers, type)) {
      throw new Error("Cannot compile unknown node `" + type + "`");
    }
    const handle2 = handlers[type];
    const result = handle2(node2, state);
    return result;
  }
  function all2(parent, state) {
    const children = parent && parent.children || [];
    let index2 = -1;
    const results = [];
    while (++index2 < children.length) {
      results[index2] = one2(children[index2], state);
    }
    return results.join("");
  }

  // node_modules/xast-util-to-xml/lib/index.js
  function toXml(tree, options) {
    const state = { options: options || {} };
    if (typeof state.options.quote === "string" && state.options.quote !== '"' && state.options.quote !== "'") {
      throw new Error(
        "Invalid quote `" + state.options.quote + "`, expected `'` or `\"`"
      );
    }
    const node2 = Array.isArray(tree) ? { type: "root", children: tree } : tree;
    return one2(node2, state);
  }

  // src/xml-stringify.ts
  function xmlStringify(options) {
    const settings = __spreadValues(__spreadValues({}, this.data("settings")), options);
    this.compiler = function compiler2(tree) {
      return toXml(tree, settings);
    };
  }

  // src/utils.ts
  var headingNames = ["", "chapter", "section", "subsection"];
  var headingPrefixes = ["", "ch", "sec", "sub"];
  function makeText(txt) {
    return { type: "text", value: txt };
  }
  function makeQuote(txt, single = false) {
    return x(single ? "sq" : "q", [makeText(txt)]);
  }
  function extractText(children) {
    return children.map((ch) => {
      if ("value" in ch)
        return ch.value;
      else if ("children" in ch)
        return extractText(ch.children);
      else
        return "";
    }).join("-");
  }
  function makeHeading(depth, children) {
    const title = `${headingPrefixes[depth]}-${extractText(children).replace(/\W+/g, "-").toLowerCase()}`;
    const headingElement = x(headingNames[depth], { "xml:id": title }, [
      x("title", children)
    ]);
    return headingElement;
  }

  // src/replace-quotes.ts
  var DOUBLE_QUOTE = new RegExp('(?<=^|\\s)"(.*?)"', "g");
  var SINGLE_QUOTE = new RegExp("(?<=^|\\s)'(.*?)'", "g");
  function replaceQuotes() {
    return function(tree) {
      for (const regex of [DOUBLE_QUOTE, SINGLE_QUOTE]) {
        const isSingle = regex == SINGLE_QUOTE;
        visit(tree, "text", function(node2, index2, parent) {
          if (index2 == void 0)
            return;
          const parts = node2.value.split(regex);
          const xastParts = parts.map(
            (txt, i) => i % 2 == 0 ? makeText(txt) : makeQuote(txt, isSingle)
          );
          parent == null ? void 0 : parent.children.splice(index2, 1, ...xastParts);
        });
      }
    };
  }

  // src/fix-lists.ts
  var defaults = {
    mergeListToParagraph: false,
    omitInnerParagraph: false
  };
  function fixLists(options) {
    options = __spreadValues(__spreadValues({}, defaults), options);
    return function(tree) {
      if (options.mergeListToParagraph) {
        visit(tree, "element", function(node2, index2, parent) {
          if (parent == void 0 || index2 == void 0 || index2 == 0)
            return;
          const previousNode = parent.children[index2 - 1];
          if (!isElement("p", node2) || !isElement("p", previousNode))
            return;
          if (!isElement(["ul", "ol"], node2.children[0]))
            return;
          previousNode.children.push(...node2.children);
          parent.children.splice(index2, 1);
        });
      }
    };
  }
  function isElement(el, node2) {
    if (node2.type != "element")
      return false;
    return typeof el == "string" ? node2.name == el : el.includes(node2.name);
  }

  // src/md-to-ptx.ts
  function convertMarkdown(text6, options) {
    return unified().use(remarkParse).use(remarkInlineLinks).use(remarkGfm).use(mdToPtx).use(fixLists, options).use(replaceQuotes).use(xmlStringify, {}).processSync(text6).toString();
  }
  function mdToPtx() {
    return (tree) => makePtx(tree);
  }
  function makePtx(mdTree) {
    const rootEl = x("root");
    const root2 = x(null, [rootEl]);
    const ptxStack = [[0, rootEl]];
    let ptxCurr = [];
    function closeHeadingsNoHigherThan(depth) {
      while (ptxStack.length > 0) {
        const [nextDepth, nextHeading] = ptxStack.pop();
        nextHeading.children.push(...ptxCurr.filter((x2) => x2));
        if (nextDepth >= depth) {
          ptxCurr = [nextHeading];
        } else {
          ptxStack.push([nextDepth, nextHeading]);
          ptxCurr = [];
          break;
        }
      }
    }
    for (const node2 of mdTree.children) {
      if (node2.type == "heading" && node2.depth <= 3) {
        closeHeadingsNoHigherThan(node2.depth);
        const headingElement = makeHeading(
          node2.depth,
          node2.children.map(convertNode).filter((x2) => typeof x2 != "undefined")
        );
        ptxStack.push([node2.depth, headingElement]);
      } else {
        const ptxNode = convertNode(node2);
        if (ptxNode) {
          ptxCurr.push(ptxNode);
        }
      }
    }
    closeHeadingsNoHigherThan(0);
    if (ptxCurr.length != 1) {
      throw new Error(`Excepted current length 1 but found ${ptxCurr.length}
.`);
    }
    root2.children = rootEl.children;
    return root2;
  }
  function convertNode(node2) {
    var _a, _b, _c;
    switch (node2.type) {
      case "text":
        return makeText(node2.value);
      case "heading":
      case "paragraph":
        return x("p", node2.children.map(convertNode));
      case "emphasis":
        return x("em", node2.children.map(convertNode));
      case "strong":
        return x("term", node2.children.map(convertNode));
      case "blockquote":
        return x("blockquote", node2.children.map(convertNode));
      case "thematicBreak":
      case "break":
        return x("p", [makeText("&nbsp;")]);
      case "code":
        return x(
          "program",
          { language: (_a = node2.lang) != null ? _a : "$" },
          x("input", makeText(node2.value))
        );
      case "delete":
        return x("delete", node2.children.map(convertNode));
      case "inlineCode":
        return x("c", [makeText(node2.value)]);
      case "list":
        return x("p", [
          x(node2.ordered ? "ol" : "ul", node2.children.map(convertNode))
        ]);
      case "listItem":
        return x("li", node2.children.map(convertNode));
      case "link":
        return x("url", { href: node2.url }, node2.children.map(convertNode));
      case "image":
        return x("url", { source: node2.url }, [(_c = (_b = node2.alt) != null ? _b : node2.title) != null ? _c : ""]);
      case "definition":
      case "footnoteDefinition":
      case "footnoteReference":
      case "linkReference":
      case "imageReference":
        return;
      case "html":
        return;
      case "yaml":
        return;
      case "table":
      case "tableCell":
      case "tableRow":
        return;
      default:
    }
  }

  // src/index.ts
  function markdownToPretext(text6, options) {
    return convertMarkdown(text6, options);
  }
})();
