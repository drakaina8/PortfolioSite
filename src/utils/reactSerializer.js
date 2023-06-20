import React from "react"
import PopUp, { popupProps } from "../components/popup/popup"
import EmailForm from "../components/email/emailForm"
import Calculator from "../components/calculator/calculator"
import Settings from "../components/settings/settings"

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
  let { id } = props;

  if (typeof type !== "string") {
    throw new Error("Deserialization error: element type must be string")
  }

  if (props.children) {
    props = { ...props, children: deserializeElement(props.children, options) }
  }

  if (reviver) {
    ({ type, props, key, id, components } = reviver(type, props, key, components))
  }

  switch(type) {
    case 'PopUp':
      return React.createElement(PopUp, { ...props, key: id });
    case 'EmailForm':
      return React.createElement(EmailForm, { ...props, key: id });
    case 'Calculator':
      return React.createElement(Calculator, {...props, key: id});
    case 'Settings':
      return React.createElement(Settings, {...props, key: id});
  }

  return React.createElement(new JSX.Element, { ...props, key: id });
}