(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7ea6":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return s}));var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("Bl7J");a.default=function(e){var a=e.data,t=Object(n.useState)(0),s=t[0],o=t[1];return Object(n.useEffect)((function(){fetch("https://api.github.com/repos/gatsbyjs/gatsby").then((function(e){return e.json()})).then((function(e){o(e.stargazers_count)}))}),[]),l.a.createElement(c.a,null,l.a.createElement("section",{className:"jumbotron jumbotron-fluid text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Blog"),l.a.createElement("p",{className:"lead text-muted"},"Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."),l.a.createElement("p",null,l.a.createElement("button",{className:"btn btn-primary m-2"},"Primary action"),l.a.createElement("button",{className:"btn btn-secondary m-2"},"Secondary action")))),l.a.createElement("section",{className:"container my-5"},l.a.createElement("h4",null,a.allMarkdownRemark.totalCount," Posts"),l.a.createElement("div",{className:"row"},a.allMarkdownRemark.edges.map((function(e){var a=e.node;return l.a.createElement("div",{key:a.id,className:"col-md-4"},l.a.createElement("h3",null,a.frontmatter.title," "),l.a.createElement("span",{className:"text-muted"},a.frontmatter.date),l.a.createElement("p",null,a.excerpt),l.a.createElement("p",null,l.a.createElement(r.a,{to:a.fields.slug},"Continue reading")))}))),l.a.createElement("small",{className:"text-muted"},"Runtime Data: Star count for the Gatsby repo ",s)))};var s="3856371944"},Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=function(e){var a=e.children;return l.a.createElement("header",null,a)},s=function(e){return l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.a,{className:"nav-link",to:e.to},e.children))},o=function(){var e=Object(r.c)("3159585216");return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light border-0"},l.a.createElement("div",{className:"container"},l.a.createElement(r.a,{className:"navbar-brand",to:"/"},e.site.siteMetadata.title),l.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement(s,{to:"/post"},"Blog")),l.a.createElement("ul",{className:"navbar-nav ml-md-auto"},l.a.createElement(r.a,{to:"/about"},"About")))))},m=function(e){var a=e.children;return l.a.createElement("footer",{className:"container-fluid mt-5 py-3"},a)};a.a=function(e){var a=e.children,t=Object(r.c)("3000541721");return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,null,l.a.createElement(o,null)),l.a.createElement("main",null,a),l.a.createElement(m,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("span",{className:"d-block text-muted"},"© 2020 ",t.site.siteMetadata.title),l.a.createElement("small",{className:"d-block text-muted"},t.site.siteMetadata.description))))))}}}]);
//# sourceMappingURL=component---src-pages-post-js-5ac77039444fea0666fd.js.map