(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(156),r=(a(54),a(183)),s=a(147),l=a(146),A=l.a.article.withConfig({displayName:"postPreview__Article",componentId:"sc-1vbg9cx-0"})(["padding-bottom:60px;margin-bottom:60px;border-bottom:1px solid #ececec;"]),c=Object(l.a)(s.Link).withConfig({displayName:"postPreview__StyledLink",componentId:"sc-1vbg9cx-1"})(["text-decoration:none;color:#222222;:hover{color:#a2a2a2;}"]),d=l.a.h5.withConfig({displayName:"postPreview__Date",componentId:"sc-1vbg9cx-2"})(["color:#a2a2a2;"]),m=function(){return o.a.createElement(s.StaticQuery,{query:"2033995996",render:function(e){return e?e.posts.edges.map(function(e){var t=e.node;return o.a.createElement(A,{className:"blog-post-container",key:t.id},o.a.createElement("div",{className:"blog-post"},o.a.createElement("h3",null,o.a.createElement(c,{to:t.frontmatter.path+"/"},t.frontmatter.title)),o.a.createElement(d,null,t.frontmatter.date),o.a.createElement("p",null,t.excerpt)))}):o.a.createElement("div",null,"No posts to show")},data:r})};t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("main",null,o.a.createElement(m,null)))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return p});var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(145),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var A=a(27);a.d(t,"waitForRouteChange",function(){return A.c});var c=a(148),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var h=o.a.createContext({}),p=function(e){return o.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},150:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(53),l=a(1),A=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};A.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=A},151:function(e){e.exports={data:{SiteTitleQuery:{siteMetadata:{title:"codelyon",headerTitle:"codeLyon"}},headerImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAVDHsI6mP//EABsQAAMBAAMBAAAAAAAAAAAAAAECAwAEERIT/9oACAEBAAEFAqSY0opMvk+bizZyO943/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAQQCAwAAAAAAAAAAAAAAAAECETEQEiFRof/aAAgBAQAGPwJ0a32QlleiuWecWf/EABoQAAMBAAMAAAAAAAAAAAAAAAABETEhQWH/2gAIAQEAAT8hZjc20sXUQ0MnhW10glg/c//aAAwDAQACAAMAAAAQw8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAdEAADAAICAwAAAAAAAAAAAAAAARExkSFhgaHR/9oACAEBAAE/EJDEkk9CgLAlZiEpz8PohAtpJLozJ2Qluv0n/9k=",aspectRatio:1.5281757402101241,src:"/static/minimal-tech-table-9fe024e646fa69f497973f5e13462ba1-0b7bc.jpg",srcSet:"/static/minimal-tech-table-9fe024e646fa69f497973f5e13462ba1-3e08a.jpg 153w,\n/static/minimal-tech-table-9fe024e646fa69f497973f5e13462ba1-50edb.jpg 306w,\n/static/minimal-tech-table-9fe024e646fa69f497973f5e13462ba1-0b7bc.jpg 611w,\n/static/minimal-tech-table-9fe024e646fa69f497973f5e13462ba1-16cf8.jpg 917w,\n/static/minimal-tech-table-9fe024e646fa69f497973f5e13462ba1-7c069.jpg 1223w,\n/static/minimal-tech-table-9fe024e646fa69f497973f5e13462ba1-50406.jpg 1600w",sizes:"(max-width: 611px) 100vw, 611px"}}},avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAQFBgID/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABvKadVGjQxnOw8gf/xAAbEAACAwADAAAAAAAAAAAAAAABAgADBBMhQf/aAAgBAQABBQJ+krZk0S/QiQ28dq6qmAM8M//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB8QAAIBAwUBAAAAAAAAAAAAAAECEQASYRAgISIxUf/aAAgBAQAGPwIxS9nIbg3HQr6flKwg4qbowdn/xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMUFxEP/aAAgBAQABPyFKeQZBkbUWfB+j4dSgNO08l1F+DEbVtXWLGmf/2gAMAwEAAgADAAAAEAAIAP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABoQAQEAAwEBAAAAAAAAAAAAAAERACExUUH/2gAIAQEAAT8Qe+NV4zNb9qtl14jOZMV91njXr8yJmqS0YW/GYR4k6Rxaoim1biC5y50Pmf/Z",width:128,height:128,src:"/static/avatar-59a4f175906dbbb700247873e6660441-0c658.jpg",srcSet:"/static/avatar-59a4f175906dbbb700247873e6660441-0c658.jpg 1x,\n/static/avatar-59a4f175906dbbb700247873e6660441-4f730.jpg 1.5x,\n/static/avatar-59a4f175906dbbb700247873e6660441-31a0f.jpg 2x"}}},social:{siteMetadata:{social:{github:"https://github.com/malyons",linkedin:"https://www.linkedin.com/in/marcuslyons/",twitter:"https://twitter.com/theauron1223"}}}}}},152:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZ2l0aHViIj48cGF0aCBkPSJNOSAxOWMtNSAxLjUtNS0yLjUtNy0zbTE0IDZ2LTMuODdhMy4zNyAzLjM3IDAgMCAwLS45NC0yLjYxYzMuMTQtLjM1IDYuNDQtMS41NCA2LjQ0LTdBNS40NCA1LjQ0IDAgMCAwIDIwIDQuNzcgNS4wNyA1LjA3IDAgMCAwIDE5LjkxIDFTMTguNzMuNjUgMTYgMi40OGExMy4zOCAxMy4zOCAwIDAgMC03IDBDNi4yNy42NSA1LjA5IDEgNS4wOSAxQTUuMDcgNS4wNyAwIDAgMCA1IDQuNzdhNS40NCA1LjQ0IDAgMCAwLTEuNSAzLjc4YzAgNS40MiAzLjMgNi42MSA2LjQ0IDdBMy4zNyAzLjM3IDAgMCAwIDkgMTguMTNWMjIiPjwvcGF0aD48L3N2Zz4="},153:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbGlua2VkaW4iPjxwYXRoIGQ9Ik0xNiA4YTYgNiAwIDAgMSA2IDZ2N2gtNHYtN2EyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDJ2N2gtNHYtN2E2IDYgMCAwIDEgNi02eiI+PC9wYXRoPjxyZWN0IHg9IjIiIHk9IjkiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIj48L3JlY3Q+PGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjIiPjwvY2lyY2xlPjwvc3ZnPg=="},154:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdHdpdHRlciI+PHBhdGggZD0iTTIzIDNhMTAuOSAxMC45IDAgMCAxLTMuMTQgMS41MyA0LjQ4IDQuNDggMCAwIDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwIDEgMyA0cy00IDkgNSAxM2ExMS42NCAxMS42NCAwIDAgMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMCAwLS4wOC0uODNBNy43MiA3LjcyIDAgMCAwIDIzIDN6Ij48L3BhdGg+PC9zdmc+"},155:function(e,t,a){e.exports=a.p+"static/favicon-052eef3b6e6ec8b0e90dee91a7a38395.ico"},156:function(e,t,a){"use strict";a(157);var n=a(151),o=a(0),i=a.n(o),r=a(158),s=a.n(r),l=a(147),A=a(146),c=a(149),d=a.n(c),m=a(4),h=a.n(m),p=A.a.header.withConfig({displayName:"header__Container",componentId:"sc-745ama-0"})(["margin-bottom:1.45rem;overflow:hidden;position:relative;height:400px;@media (max-width:700px){height:200px;}"]),g=A.a.div.withConfig({displayName:"header__InnerContainer",componentId:"sc-745ama-1"})(["background-color:rgba(34,34,34,0.6);max-width:960;"]),u=A.a.h1.withConfig({displayName:"header__HeaderLink",componentId:"sc-745ama-2"})(["margin:0;"]),f=Object(A.a)(l.Link).withConfig({displayName:"header__StyledLink",componentId:"sc-745ama-3"})(["font-size:54px;color:white;text-decoration:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;@media (max-width:700px){font-size:36px;}"]),w=Object(A.a)(d.a).withConfig({displayName:"header__BgImage",componentId:"sc-745ama-4"})(["position:absolute;top:0;left:0;width:100%;z-index:-1;height:400px;& > img{object-fit:cover !important;object-position:0% 0% !important;font-family:'object-fit: cover !important; object-position: 0% 0% !important;';}"]),y=function(e){var t=e.headerImage,a=e.siteTitle;return i.a.createElement(p,null,i.a.createElement(g,null,i.a.createElement(u,null,i.a.createElement(f,{to:"/"},a)),i.a.createElement(w,{fluid:t})))};y.propTypes={siteTitle:h.a.string.isRequired};var b=y,I=a(152),k=a.n(I),v=a(153),N=a.n(v),x=a(154),E=a.n(x),j=A.a.aside.withConfig({displayName:"sidebar__Container",componentId:"ktfihk-0"})(["display:flex;flex-direction:column;align-items:center;text-align:center;"]),D=A.a.div.withConfig({displayName:"sidebar__InnerContainer",componentId:"ktfihk-1"})([""]),M=Object(A.a)(d.a).withConfig({displayName:"sidebar__Avatar",componentId:"ktfihk-2"})(["border-radius:50%;"]),C=A.a.p.withConfig({displayName:"sidebar__Name",componentId:"ktfihk-3"})(["font-weight:bold;font-size:14px;"]),S=A.a.p.withConfig({displayName:"sidebar__Location",componentId:"ktfihk-4"})(["color:#979797;font-size:12px;"]),B=A.a.div.withConfig({displayName:"sidebar__InfoContainer",componentId:"ktfihk-5"})(["& > p{margin-bottom:2.5px;}"]),Q=A.a.ul.withConfig({displayName:"sidebar__StyledList",componentId:"ktfihk-6"})(["display:flex;justify-content:space-evenly;margin:0;padding-top:5px;"]),Y=A.a.li.withConfig({displayName:"sidebar__StyledListItem",componentId:"ktfihk-7"})(["list-style:none;width:20px;"]),P=function(e){var t=e.avatar,a=e.social;return i.a.createElement(j,null,i.a.createElement(D,null,i.a.createElement("div",null,i.a.createElement(M,{fixed:t})),i.a.createElement(B,{className:"infoContainer"},i.a.createElement(C,null,"Marcus Lyons"),i.a.createElement(S,null,"Boise, Idaho")),i.a.createElement(Q,{className:"social"},i.a.createElement(Y,null,i.a.createElement("a",{href:a.github,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:k.a,alt:""}))),i.a.createElement(Y,null,i.a.createElement("a",{href:a.linkedin,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:N.a,alt:""}))),i.a.createElement(Y,null,i.a.createElement("a",{href:a.twitter,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:E.a,alt:""}))))))},H=A.a.div.withConfig({displayName:"footer__Container",componentId:"dx2smb-0"})(["width:100vw;height:115px;background-color:#f3f3f3;display:flex;justify-content:center;align-items:center;"]),R=A.a.h5.withConfig({displayName:"footer__FooterText",componentId:"dx2smb-1"})(["font-size:16px;@media (max-width:700px){margin:0;}"]),T=A.a.a.withConfig({displayName:"footer__StyledLink",componentId:"dx2smb-2"})(["text-decoration:none;"]),L=(new Date).getFullYear(),G=function(){return i.a.createElement(H,null,i.a.createElement(R,null,"©"+L+" · Powered by ",i.a.createElement(T,{href:"https://gatsbyjs.org",target:"_blank"},"Gatsby")))},z=a(155),Z=a.n(z),_=A.a.div.withConfig({displayName:"layout__MainContainer",componentId:"sc-167x42l-0"})(["display:grid;grid-gap:25px;grid-template-columns:150px auto;margin-left:5%;margin-right:5%;max-width:1100px;padding-top:50px;@media (min-width:1100px){margin-left:auto;margin-right:auto;}@media (max-width:700px){display:flex;flex-direction:column-reverse;margin-left:15%;margin-right:15%;}"]);t.a=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"2714968366",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.SiteTitleQuery.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"},{name:"title",content:"codelyon"}],link:[{rel:"shortcut icon",type:"image/png",href:""+Z.a}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(b,{siteTitle:e.SiteTitleQuery.siteMetadata.headerTitle,headerImage:e.headerImage.childImageSharp.fluid}),i.a.createElement(_,null,i.a.createElement(P,{avatar:e.avatar.childImageSharp.fixed,social:e.social.siteMetadata.social}),t),i.a.createElement(G,null))},data:n})}},183:function(e){e.exports={data:{posts:{edges:[{node:{id:"36d0fff2-8d84-5a3e-b5f1-760000e52c6a",html:'<p>We all have a process and a preference for how we do things. As with anything related to software development, opinions abound on all sides. I’m not saying that the applications I use in my day to day are what everyone should use. They’ve become daily uses for me, and I hope some of them might prove useful to you as well.</p>\n<p><a href="https://brew.sh/" title="Homebrew Homepage">Homebrew</a><br>\nIf you didn’t know before, you can use brew to manage a lot more than only CLI tools. Brew Cask will install a wide range of products that are available online. If an app is only available on the App Store, <a href="https://github.com/mas-cli/mas" title="mas github repo">Mac App Store CLI</a>. Mas is like brew, but for the App Store. You have to have downloaded the app once from the store, so it won’t work for the initial install. I find using brew to be faster than going to a site, downloading a tar, unpacking, and everything. Brew handles that for you, and the most important part, deletes it when you no longer want it on your machine.<br><br></p>\n<p><a href="http://www.bear-writer.com/" title="Bear Homepage">Bear</a><br>\nI recently switched to Bear after having used Evernote for four years. For one, Bear is <strong>fast</strong> and looks fantastic, as one would expect since it is from a design company. It’s also inexpensive for a premium subscription ($14.99 per year), even though it has a full freemium model. The main thing free tier is missing is the ability to sync notes across devices and unlock more themes.</p>\n<p>My <a href="https://www.codelyon.com/" title="codelyon.com">blog</a> uses Gatsby, a static site generator that can use Markdown to generate posts. Which Bear is compatible with rendering, unlike Evernote. Having the ability to keep post ideas, lists, notes, and articles all in one location is quite handy.<br><br></p>\n<p><a href="https://www.spectacleapp.com/" title="Spectacle Homepage">Spectacle</a><br>\nOne of the most annoying parts of MacOS, to me at least, is window management, more like the lack thereof. Coming from Windows I\'m used to the fancy drag to the side of the screen and the OS resizes the window to fit for me. I missed that when switching to Mac, and while Spectacle isn’t <em>quite</em> the same, it’s pretty damn close.</p>\n<p>Spectacle works via keyboard shortcuts, which is nice if you spend a <strong>lot</strong> of time using one. Open source, and completely free. You can resize to fill the full screen, center a window, halves, thirds, quarters.<br><br></p>\n<p><a href="https://cordlessdog.com/stay/" title="Stay Homepage">Stay</a><br>\nAn annoying thing about MacOS is the tendency for windows to disappear or be offscreen when using external displays. Unplugging from many screens to work on a single display is generally fine. Plugging back into external displays often results in the application windows rearranging. First world problems, I know, but sometimes you want things to be how they were the last time you were using it. Stay “stores” your application windows for you, and will restore them. This way if you run into any of this window hiding BS, you can restore them without having to kill the application.<br><br></p>\n<p><a href="https://justgetflux.com/" title="Flux Homepage">f.lux</a><br>\nI’m likely not the only one, but I tend to turn the brightness <strong>way</strong> down on my screens, MacBook and secondary screens. I’ve had problems in the past with headaches due to a combination of bright screens and outdated glasses. Flux helps with eye strain and filtering of blue light that can keep our brains from becoming tired. This doesn’t work so well if you need to have color accuracy, but for the majority of my time, I have a slight yellow tinge to my display.<br><br></p>\n<p><a href="http://tomighty.org/" title="Tomighty Page">Tomighty</a><br>\nOh, the mighty Pomodoro. I’ve gotten more done since adopting this technique than I could have hoped for. Granted some days it’s easier than others to focus on tasks. I find that breaking things up into 25 min blocks is great, and Tomighty helps out. With keyboard shortcuts and tracking how many I’ve completed. This is one of the first apps I install when setting up a new machine.<br><br></p>\n<p><a href="http://airmailapp.com/" title="Airmail Homepage">Airmail</a><br>\nI find the default Mail app to be slow. A former co-worker showed me Airmail, and in the beginning, I didn’t want to try it due to it not being free. Being a broke college student at the time, I couldn\'t justify it. Yet, I don’t think I’ll ever go back. The ability to handle a significant amount of inboxes, smart folders, and automation rules to handle different types of mail, this client has everything I need in a sleek, fast package.<br><br></p>\n<p><a href="https://app.grammarly.com/" title="Grammarly Homepage">Grammarly</a><br>\nI use the free version but have considered getting a subscription. I write enough and forget how to spell enough to justify it. The better part of this app is the grammar enhancement.<br><br></p>\n<p><a href="https://www.alfredapp.com/" title="Alfred Homepage">Alfred</a><br>\nWhen I first discovered Spotlight I couldn’t believe it. I can open applications without having to open the finder, or the dock, or an icon on the desktop. I started reading and hearing about Alfred in articles and podcasts, so I knew I had to give it a shot. The free version is very powerful, the ability to open applications and files, search Google (or your browser of choice) with customizable hotkeys and extensibility is pretty awesome. I stuck with the free version for a year before finally buying a license, workflows are what convinced me after reading about the <a href="http://devdocs.io/" title="devdocs Homepage">devdocs</a> integration. Now I have the ability to search the devdocs documentation from Alfred. I\'ve barely scratched the surface of what this tool can do, and could likely write an entire post on it alone.</p>',excerpt:"We all have a process and a preference for how we do things. As with anything related to software development, opinions abound on all sides…",frontmatter:{path:"/my-mac-setup-2018-1",title:"My Mac Setup 2018: GUI Edition",date:"2018.03.28",keywords:"homebrew, bear, spectacle, stay, flux, tomighty, pomodoro, window management, notetaking, markdown, package manager, macos, OSX, mac, Airmail, grammarly, alfred, spotlight, grammar, development, process, productivity"}}},{node:{id:"fffce147-ea00-5fd7-99f9-e6f4637e9a32",html:'<p>Every now and then you just need a good reference</p>\n\x3c!--more--\x3e\n<br>\n<h2>Docker Machine</h2>\n<p>docker-machine commands aren\'t needed if using the GUI toolkit, but where\'s the fun in that?</p>\n<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text"># Start VM\ndocker-machine start\n\n# Stop VM\ndocker-machine stop\n\n# Display Docker client setup commands\ndocker-machine env</code></pre></div>\n<br>\n<h2>Docker</h2>\n<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text"># List Docker CLI commands\ndocker\n\n# Get help on a specific command\ndocker &lt;command&gt; --help\n\n# Pull image from Docker Hub\ndocker pull &lt;Name of Image&gt;\n\n# Show all images\ndocker images\n\n# Remove specific images\ndocker rmi &lt;ImageID&gt;\n\n# Show all containers based on Docker env config\ndocker ps -a\n\n# Remove specific container\ndocker rm &lt;ContainerID&gt;\n\n# Remove all containers\ndocker rm $(docker ps -a -q)\n\n# Formatted list of containers\ndocker ps --format &#39;table {{.Names}}\\t{{.Image}}\\t{{.Status}}&#39;\n\n# Run a container in daemon mode bound to specified port\ndocker run -d --name &lt;Container Name&gt; -p &lt;External Port:Container Port&gt; &lt;Your Image&gt;\n\n# Build an image from a Dockerfile located in the current directory\ndocker build -f &lt;Your Dockerfile&gt; -t &lt;Tag Name&gt; .\n\n# Login using your Docker Hub credentials\ndocker login\n\n# Push an image to Docker hub\ndocker push &lt;Your Image Name&gt;</code></pre></div>\n<br>\n<h2>Docker Compose</h2>\n<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text"># Build images based on docker-compose\ndocker-compose build\n\n# Start in daemon mode\ndocker-compose up -d\n\n# Show logs from containers | useful in daemon mode\ndocker-compose logs\n\n# Start containers based on docker-compose.yml\ndocker-compose up\n\n# Rebuild and deploy just the container that needs updating\ndocker-compose up -d --no-deps --build &lt;service_name&gt;\n\n# Start containers using docker-compose file in another directory\ndocker-compose -f &lt;Filepath&gt; up\n\n# Stop containers but dont remove them\ndocker-compose stop\n\n# Stop and remove containers | CTRL+C/CMD+C can also be used but this is safer\ndocker-compose down</code></pre></div>',excerpt:"Every now and then you just need a good reference Docker Machine docker-machine commands aren't needed if using the GUI toolkit, but where's…",frontmatter:{path:"/useful-docker-commands",title:"Useful Docker Commands",date:"2018.03.21",keywords:"docker, docker-compose, containers, containerization, cloud, vm, redis, microservices, developer, dev, development, software, convenience, article, blog post, blog"}}},{node:{id:"5469104b-c435-5ee5-aaa4-e6e0831c3f3c",html:"<p>It seems appropriate to not only start this today, but to use this title. Since my son Mason has said his own “Hello, world!” today. Being a newborn, he can’t speak yet but he’s at the beginning of his journey. Much like we all were at one point or another, and with each new thing we learn, continue that journey into a new realm.</p>\n<p>I remember writing my first program as a kid, and by program it was “Hello, world!” printed to the screen. (Likely followed shortly after by something crude). It was gratifying to make that happen, even though looking back it was trivial compared to what I’ve done since. My original goal was to create games, and I did for a bit. I’m still upset with myself that I didn’t keep copies of those text adventure games. As terrible as they were it would have been great to go back and look them over now. A benchmark of a much younger me, a stranger at this point.</p>\n<p>My plan for this site is to write about what I’m building, what and how I’m learning as I go. A reflective look at things, and a way to help others if they stumble upon a post.</p>",excerpt:"It seems appropriate to not only start this today, but to use this title. Since my son Mason has said his own “Hello, world!” today. Being a…",frontmatter:{path:"/hello-world",title:"Hello, world!",date:"2017.12.08",keywords:"hello, world, post, newborn, son, journey"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-ab32ce2f1e4de53d0cd7.js.map