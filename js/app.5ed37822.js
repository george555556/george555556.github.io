(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],u=0,h=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},2:function(e,t){},"275d":function(e,t,n){},3:function(e,t){},"393a":function(e,t,n){"use strict";n("275d")},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticStyle:{"font-size":"60px","font-weight":"bold"}},[e._v("Better Call Proof")]),t("br"),void 0==e.testAddress?t("button",{on:{click:function(t){return e.connectWallet()}}},[e._v(" Connect Wallet ")]):t("button",{on:{click:function(t){return e.connectWallet()}}},[e._v(" "+e._s(e.shortenHash(this.testAddress))+" ")]),t("h1",[e._v("Proof of Existence")]),t("p",[e._v(" Proof of ownership is the key to maintaining the authenticity to any of your most important documents. Secure any file on the blockchain following these simple steps. ")]),t("h3",[e._v("Upload a file to the ether")]),t("p",[e._v(" Create a permanent record of the existance of the file by uploading the hash to the blockchain. ")]),e._m(0),t("label",{on:{change:function(t){return e.uploadFile()}}},[t("input",{ref:"file",attrs:{type:"file"}})]),t("br"),t("br"),t("br"),t("div",[e._v("Document Hash:")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.doc_to_upload._hash,expression:"doc_to_upload._hash"}],attrs:{name:"",id:"hash-textarea",cols:"30",rows:"10",placeholder:"Hash SHA256"},domProps:{value:e.doc_to_upload._hash},on:{input:function(t){t.target.composing||e.$set(e.doc_to_upload,"_hash",t.target.value)}}}),t("div",[e._v("Optional Message:")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.doc_to_upload.message,expression:"doc_to_upload.message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"Message to upload"},domProps:{value:e.doc_to_upload.message},on:{input:function(t){t.target.composing||e.$set(e.doc_to_upload,"message",t.target.value)}}}),t("div",[e._v(" Estimated Datetime: "),t("span",{staticStyle:{"font-weight":"bold","font-size":"medium","margin-left":"20px"}},[e._v(e._s(this.doc_to_upload.est_datetime))])]),t("br"),t("button",{on:{click:function(t){return e.uploadDocData()}}},[e._v("Make Permanent")]),t("br"),t("br"),t("br"),t("br"),t("div",[0==e.documents.length?t("div",{staticClass:"up-docs"},[e._v(" Your Uploaded Documents will show up here. ")]):e._e(),e.documents.length>0?t("div",[t("div",[e._v("Your Uploaded Documents")]),t("table",[e._m(1),e._l(this.documents,(function(n,o){return t("tr",{key:o},[t("td",[e._v(e._s(o))]),t("td",[t("div",[t("div",[e._v(e._s(n._hash))])])]),t("td",[t("div",[t("div",[e._v(e._s(n.message))])])]),t("td",[e._v(e._s(e.epochToHumanReadable(n.datetime)))])])}))],2)]):e._e(),t("br"),t("br"),t("div",[t("div",[t("h3",[e._v("Verify the existence of documents")]),t("p",[e._v(" This is where you can see any document that has been verified on the blockchain. ")]),e._m(2),t("label",{on:{change:function(t){return e.createHashOfFileToVerify()}}},[t("input",{ref:"file2",attrs:{type:"file"}})]),t("br"),t("br"),t("br")]),t("div",[t("div",[e._v("Document Hash:")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.doc_to_verify_hash,expression:"doc_to_verify_hash"}],attrs:{name:"",id:"hash-textarea",cols:"30",rows:"10",placeholder:"Insert Hash to verify or Select a file"},domProps:{value:e.doc_to_verify_hash},on:{input:function(t){t.target.composing||(e.doc_to_verify_hash=t.target.value)}}}),t("div",[e._v("Accompanied Message:")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:this.verified_doc.message,expression:"this.verified_doc.message"}],attrs:{disabled:"",name:"",id:"",cols:"30",rows:"10",placeholder:"Message"},domProps:{value:this.verified_doc.message},on:{input:function(t){t.target.composing||e.$set(this.verified_doc,"message",t.target.value)}}}),t("br"),t("div",[e._v(" Document was created before: "),0==this.verified_doc.error?t("div",{staticStyle:{color:"green"}},[0!=this.verified_doc.datetime?t("span",[e._v(" "+e._s(e.epochToHumanReadable(this.verified_doc.datetime))+" ✓")]):e._e()]):t("div",{staticStyle:{color:"red"}},[e._v(" This File Does not Exist on The Blockchain ❌ ")])]),t("br"),t("button",{on:{click:function(t){return e.verifyDocumentHash(e.doc_to_verify_hash)}}},[e._v(" Verify Document ")])])]),t("br"),t("br"),t("br"),t("br")])])},s=[function(){var e=this,t=e._self._c;return t("ol",[t("li",[e._v(" Select the file you wish to create a permanent record of on the blockchain. ")]),t("li",[e._v("Write an an optional message.")]),t("li",[e._v("Select make permanent to execute the transaction.")])])},function(){var e=this,t=e._self._c;return t("tr",[t("th",[e._v("#")]),t("th",[e._v("Hash (SHA256)")]),t("th",[e._v("Message")]),t("th",[e._v("Datetime")])])},function(){var e=this,t=e._self._c;return t("ol",[t("li",[e._v(" Choose the file you would like to verify the existence of on the blockchain. Alternatively you can insert the hash of the file underneath where it says document hash. ")]),t("li",[e._v(" Select verify document to see if the file/hash has been verified on the blockchain. ")])])}],a=n("99e5"),r=n.n(a);const c=[{inputs:[{internalType:"string",name:"_hash",type:"string"},{internalType:"string",name:"message",type:"string"}],name:"addDocument",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"documents",outputs:[{internalType:"string",name:"_hash",type:"string"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"datetime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"entries",outputs:[{internalType:"string",name:"_hash",type:"string"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"datetime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"anAddress",type:"address"}],name:"getDocumentOf",outputs:[{components:[{internalType:"string",name:"_hash",type:"string"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"datetime",type:"uint256"}],internalType:"struct History.Document[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"}];var l=c,d=n("3452"),u=n.n(d);let h=new r.a(window.ethereum);const f="0x4c7f77e11f7e84db3fd6d4b362ef71a221b7e214";let p=new h.eth.Contract(l,f);var _={name:"App",components:{},data(){return{connected:!1,documents:[],doc_to_upload:{_hash:"",message:"",est_datetime:Date.now()},verified_doc:{message:"",_hash:"",datetime:0,error:!1},doc_to_verify_hash:"",testAddress:void 0,file_to_upload:""}},async created(){this.doc_to_upload.est_datetime=this.epochToHumanReadable(Date.now()/1e3),h.eth.getAccounts().then(e=>{this.testAddress=e[0],this.getDocumentsOf(this.testAddress)}),window.ethereum.on("accountsChanged",e=>{console.log(e[0]),this.testAddress=e[0],this.getDocumentsOf(this.testAddress)})},methods:{getDocumentsOf:function(e){p.methods.getDocumentOf(e).call({from:e}).then(e=>{this.documents=e,console.log("Entries() Response: ",e)})},connectWallet:async function(){try{const e=await window.ethereum.request({method:"eth_requestAccounts"});console.log("Wallet Addresses: ",e),this.testAddress=e[0]}catch(e){console.log("error in request",e)}},uploadDocData:function(){p.methods.addDocument(this.doc_to_upload._hash,this.doc_to_upload.message).send({from:this.testAddress}).then(e=>{console.log("AddDocument() Response: ",e),this.getDocumentsOf(this.testAddress)})},uploadFile:function(){this.file_to_upload=this.$refs.file.files[0],console.log(this.file_to_upload);var e=new FileReader;let t=this;e.addEventListener("load",(function(){var e=u.a.SHA256(u.a.enc.Latin1.parse(this.result)),n=e.toString(u.a.enc.Hex);t.doc_to_upload._hash=n;var o=n;console.log(o)})),e.readAsBinaryString(this.file_to_upload)},createHashOfFileToVerify:function(){this.file_to_upload=this.$refs.file2.files[0],console.log(this.file_to_upload);var e=new FileReader;let t=this;e.addEventListener("load",(function(){var e=u.a.SHA256(u.a.enc.Latin1.parse(this.result)),n=e.toString(u.a.enc.Hex);t.doc_to_verify_hash=n;var o=n;console.log(o)})),e.readAsBinaryString(this.file_to_upload)},verifyDocumentHash:function(e){console.log("Hash to Verify: ",e),p.methods.documents(e).call({from:this.testAddress}).then(t=>{0!=t["datetime"]?(t["error"]=!1,this.verified_doc=t,console.log("Verified Doc:",this.verified_doc,e)):this.verified_doc={error:!0}})},epochToHumanReadable:function(e){let t=new Date(1e3*e);return t.toGMTString()},shortenHash:function(e){return e.slice(0,4)+" . . . "+e.slice(38,42)}}},m=_,v=(n("393a"),n("2877")),y=Object(v["a"])(m,i,s,!1,null,null,null),g=y.exports;o["a"].config.productionTip=!1,new o["a"]({render:e=>e(g)}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){}});
//# sourceMappingURL=app.5ed37822.js.map