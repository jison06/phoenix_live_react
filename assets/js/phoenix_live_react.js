import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const render = function (
  el,
  target,
  componentClass,
  additionalProps = {},
  previousProps = {}
) {
  let props = el.dataset.liveReactProps
    ? JSON.parse(el.dataset.liveReactProps)
    : {};
  if (el.dataset.liveReactMerge) {
    props = { ...previousProps, ...props, ...additionalProps };
  } else {
    props = { ...props, ...additionalProps };
  }
  const reactElement = React.createElement(componentClass, props);
  const root = createRoot(target);
  root.render(reactElement);
  return props;
};

const initLiveReactElement = function (el, additionalProps) {
  const target = el.nextElementSibling;
  const componentClass = eval(el.dataset.liveReactClass);
  render(el, target, componentClass, additionalProps);
  return { target: target, componentClass: componentClass };
};

const initLiveReact = function () {
  const elements = document.querySelectorAll("[data-live-react-class]");
  Array.prototype.forEach.call(elements, (el) => {
    initLiveReactElement(el);
  });
};

const LiveReact = {
  mounted() {
    const { el } = this;
    const pushEvent = this.pushEvent.bind(this);
    const pushEventTo = this.pushEventTo && this.pushEventTo.bind(this);
    const handleEvent = this.handleEvent && this.handleEvent.bind(this);
    const { target, componentClass } = initLiveReactElement(el, { pushEvent });
    const props = render(el, target, componentClass, {
      pushEvent,
      pushEventTo,
      handleEvent,
    });
    if (el.dataset.liveReactMerge) this.props = props;
    Object.assign(this, { target, componentClass });
  },

  updated() {
    const { el, target, componentClass } = this;
    const pushEvent = this.pushEvent.bind(this);
    const pushEventTo = this.pushEventTo && this.pushEventTo.bind(this);
    const handleEvent = this.handleEvent;
    const previousProps = this.props;
    const props = render(
      el,
      target,
      componentClass,
      { pushEvent, pushEventTo },
      previousProps
    );
    if (el.dataset.liveReactMerge) this.props = props;
  },

  destroyed() {
    const { target } = this;
    target.unmount();
  },
};

export { LiveReact as default, initLiveReact, initLiveReactElement };
