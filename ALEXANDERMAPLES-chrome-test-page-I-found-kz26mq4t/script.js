// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(condition,opt_message){if(!condition){let message="Assertion failed";if(opt_message){message=message+": "+opt_message}const error=new Error(message);const global=function(){const thisOrSelf=this||self;thisOrSelf.traceAssertionsForTesting;return thisOrSelf}();if(global.traceAssertionsForTesting){console.warn(error.stack)}throw error}return condition}function assertNotReached(opt_message){assert(false,opt_message||"Unreachable code hit")}function assertInstanceof(value,type,opt_message){if(!(value instanceof type)){assertNotReached(opt_message||"Value "+value+" is not a[n] "+(type.name||typeof type))}return value}// Copyright 2019 The Chromium Authors. All rights reserved.
const chromeSendResolverMap={};function webUIResponse(id,isSuccess,response){const resolver=chromeSendResolverMap[id];delete chromeSendResolverMap[id];if(isSuccess){resolver.resolve(response)}else{resolver.reject(response)}}const webUIListenerMap={};function webUIListenerCallback(event,var_args){const eventListenersMap=webUIListenerMap[event];if(!eventListenersMap){return}const args=Array.prototype.slice.call(arguments,1);for(const listenerId in eventListenersMap){eventListenersMap[listenerId].apply(null,args)}}window.cr=window.cr||{};assert(!window.cr.webUIResponse);assert(!window.cr.webUIListenerCallback);window.cr.webUIResponse=webUIResponse;window.cr.webUIListenerCallback=webUIListenerCallback;/Mac/.test(navigator.platform);/Win/.test(navigator.platform);/Linux/.test(navigator.userAgent);/Android/.test(navigator.userAgent);/CriOS/.test(navigator.userAgent);// Copyright (c) 2012 The Chromium Authors. All rights reserved.
function $(id){const el=document.getElementById(id);return el?assertInstanceof(el,HTMLElement):null}// Copyright 2020 The Chromium Authors. All rights reserved.
function logsErrorDuringPageLoadOuter(){logsErrorDuringPageLoadInner()}function logsErrorDuringPageLoadInner(){console.error("WebUI JS Error: printing error on page load")}function logsErrorFromButtonClickHandler(){logsErrorFromButtonClickInner()}function logsErrorFromButtonClickInner(){console.error("WebUI JS Error: printing error on button click")}function throwExceptionHandler(){throwExceptionInner()}function throwExceptionInner(){throw new Error("WebUI JS Error: exception button clicked")}function promiseSuccessful(){console.error("WebUI JS Error: Promise success. This should never happen")}function promiseRejector(resolve,reject){reject("WebUI JS Error: The rejector always rejects!")}function unhandledPromiseRejection(){const promise=new Promise(promiseRejector);promise.then(promiseSuccessful)}$("error-button").onclick=logsErrorFromButtonClickHandler;$("exception-button").onclick=throwExceptionHandler;$("promise-button").onclick=unhandledPromiseRejection;logsErrorDuringPageLoadOuter();