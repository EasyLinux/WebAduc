webpackJsonp([4],{1411:function(e,t,n){"use strict";var o=n(10).default;n(528),n(527),n(526),n(519),n(521),n(523),n(522),n(524),n(525),n(520),o.launch(n(534),n(532),n(530),n(517),n(518),n(516),n(529),n(533),n(531),n(265),n(489))},489:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){try{l()}catch(t){if(!(t instanceof M))throw t;var e=O.default.get();s(e),c()}}function s(e){setTimeout((function(){F.default.publish(x,e)}),500)}function c(){var e="#popin-view-restriction",t={modal:!0};(0,y.default)("body").css("overflow","hidden"),(0,j.openPopin)(e,t)}function l(){var e=N.data("pageIndentifier");d()&&(p(e),f(e))}function d(){return!(0,C.userIsConnected)()&&k&&!document.hidden}function f(e){var t=m();t||(v(),t=m()),h(e)||t.list.push(e),g(t)}function h(e){var t=m(),n=!1;return t&&t.list.indexOf(e)>-1&&(n=!0),n}function p(e){var t=m();if(t&&t.list.length>=S)if(_())v();else if(!h(e))throw new M}function v(){var e={list:[],TTL:Date.now()+P};g(e)}function m(){var e=U.getItem("history");return e&&(e=JSON.parse(e)),e}function g(e){U.setItem("history",JSON.stringify(e))}function _(){var e=m(),t=!!e&&Date.now()>e.TTL;return t}Object.defineProperty(t,"__esModule",{value:!0});var E=n(82),w=o(E),b=n(1),y=o(b),C=n(139),T=n(58),F=o(T),I=n(61),O=o(I),j=n(107),S=5,P=864e5,x="Restricted Page View",U=window.localStorage,N=(0,y.default)(".js-isRestrictablePage").first(),k=N.length>0,M=(function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t})(w.default);t.default=u},516:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(1),r=o(i),a=n(106),u=n(60),s=n(105),c=n(952),l=a.create(u.HIGHLITER_ACE);e.exports.init=function(){var e=(0,r.default)("pre code[data-claire-semantic]:not([data-claire-semantic=console])",(0,r.default)(".js-course-container")),t=new s(l);t.colorizeElement(e).done((function(){e.each((function(e,n){var o=t.getCodeFromElement(n);c.create({source:o.source,language:o.language},n)}))}))}},517:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=o(i),a=n(937),u=o(a);t.default={init:function(){(0,r.default)(".js-courseEngagement").each((function(e,t){u.default.create(t)}))}}},518:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(){S.on("mouseleave.courseElementEnter",I,(function(){C.default.isEnabled()&&a()})).on("mouseenter.courseElementEnter",I,(function(){C.default.isEnabled()&&u((0,v.default)(this))})),P.on("mouseleave.courseElementEnter",(function(){C.default.isEnabled()&&a()})).on("mouseenter.courseElementEnter",(function(){C.default.isEnabled()&&u(x)}))}function r(e){C.default.isEnabled()&&(e.preventDefault(),b.default.changeCurrentText(O.getWidgetElement("copyUrl").data("tooltip-done")))}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;clearInterval(j),j=setTimeout((function(){c(x,!1)}),e)}function u(e){e&&e.length&&(clearInterval(j),x=s(e,I),x.length>0&&c(x,!0))}function s(e,t){var n=e.parents(t).last();return n.length?n:e}function c(e,t){e&&((0,v.default)(".hoveredCourseElement",S).removeClass("hoveredCourseElement"),e.toggleClass("hoveredCourseElement",t),t?(l(e),f(e),clearInterval(j)):h())}function l(e){O.setData({url:d(e)}),(0,v.default)(".js-courseElementActions-copyUrl",P).each((function(){C.default.enableCopyToElement(this,d(e))}))}function d(e){return document.location.href.match(/[^#]+/)[0]+"#/id/"+e.attr("id")}function f(e){P.addClass("is-visible").height(e.outerHeight()).position({my:"right top",at:"left-8 top",of:e})}function h(){P.removeClass("is-visible")}var p=n(1),v=o(p),m=n(77),g=o(m),_=n(346),E=o(_),w=n(905),b=o(w),y=n(899),C=o(y),T=n(936),F=o(T),I="[id^=r-], [id^=video_Player]",O=void 0,j=void 0,S=void 0,P=void 0,x=void 0,U={HOVER_COURSE_ELEMENT_NOT_ACTIVATED_ON_MOBILE_EXCEPTION:"Hover Course Element Not Activated On Mobile",init:function(){E.default.isTouch()&&g.default.throwException(U.HOVER_COURSE_ELEMENT_NOT_ACTIVATED_ON_MOBILE_EXCEPTION),S=(0,v.default)(".js-course-container"),P=(0,v.default)(".js-courseSelementActions"),i(),P.length>0&&(O=F.default.create({onCopyUrl:r},P))}};e.exports=U},519:function(e,t,n){"use strict";window._define("class/coursePage",(function(){var e=function(e){this.config=e};return e.prototype.isPart=function(){return!!this.getPartId()},e.prototype.getPartId=function(){return this.config.partId},e.prototype.getPartTitle=function(){return this.config.partTitle},e.prototype.getPartSlug=function(){return this.config.partSlug},e.prototype.getCourseId=function(){return this.config.courseId},e.prototype.getCourseTitle=function(){return this.config.courseTitle},e.prototype.getCourseSlug=function(){return this.config.courseSlug},e}))},520:function(e,t,n){"use strict";window._define("common/responsiveForm",["jquery","utils/responsive"],(function(e,t){e(document).on("submit",".js-responsiveForm",(function(){var n=t.isSmall()?".js-responsiveForm-desktop":".js-responsiveForm-mobile";e(n,this).remove()}))}))},521:function(e,t,n){"use strict";window._define("view/contentFocus",["jquery","utils/responsive","common/pubsub"],(function(e,t,n){function o(t){var n=e(t),o=n.height(),i=p.height();e("body, html").animate({scrollTop:n.offset().top-(i-o)/2},200)}function i(t){var n=e(t),i=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement);i||n.data("isEnlarged")||(f=n,s(),n.addClass("is-contentFocused"),void 0===n.data("originalHeight")&&n.data("originalHeight",n.height()),n.data("isEnlarged",!0),n.css("height",""),o(t),r())}function r(){window.focus(),e(document).on("keydown.contentFocus",(function(e){27===e.keyCode&&(a(),u(f))}))}function a(){e(document).off("keydown.contentFocus")}function u(t){var n=e(t);f=null,c(),n.removeClass("is-contentFocused"),n.height(n.data("originalHeight")),n.data("isEnlarged",!1)}function s(){l(),h.addClass("contentFocus--video"),h.on("tap.contentFocus click.contentFocus",(function(){f&&(e(f).data("videoPlayer").pause(),u(f))}))}function c(){d(),h.removeClass("contentFocus--video"),h.off("tap.contentFocus click.contentFocus")}function l(){h.addClass("contentFocus")}function d(){h.removeClass("contentFocus")}var f,h=e("body"),p=e(window);n.subscribe(n.EVENT.STARTED_VIDEO,(function(e,n){t.isLarge()&&i(n.iframeElement)}))}))},522:function(e,t,n){"use strict";window._define("view/currentCoursePage",["jquery","class/coursePage"],(function(e,t){function n(){return document.location.pathname.match(/\/courses\/([^\/]+)(\/(.*))?/)}function o(){var e=n();return e?e[1]:null}function i(){var e=n();return e?e[3]:null}function r(){return e("[data-course-title]").data("courseTitle")}function a(){return e("[data-part-title]").data("partTitle")}var u;return{init:function(){var e=this.preferences;e.courseSlug=o(),e.partSlug=i(),e.courseTitle=r(),e.partTitle=a(),u=new t(e)},get:function(){return u}}}))},523:function(e,t,n){"use strict";window._define("course/view/internalFolding",["jquery","bridge/widgets/foldable","common/commands","utils/responsive"],(function(e,t,n,o){function i(t,n){var o=[],i=[];return t.each((function(t,r){var a=e(r).is(n),u=i.length;(a||u>=1)&&(a&&u>=1&&(o.push(e.merge([],i)),i=[]),i.push(r))})),o.push(e.merge([],i)),o}function r(){return"large"!==o.getCurrentWidth()}function a(n){n.forEach((function(n){var o,i,a=e(n);i=a.wrapAll("<div>").parent().addClass(p).uniqueId(),r()&&a.parent().addClass("is-closed"),o=n.shift(),a=e(n),e(o).addClass(p+"__button secondTitle js-foldable-button").append('<i class="'+p+'__icon icon-next"></i>'),a.wrapAll("<div>").parent().addClass(p+"__content"),i.length>0&&t.create(i)}))}function u(t){var n,o=e("#"+t);o.length&&(n=o.closest("[data-widget=foldable]"),n.length&&(n.foldable("instance").open(),e(window).scrollTop(o.offset().top)))}function s(){r()&&e(".js-course-part li").addClass("course-part-summary--closed")}function c(e){return e?"h3[id*=r-]":"h2[id*=r-]"}function l(){var e=document.location.hash,t=e.match(/\/id\/(.*)/);t&&setTimeout((function(){u(t[1])}),1e3)}var d,f,h=[],p="foldable",v=e(".js-userContent"),m=e("> *",v);return n.add("course.view.foldedPartsOpen",(function(){d.each((function(t,n){e(n).foldable("instance").open()}))})),n.add("course.view.foldedPartsClose",(function(){d.each((function(t,n){e(n).foldable("instance").close()}))})),{init:function(){f=c(this.preferences.isBigCourse),h=i(m,f),a(h),d=e("."+p,v),s(),l()}}}))},524:function(e,t,n){"use strict";window._define("course/view/pictureZoom",["jquery"],(function(e){function t(e){return!!e.match(/\.(jpeg|jpg|gif|png)$/)}function n(e){return r.src=e.src,r.width===e.width&&r.height===e.height}function o(n){var o=e(n),i=o.children(),r=1===i.length&&"IMG"===i.get(0).tagName&&t(n.href);return r}function i(t){e(t).css("cursor","pointer").css("cursor","-webkit-zoom-in").css("cursor","-moz-zoom-in")}var r=new Image,a=".js-course-container p > img, .js-course-container figure > img";e(document).on("click",".js-course-container a",(function(e){o(e.currentTarget)&&e.preventDefault()})).on("mouseenter",a+", .js-course-container a",(function(e){(o(e.currentTarget)||e.currentTarget.src&&!n(e.currentTarget))&&i(e.currentTarget)})).on("click",a,(function(o){var i=null,r=e(o.currentTarget),a=r.parent(),u="A"===a.get(0).tagName,s=u&&t(a.attr("href")),c=a.find("figcaption");u&&!s||!s&&o.target.src&&n(o.target)||(c.length&&(i=c.html()),e.fancybox.open([{href:s?a.attr("href"):o.target.src,title:i}],{padding:0}))}))}))},525:function(e,t,n){"use strict";window._define("course/view/traces",["common/pubsub","view/currentCoursePage"],(function(e,t){return{init:function(){var n=t.get();setTimeout((function(){var t,o={courseId:n.getCourseId()};n.isPart()?(t=e.EVENT.VIEW_PART,o.partId=n.getPartId()):t=e.EVENT.VIEW_COURSE,e.publish(t,o)}),1e3)}}}))},526:function(e,t,n){"use strict";window._define("widgets/courseFormatsBar",["jquery","widgets/baseWidget","Modernizr","bridge/popin"],(function(e,t,n,o){var i="courseFormatsBar",r=n.touchevents;return e.widget("OC."+i,t,{options:{},_create:function(){var t=this;this._super(),this.element.on(r?"tap":"click",(function(n){var i=e(n.target).parent(),a=function(e){n.preventDefault(),o.open(e)};i.is(".js-popin-activator")&&!r?a(i.data("popin-selector")):r&&a(t.options.popinselector)}))}}),e(".js-course-formats-bar")[i](),e.OC[i]}))},527:function(e,t,n){"use strict";window._define("widgets/ebookConfirmDownload",["jquery","widgets/baseWidget","modules/confirm"],(function(e,t,n){var o="ebookConfirmDownload",i="js-ebookConfirmDownload";return e.widget("OC."+o,t,{options:{},_create:function(){this._super(),this._on(this.element,{click:this._onClick})},_onClick:function(t){t.preventDefault(),e(t.target).is(".disabled")||n.show({message:this.options.message,textButton:this.options.button,confirmCallback:e.proxy(this._onConfirm,this)})},_onConfirm:function(){window.open(this.element.attr("href")),window.setTimeout((function(){window.location.reload()}),300)}}),e("."+i)[o](),e.OC[o]}))},528:function(e,t,n){"use strict";window._define("widgets/linkedSelect",["jquery","_","widgets/baseWidget"],(function(e,t,n){return e.widget("OC.linkedSelect",n,{options:{rawdata:null,freeFieldTrigger:null},_create:function(){this._super(),this.value=null,this.elements.$mainSelelect=this._createSelect(this._getNodeChildren(0)),this.elements.$freeField=e('<input type="text">').appendTo(this.element),this._on(this.elements.$freeField,{input:this._onChangeFreeField}),this._toggleFreeField(!1)},_getNodeChildren:function(e){var n=this.options.rawdata[e],o=n?n.children:null;return o?t.sortBy(o,"position"):[]},_createSelect:function(t,n){var o,i=e("select",this.element),r=this.options.freeFieldTrigger,a=!1;return n||(n=e("<select>"),a=!0),n.empty(),t.unshift({id:"",title:""}),t.forEach((function(t){o=e("<option>").attr("value",t.id).text(t.title).appendTo(n),r&&t[r.field]===r.value&&o.data("needFreeField",!0)})),this._on(n,{change:this._onSelectChange}),a&&(0===i.length?n.appendTo(this.element):n.insertAfter(i.last())),n},_onChangeFreeField:function(e){this._trigger("changeFreeField",e,{value:this.freeFieldVal()})},_onSelectChange:function(t){var n=e(t.currentTarget),o=n.val(),i=!!e(":selected",n).data("needFreeField"),r=this._getNodeChildren(o);n.nextAll("select").remove(),r.length>0&&this._createSelect(r,this._getNextSelect(n)),this._toggleFreeField(i),this.value=o,this._trigger("change",t,{value:this.val()})},_getNextSelect:function(e){var t=e.next("select");return t.length?t:null},_toggleFreeField:function(e){this.elements.$freeField.css("visibility",e?"visible":"hidden"),e||(this.elements.$freeField.val(""),this._onChangeFreeField())},val:function(){return this.value},freeFieldVal:function(){return this.elements.$freeField.val()}}),e.OC.linkedSelect}))},529:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(1),r=o(i),a=n(144),u=o(a);e.exports.init=function(){var e=u.default.elementsMath(u.default.constants.MATH_RENDERER_MATHJAX),t=(0,r.default)(".js-course-container").find("math");t.length>0&&e.mathElement(t)}},530:function(e,t,n){"use strict";var o=n(108),i=n(207).default;e.exports.name="startedVideo",e.exports.init=function(){var e=new i("/api");o.subscribe(o.EVENT_VIEW_BEGINNING_VIDEO,(function(t,n){var o="undefined"!=typeof n.course.partId,i={courseId:n.course.courseId,videoId:n.claireVideoElementId,userId:window.App.user.id};o&&!n.isIntroVideo&&(i.partId=n.course.partId,e.POST("/trace-videos/",i))}))}},531:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(1),u=i(a),s=n(343),c=o(s),l=n(61),d=i(l);t.default={init:function(){var e=["apprenez-a-programmer-en-java","structurez-vos-donnees-avec-xml","des-applications-ultra-rapides-avec-node-js","avoir-l-audace-d-entreprendre"],t=d.default.get();t&&e.indexOf(t.courseSlug)!==-1&&setTimeout((function(){(0,u.default)(".js-course-container h3").each((function(e,n){c.publishEnterViewportForElement(n,r({},t))}))}),200)}}},532:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){e.data({blockedVideo:{elementWrapper:(0,w.default)(".js-course-container").data("video-blocked-wrapper")}})}function r(e){var t,n={onPlay:function(){(0,w.default)(this).data("videoPlayer",t),u(this,t,e)},onPause:function(){s(this,t)},onProgress:function(n,o){o.percent>=.9&&t.getVideoDuration((function(e){c(this,t,e)})),o.seconds>=10&&l(e,t)}};t=T.create(e,n)}function a(e,t){var n=y.default.get(),o={course:n||{}};return o.type=t.getType(),o.iframeElement=e,o.videoUrl=t.getSourceUrl(),o}function u(e,t){var n=y.default.get(),o={course:n||{}},i=t;o.type=i.getType(),o.iframeElement=e,o.videoUrl=i.getSourceUrl(),I.indexOf(o.videoUrl)===-1&&(g.default.sendToSegment((0,_.startedVideoEvent)(v({videoUrl:o.videoUrl},o.course))),I.push(o.videoUrl)),C.publish(C.EVENT_STARTED_VIDEO,o)}function s(e,t){C.publish(C.EVENT_STOPPED_VIDEO,{type:t.getType(),iframeElement:e})}function c(e,t,n){var o=a(e,t);O.indexOf(o.videoUrl)===-1&&(g.default.sendToSegment((0,_.endedPlayingVideoEvent)(v({videoDuration:n,videoUrl:o.videoUrl},o.course))),O.push(o.videoUrl))}function l(e,t,n){var o=a(e,t);o.isIntroVideo=d(),o.claireVideoElementId=parseInt((0,w.default)(e).attr("id").split("r-")[1],10),o.videoDuration=n,F.indexOf(e)===-1&&(F.push(e),C.publish(C.EVENT_VIEW_BEGINNING_VIDEO,o))}function d(){return"undefined"==typeof h&&(h=(0,w.default)(".js-course-container").is(".js-course-content")),h}function f(){return"undefined"==typeof p&&(p=(0,w.default)(".js-course-container").is(".js-userCanWatchVideo")),p}var h,p,v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m=n(75),g=o(m),_=n(865),E=n(1),w=o(E),b=n(61),y=o(b),C=n(108),T=n(352),F=[],I=[],O=[];e.exports.init=function(){(0,w.default)("video[data-claire-element-id]").each((function(e,t){var n=(0,w.default)(t);d()||f()||i(n),r(t)}))}},533:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=o(i),a=n(890),u=o(a),s=n(78),c=o(s),l=n(108),d=o(l),f=n(61),h=o(f),p=n(205),v=o(p),m=n(323),g="Downloaded Single Video",_="data-video-source-link",E="data-video-source-size",w=".js-download-video-popin-button",b=".js-download-video-popin-button-legend",y="-ld",C="-md",T="-hd",F="video",I=".js-video-download-forbidden",O=".js-all-video-download-info",j=".js-single-video-download-info",S=void 0,P=[{RESOLUTION:"low",SUFFIX:y},{RESOLUTION:"medium",SUFFIX:C},{RESOLUTION:"high",SUFFIX:T}],x=function(){function e(){S=h.default.get(),(0,r.default)(".js-claire-video").each(t)}function t(e,t){var i=void 0;try{i=v.default.get()}catch(e){}return i&&i.isPremium?S.isIntroduction?void o(t):void a(t):void n(t)}function n(e){i(e,I)}function o(e){i(e,O)}function i(e,t){var n=(0,r.default)(e),o=(0,r.default)(t).html(),i=(0,r.default)(o);n.after(i)}function a(e){var t=(0,r.default)(j).html(),n=(0,r.default)(t),o=(0,r.default)(e),i=o.attr("data-src-origine"),a=c.default.getVideoIdFromUrl(i);t&&o.after(n),n.hasClass("js-download-video-popin-link")&&(n.attr("data-video-id",a).attr("data-video-url",i).addClass("hidden"),u.default.get(i).then((function(e){var t=e.links;s(t,a)})))}function s(e,t){var n=(0,r.default)(".js-download-video-popin-link[data-video-id="+t+"]");P.forEach((function(t){var o=void 0,i=void 0;"undefined"!=typeof e[t.RESOLUTION]&&(o=e[t.RESOLUTION].url,i=e[t.RESOLUTION].size,n.attr(_+t.SUFFIX,o).attr(E+t.SUFFIX,i))})),n.on("click",l).removeClass("hidden")}function l(e){var t=(0,r.default)(e.currentTarget),n=(0,r.default)(this);P.forEach(function(e){var o=(0,r.default)(w+e.SUFFIX),i=(0,r.default)(b+e.SUFFIX),a=t.attr(_+e.SUFFIX),u=t.attr(E+e.SUFFIX);if("undefined"!=typeof a&&"#"!==a){var s=(0,m.toHumanReadable)(u);o.data("videoInformations",{videoSize:u/1024/1024,courseId:S.courseId,courseTitle:S.courseTitle,partId:S.partId,partTitle:S.partTitle,partSlug:S.partSlug,videoUrl:n.attr("data-video-url"),videoId:n.attr("data-video-id"),resolution:e.RESOLUTION}).removeClass("hidden").attr("download",F+e.SUFFIX).attr("href",a).off("click").on("click",f),i.text(s)}else o.addClass("hidden")}.bind(this))}function f(){var e=(0,r.default)(this).data("videoInformations");d.default.publish(g,e),r.default.fancybox.close()}e()};t.default={name:"downloadVideoLink",init:x}},534:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=o(i),a=n(961),u=o(a);t.default={name:"videoQuota",init:function(){var e=(0,r.default)(".js-course-container"),t=e.find("video").first(),n=e.data("video-blocked-text");if(n&&t.length){var o=(0,r.default)("<div />");u.default.create({message:n},o),o.insertBefore(t)}}}},865:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="Ended Playing Course Video",i="Started Playing Course Video";t.endedPlayingVideoEvent=function(e){return{name:o,integrations:{HubSpot:!1},data:e}},t.startedVideoEvent=function(e){return{name:i,integrations:{HubSpot:!1},data:e}}},890:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return"/ajax/videos/"+e+"/download-links"}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=o(r),u=n(78),s=o(u);t.default={get:function(e){return new Promise(function(t,n){"vimeo"!==s.default.getTypeFromUrl(e)&&n(new Error("downloadLinks : must be vimeo url"));var o=s.default.getVideoIdFromUrl(e),r=i(o);a.default.get(r).done((function(e){t(e)}))})}}},899:function(e,t,n){"use strict";function o(){var e=this.getAttribute("data-clipboard-text"),t=document.createElement("textarea");t.value=e,t.style.fontSize="12pt",t.style.border="0",t.style.padding="0",t.style.margin="0",t.style.position="absolute",t.style.color="transparent",t.style.backgroundColor="transparent",t.setAttribute("readonly",""),this.parentNode.insertBefore(t,this),t.focus(),t.setSelectionRange(0,e.length),document.execCommand("copy"),this.parentNode.removeChild(t)}function i(e,t){e.setAttribute("data-clipboard-text",t),e.removeEventListener("click",o),e.addEventListener("click",o)}function r(){return void 0===a&&(a=!(!document.queryCommandSupported||!document.queryCommandSupported("copy"))),a}Object.defineProperty(t,"__esModule",{value:!0}),t.enableCopyToElement=i,t.isEnabled=r;var a=void 0;t.default={enableCopyToElement:i,isEnabled:r}},905:function(e,t,n){"use strict";function o(e){r(".oc-tooltip:visible").html(e)}function i(){r(".oc-tooltip").css("top","-100000px")}var r=n(1);t.changeCurrentText=o,t.closeAll=i},936:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(1),r=o(i),a=n(5),u="courseElementActions",s="js-courseElementActions",c=a(u,{options:{},_create:function(){this._super(s),this.data={url:""},this._attachEvents()},_attachEvents:function(){var e=this;this.element.on("mousedown.courseElementActions","."+s+"-copyUrl",(function(){(0,r.default)(this).blur()})).on("click.courseElementActions","."+s+"-copyUrl",(function(t){(0,r.default)(this).blur(),e.copyUrl(t)}))},copyUrl:function(e){this._trigger("onCopyUrl",e,this.data.url)},setData:function(e){this.data=r.default.extend(this.data,e),this.getWidgetElement("copyUrl").attr("href",this.data.url)}});e.exports=c},937:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=o(i),a=n(5),u=o(a),s=n(947),c=o(s),l="courseEngagement",d="js-"+l;t.default=(0,u.default)(l,{options:{},_create:function(){this._super(d),this.elements.$formsContainer=this.getWidgetElement("form"),this._addAjaxedForms()},_addAjaxedForms:function(){var e=this;this.element.find("form[data-ajaxed=true]").each((function(t,n){c.default.create({onBeforeRequest:function(){this._swapForms((0,r.default)(n))}.bind(e)},n)}))},_swapForms:function(e){this.elements.$formsContainer.hide(),this._isUnfollowForm(e)?this._showAfterUnfollowForm():this._showNextState(e)},_isUnfollowForm:function(e){return e.parent(".js-courseEngagement-form").is("[data-unfollow=true]")},_showAfterUnfollowForm:function(){this.elements.$formsContainer.filter("[data-displayedafterunfollow=true]").show()},_showNextState:function(e){var t=e.data("nextstate");this.element.find(t).show()}})},947:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TARGET_MUST_BE_A_FORM_EXCEPTION=void 0;var i=n(1),r=o(i),a=n(5),u=o(a),s="ajaxedForm",c="js-"+s,l=t.TARGET_MUST_BE_A_FORM_EXCEPTION="the targeted element must be a <form>.";t.default=(0,u.default)(s,{options:{onBeforeRequest:r.default.noop,onSuccess:r.default.noop,onError:r.default.noop},_create:function(){if(this._super(c),!this.element.is("form"))throw new Error(l);this._promise=null,this.elements.$form=this.element,this._attachEvents()},_attachEvents:function(){var e=this;this.elements.$form.on("submit",(function(t){t.preventDefault(),e.submitForm()}))},submitForm:function(){var e=this,t=this.elements.$form;return!this._promise&&this._trigger("onBeforeRequest")&&(this._promise=new Promise(function(n,o){r.default.ajax({type:t.attr("method")||"post",url:t.attr("action"),data:t.serialize()}).always((function(){e._promise=null})).then((function(t){e._trigger("onSuccess",null,t),n()}),(function(){e._trigger("onError"),o()}))})),this._promise}})},952:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(1),r=o(i),a=n(5),u="codeBlock",s=a(u,{options:{source:"",language:"text"},_create:function(){this._super(u),this._initCodeCopyFeature(),this._attachEvents()},_attachEvents:function(){var e="code-block--show-raw-code";this.elements.$container.on("click","code",function(){this.elements.$container.toggleClass(e).find("textarea").val(this.getCode()).select()}.bind(this)).on("blur","textarea",function(){this.elements.$container.toggleClass(e)}.bind(this))},_initCodeCopyFeature:function(){var e=(0,r.default)("<textarea>");this.elements.$container=this.element.parent(),this.elements.$container.is("pre")||(this.elements.$container=this.element.wrap("<pre>").parent()),e.addClass("code-block--raw-code").insertAfter(this.element),this.elements.$container.addClass("code-block")},getCode:function(){return this.options.source},getLanguage:function(){return this.options.language}});e.exports=s},961:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.widgetName=void 0;var i=n(5),r=o(i),a=t.widgetName="tooltipMessage",u=(0,r.default)(a,{options:{text:null,message:"foo"},_create:function(){this._super(a),this.element.addClass("tooltipMessage").html(this.options.message)}});t.default=u}},[1411]);
//# sourceMappingURL=courseView-a8a0b522.js.map