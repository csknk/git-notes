(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{78:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"string-equality"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-equality","aria-hidden":"true"}},[t._v("#")]),t._v(" String Equality")]),s("p",[t._v("You can't use the "),s("code",[t._v("==")]),t._v(" operator to check for string equality in C, as you might in Python, Javascript or other languages.")]),s("p",[t._v("The equality operator will just check "),s("em",[t._v("pointer equality")]),t._v(" - "),s("code",[t._v("str1 == str2")]),t._v(" checks if "),s("code",[t._v("str1")]),t._v(" and "),s("code",[t._v("str2")]),t._v(" point to the same location.")]),s("p",[t._v("You may want this, but usually when comparing strings you are checking that the sequence of characters in each string is the same.")]),s("h2",{attrs:{id:"strcmp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strcmp","aria-hidden":"true"}},[t._v("#")]),t._v(" strcmp")]),s("p",[t._v("The C library "),s("code",[t._v("strcmp()")]),t._v(" function returns:")]),s("ul",[s("li",[t._v("0 if the strings are equal")]),s("li",[t._v('A positive number if the first string is "greater than" the second string')]),s("li",[t._v('A negative number if the first string is "less than" the second string')])]),s("p",[t._v('In this context "greater than" and "less than" refer to lexicographic order —what you would think of as “alphabetical ordering,” but extended to encompass the fact that strings may have non-letters. The comparison is case sensitive.')]),s("p",[t._v("Note that the C library has another function, "),s("code",[t._v("strcasecmp")]),t._v(" which performs case-insensitive comparison.")])])}],!1,null,null,null);e.default=a.exports}}]);