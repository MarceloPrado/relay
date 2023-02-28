"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[78733],{3905:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>p});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=t.createContext({}),p=function(e){return function(n){var a=s(n.components);return t.createElement(e,i({},n,{components:a}))}},s=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=s(a),c=r,h=p["".concat(o,".").concat(c)]||p[c]||u[c]||i;return a?t.createElement(h,l(l({ref:n},m),{},{components:a})):t.createElement(h,l({ref:n},m))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1766:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var t=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={id:"pagination-container",title:"Pagination Container",original_id:"pagination-container"},d=void 0,m={unversionedId:"pagination-container",id:"version-v10.0.0/pagination-container",title:"Pagination Container",description:"Pagination Container is also a higher-order component, similar to a Fragment Container, that is designed to simplify the workflow of loading more items in a list \u2014 in many cases, we don't want to fetch all the data at once but lazily load more data. It relies on a GraphQL server exposing connections in a standardized way. For a detailed spec, please check out this page.",source:"@site/versioned_docs/version-v10.0.0/Modern-PaginationContainer.md",sourceDirName:".",slug:"/pagination-container",permalink:"/docs/v10.0.0/pagination-container",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.0.0/Modern-PaginationContainer.md",tags:[],version:"v10.0.0",lastUpdatedBy:"alunyov",lastUpdatedAt:1677619413,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{id:"pagination-container",title:"Pagination Container",original_id:"pagination-container"},sidebar:"version-v10.0.0/docs",previous:{title:"Refetch Container",permalink:"/docs/v10.0.0/refetch-container"},next:{title:"Mutations",permalink:"/docs/v10.0.0/mutations"}},p={},s=[{value:"<code>@connection</code>",id:"connection",level:2},{value:"Examples",id:"examples",level:3},{value:"<code>createPaginationContainer</code>",id:"createpaginationcontainer",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Available Props",id:"available-props",level:3},{value:"<code>hasMore</code>",id:"hasmore",level:2},{value:"<code>isLoading</code>",id:"isloading",level:2},{value:"<code>loadMore</code>",id:"loadmore",level:2},{value:"Arguments:",id:"arguments-1",level:3},{value:"<code>refetchConnection</code>",id:"refetchconnection",level:2},{value:"Arguments:",id:"arguments-2",level:3},{value:"Pagination Example",id:"pagination-example",level:2}],c={toc:s};function u(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Pagination Container is also a ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html"},"higher-order component"),", similar to a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v10.0.0/fragment-container"},"Fragment Container"),", that is designed to simplify the workflow of loading more items in a list \u2014 in many cases, we don't want to fetch all the data at once but lazily load more data. It relies on a GraphQL server exposing connections in a standardized way. For a detailed spec, please check out ",(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"this page"),"."),(0,i.mdx)("p",null,"Table of Contents:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#connection"},(0,i.mdx)("inlineCode",{parentName:"a"},"@connection"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#createpaginationcontainer"},(0,i.mdx)("inlineCode",{parentName:"a"},"createPaginationContainer"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#hasmore"},(0,i.mdx)("inlineCode",{parentName:"a"},"hasMore"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#isloading"},(0,i.mdx)("inlineCode",{parentName:"a"},"isLoading"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#loadmore"},(0,i.mdx)("inlineCode",{parentName:"a"},"loadMore"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#refetchconnection"},(0,i.mdx)("inlineCode",{parentName:"a"},"refetchConnection"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#pagination-example"},"Pagination Example"))),(0,i.mdx)("h2",{id:"connection"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@connection")),(0,i.mdx)("p",null,"Pagination Container works in a very similar way to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v10.0.0/fragment-container"},"Fragment Container")," in that you also specify the data requirements for a component via GraphQL fragments in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"fragmentSpec"),"."),(0,i.mdx)("p",null,"However, when ",(0,i.mdx)("a",{parentName:"p",href:"#createpaginationcontainer"},"specifying connection fragments")," for a Pagination Container, it is expected that at least one of the fragments contains a ",(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"GraphQL connection")," to paginate over, and that the connection field is annotated with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@connection")," directive."),(0,i.mdx)("p",null,"The purpose of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@connection")," directive is to allow Relay to uniquely identify different connections under a parent type. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"@connection")," directive takes 2 arguments that help identify the connection:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"@connection(key: String!, filters: [String])\n\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"key"),": ",(0,i.mdx)("strong",{parentName:"li"},"Required")," String that serves as a unique identifier for the connection under the parent field type. A good practice could be ",(0,i.mdx)("inlineCode",{parentName:"li"},"<ComponentName>_<fieldName | fieldAlias>"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"filters"),": ",(0,i.mdx)("strong",{parentName:"li"},"Optional")," Array of strings that belong to the set of argument variables defined for the connection field (e.g. ",(0,i.mdx)("inlineCode",{parentName:"li"},"orderBy"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"searchTerm"),", etc). The values for the variables specified in this array will be used alongside the user-supplied ",(0,i.mdx)("inlineCode",{parentName:"li"},"key")," to uniquely identify a connection. If ",(0,i.mdx)("inlineCode",{parentName:"li"},"filters")," is not provided, by default Relay will use the set of all of the arguments the connection field takes, excluding pagination specific arguments (i.e. ",(0,i.mdx)("inlineCode",{parentName:"li"},"first"),"/",(0,i.mdx)("inlineCode",{parentName:"li"},"last"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"after"),"/",(0,i.mdx)("inlineCode",{parentName:"li"},"before"),").")),(0,i.mdx)("h3",{id:"examples"},"Examples"),(0,i.mdx)("p",null,"Specifying just the ",(0,i.mdx)("inlineCode",{parentName:"p"},"key"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'fragment Feed_user on User {\n  # This connection, under a specific User, will be uniquely identified by\n  # the key "Feed_feed" and the value of `$orderBy` (given that no `filters` were provided)\n  feed(\n    first: $count\n    after: $cursor\n    orderby: $orderBy\n  ) @connection(key: "Feed_feed") {\n    edges {\n      node {\n        id,\n        ...Story_story\n      }\n  }\n}\n')),(0,i.mdx)("p",null,"Specifying ",(0,i.mdx)("inlineCode",{parentName:"p"},"key")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"filters"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'fragment Feed_user on User {\n  # This connection, under a specific User, will be uniquely identified by\n  # the key "Feed_feed" and /only/ the value of `$searchTerm`, i.e.\n  # different values of `orderBy` will not distinguish connections.\n  feed(\n    first: $count\n    after: $cursor\n    orderby: $orderBy\n    search_term: $searchTerm\n  ) @connection(key: "Feed_feed", filters: ["searchTerm"]) {\n    edges {\n      node {\n        id,\n        ...Story_story\n      }\n  }\n}\n')),(0,i.mdx)("h2",{id:"createpaginationcontainer"},(0,i.mdx)("inlineCode",{parentName:"h2"},"createPaginationContainer")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"createPaginationContainer")," has the following signature:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"createPaginationContainer(\n  component: ReactComponentClass,\n  fragmentSpec: {[string]: GraphQLTaggedNode},\n  connectionConfig: ConnectionConfig,\n): ReactComponentClass;\n\ntype ConnectionConfig = {\n  direction?: 'backward' | 'forward',\n  getConnectionFromProps?: (props: Object) => ?ConnectionData,\n  getFragmentVariables?: (previousVariables: Object, totalCount: number) => Object,\n  getVariables: (\n    props: Object,\n    paginationInfo: {count: number, cursor: ?string},\n    fragmentVariables: Object,\n  ) => Object,\n  query: GraphQLTaggedNode,\n};\n\ntype ConnectionData = {\n  edges?: ?Array<any>,\n  pageInfo?: ?{\n    endCursor: ?string,\n    hasNextPage: boolean,\n    hasPreviousPage: boolean,\n    startCursor: ?string,\n  },\n};\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"component"),": The React Component ",(0,i.mdx)("em",{parentName:"li"},"class")," of the component requiring the fragment data."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fragmentSpec"),": Specifies the data requirements for the Component via a GraphQL fragment. It is expected that one of the fragments specified here will contain a ",(0,i.mdx)("a",{parentName:"li",href:"#connection"},(0,i.mdx)("inlineCode",{parentName:"a"},"@connection"))," for pagination. The required data will be available on the component as props that match the shape of the provided fragment. ",(0,i.mdx)("inlineCode",{parentName:"li"},"fragmentSpec")," should be an object whose keys are prop names and values are ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," tagged fragments. Each key specified in this object will correspond to a prop available to the resulting Component.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Note:")," ",(0,i.mdx)("inlineCode",{parentName:"li"},"relay-compiler")," enforces fragments to be named as ",(0,i.mdx)("inlineCode",{parentName:"li"},"<FileName>_<propName>"),"."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"connectionConfig"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"direction"),': Either "forward" to indicate forward pagination using after/first, or "backward" to indicate backwards pagination using before/last. If not provided, Relay will infer the direction based on the provided ',(0,i.mdx)("inlineCode",{parentName:"li"},"@connection")," directive."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"getConnectionFromProps"),": Function that should indicate which connection to paginate over, given the fragment props (i.e. the props corresponding to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fragmentSpec"),"). This is necessary in most cases because the Relay can't automatically tell which connection you mean to paginate over (a container might fetch multiple fragments and connections, but can only paginate one of them). If not provided, Relay will try infer the correct connection to paginate over based on the provided ",(0,i.mdx)("inlineCode",{parentName:"li"},"@connection")," directive. See our ",(0,i.mdx)("a",{parentName:"li",href:"#pagination-example"},"example")," for more details."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"getFragmentVariables"),": Function that should return the bag of variables  to use for reading out the data from the store when re-rendering the component. This function takes the previous set of variables passed to the pagination ",(0,i.mdx)("inlineCode",{parentName:"li"},"query"),", and the number of elements that have been fetched in total so far. Specifically, this indicates which variables to use when reading out the data from the\nlocal data store ",(0,i.mdx)("em",{parentName:"li"},"after")," the new pagination ",(0,i.mdx)("inlineCode",{parentName:"li"},"query")," has been fetched. If not specified, Relay will default to using all of the previous variables and using the total count for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"count")," variable. This option is analogous to ",(0,i.mdx)("a",{parentName:"li",href:"/docs/v10.0.0/refetch-container#refetch"},(0,i.mdx)("inlineCode",{parentName:"a"},"renderVariables"))," in the Refetch Container. See our ",(0,i.mdx)("a",{parentName:"li",href:"#pagination-example"},"example")," for more details."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"getVariables"),": Function that should return the variables to pass to the pagination ",(0,i.mdx)("inlineCode",{parentName:"li"},"query")," when fetching it from the server, given the current ",(0,i.mdx)("inlineCode",{parentName:"li"},"props"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"count")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"cursor"),". You may set whatever variables here, as well as modify the defaults to use for after/first/before/last arguments. See our ",(0,i.mdx)("a",{parentName:"li",href:"#pagination-example"},"example")," for more details."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"query"),": A ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," tagged query to be used as the pagination query to fetch more data upon calling ",(0,i.mdx)("a",{parentName:"li",href:"#loadmore"},(0,i.mdx)("inlineCode",{parentName:"a"},"loadMore")),".")))),(0,i.mdx)("h3",{id:"available-props"},"Available Props"),(0,i.mdx)("p",null,"The Component resulting from ",(0,i.mdx)("inlineCode",{parentName:"p"},"createPaginationContainer")," will receive the following ",(0,i.mdx)("inlineCode",{parentName:"p"},"props"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"type Props = {\n  relay: {\n    environment: Environment,\n    hasMore(), // See #hasMore section\n    isLoading(), // See #isLoading section\n    loadMore(), // See #loadMore section\n    refetchConnection(), // See #refetchConnection section\n  },\n  // Additional props as specified by the fragmentSpec\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"relay"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"environment"),": The current ",(0,i.mdx)("a",{parentName:"li",href:"/docs/v10.0.0/relay-environment"},"Relay Environment")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hasMore"),": See ",(0,i.mdx)("inlineCode",{parentName:"li"},"hasMore")," ",(0,i.mdx)("a",{parentName:"li",href:"#hasmore"},"docs")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"isLoading"),": See ",(0,i.mdx)("inlineCode",{parentName:"li"},"isLoading")," ",(0,i.mdx)("a",{parentName:"li",href:"#isloading"},"docs")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"loadMore"),": See ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadMore")," ",(0,i.mdx)("a",{parentName:"li",href:"#loadmore"},"docs")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"refetchConnection "),": See ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetchConnection")," ",(0,i.mdx)("a",{parentName:"li",href:"#refetchconnection"},"docs"))))),(0,i.mdx)("h2",{id:"hasmore"},(0,i.mdx)("inlineCode",{parentName:"h2"},"hasMore")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"hasMore")," is a function available on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay")," ",(0,i.mdx)("a",{parentName:"p",href:"#available-props"},"prop"),". This function indicates whether there are more pages to fetch from the server or not."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"hasMore: () => boolean,\n\n")),(0,i.mdx)("h2",{id:"isloading"},(0,i.mdx)("inlineCode",{parentName:"h2"},"isLoading")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"isLoading")," is a function available on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay")," ",(0,i.mdx)("a",{parentName:"p",href:"#available-props"},"prop"),". This function indicates if a previous call to ",(0,i.mdx)("a",{parentName:"p",href:"#loadmore"},(0,i.mdx)("inlineCode",{parentName:"a"},"loadMore()"))," is still pending. This is convenient for avoiding duplicate load calls."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"isLoading: () => boolean,\n\n")),(0,i.mdx)("h2",{id:"loadmore"},(0,i.mdx)("inlineCode",{parentName:"h2"},"loadMore")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"loadMore")," is a function available on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay")," ",(0,i.mdx)("a",{parentName:"p",href:"#available-props"},"prop"),". You can call ",(0,i.mdx)("inlineCode",{parentName:"p"},"loadMore()")," to fetch more items from the server based on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"connectionConfig")," provided to the container. This will return null if there are no more items to fetch, otherwise it will fetch more items and return a Disposable that can be used to cancel the fetch."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"loadMore(\n  pageSize: number,\n  callback: ?(error: ?Error) => void,\n  options?: RefetchOptions\n): ?Disposable\n\n")),(0,i.mdx)("h3",{id:"arguments-1"},"Arguments:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"pageSize"),": The number of ",(0,i.mdx)("strong",{parentName:"li"},"additional")," items to fetch (not the total)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"callback"),": Function called when the new page has been fetched. If an error occurred during refetch, this function will receive that error as an argument."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"options"),": Optional object containing set of options.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"force"),": If the ",(0,i.mdx)("a",{parentName:"li",href:"/docs/v10.0.0/network-layer"},"Network Layer")," has been configured with a cache, this option forces a refetch even if the data for this query and variables is already available in the cache.")))),(0,i.mdx)("h2",{id:"refetchconnection"},(0,i.mdx)("inlineCode",{parentName:"h2"},"refetchConnection")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"refetchConnection")," is a function available on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay")," ",(0,i.mdx)("a",{parentName:"p",href:"#available-props"},"prop"),". You can call ",(0,i.mdx)("inlineCode",{parentName:"p"},"refetchConnection")," to restart pagination on a connection from scratch, with optionally a completely new set of variables to pass to the pagination ",(0,i.mdx)("inlineCode",{parentName:"p"},"query"),". This is useful for example if you are paginating over a collection based on a userID and the userID changes, you'd want to start paginating over the new collection for the new user."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"refetchConnection:(\n  totalCount: number,\n  callback: (error: ?Error) => void,\n  refetchVariables: ?Variables,\n) => ?Disposable,\n\n")),(0,i.mdx)("h3",{id:"arguments-2"},"Arguments:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"totalCount"),": The total number of elements to fetch"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"callback"),": Function called when the new page has been fetched. If an error occurred during refetch, this function will receive that error as an argument."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"refetchVariables"),": A potentially new bag of variables to pass to the pagination ",(0,i.mdx)("inlineCode",{parentName:"li"},"query")," when fetching it from the server.")),(0,i.mdx)("h2",{id:"pagination-example"},"Pagination Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Feed.js\nimport {createPaginationContainer, graphql} from \'react-relay\';\n\nclass Feed extends React.Component {\n  render() {\n    return (\n      <div>\n        {this.props.user.feed.edges.map(\n          edge => <Story story={edge.node} key={edge.node.id} />\n        )}\n        <button\n          onPress={() => this._loadMore()}\n          title="Load More"\n        />\n      </div>\n    );\n  }\n\n  _loadMore() {\n    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {\n      return;\n    }\n\n    this.props.relay.loadMore(\n      10,  // Fetch the next 10 feed items\n      error => {\n        console.log(error);\n      },\n    );\n  }\n}\n\nmodule.exports = createPaginationContainer(\n  Feed,\n  {\n    user: graphql`\n      fragment Feed_user on User\n      @argumentDefinitions(\n        count: {type: "Int", defaultValue: 10}\n        cursor: {type: "ID"}\n        orderby: {type: "[FriendsOrdering]", defaultValue: [DATE_ADDED]}\n      ) {\n        feed(\n          first: $count\n          after: $cursor\n          orderby: $orderBy # Non-pagination variables\n        ) @connection(key: "Feed_feed") {\n          edges {\n            node {\n              id\n              ...Story_story\n            }\n          }\n        }\n      }\n    `,\n  },\n  {\n    direction: \'forward\',\n    getConnectionFromProps(props) {\n      return props.user && props.user.feed;\n    },\n    // This is also the default implementation of `getFragmentVariables` if it isn\'t provided.\n    getFragmentVariables(prevVars, totalCount) {\n      return {\n        ...prevVars,\n        count: totalCount,\n      };\n    },\n    getVariables(props, {count, cursor}, fragmentVariables) {\n      return {\n        count,\n        cursor,\n        orderBy: fragmentVariables.orderBy,\n        // userID isn\'t specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.\n        userID: fragmentVariables.userID,\n      };\n    },\n    query: graphql`\n      # Pagination query to be fetched upon calling \'loadMore\'.\n      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.\n      query FeedPaginationQuery(\n        $count: Int!\n        $cursor: ID\n        $orderBy: [FriendsOrdering]!\n        $userID: ID!\n      ) {\n        user: node(id: $userID) {\n          ...Feed_user @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)\n        }\n      }\n    `\n  }\n);\n')))}u.isMDXComponent=!0}}]);