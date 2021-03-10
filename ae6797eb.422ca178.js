(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{1171:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return t?r.a.createElement(m,o(o({ref:n},c),{},{components:t})):r.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},825:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(1171)),l={id:"classic-api-reference-relay-container",title:"RelayContainer",original_id:"classic-api-reference-relay-container"},o={unversionedId:"classic-api-reference-relay-container",id:"version-classic/classic-api-reference-relay-container",isDocsHomePage:!1,title:"RelayContainer",description:"RelayContainer is a higher-order React component that lets a React component encode its data requirements.",source:"@site/versioned_docs/version-classic/Classic-APIReference-Container.md",slug:"/classic-api-reference-relay-container",permalink:"/docs/classic/classic-api-reference-relay-container",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/versioned_docs/version-classic/Classic-APIReference-Container.md",version:"classic",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1615351685,sidebar:"version-classic/docs",previous:{title:"Relay",permalink:"/docs/classic/classic-api-reference-relay"},next:{title:"Relay.Route",permalink:"/docs/classic/classic-api-reference-relay-route"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Container Specification",id:"container-specification",children:[{value:"fragments",id:"fragments",children:[]},{value:"initialVariables",id:"initialvariables",children:[]},{value:"prepareVariables",id:"preparevariables",children:[]},{value:"shouldComponentUpdate",id:"shouldcomponentupdate",children:[]}]},{value:"Properties and Methods",id:"properties-and-methods",children:[{value:"route",id:"route",children:[]},{value:"variables",id:"variables",children:[]},{value:"pendingVariables",id:"pendingvariables",children:[]},{value:"setVariables",id:"setvariables",children:[]},{value:"forceFetch",id:"forcefetch",children:[]},{value:"hasOptimisticUpdate",id:"hasoptimisticupdate",children:[]},{value:"getPendingTransactions",id:"getpendingtransactions",children:[]}]},{value:"Static Methods",id:"static-methods",children:[{value:"getFragment",id:"getfragment",children:[]}]}],c={toc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RelayContainer")," is a higher-order React component that lets a React component encode its data requirements."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Relay ensures that this data is available before the component is rendered."),Object(i.b)("li",{parentName:"ul"},"Relay updates the component whenever the underlying data has changed.")),Object(i.b)("p",null,"Relay containers are created using ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.createContainer"),"."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Container Specification")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#fragments"},Object(i.b)("pre",null,"fragments"),"Declare the component's data requirements using fragments.")),Object(i.b)("li",null,Object(i.b)("a",{href:"#initialvariables"},Object(i.b)("pre",null,"initialVariables"),"The initial set of variable values available to this component's fragments.")),Object(i.b)("li",null,Object(i.b)("a",{href:"#preparevariables"},Object(i.b)("pre",null,"prepareVariables"),"A method to modify the variables based on the runtime environment or previous variable values.")),Object(i.b)("li",null,Object(i.b)("a",{href:"#shouldcomponentupdate"},Object(i.b)("pre",null,"shouldComponentUpdate"),"Optionally override RelayContainer's default implementation of `shouldComponentUpdate`."))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Properties and Methods")),Object(i.b)("p",null,"These are the methods and properties that the container will provide as ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.relay")," in the plain React component."),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#route"},Object(i.b)("pre",null,"route"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#pendingvariables"},Object(i.b)("pre",null,"pendingVariables "))),Object(i.b)("li",null,Object(i.b)("a",{href:"#variables"},Object(i.b)("pre",null,"variables"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#setvariables"},Object(i.b)("pre",null,"setVariables([partialVariables[, onReadyStateChange]])"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#forcefetch"},Object(i.b)("pre",null,"forceFetch([partialVariables[, onReadyStateChange]]) "))),Object(i.b)("li",null,Object(i.b)("a",{href:"#hasoptimisticupdate"},Object(i.b)("pre",null,"hasOptimisticUpdate(record)"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getpendingtransactions"},Object(i.b)("pre",null,"getPendingTransactions(record) ")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Static Methods")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#getfragment"},Object(i.b)("pre",null,"getFragment(name[, vars])"),"Get a reference to a container fragment for inclusion in a parent fragment."))),Object(i.b)("h2",{id:"container-specification"},"Container Specification"),Object(i.b)("h3",{id:"fragments"},"fragments"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nfragments: RelayQueryFragments<Tk> = {\n  [propName: string]: (\n    variables: {[name: string]: mixed}\n  ) => Relay.QL`fragment on ...`\n};\n\n")),Object(i.b)("p",null,"Containers declare data requirements on ",Object(i.b)("inlineCode",{parentName:"p"},"fragments")," using GraphQL fragments."),Object(i.b)("p",null,"Only fields specified by these fragments will be populated in ",Object(i.b)("inlineCode",{parentName:"p"},"this.props")," when the component is rendered. This ensures that there are no implicit dependencies from a component on its parent component or any child components."),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}8-14{"}"}'}),"\nclass StarWarsShip extends React.Component {\n  render() {\n    return <div>{this.props.ship.name}</div>;\n  }\n}\n\nmodule.exports = Relay.createContainer(StarWarsShip, {\n  fragments: {\n    ship: () => Relay.QL`\n      fragment on Ship {\n        name\n      }\n    `,\n  },\n});\n\n\n")),Object(i.b)("p",null,"In this example, the fields associated with the ",Object(i.b)("inlineCode",{parentName:"p"},"ship")," fragment will be made available on ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.ship"),"."),Object(i.b)("p",null,"See also: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-guides-containers#relay-containers"}),"Containers ",">"," Relay Containers")),Object(i.b)("h3",{id:"initialvariables"},"initialVariables"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\ninitialVariables: {[name: string]: mixed};\n\n")),Object(i.b)("p",null,"The initial set of variable values available to this component's fragments."),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}4{"}"}'}),"\nclass ProfilePicture extends React.Component {...}\n\nmodule.exports = Relay.createContainer(ProfilePicture, {\n  initialVariables: {size: 50},\n  fragments: {\n    user: () => Relay.QL`\n      # The variable defined above is available here as '$size'.\n      # Any variable referenced here is required to have been defined in initialVariables above.\n      # An 'undefined' variable value will throw an 'Invariant Violation' exception.\n      # Use 'null' to initialize unknown values.\n      fragment on User { profilePicture(size: $size) { ... } }\n    `,\n  },\n});\n\n")),Object(i.b)("p",null,"In this example, ",Object(i.b)("inlineCode",{parentName:"p"},"profilePicture(size: 50)")," will be fetched for the intial render."),Object(i.b)("h3",{id:"preparevariables"},"prepareVariables"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nprepareVariables: ?(\n  prevVariables: {[name: string]: mixed}\n) => {[name: string]: mixed}\n\n")),Object(i.b)("p",null,"Containers can define a ",Object(i.b)("inlineCode",{parentName:"p"},"prepareVariables")," method which provides the opportunity to modify the variables that are available to fragments. The new variables can be generated based on the previous variables (or the ",Object(i.b)("inlineCode",{parentName:"p"},"initialVariables")," if no previous ones exist) in addition to the runtime environment."),Object(i.b)("p",null,"This method is also called after the partial set of variables from ",Object(i.b)("inlineCode",{parentName:"p"},"setVariables")," has been applied. The variables returned are used to populate the fragments."),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}3-9{"}"}'}),"\nmodule.exports = Relay.createContainer(ProfilePicture, {\n  initialVariables: {size: 50},\n  prepareVariables: prevVariables => {\n    return {\n      ...prevVariables,\n      // If devicePixelRatio is `2`, the new size will be `100`.\n      size: prevVariables.size * window.devicePixelRatio,\n    };\n  },\n  // ...\n});\n\n")),Object(i.b)("h3",{id:"shouldcomponentupdate"},"shouldComponentUpdate"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nshouldComponentUpdate: () => boolean;\n\n")),Object(i.b)("p",null,"RelayContainer implements a conservative default ",Object(i.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," that returns ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if no fragment props have changed and all other props are equal scalar values. This may block updates to components that receive data via context. To ensure an update in this case override the default behavior by specifying a ",Object(i.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," function."),Object(i.b)("h4",{id:"example-3"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}2{"}"}'}),"\nmodule.exports = Relay.createContainer(ProfilePicture, {\n  shouldComponentUpdate: () => true,\n  // ...\n});\n\n")),Object(i.b)("h2",{id:"properties-and-methods"},"Properties and Methods"),Object(i.b)("p",null,"The properties and methods listed below can be accessed on ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.relay")," from the wrapped React component."),Object(i.b)("h3",{id:"route"},"route"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nroute: RelayRoute\n\n")),Object(i.b)("p",null,"Route is useful in providing the context which a component is being rendered in. It includes information about the ",Object(i.b)("inlineCode",{parentName:"p"},"name"),", ",Object(i.b)("inlineCode",{parentName:"p"},"params"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"queries")," of the current route."),Object(i.b)("h4",{id:"example-4"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nvar name = this.props.relay.route.name;\nif (name === 'SuperAwesomeRoute') {\n  // Do something super cool.\n}\n\n")),Object(i.b)("p",null,"See also: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-guides-routes"}),"Routes")),Object(i.b)("h3",{id:"variables"},"variables"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nvariables: {[name: string]: mixed}\n\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"variables")," contains the set of variables that was used to fetch the current set of props."),Object(i.b)("h4",{id:"example-5"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}8{"}"}'}),"\nclass ProfilePicture extends React.Component {\n  render() {\n    var user = this.props.user;\n    return (\n      <View>\n        <Image\n          uri={user.profilePicture.uri}\n          width={this.props.relay.variables.size}\n        />\n      </View>\n    );\n  }\n}\nmodule.exports = Relay.createContainer(ProfilePicture, {\n  initialVariables: {size: 50},\n  fragments: {\n    user: () => Relay.QL`\n      fragment on User { profilePicture(size: $size) { ... } }\n    `,\n  },\n});\n\n")),Object(i.b)("p",null,"In this example, the ",Object(i.b)("inlineCode",{parentName:"p"},"width")," of the rendered image will always correspond to the ",Object(i.b)("inlineCode",{parentName:"p"},"$size")," variable used to fetch the current version of ",Object(i.b)("inlineCode",{parentName:"p"},"profilePicture.uri"),"."),Object(i.b)("blockquote",null,"Note",Object(i.b)("p",null,"Never mutate ",Object(i.b)("code",null,"this.props.relay.variables")," directly as it will not trigger data to be fetched properly. Treat ",Object(i.b)("code",null,"this.props.relay.variables")," as if it were immutable, just like props.")),Object(i.b)("h3",{id:"pendingvariables"},"pendingVariables"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\npendingVariables: ?{[name: string]: mixed}\n\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pendingVariables")," contains the set of variables that are being used to fetch the new props, i.e. when ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.relay.setVariables()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.relay.forceFetch()")," are called and the corresponding request is in flight."),Object(i.b)("p",null,"If no request is in flight pendingVariables is ",Object(i.b)("inlineCode",{parentName:"p"},"null"),"."),Object(i.b)("h4",{id:"example-6"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}12{"}"}'}),"\nclass ProfilePicture extends React.Component {\n  requestRandomPictureSize = () => {\n    const randIntMin = 10;\n    const randIntMax = 200;\n    const size = (Math.floor(Math.random() * (randIntMax - randIntMin + 1)) + randIntMin);\n    this.props.relay.setVariables({size});\n  }\n\n  render() {\n    const {relay, user} = this.props;\n    const {pendingVariables} = relay;\n    if (pendingVariables && 'size' in pendingVariables) {\n      // Profile picture with new size is loading\n      return (\n        <View>\n          <LoadingSpinner />\n        </View>\n      )\n    }\n\n    return (\n      <View>\n        <Image\n          uri={user.profilePicture.uri}\n          width={relay.variables.size}\n        />\n        <button onclick={this.requestRandomPictureSize}>\n          Request random picture size\n        </button>\n      </View>\n    );\n  }\n}\nmodule.exports = Relay.createContainer(ProfilePicture, {\n  initialVariables: {size: 50},\n  fragments: {\n    user: () => Relay.QL`\n      fragment on User { profilePicture(size: $size) { ... } }\n    `,\n  },\n});\n\n")),Object(i.b)("p",null,"In this example, whenever a picture with a new size is being loaded a spinner is displayed instead of the picture."),Object(i.b)("h3",{id:"setvariables"},"setVariables"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nsetVariables([partialVariables: Object, [onReadyStateChange: Function]]): void\n\n")),Object(i.b)("p",null,"Components can change their data requirements by using ",Object(i.b)("inlineCode",{parentName:"p"},"setVariables")," to request an update to the current set of ",Object(i.b)("inlineCode",{parentName:"p"},"variables"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"this.props.relay.setVariables")," can be called to update a subset or all of the variables at the same time. In return, Relay will use the new variables to attempt to fulfill the new fragment. This may involve sending a request to the server if data is not already available on the client."),Object(i.b)("p",null,"An optional ",Object(i.b)("inlineCode",{parentName:"p"},"onReadyStateChange")," callback can be supplied to respond to the events involved with the data fulfillment."),Object(i.b)("h4",{id:"example-7"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}12-15{"}"}'}),"\nclass Feed extends React.Component {\n  render() {\n    return (\n      <div>\n        {this.props.viewer.feed.edges.map(\n          edge => <Story story={edge.node} key={edge.node.id} />\n        )}\n      </div>\n    );\n  }\n  _handleScrollLoad() {\n    // Increments the number of stories being rendered by 10.\n    this.props.relay.setVariables({\n      count: this.props.relay.variables.count + 10\n    });\n  }\n}\nmodule.exports = Relay.createContainer(Feed, {\n  initialVariables: {count: 10},\n  fragments: {\n    viewer: () => Relay.QL`\n      fragment on Viewer {\n        feed(first: $count) {\n          edges {\n            node {\n              id,\n              ${Story.getFragment('story')},\n            },\n          },\n        },\n      }\n    `,\n  },\n});\n\n")),Object(i.b)("blockquote",null,"Note",Object(i.b)("code",null,"setVariables")," does not immediately mutate ",Object(i.b)("code",null,"variables"),", but creates a  pending state transition. ",Object(i.b)("code",null,"variables")," will continue returning the previous values until ",Object(i.b)("code",null,"this.props")," has been populated with data that fulfills the new variable values."),Object(i.b)("p",null,"See also: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-guides-containers#requesting-different-data"}),"Containers ",">"," Requesting Different Data"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-guides-ready-state"}),"Ready State")),Object(i.b)("h3",{id:"forcefetch"},"forceFetch"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nforceFetch([partialVariables: Object, [onReadyStateChange: Function]]): void\n\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"forceFetch")," is similar to ",Object(i.b)("inlineCode",{parentName:"p"},"setVariables")," because it is also used to change the data requirements by altering ",Object(i.b)("inlineCode",{parentName:"p"},"variables"),"."),Object(i.b)("p",null,"The two methods differ in that instead of sending a query that includes only fields missing from the client, ",Object(i.b)("inlineCode",{parentName:"p"},"forceFetch")," sends a request to refetch each and every fragment. This ensures that the props for the component are freshly fetched from the server."),Object(i.b)("p",null,"An optional ",Object(i.b)("inlineCode",{parentName:"p"},"onReadyStateChange")," callback can be supplied to respond to the events involved with the data fulfillment."),Object(i.b)("blockquote",null,"Note",Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"forceFetch")," can be called with an empty set of partial variables, meaning it can trigger a refresh of the currently rendered set of data.")),Object(i.b)("p",null,"See also: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-guides-ready-state"}),"Ready State")),Object(i.b)("h3",{id:"hasoptimisticupdate"},"hasOptimisticUpdate"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nhasOptimisticUpdate(record: Object): boolean\n\n")),Object(i.b)("p",null,"Calling ",Object(i.b)("inlineCode",{parentName:"p"},"hasOptimisticUpdate")," with a record from ",Object(i.b)("inlineCode",{parentName:"p"},"this.props")," will return whether that given record is affected by an optimistic mutation. It allows the component to render local optimistic changes differently from data that has successfully synchronized with the server."),Object(i.b)("h4",{id:"example-8"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass Feed extends React.Component {\n  render() {\n    var edges = this.props.viewer.feed.edges;\n    return (\n      <div>\n        {edges.map(edge => {\n          var node = edge.node;\n          if (this.props.relay.hasOptimisticUpdate(node)) {\n            // Render pending story that has not been stored\n            // on the server using a diffrent component.\n            return (\n              <PendingStory\n                key={edge.node.id}\n                story={edge.node}\n              />\n            );\n          } else {\n            return (\n              <Story\n                key={edge.node.id}\n                story={edge.node}\n              />\n            );\n          }\n        })}\n      </div>\n    );\n  }\n}\n\nmodule.exports = Relay.createContainer(Feed, {\n  initialVariables: {count: 10},\n  fragments: {\n    viewer: () => Relay.QL`\n      fragment on Viewer {\n        feed(first: $count) {\n          edges {\n            node {\n              id,\n              ${Story.getFragment('story')},\n              ${PendingStory.getFragment('story')}\n            }\n          }\n        }\n      }\n    `,\n  },\n});\n\n\n")),Object(i.b)("p",null,"See also: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-guides-mutations#optimistic-updates"}),"Mutations ",">"," Optimistic Updates")),Object(i.b)("h3",{id:"getpendingtransactions"},"getPendingTransactions"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\ngetPendingTransactions(record: Object): ?Array<RelayMutationTransaction>\n\n")),Object(i.b)("p",null,"Components can inspect pending mutations on any record (i.e. data made available in props with a corresponding fragment). Calling ",Object(i.b)("inlineCode",{parentName:"p"},"getPendingTransactions")," with a record will return a list of the pending mutation transactions that affect that particular record."),Object(i.b)("p",null,"Each ",Object(i.b)("inlineCode",{parentName:"p"},"RelayMutationTransaction")," has methods to check the status of the mutation and provide ways to rollback or resend the mutation as needed."),Object(i.b)("h4",{id:"example-9"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass Story extends React.Component {\n  render() {\n    var story = this.props.story;\n    var transactions = this.props.relay.getPendingTransactions(story);\n    // For this example, assume there is only one transaction.\n    var transaction = transactions ? transactions[0] : null;\n    if (transaction) {\n      // Display an error message with a retry link if a mutation failed.\n      if (transaction.getStatus() === 'COMMIT_FAILED') {\n        return (\n          <span>\n            This story failed to post.\n            <a onClick={transaction.recommit}>Try Again.</a>\n          </span>\n        );\n      }\n    }\n    // Render story normally.\n  }\n}\n\nmodule.exports = Relay.createContainer(ProfilePicture, {\n  fragments: {\n    story: () => Relay.QL`\n      fragment on story {\n        # ...\n      }\n    `,\n  },\n});\n\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RelayMutationTransaction.getStatus")," can return one of the following strings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UNCOMMITTED")," \u2014 Transaction hasn't yet been sent to the server. Transaction can be committed or rolled back."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"COMMIT_QUEUED")," \u2014  Transaction was committed but another transaction with the same collision key is pending, so the transaction has been queued to send to the server."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"COLLISION_COMMIT_FAILED")," \u2014 Transaction was queued for commit but another transaction with the same collision key failed. All transactions in the collision queue, including this one, have been failed. Transaction can be recommitted or rolled back."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"COMMITTING")," \u2014 Transaction is waiting for the server to respond."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"COMMIT_FAILED")," \u2014 Transaction was sent to the server for comitting but failed.")),Object(i.b)("h2",{id:"static-methods"},"Static Methods"),Object(i.b)("h3",{id:"getfragment"},"getFragment"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\ngetFragment(\n  fragmentName: string,\n  variables?: {[name: string]: mixed}\n): RelayFragmentReference\n\n")),Object(i.b)("p",null,"Gets a reference to a child container's fragment for inclusion in a parent fragment."),Object(i.b)("h4",{id:"example-10"},"Example"),Object(i.b)("p",null,"Fragment composition is achieved via ES6 template string interpolation and ",Object(i.b)("inlineCode",{parentName:"p"},"getFragment"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}6{"}"}'}),"\n// Parent.js\nRelay.createContainer(Parent, {\n  fragments: {\n    parentFragment: () => Relay.QL`\n      fragment on Foo {\n        id\n        ${Child.getFragment('childFragment')}\n      }\n    `,\n  }\n});\n// Child.js\nRelay.createContainer(Child, {\n  initialVariables: {\n    size: 64,\n  },\n  fragments: {\n    childFragment: () => Relay.QL`\n      fragment on Foo {\n        photo(size: $size) { uri }\n      }\n    `,\n  }\n});\n\n")),Object(i.b)("p",null,"In this example, whenever ",Object(i.b)("inlineCode",{parentName:"p"},"Parent")," is fetched, ",Object(i.b)("inlineCode",{parentName:"p"},"Child"),"'s fragment will also be fetched. When rendering, ",Object(i.b)("inlineCode",{parentName:"p"},"<Parent>")," will only have access to the ",Object(i.b)("inlineCode",{parentName:"p"},"props.foo.id")," field;  data from the child fragment will be ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./thinking-in-relay#data-masking"}),Object(i.b)("em",{parentName:"a"},"masked")),". By default, ",Object(i.b)("inlineCode",{parentName:"p"},"childFragment")," will use its corresponding initial variables. Relay will fetch ",Object(i.b)("inlineCode",{parentName:"p"},"photo(size: 64)"),". When ",Object(i.b)("inlineCode",{parentName:"p"},"<Child>")," is rendered it will also make the initial variables available as ",Object(i.b)("inlineCode",{parentName:"p"},"props.relay.variables = {size: 64}"),"."),Object(i.b)("h4",{id:"overriding-fragment-variables"},"Overriding Fragment Variables"),Object(i.b)("p",null,"Sometimes a parent needs to override the default variables of a child component. Imagine that we want to render ",Object(i.b)("inlineCode",{parentName:"p"},"Child")," above with a photo size of 128 instead of the default 64. To do this, we have to ensure that both the fragment ",Object(i.b)("em",{parentName:"p"},"and")," the container know about the custom variable. To set a custom variable in the ",Object(i.b)("em",{parentName:"p"},"query"),", use the second argument to ",Object(i.b)("inlineCode",{parentName:"p"},"getFragment"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}6{"}"}'}),"\n// Parent.js\nRelay.createContainer(Parent, {\n  fragments: {\n    parentFragment: () => Relay.QL`\n      fragment on Foo {\n        id\n        ${Child.getFragment('childFragment', {size: 128})}\n      }\n    `,\n  }\n});\n\n")),Object(i.b)("p",null,"Now Relay will fetch the photo with size 128 - but the ",Object(i.b)("inlineCode",{parentName:"p"},"Child")," container won't magically know about this variable. We have to tell it by passing the variable value as a prop:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}4{"}"}'}),"\nconst Parent = (props) => {\n  return (\n    <Child\n      childFragment={props.parentFragment}\n      size={128}\n    />;\n  );\n}\n\n")),Object(i.b)("p",null,"Now Relay will both fetch the larger photo size ",Object(i.b)("em",{parentName:"p"},"and")," ",Object(i.b)("inlineCode",{parentName:"p"},"Child")," will know to render it."))}b.isMDXComponent=!0}}]);