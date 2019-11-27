(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{67:function(e,r,t){"use strict";t.r(r);var a=t(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"the-operating-system-system-calls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-operating-system-system-calls","aria-hidden":"true"}},[e._v("#")]),e._v(" The Operating System & System Calls")]),t("p",[e._v("To interact with the outside world, a programme must access hardware - a disk drive, a screen, a keyboard, etc.")]),t("p",[e._v("Normal programmes are not trusted to access hardware directly - such access is mediated by the operating system.")]),t("p",[e._v("A programme makes a request to the OS via a "),t("em",[e._v("system call")]),e._v(" - a special type of function that transfers control from the programme to the operating system. The OS checks that the request is allowed before executing it.")]),t("p",[e._v("This is how an OS enforces security and access rules. If a request is not permissable, the OS can return an error code to the originating programme. Otherwise, the OS can perform the requested actions before returning the result to the programme.")]),t("h2",{attrs:{id:"the-c-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-c-library","aria-hidden":"true"}},[e._v("#")]),e._v(" The C Library")]),t("p",[e._v("Though C code can make system calls directly, it is more common to use functions in the C library (which in turn make the necessary system calls).")]),t("h3",{attrs:{id:"example-printf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-printf","aria-hidden":"true"}},[e._v("#")]),e._v(" Example: printf()")]),t("p",[e._v("The "),t("code",[e._v("printf()")]),e._v(" function is part of the C library that is used to write to standard output. The "),t("code",[e._v("printf()")]),e._v(" function scans the format string and performs the required format conversions before writing the resulting string to standard output. The output is achieved by means of the "),t("code",[e._v("write()")]),e._v(" system call.")]),t("h2",{attrs:{id:"system-call"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-call","aria-hidden":"true"}},[e._v("#")]),e._v(" System Call")]),t("p",[e._v("Transfers control to the OS, requests that a task be performed (e.g. write to standard output).")]),t("h2",{attrs:{id:"library-call"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#library-call","aria-hidden":"true"}},[e._v("#")]),e._v(" Library Call")]),t("p",[e._v("Calls a function found in a library, such as the C standard library.")]),t("h2",{attrs:{id:"man-pages-system-calls-library-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#man-pages-system-calls-library-functions","aria-hidden":"true"}},[e._v("#")]),e._v(" Man Pages: System Calls, Library Functions")]),t("ul",[t("li",[e._v("System call: man section 2 e.g. "),t("code",[e._v("man 2 write")])]),t("li",[e._v("Library function: man section 3 e.g. "),t("code",[e._v("man 3 printf")])])]),t("h2",{attrs:{id:"errors-from-system-calls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errors-from-system-calls","aria-hidden":"true"}},[e._v("#")]),e._v(" Errors From System Calls")]),t("p",[e._v("System calls can fail in multiple ways.")]),t("p",[e._v("When a system call fails in C, a global variable "),t("code",[e._v("errno")]),e._v(" is set. "),t("code",[e._v("errno")]),e._v(" stands for "),t("strong",[e._v("error number")]),e._v(".")]),t("p",[e._v("If a system call fails, "),t("code",[e._v("errno")]),e._v(" can provide information about what went wrong.")]),t("h2",{attrs:{id:"error-constants"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-constants","aria-hidden":"true"}},[e._v("#")]),e._v(" Error Constants")]),t("p",[e._v("Check for specific errors by comparing "),t("code",[e._v("errno")]),e._v(" against various constants defined in "),t("code",[e._v("errno.h")]),e._v(".")]),t("h2",{attrs:{id:"error-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-message","aria-hidden":"true"}},[e._v("#")]),e._v(" Error Message")]),t("p",[e._v("The C library function "),t("code",[e._v("perror()")]),e._v(" prints a descriptive message based on the current value of "),t("code",[e._v("errno")]),e._v(". It takes one argument, a string which is printed before the error message.")]),t("p",[e._v("To use "),t("code",[e._v("perror()")]),e._v(", "),t("code",[e._v("#include <stdio.h>")]),e._v(".")]),t("p",[e._v("The "),t("code",[e._v("perror(const char *s)")]),e._v(" function produces a message on standard error describing the last error encountered during a call to a system or library function.")]),t("p",[e._v("If "),t("code",[e._v("s")]),e._v(" is not NULL and "),t("code",[e._v("*s")]),e._v(" is not a null byte, the argument string "),t("code",[e._v("s")]),e._v(" is printed, followed by a colon and a blank space. Then an error message corresponding to the current value of "),t("code",[e._v("errno")]),e._v(" is printed followed by a new-line.")]),t("p",[e._v("The argument string should include the name of the function that caused the error.")]),t("p",[e._v("The global error list "),t("code",[e._v("sys_errlist[]")]),e._v(", which can be indexed by "),t("code",[e._v("errno")]),e._v(", can be used to obtain the error message without the newline. See "),t("code",[e._v("man 3 perror")]),e._v(" for more on this.")]),t("p",[e._v("When a system call fails, it usually returns -1 and sets the variable "),t("code",[e._v("errno")]),e._v(" to a value describing what went wrong.")]),t("p",[e._v("Many library functions also set "),t("code",[e._v("errno")]),e._v(".")]),t("p",[e._v("Note that "),t("code",[e._v("errno")]),e._v(" is "),t("strong",[e._v("undefined")]),e._v(" after a successful system call or library function call: the call may well change this variable, even though it succeeds - for example, it may have internally used a different library function that failed.")]),t("p",[e._v("Thus, if a failing call is not immediately followed by a call to "),t("code",[e._v("perror()")]),e._v(", the value of errno should be saved to avoid the "),t("code",[e._v("errno")]),e._v(' being "polluted" by seemingly successful calls.')])])}],!1,null,null,null);r.default=s.exports}}]);