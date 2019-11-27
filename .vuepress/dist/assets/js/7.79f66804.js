(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"recursion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recursion","aria-hidden":"true"}},[t._v("#")]),t._v(" Recursion")]),s("p",[t._v("Many algorithms involve repeating the same computation.")]),s("p",[t._v("This can be achieved with iteration (e.g. while, for loops etc) or "),s("em",[t._v("recursion")]),t._v(".")]),s("p",[t._v("Recursion involves an algorithm calling itself. Any recursive function can be written as an iterative function, but sometimes recursive functions can be easier to understand.")]),s("h2",{attrs:{id:"example-factorial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-factorial","aria-hidden":"true"}},[t._v("#")]),t._v(" Example: Factorial")]),s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token macro property"}},[t._v("#"),s("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorial")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// Base case - we know (trivially) that 0! = 1")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// This means that if a == 1, a! = 1 x 0! = 1 x 1 = 1")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorial")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("main")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token function"}},[t._v("printf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"%d\\n"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorial")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h2",{attrs:{id:"tail-recursion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail-recursion","aria-hidden":"true"}},[t._v("#")]),t._v(" Tail Recursion")]),s("p",[t._v("The example above uses "),s("em",[t._v("head recursion")]),t._v(" - computation is performed after the function makes a recursive call.")]),s("p",[t._v("In a "),s("em",[t._v("tail recursive")]),t._v(" function, the only recursive call is in the return statement - as soon as the recursive call is made, the function returns it's result without further computation.")]),s("p",[t._v("Generally, a "),s("em",[t._v("tail call")]),t._v(" is when the caller returns immediately after the called function returns - in other words:")]),s("p",[t._v("A recursive function is tail recursive if it's recursive call is a tail call.")]),s("p",[t._v("Tail recursion allows the compiler to optimise the code such that instead of allocating a stack frame for each recursive call, the current stack frame is reused.")]),s("p",[t._v("Most of the stack frame for the current procedure is no longer needed, and can be reused by the frame of the tail call. In this way, a tail recursive function only uses a single stack frame as opposed to many. If the required computations are large enough, this can make a significant difference and may prevent stack overflow.")]),s("h2",{attrs:{id:"tail-recursive-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail-recursive-example","aria-hidden":"true"}},[t._v("#")]),t._v(" Tail Recursive Example")]),s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token macro property"}},[t._v("#"),s("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorialTail")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ans"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// The recursive call is the last computation for this")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// function - tail recursion.")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorialTail")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ans "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("main")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token function"}},[t._v("printf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"%d\\n"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorialTail")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Because the function needs to be initialised with a starting "),s("code",[t._v("ans")]),t._v(" of 1, this may be confusing. To avoid the potential confusion that may arise when calling the function - i.e. to compute the factorial of a number "),s("code",[t._v("n")]),t._v(" you should only expect the calling code to supply "),s("code",[t._v("n")]),t._v(" - the computation can be wrapped in a helper function:")]),s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token macro property"}},[t._v("#"),s("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorialTail")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ans"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorialTail")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ans "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("/*\n* Abstracts away the second parameter for the caller\n*/")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorial")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// Second parameter will always be 1")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorialTail")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("main")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token function"}},[t._v("printf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"%d\\n"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("factorial")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Note that as soon as the tail recursive call is made, the stack frame is no longer needed - there is no value in the frame that will be used again.")]),s("p",[t._v("The compiler recognises this, and performs what is known as tail recursion elimination - recursive calls do not result in unique stack frames. Instead, the compiler updates the relevant values inside the current frame as a means of recursion.")]),s("p",[t._v("The answer is carried with each call, accumulating it's value.")]),s("h2",{attrs:{id:"equivalence-of-tail-recursion-and-iteration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#equivalence-of-tail-recursion-and-iteration","aria-hidden":"true"}},[t._v("#")]),t._v(" Equivalence of Tail Recursion and Iteration")]),s("p",[t._v("In terms of computing resources, tail recursion and iteration are equivalent.")]),s("p",[t._v("Any algorithm written with iteration can be re-written using tail recursion, and vice versa.")]),s("p",[t._v("A smart compiler will compile tail recursion and iteration to an identical set of instructions.")]),s("p",[t._v("The equivalence of tail recursion and iteration is important for functional programming languages. In a purely functional language, you cannot modify a value once you create it. As such, there are no loops (which typically require modifying variables to change the conditions) - only recursive functions. What would typically be written as a loop is instead written as a tail recursive function.")]),s("h2",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[t._v("#")]),t._v(" Resources")]),s("ul",[s("li",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tail_call",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tail call")]),t._v(", Wikipedia")])])])}],!1,null,null,null);a.default=e.exports}}]);