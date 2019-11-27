(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{57:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"asserts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asserts","aria-hidden":"true"}},[e._v("#")]),e._v(" Asserts")]),a("p",[e._v("Check that invariants of the system are maintained during execution.")]),a("p",[e._v("An "),a("strong",[e._v("invariant")]),e._v(" is a property that should be true at a given point in the programme execution.")]),a("p",[e._v("When you know an invariant should be true at a given point, you can write an "),a("code",[e._v("assert")]),e._v(" statement to check it is true.")]),a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[e._v("// Check that expr is true:")]),e._v("\n\n"),a("span",{attrs:{class:"token function"}},[e._v("asset")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("expr"),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),a("p",[e._v("If the expression tested by "),a("code",[e._v("assert")]),e._v(" is true, nothing happens - execution continues normally.")]),a("p",[e._v("If the assertion fails - the tested expression returns "),a("code",[e._v("false")]),e._v(", the programme prints a message stating that an assertion failed, terminating the programme at this point.")]),a("p",[e._v("If a programme has an error it should fail fast. The longer a program runs after an error, the more likely it is to give incorrect answers and the more difficult it is to debug.")]),a("p",[e._v("Ideally an assert should fail immediately after an error, pinpointing the nature and location of the problem.")]),a("p",[a("strong",[e._v("A programme giving a wrong answer due to an unexpected error is significantly worse than a programme which detects the situation and crashes immediately.")])]),a("h2",{attrs:{id:"performance-implications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-implications","aria-hidden":"true"}},[e._v("#")]),e._v(" Performance Implications")]),a("p",[e._v("Performance implications of assert statements are negligible, especially on modern fast computers.")]),a("p",[e._v("There may be situations where every ounce of performance is requires (e.g. embedded applications). In these situations, passing the "),a("code",[e._v("-DNDEBUG")]),e._v(" option to the compiler turns off asserts in optimised code.")])])}],!1,null,null,null);t.default=n.exports}}]);