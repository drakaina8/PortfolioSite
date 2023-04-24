/**
 * Source code from https://github.com/zasource-dev/React-Serialize
 */

// import React, { ReactNode } from 'react';

// interface Options {
//     components: any,
//     reviver: any,
//     key: any
// }

// /**
//  * Serialize React element to JSON string
//  *
//  * @param {ReactNode} element
//  * @returns {string}
//  */
// export function serialize(type, element: JSX.Element) {
//     const replacer = (key: string, value: any) => {
//         switch (key) {
//             case '_owner':
//             case '_store':
//             case 'ref':
//             case 'key':
//                 return;
//             default:
//                 return value;
//         }
//     };

//     return JSON.stringify({...element, type: type});
// }

// /**
//  * Deserialize JSON string to React element
//  *
//  * @param {string|object} data
//  * @param {object?} options
//  * @param {object?} options.components
//  * @param {function?} options.reviver
//  * @returns {ReactNode}
//  */
// export function deserialize(data: any, options: Options = {
//     components: undefined,
//     reviver: undefined,
//     key: undefined
// }): ReactNode {
//     // if (typeof data === 'string') {
//     //     data = JSON.parse(data);
//     // }

//     try {
//         data = JSON.parse(data);
//     } catch (e) {
        
//     }

//     if (data instanceof Array) {
//         return deserializeElement(data, options, data.length);
//     }

//     if (data instanceof Object) {
//         return deserializeElement(data, options);
//     }
//     throw new Error('Deserialization error: incorrect data type');
// }

// function deserializeElement(element: any[] | any | null, options: Options = {
//     components: undefined,
//     reviver: undefined,
//     key: undefined
// }, key = 0) {
//     let { components = {}, reviver } = options;

//     if (typeof element !== 'object') {
//         return element;
//     }

//     if (element === null) {
//         return element;
//     }

//     if (element instanceof Array) {
//         return element.map((el, i) => deserializeElement(el, options, i));
//     }

//     // Now element has following shape { type: string, props: object }

//     let { type, props } = element;

//     if (typeof type !== 'string') {
//         throw new Error('Deserialization error: element type must be string');
//     }

//     type = components[type] || type.toLowerCase();

//     if (props.children) {
//         props = { ...props, children: deserializeElement(props.children, options) };
//     }

//     if (reviver) {
//         ({ type, props, key, components } = reviver(type, props, key, components));
//     }

//     return React.createElement(type, { ...props, key });
// }

import React from "react"
import PopUp from "../components/popup/popup"
import EmailForm from "../components/email/emailForm"

/**
 * Serialize React element to JSON string
 *
 * @param {ReactNode} element
 * @returns {string}
 */
export function serialize(type, element) {
  const replacer = (key, value) => {
    switch (key) {
      case "_owner":
      case "_store":
      case "ref":
      case "key":
        return
      default:
        return value
    }
  }

  return JSON.stringify({...element, type: type}, replacer)
}

/**
 * Deserialize JSON string to React element
 *
 * @param {string|object} data
 * @param {object?} options
 * @param {object?} options.components
 * @param {function?} options.reviver
 * @returns {ReactNode}
 */
export function deserialize(data, options = {}) {
  // if (typeof data === "string") {
  //   data = JSON.parse(data)
  // }
  try {
    data = JSON.parse(data)
  } catch(e) {

  }
  if (data instanceof Object) {
    return deserializeElement(data, options)
  }
  throw new Error("Deserialization error: incorrect data type")
}

function deserializeElement(element, options = {}, key) {
  let { components = {}, reviver } = options

  if (typeof element !== "object") {
    return element
  }

  if (element === null) {
    return element
  }

  if (element instanceof Array) {
    return element.map((el, i) => deserializeElement(el, options, i))
  }

  // Now element has following shape { type: string, props: object }

  let { type, props } = element

  if (typeof type !== "string") {
    throw new Error("Deserialization error: element type must be string")
  }

  // type = components[type] || type.toLowerCase()

  if (props.children) {
    props = { ...props, children: deserializeElement(props.children, options) }
  }

  if (reviver) {
    ;({ type, props, key, components } = reviver(type, props, key, components))
  }

  switch(type) {
    case 'PopUp':
      return React.createElement(PopUp, { ...props, key });
      break;
    case 'EmailForm':
      return React.createElement(EmailForm, { ...props, key });
      break;    
  }

  return React.createElement(new JSX.Element, { ...props, key });
}