(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{56:function(e,t,i){"use strict";i.r(t);var a=i(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"assembly"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#assembly","aria-hidden":"true"}},[e._v("#")]),e._v(" Assembly")]),i("p",[e._v("The compiler generates assembly which is assembled into object files.")]),i("p",[e._v("gcc invokes the assembler to translate the assembly instructions from the textual/human readable format into numerical encodings that can be used by the processor.")]),i("p",[e._v("The object file contains machine executable instructions for the compiled source code. It is not yet a complete programme.")]),i("p",[e._v("The object file may reference functions that it does not contain - e.g. those in the C library, or in other files.")]),i("h2",{attrs:{id:"partial-compilation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#partial-compilation","aria-hidden":"true"}},[e._v("#")]),e._v(" Partial Compilation")]),i("p",[e._v("You can halt compilation at this stage if required:")]),i("p",[e._v("The "),i("code",[e._v("-c")]),e._v(" option for gcc causes the compiler to assemble the source files, but to stop at this point - the linking stage is not done. By default, the object file name for a source file is made by replacing the suffix .c, .i, .s, etc., with .o. Unrecognized input files, not requiring compilation or assembly, are ignored. You can specify an output file name with the "),i("code",[e._v("-o myName.o")]),e._v(" option. By convention, object files should have the "),i("code",[e._v(".o")]),e._v(" suffix.")]),i("p",[e._v("This may be useful for large programmes, where the code needs to be partitioned into manageable sections. Each source file can be individually compiled to an object file, and object files can be linked together as a separate process. This can aid efficiency - change code in one file, recompile that file to generate a new object file, and link this to the main programme.")]),i("h2",{attrs:{id:"optimisation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#optimisation","aria-hidden":"true"}},[e._v("#")]),e._v(" Optimisation")]),i("p",[e._v("Have the compiler optimise code using the "),i("code",[e._v("-O")]),e._v(" option, followed by the level of optimisation required.")]),i("p",[e._v("Release quality code, "),i("code",[e._v("gcc")]),e._v(" compiled with "),i("code",[e._v("-O3")]),e._v(".")])])}],!1,null,null,null);t.default=o.exports}}]);