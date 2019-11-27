(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{74:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"function-pointers-in-qsort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-pointers-in-qsort","aria-hidden":"true"}},[t._v("#")]),t._v(" Function Pointers in qsort()")]),s("p",[t._v("In C, the "),s("code",[t._v("qsort()")]),t._v(" function sorts an array in place using the "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Qsort",target:"_blank",rel:"noopener noreferrer"}},[t._v("quickersort")]),t._v(" algorithm - a variation of "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Quicksort",target:"_blank",rel:"noopener noreferrer"}},[t._v("quick sort")]),t._v(".")]),s("h2",{attrs:{id:"function-signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-signature","aria-hidden":"true"}},[t._v("#")]),t._v(" Function Signature")]),s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token macro property"}},[t._v("#"),s("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("<stdlib.h>")])]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("qsort")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("base"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t nmemb"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t size"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("compar"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("Function arguments for "),s("code",[t._v("qsort()")]),t._v(":")]),s("ol",[s("li",[s("code",[t._v("base")]),t._v(": pointer to the start of the array")]),s("li",[s("code",[t._v("nmemb")]),t._v(": Number of members in the array")]),s("li",[s("code",[t._v("size")]),t._v(": Size of an individual element in the array")]),s("li",[s("code",[t._v("compar")]),t._v(": Pointer to a comparison function that accepts 2 x "),s("code",[t._v("const void *")]),t._v(" arguments")])]),s("p",[t._v("To use "),s("code",[t._v("qsort()")]),t._v(", you need to include the stdlib.h header - i.e. "),s("code",[t._v("#include <stdlib.h>")]),t._v(".")]),s("h2",{attrs:{id:"comparison-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparison-function","aria-hidden":"true"}},[t._v("#")]),t._v(" Comparison Function")]),s("p",[t._v("The comparison function must return an integer that is:")]),s("ul",[s("li",[t._v("Less than zero if the first argument is considered to be less than the second")]),s("li",[t._v("Zero if the arguments are equal")]),s("li",[t._v("Greater than zero if the first argument is considered to be greater than the second")])]),s("p",[t._v("Be careful with return values - especially if the values being compared are not integers.")]),s("p",[s("strong",[t._v("Use "),s("code",[t._v(">")]),t._v(" or "),s("code",[t._v("<")]),t._v(" rather than subtraction which may provide unexpected results if comparing non integer values.")])]),s("h2",{attrs:{id:"generic-type-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generic-type-parameters","aria-hidden":"true"}},[t._v("#")]),t._v(" Generic Type Parameters")]),s("p",[t._v("Note that the comparison function receives "),s("code",[t._v("const void *")]),t._v(" as arguments - you need to cast these within the comparison function.")]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),s("p",[t._v("Sort an array of "),s("code",[t._v("Triangle")]),t._v(" type defined objects according to their area.")]),s("p",[t._v("Note that definition of the "),s("code",[t._v("area()")]),t._v(" function has been omitted for brevity.")]),s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" triangle\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Triangle"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("compareTriangles")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("x"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("y"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Triangle "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("b "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("area")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("area")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("area")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("area")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("/**\n* Sort an array of Triangles\n*/")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("sort_by_area")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Triangle"),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" tr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token function"}},[t._v("qsort")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Triangle"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" compareTriangles"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Note the nested conditional in "),s("code",[t._v("compareTriangles()")]),t._v(":")]),s("ul",[s("li",[t._v("If area of a and b "),s("strong",[t._v("are not")]),t._v(" equal, return 1 if the area of a is greater than the area of b, -1 if not.")]),s("li",[t._v("If the area of a and b "),s("strong",[t._v("are")]),t._v(" equal, return 0.")])]),s("p",[t._v("Also note the line "),s("code",[t._v("const Triangle *a = x, *b = y;")]),t._v(" which copies the input pointers into the object required for the comparison.")])])}],!1,null,null,null);a.default=e.exports}}]);