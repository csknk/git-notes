(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{75:function(e,t,a){"use strict";a.r(t);var i=a(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"reading-writing-to-file-in-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-writing-to-file-in-c","aria-hidden":"true"}},[e._v("#")]),e._v(" Reading & Writing to File in C")]),a("h2",{attrs:{id:"file-pointer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-pointer","aria-hidden":"true"}},[e._v("#")]),e._v(" File Pointer")]),a("h3",{attrs:{id:"open-a-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-a-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Open a File")]),a("p",[e._v("Open a file and associate a stream with it using "),a("code",[e._v("fopen()")]),e._v(".")]),a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[e._v("FILE "),a("span",{attrs:{class:"token operator"}},[e._v("*")]),a("span",{attrs:{class:"token function"}},[e._v("fopen")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{attrs:{class:"token keyword"}},[e._v("char")]),e._v(" "),a("span",{attrs:{class:"token operator"}},[e._v("*")]),e._v("path"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{attrs:{class:"token keyword"}},[e._v("char")]),e._v(" "),a("span",{attrs:{class:"token operator"}},[e._v("*")]),e._v("mode"),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),a("p",[e._v("Opens the file specified by "),a("code",[e._v("path")]),e._v(" and returns a FILE pointer. The "),a("code",[e._v("mode")]),e._v(" argument is a string that specifies the mode under which the file is opened:")]),a("ul",[a("li",[a("code",[e._v("r")]),e._v(": Reading, stream positioned at the beginning of the file.")]),a("li",[a("code",[e._v("r+")]),e._v(": Reading and writing, stream positioned at the beginning of the file.")]),a("li",[a("code",[e._v("w")]),e._v(": Truncate file to zero length or create text file for writing - stream positioned at the beginning of the file.")]),a("li",[a("code",[e._v("w+")]),e._v(": Reading and writing - file is created if it does not exist, otherwise it is truncated.  The stream positioned at the beginning of the file.")]),a("li",[a("code",[e._v("a")]),e._v(": Appending (writing at end of file) - file is created if it does not exist.  Stream positioned at the end of the file.")]),a("li",[a("code",[e._v("a+")]),e._v(": Reading and appending (writing at end of file) - file is created if it does not exist.  The initial file position for reading is at the beginning of the file, but output is always appended to the end of the file.")])]),a("p",[e._v("Returns a file descriptor - low level communication mechanism that is used to access a file (or pipe, or network socket).")]),a("p",[e._v("On Linux, file descriptors are held in the kernel's global file table. This holds data relating to the inode of the file, access restrictions and byte-offset.")]),a("h3",{attrs:{id:"closing-a-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#closing-a-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Closing a File")]),a("p",[a("code",[e._v("fclose(FILE *stream)")]),e._v(" is used to close the specified stream. The act of closing sends buffered data to the OS and writes any buffered output data using "),a("code",[e._v("fflush()")]),e._v(". The underlying file descriptor is then closed.")]),a("p",[e._v("On success, 0 is returned. Otherwise, EOF is returned, and "),a("code",[e._v("errno")]),e._v(" is set to indicate the error.")]),a("p",[a("code",[e._v("fclose()")]),e._v(" can fail for a variety of reasons - for example:")]),a("ul",[a("li",[e._v("Data cannot be written to the disk drive")]),a("li",[e._v("Network connectivity is lost (in the case of a remote file system)")])]),a("p",[a("strong",[e._v("Always check the return status of fclose()")]),e._v(" - and at least report the error on failure.")]),a("p",[e._v("On close, if the C library has unwritten data, a system call is made to the kernel to write data. The system call takes a file descriptor")]),a("h2",{attrs:{id:"read-a-file-with-fread"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-a-file-with-fread","aria-hidden":"true"}},[e._v("#")]),e._v(" Read a File With fread")]),a("p",[a("code",[e._v("fread()")]),e._v(" is used for reading non-textual data from a file i.e. binary format file.")]),a("p",[a("code",[e._v("fread()")]),e._v(" prototype:")]),a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[e._v("size_t fread "),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),a("span",{attrs:{class:"token operator"}},[e._v("*")]),e._v(" ptr"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" size_t size"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" size_t nitems"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" FILE "),a("span",{attrs:{class:"token operator"}},[e._v("*")]),e._v(" stream"),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),a("h2",{attrs:{id:"writing-to-a-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-to-a-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Writing to a File")]),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/File_descriptor",target:"_blank",rel:"noopener noreferrer"}},[e._v("*nix file descriptors")])])])}],!1,null,null,null);t.default=s.exports}}]);