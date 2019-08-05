webpackJsonp([14],{58:function(n,t){n.exports="## Extend\n\n\u901a\u8fc7 Extend \u53ef\u4ee5\u6269\u5c55 attr \u7528\u6765\u6269\u5c55 DOM \u7684\u80fd\u529b\u3002\n\n\n## \u4e3e\u4e2a\u4f8b\u5b50\n\n\u6bd4\u5982\u4f60\u53ef\u4ee5\u901a\u8fc7 extend \u8f7b\u677e\u5b9e\u73b0\u53cc\u5411\u7ed1\u5b9a\u7684\u529f\u80fd\uff1a\n\n```jsx\nimport { define, WeElement, render, extend, get, set } from 'omi'\n\nextend('model', (el, path, scope) => {\n\tel.value = get(scope, path)\n\tel.addEventListener('input', () => {\n\t\tset(scope, path, el.value)\n\t\tscope.update()\n\t})\n})\n\ndefine('my-component', class extends WeElement {\n\tmsg = 'two-way binding'\n\n\trender(props) {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<input o-model=\"msg\"></input>\n\t\t\t\t<div>{this.msg}</div>\n\t\t\t</div>\n\t\t)\n\t}\n})\n\nrender(<my-component />, 'body')\n```\n\n[\u2192 \u5728\u7ebf\u6f14\u793a](https://codepen.io/omijs/pen/aeLYjx)"}});
//# sourceMappingURL=14.d69bf4cf.chunk.js.map