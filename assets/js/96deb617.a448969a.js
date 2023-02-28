"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[47540,80096],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(t),c=a,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(39960),a=t(86341),i=t(67294);function s(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var d=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:s},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return i.createElement(o,null,i.createElement(l,null),i.createElement(d,null),i.createElement(u,null))},c=function(){return i.createElement(o,null,i.createElement(d,null),i.createElement(u,null))};const h=function(){return(0,a.fbContent)({internal:i.createElement(p,null),external:i.createElement(c,null)})}},10660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),s=["components"],o={},d=void 0,l={unversionedId:"guided-tour/refetching/OssAvoidSuspenseNote",id:"version-v13.0.0/guided-tour/refetching/OssAvoidSuspenseNote",title:"OssAvoidSuspenseNote",description:"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.",source:"@site/versioned_docs/version-v13.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/OssAvoidSuspenseNote",permalink:"/docs/v13.0.0/guided-tour/refetching/OssAvoidSuspenseNote",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",tags:[],version:"v13.0.0",lastUpdatedBy:"alunyov",lastUpdatedAt:1677619413,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{}},u={},p=[],c={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.")))}h.isMDXComponent=!0},24689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),s=t(68629),o=t(86341),d=t(10660),l=["components"],u={id:"refreshing-queries",title:"Refreshing Queries",slug:"/guided-tour/refetching/refreshing-queries/",description:"Relay guide to refreshing queries",keywords:["refreshing","queries"]},p=void 0,c={unversionedId:"guided-tour/refetching/refreshing-queries",id:"version-v13.0.0/guided-tour/refetching/refreshing-queries",title:"Refreshing Queries",description:"Relay guide to refreshing queries",source:"@site/versioned_docs/version-v13.0.0/guided-tour/refetching/refreshing-queries.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/refreshing-queries/",permalink:"/docs/v13.0.0/guided-tour/refetching/refreshing-queries/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/refetching/refreshing-queries.md",tags:[],version:"v13.0.0",lastUpdatedBy:"alunyov",lastUpdatedAt:1677619413,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{id:"refreshing-queries",title:"Refreshing Queries",slug:"/guided-tour/refetching/refreshing-queries/",description:"Relay guide to refreshing queries",keywords:["refreshing","queries"]},sidebar:"version-v13.0.0/docs",previous:{title:"Introduction",permalink:"/docs/v13.0.0/guided-tour/refetching/"},next:{title:"Refetching Queries with Different Data",permalink:"/docs/v13.0.0/guided-tour/refetching/refetching-queries-with-different-data/"}},h={},m=[{value:"Using real-time features",id:"using-real-time-features",level:2},{value:"When using <code>useQueryLoader</code> / <code>loadQuery</code>",id:"when-using-usequeryloader--loadquery",level:2},{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense",level:3},{value:"When using <code>useLazyLoadQuery</code>",id:"when-using-uselazyloadquery",level:2},{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense-1",level:3}],y=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},f=y("FbRefreshingUsingRealTimeFeatures"),g=y("FbRefreshingQueriesUsingUseQueryLoader"),w=y("FbAvoidSuspenseCaution"),v=y("FbRefreshingQueriesUsingUseLazyLoadQuery"),x={toc:m};function b(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"When referring to ",(0,i.mdx)("strong",{parentName:"p"},'"refreshing a query"'),", we mean fetching the ",(0,i.mdx)("em",{parentName:"p"},"exact")," same data that was originally rendered by the query, in order to get the most up-to-date version of that data from the server."),(0,i.mdx)("h2",{id:"using-real-time-features"},"Using real-time features"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(f,{mdxType:"FbRefreshingUsingRealTimeFeatures"})),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},"If we want to keep our data up to date with the latest version from the server, the first thing to consider is if it appropriate to use any real-time features, which can make it easier to automatically keep the data up to date without manually refreshing the data periodically.",(0,i.mdx)("p",null,"One example of this is using ",(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guided-tour/updating-data/graphql-subscriptions"},"GraphQL Subscriptions"),", which will require additional configuration on your server and ",(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guided-tour/updating-data/graphql-subscriptions/#configuring-the-network-layer"},"network layer"),".")),(0,i.mdx)("h2",{id:"when-using-usequeryloader--loadquery"},"When using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"useQueryLoader")," / ",(0,i.mdx)("inlineCode",{parentName:"h2"},"loadQuery")),(0,i.mdx)("p",null,"To refresh a query using the ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/use-query-loader/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useQueryLoader"))," Hook described in our ",(0,i.mdx)("a",{parentName:"p",href:"../../rendering/queries/#fetching-queries-for-render"},"Fetching Queries for Render")," section, we only need to call ",(0,i.mdx)("inlineCode",{parentName:"p"},"loadQuery")," again:"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(g,{mdxType:"FbRefreshingQueriesUsingUseQueryLoader"})),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const [queryRef, loadQuery] = useQueryLoader<AppQueryType>(\n    AppQuery,\n    props.appQueryRef /* initial query ref */\n  );\n\n  const refresh = useCallback(() => {\n    // Load the query again using the same original variables.\n    // Calling loadQuery will update the value of queryRef.\n    // The fetchPolicy ensures we always fetch from the server and skip\n    // the local data cache.\n    const {variables} = props.appQueryRef;\n    loadQuery(variables, {fetchPolicy: 'network-only'});\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        refresh={refresh}\n        queryRef={queryRef}\n      />\n    </React.Suspense>\n  );\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * MainContent.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\n// Renders the preloaded query, given the query reference\nfunction MainContent(props) {\n  const {refresh, queryRef} = props;\n  const data = usePreloadedQuery<AppQueryType>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n          friends {\n            count\n          }\n        }\n      }\n    `,\n    queryRef,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      <div>Friends count: {data.user.friends?.count}</div>\n      <Button\n        onClick={() => refresh()}>\n        Fetch latest count\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We call ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," in the event handler for refreshing, so the network request starts immediately, and then pass the updated ",(0,i.mdx)("inlineCode",{parentName:"li"},"queryRef")," to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component that uses ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),", so it renders the updated data."),(0,i.mdx)("li",{parentName:"ul"},"We are passing a ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'network-only'")," to ensure that we always fetch from the network and skip the local data cache."),(0,i.mdx)("li",{parentName:"ul"},"Calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," will re-render the component and cause ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery")," to suspend (as explained in ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/loading-states/"},"Loading States with Suspense"),"), since a network request will always be made due to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," we are using. This means that we'll need to make sure that there's a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component in order to show a fallback loading state."))),(0,i.mdx)("h3",{id:"if-you-need-to-avoid-suspense"},"If you need to avoid Suspense"),(0,i.mdx)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/fetch-query/"},(0,i.mdx)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(w,{mdxType:"FbAvoidSuspenseCaution"})),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)(d.default,{mdxType:"OssAvoidSuspenseNote"})),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const environment = useRelayEnvironment();\n  const [queryRef, loadQuery] = useQueryLoader<AppQueryType>(\n    AppQuery,\n    props.appQueryRef /* initial query ref */\n  );\n  const [isRefreshing, setIsRefreshing] = useState(false)\n\n  const refresh = useCallback(() => {\n    if (isRefreshing) { return; }\n    const {variables} = props.appQueryRef;\n    setIsRefreshing(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefreshing(false);\n\n          // *After* the query has been fetched, we call\n          // loadQuery again to re-render with a new\n          // queryRef.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          loadQuery(variables, {fetchPolicy: 'store-only'});\n        }\n        error: () => {\n          setIsRefreshing(false);\n        }\n      });\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        isRefreshing={isRefreshing}\n        refresh={refresh}\n        queryRef={queryRef}\n      />\n    </React.Suspense>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When refreshing, we now keep track of our own ",(0,i.mdx)("inlineCode",{parentName:"li"},"isRefreshing")," loading state, since we are avoiding suspending. We can use this state to render a busy spinner or similar loading UI inside the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component, ",(0,i.mdx)("em",{parentName:"li"},"without")," hiding the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent"),"."),(0,i.mdx)("li",{parentName:"ul"},"In the event handler, we first call ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we call ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," so that we obtain an updated  ",(0,i.mdx)("inlineCode",{parentName:"li"},"queryRef")," that we then pass to ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery")," in order render the updated data, similar to the previous example."),(0,i.mdx)("li",{parentName:"ul"},"At this point, when ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," is called, the data for the query should already be cached in the local Relay store, so we use ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),(0,i.mdx)("h2",{id:"when-using-uselazyloadquery"},"When using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"useLazyLoadQuery")),(0,i.mdx)("p",null,"To refresh a query using the ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/use-lazy-load-query/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useLazyLoadQuery"))," Hook described in our ",(0,i.mdx)("a",{parentName:"p",href:"../../rendering/queries/#lazily-fetching-queries-during-render"},"Lazily Fetching Queries during Render")," section, we can do the following:"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(v,{mdxType:"FbRefreshingQueriesUsingUseLazyLoadQuery"})),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const variables = {id: '4'};\n  const [refreshedQueryOptions, setRefreshedQueryOptions] = useState(null);\n\n  const refresh = useCallback(() => {\n    // Trigger a re-render of useLazyLoadQuery with the same variables,\n    // but an updated fetchKey and fetchPolicy.\n    // The new fetchKey will ensure that the query is fully\n    // re-evaluated and refetched.\n    // The fetchPolicy ensures that we always fetch from the network\n    // and skip the local data cache.\n    setRefreshedQueryOptions(prev => ({\n      fetchKey: (prev?.fetchKey ?? 0) + 1,\n      fetchPolicy: 'network-only',\n    }));\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        refresh={refresh}\n        queryOptions={refreshedQueryOptions ?? {}}\n        variables={variables}\n      />\n    </React.Suspense>\n  );\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * MainContent.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\n// Fetches and renders the query, given the fetch options\nfunction MainContent(props) {\n  const {refresh, queryOptions, variables} = props;\n  const data = useLazyLoadQuery<AppQueryType>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n          friends {\n            count\n          }\n        }\n      }\n    `,\n    variables,\n    queryOptions,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      <div>Friends count: {data.user.friends?.count}</div>\n      <Button\n        onClick={() => refresh()}>\n        Fetch latest count\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We update the component in the event handler for refreshing by setting new options in state. This will cause the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component that uses ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," to re-render with the new ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),", and refetch the query upon rendering."),(0,i.mdx)("li",{parentName:"ul"},"We are passing a new value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," which we increment on every update. Passing a new ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," on every update will ensure that the query is fully re-evaluated and refetched."),(0,i.mdx)("li",{parentName:"ul"},"We are passing a ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'network-only'")," to ensure that we always fetch from the network and skip the local data cache."),(0,i.mdx)("li",{parentName:"ul"},"The state update in ",(0,i.mdx)("inlineCode",{parentName:"li"},"refresh")," will cause the component to suspend (as explained in ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/loading-states/"},"Loading States with Suspense"),"), since a network request will always be made due to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," we are using. This means that we'll need to make sure that there's a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component in order to show a fallback loading state."))),(0,i.mdx)("h3",{id:"if-you-need-to-avoid-suspense-1"},"If you need to avoid Suspense"),(0,i.mdx)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/fetch-query/"},(0,i.mdx)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(w,{mdxType:"FbAvoidSuspenseCaution"})),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)(d.default,{mdxType:"OssAvoidSuspenseNote"})),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const variables = {id: '4'}\n  const environment = useRelayEnvironment();\n  const [refreshedQueryOptions, setRefreshedQueryOptions] = useState(null);\n  const [isRefreshing, setIsRefreshing] = useState(false)\n\n  const refresh = useCallback(() => {\n    if (isRefreshing) { return; }\n    setIsRefreshing(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefreshing(false);\n\n          // *After* the query has been fetched, we update\n          // our state to re-render with the new fetchKey\n          // and fetchPolicy.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          setRefreshedQueryOptions(prev => ({\n            fetchKey: (prev?.fetchKey ?? 0) + 1,\n            fetchPolicy: 'store-only',\n          }));\n        }\n        error: () => {\n          setIsRefreshing(false);\n        }\n      });\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        isRefreshing={isRefreshing}\n        refresh={refresh}\n        queryOptions={refreshedQueryOptions ?? {}}\n        variables={variables}\n      />\n    </React.Suspense>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When refreshing, we now keep track of our own ",(0,i.mdx)("inlineCode",{parentName:"li"},"isRefreshing")," loading state, since we are avoiding suspending. We can use this state to render a busy spinner or similar loading UI inside the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component, ",(0,i.mdx)("em",{parentName:"li"},"without")," hiding the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent"),"."),(0,i.mdx)("li",{parentName:"ul"},"In the event handler, we first call ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we update our state so that we re-render an updated ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," that we then pass to ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," in order render the updated data, similar to the previous example."),(0,i.mdx)("li",{parentName:"ul"},"At this point, when we update the state, the data for the query should already be cached in the local Relay store, so we use ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),(0,i.mdx)(s.Z,{mdxType:"DocsRating"}))}b.isMDXComponent=!0}}]);