(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{320:function(t,e,n){},337:function(t,e,n){"use strict";n(320)},353:function(t,e,n){"use strict";n.r(e);var a={props:{targetDate:{type:String,required:!0},message:{type:String,default:"Before the event starts"}},data(){return{timeLeft:this.calculateTimeRemaining(),interval:null}},mounted(){this.interval=setInterval(()=>{this.timeLeft=this.calculateTimeRemaining()},1e3)},beforeUnmount(){clearInterval(this.interval)},methods:{calculateTimeRemaining(){const t=(new Date).getTime(),e=new Date(this.targetDate).getTime(),n=Math.max(e-t,0);return{Days:Math.floor(n/864e5),Hours:Math.floor(n/36e5%24),Minutes:Math.floor(n/6e4%60),Seconds:Math.floor(n/1e3%60)}}}},s=(n(337),n(0)),i=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"countdown"},[e("div",{staticClass:"countdown-container"},t._l(t.timeLeft,(function(n,a){return e("div",{key:a,staticClass:"countdown-item"},[e("span",[t._v(t._s(n))]),t._v(" "),e("span",{staticClass:"countdown-label"},[t._v(t._s(a))])])})),0),t._v(" "),e("p",{attrs:{id:"timer-message"}},[t._v(t._s(t.message))])])}),[],!1,null,null,null);e.default=i.exports}}]);