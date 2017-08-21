
          window.__NEXT_REGISTER_PAGE('/writing/static-sites-with-next-js.html', function() {
            var comp = module.exports=webpackJsonp([6],{504:function(e,t,s){e.exports=s(505)},505:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(11),o=r(n),p=s(3),a=r(p),i=s(19),l=r(i),h=s(20),d=r(h),c=s(21),y=r(c);t.default=function(e){var t={title:"How to Make a Static Blog with Next.js 3",slug:"static-sites-with-next-js",description:"I recently used Next.js 3 to make a static blog. Learn how I did it!",path:"pages/writing/static-sites-with-next-js.html.js",permalink:"writing/static-sites-with-next-js",updatedAt:"Sun Aug 20 18:45:57 2017 -0700"},s={type:"div",props:{},children:[{type:"h1",props:{},children:["How to Make a Static Blog with Next.js 3"]},"\n",{type:"p",props:{},children:[{type:"img",props:{src:"/static/img/next-blog-1.gif",alt:"make a static next.js blog"}}]},"\n",{type:"p",props:{},children:["👋  Hey, so I recently figured out how to upgrade ",{type:"em",props:{},children:["this very website"]}," to use ",{type:"a",props:{href:"https://github.com/zeit/next.js"},children:["Next.js 3"]}," as a static blog engine. No longer is my corner of the internet a cobbled-together mess of node and of shell scripts. No, now it's a fully-fledged modern JavaScript app with ",{type:"a",props:{href:"https://github.com/zeit/next.js"},children:["Next.js 3"]},"!"]},"\n",{type:"p",props:{},children:["I can write and edit posts in Markdown and can even drop in custom HTML if I need to (I mean how else am I gonna incorporate ",{type:"code",props:{},children:["<marquee>"]}," tags into my writing?). With ",{type:"a",props:{href:"https://github.com/zeit/next.js"},children:["Next.js"]},", I get all sorts of fancy features. Service worker prefetch, code splitting, and SPA style route changes, all for free. ",{type:"em",props:{},children:["Here's how I did it."]}]},"\n",{type:"p",props:{},children:[{type:"a",props:{href:"https://zeit.co/blog/next3"},children:["If you haven't heard of Next.js it's a pretty cool, live reloading, totally-out-of-your-way tool for building webapps with React. You should use it."]}]},"\n",{type:"p",props:{},children:["As soon as the Zeit team announced plans to support serverless static exports, I was ready to go. I had already tried out Next.js for a few side projects, but didn't want to worry about running a server (even if it's free and painless) to keep my website up. I even tried scraping a compiled Next.js app with ",{type:"code",props:{},children:["wget"]}," to make a static site, so Next's official support for static sites had me running out of excuses."]},"\n",{type:"p",props:{},children:["Here were my requirements for this humble website:"]},"\n",{type:"ul",props:{},children:["\n",{type:"li",props:{},children:["Fully static and deployable on Github pages."]},"\n",{type:"li",props:{},children:["Author posts in Markdown, with support for HTML things like ",{type:"code",props:{},children:["<details>"]}," tags."]},"\n",{type:"li",props:{},children:[{type:"em",props:{},children:["Fast."]}," Nobody's got time for slow websites."]},"\n",{type:"li",props:{},children:["Support my CSS preferences: ",{type:"a",props:{href:"http://tachyons.io/"},children:["Tachyons"]}," and some custom CSS compiled with ",{type:"a",props:{href:"http://postcss.org/"},children:["postcss"]}]},"\n"]},"\n",{type:"p",props:{},children:["Next.js seems to have checked off all my boxes, so I dug in and started prototyping."]},"\n",{type:"blockquote",props:{},children:["\n",{type:"p",props:{},children:['"Plan to throw one away; you will, anyhow".']},"\n"]},"\n",{type:"cite",props:{},children:["\n— ",{type:"i",props:{},children:["The Mythical Man-Month"]},", Fred Brooks (as popularized in ",{type:"i",props:{},children:["The Cathedral and the Bazaar"]}," by Eric Raymond)\n"]},"\n",{type:"p",props:{},children:[{type:"a",props:{href:"https://github.com/wookiehangover/wookie-next"},children:["I built a prototype on the Next.js 3 beta"]}," to kick the tires. I learned a few things along the way but didn't end up with a website that was ready to deploy."]},"\n",{type:"p",props:{},children:["Too bad I wasn't very happy with my first pass. I added a necessary-but-clunky build step to convert my old posts to Next's routing model. The plan was to compile my markdown posts and write out files to the ",{type:"code",props:{},children:["pages/"]}," directory. Next.js would pick them up whenever they changed, but I didn't like having to run two build scripts."]},"\n",{type:"p",props:{},children:[{type:"em",props:{},children:["Next's biggest selling point is having live reloading figured out already!"]}," Having to run more than one script felt wrong, so I abandoned the prototype."]},"\n",{type:"details",props:{className:"pa4 ba b--rainbows mv4"},children:["\n",{type:"summary",props:{},children:["\n  ",{type:"i",props:{},children:["A brief aside re: a nifty markdown rendering pipeline with Unified and Remark that should probably be in it's own post, but laziness."]},"\n"]},"\n",{type:"blockquote",props:{},children:["\n",{type:"p",props:{},children:["Every good work of software starts by scratching a developer's personal itch."]},"\n"]},"\n",{type:"cite",props:{},children:["\n— ",{type:"i",props:{},children:["The Cathedral and the Bazaar"]},", Eric Raymond\n"]},"\n",{type:"h3",props:{},children:["🐰 Rabbit Hole: React from HTML Markdown"]},"\n",{type:"p",props:{},children:["One of the itches I ",{type:"em",props:{},children:["really"]}," wanted to scratch was the minor annoyance of having to use ",{type:"code",props:{},children:["__dangerouslySetInnerHtml"]}," to use most off-the-shelf markdown libraries with React. I even made it a bit harder on myself by lazily abusing markdown and sprikling bits of markup in many of my posts, since most React components that render markdown tend to fall back to to ",{type:"em",props:{},children:["dangerouslySet"]}," instead of parsing the markdown to generate a valid React component for the entire markdown document. This isn't a new or unsolved problem, so I did some research and ended up geeking out on text processing and abstract syntax trees. Turns out that there are already a bunch of well documented AST parser/compilers that support markdown on npm!"]},"\n",{type:"p",props:{},children:["I really didn't want to make clients do any of the parsing work. Even though parsing markdown can be optimized to be fast in modern browsers, making users download additional JavaScript and spend CPU time to convert posts clientside just didn't sit well with me."]},"\n",{type:"p",props:{},children:["I decided that in order to handle all of my posts with their mix of markdown and html, I would use ",{type:"a",props:{href:"https://unifiedjs.github.io/"},children:["Unified"]}," to make a rendering pipeline to go from markdown to HTML to a set of React components. There were already unified plugins for everything I wanted to do!"]},"\n",{type:"p",props:{},children:["There was even a ",{type:"a",props:{href:"https://github.com/mapbox/remark-react"},children:["ready-made solution for my exact gripe about ",{type:"code",props:{},children:["__dangerouslySetInnerHtml"]}]},"! Unfortunately, remark-react handles ",{type:"em",props:{},children:["most"]}," cases but didn't want to parse the raw HTMl generously sprinkled throughout my posts. Either way, I had found a small ecosystem of node modules that would make short work of lots of text processing problems. Neat!"]},"\n",{type:"p",props:{},children:["Here's what the code ended up looking like:"]},"\n",{type:"pre",props:{},children:[{type:"code",props:{className:"hljs language-js"},children:[{type:"span",props:{className:"hljs-keyword"},children:["const"]}," unified = ",{type:"span",props:{className:"hljs-built_in"},children:["require"]},"(",{type:"span",props:{className:"hljs-string"},children:["'unified'"]},")\n\nunified()\n  .use(",{type:"span",props:{className:"hljs-built_in"},children:["require"]},"(",{type:"span",props:{className:"hljs-string"},children:["'remark-parse'"]},"), {\n    ",{type:"span",props:{className:"hljs-attr"},children:["gfm"]},": ",{type:"span",props:{className:"hljs-literal"},children:["true"]},",\n    ",{type:"span",props:{className:"hljs-attr"},children:["footnotes"]},": ",{type:"span",props:{className:"hljs-literal"},children:["true"]},"\n  })\n  .use(",{type:"span",props:{className:"hljs-built_in"},children:["require"]},"(",{type:"span",props:{className:"hljs-string"},children:["'remark-rehype'"]},"), {\n    ",{type:"span",props:{className:"hljs-attr"},children:["allowDangerousHTML"]},": ",{type:"span",props:{className:"hljs-literal"},children:["true"]},"\n  })\n  .use(",{type:"span",props:{className:"hljs-built_in"},children:["require"]},"(",{type:"span",props:{className:"hljs-string"},children:["'rehype-raw'"]},"))\n  .use(",{type:"span",props:{className:"hljs-built_in"},children:["require"]},"(",{type:"span",props:{className:"hljs-string"},children:["'rehype-react'"]},"))"]}]},"\n",{type:"p",props:{},children:["To my suprise and delight, that process pipeline resulted in a totally usable React component! But it still would require some redundant processing on the client since the React component was being generated dynamicaly from a string of markdown. "]},"\n",{type:"p",props:{},children:["So how do you ",{type:"em",props:{},children:["cache"]}," a React component? Like, a whole component, not just the serialization of it's virtual dom. React provides tools to server render components in multiple ways, but you can't easily generate ",{type:"em",props:{},children:["jsx"]}," from a dynamically generated components. But there ",{type:"em",props:{},children:["is"]}," a techinique for dealing with a React as a compile output of an AST, evidenced by ",{type:"a",props:{href:"https://github.com/rhysd/rehype-react"},children:["react-rehype"]}," at the end of that Unified markdown pipeline."]},"\n",{type:"p",props:{},children:["React has a dead simple API for creating components without JSX in ",{type:"code",props:{},children:["React.createElement()"]},". Since it's just plain JavaScript and doesn't require any functions or non-serializable data structures, it turns out that you can make a JSON structure that represents a set of React components pretty easily. I had run into a use case for this same trick at work, so I put it to use again here: I modified the last step of my Unified pipeline to return JSON instead of a React component. ",{type:"a",props:{href:"https://github.com/rhysd/rehype-react"},children:[{type:"code",props:{},children:["rehype-react"]}]}," made this a cinch, since they allow you to pass a custom method for ",{type:"code",props:{},children:["createElement"]},"."]},"\n",{type:"pre",props:{},children:[{type:"code",props:{className:"hljs language-js"},children:["remarkPipeline().use(rehypeReact, {\n  ",{type:"span",props:{className:"hljs-attr"},children:["createElement"]},": ",{type:"span",props:{className:"hljs-function"},children:["(",{type:"span",props:{className:"hljs-params"},children:["type, props, children"]},") =>"]}," ({ type, props, children })\n})"]}]},"\n",{type:"p",props:{},children:["From there, I made a ",{type:"a",props:{href:"https://github.com/wookiehangover/wookiehangover.com/blob/master/src/components/component-tree.js"},children:["simple component"]}," to transform the result from ",{type:"a",props:{href:"https://github.com/rhysd/rehype-react"},children:[{type:"code",props:{},children:["rehype-react"]}]}," back into a React component:"]},"\n",{type:"pre",props:{},children:[{type:"code",props:{className:"hljs language-jsx"},children:["<ComponentTree components={components} />"]}]},"\n",{type:"p",props:{},children:["Now I have an pipeline where you can put markdown with crazy embedded HTML in one end, and well-formed ",{type:"em",props:{},children:["serializable"]}," React components come out of the other end. With that, I can write out JavaScript files containing valid React components without having to reconstruct any JSX literals from the rehype AST. Either way that's a step that I wanted to be transparent when I was writing posts. Mission accomplished 😎"]},"\n",{type:"p",props:{},children:["There are a couple of benefits from going through all that trouble:"]},"\n",{type:"ul",props:{},children:["\n",{type:"li",props:{},children:[{type:"a",props:{href:"https://github.com/wooorm/remark/blob/master/doc/plugins.md"},children:["remark plugins"]}," can do just about anything. Seriously. I was able to add code highlighting ",{type:"em",props:{},children:["while I was writing this post"]}," with 1 npm install, 1 line of JavaScript, and 1 line of CSS!"]},"\n",{type:"li",props:{},children:["Unified's ",{type:"a",props:{href:"https://github.com/vfile/vfile"},children:["vfile"]}," format makes adding post metadata easy."]},"\n",{type:"li",props:{},children:["\n",{type:"p",props:{},children:["No format lock in. When the wind blows a differnt direction and React falls out of favor, outputting to a different format will be easy."]},"\n"]}]}]},"\n\n\n",{type:"h2",props:{},children:["Markdown ➡️ Webpack ➡️ Next.js"]},"\n",{type:"p",props:{},children:["I wanted to write in Markdown and have Next.js pick up the changes automatically."]},"\n",{type:"p",props:{},children:["By default, next will use any JavaScript modules that export a React component in your ",{type:"code",props:{},children:["pages/"]}," directory. While writing markdown next to code is possible, it's gross. Same goes for duplicating the same boilerplate file for each post and importing the markdown source from some other directory. I wanted to skip all that an go straight from Markdown into Next's build and compile pipeline."]},"\n",{type:"p",props:{},children:["💡 The lightbulb moment came when I realized the power of Next's support for custom Webpack configuration."]},"\n",{type:"p",props:{},children:["A  ",{type:"a",props:{href:"https://webpack.js.org/concepts/loaders/"},children:["webpack loader"]}," can transform markdown source files into modules on the spot! And better yet, I already had a build script from my prototype that was doing most of what I needed to do in the loader. I needed to change was how my build script found out about files (reading them from disk vs. passed in by webpack) and how it output the results (again, writing to disk vs. passing the result back to webpack). The loader plugin interface was dead simple:"]},"\n",{type:"pre",props:{},children:[{type:"code",props:{className:"hljs language-js"},children:[{type:"span",props:{className:"hljs-built_in"},children:["module"]},".exports = ",{type:"span",props:{className:"hljs-function"},children:[{type:"span",props:{className:"hljs-keyword"},children:["function"]},"(",{type:"span",props:{className:"hljs-params"},children:["source"]},") "]},"{\n  ",{type:"span",props:{className:"hljs-keyword"},children:["const"]}," done = ",{type:"span",props:{className:"hljs-keyword"},children:["this"]},".async()\n\n  renderPost(source, ",{type:"span",props:{className:"hljs-keyword"},children:["this"]},".resourcePath)\n    .catch(done).then(",{type:"span",props:{className:"hljs-function"},children:[{type:"span",props:{className:"hljs-params"},children:["post"]}," =>"]}," done(",{type:"span",props:{className:"hljs-literal"},children:["null"]},", post))\n}"]}]},"\n",{type:"p",props:{},children:["Where ",{type:"code",props:{},children:["renderPost(source, resourcePath)"]}," was the middle bit of my prototyped static rendering pipeline, refactored to only need a string of the file content and the path of the file being rendered. This is one of the easiest changes to make, since it took a method formerly reliant on ",{type:"em",props:{},children:["side effects"]},", namely reading and writing to disk, and made it a pure function. Any time you can make a method that's passed an input and return a result, you should. Decomposing your assumptions about side effects will almost always save time. I learned this from Gary Bernhardt's talk ",{type:"em",props:{},children:[{type:"a",props:{href:"https://www.destroyallsoftware.com/talks/boundaries"},children:["Boundaries"]}]},", and I remember it every time I see it."]},"\n",{type:"p",props:{},children:["The last step was to add it to the webpack extension point in ",{type:"code",props:{},children:["next.config.js"]},":"]},"\n",{type:"pre",props:{},children:[{type:"code",props:{className:"hljs language-js"},children:[{type:"span",props:{className:"hljs-built_in"},children:["module"]},".exports = {\n  webpack(config) {\n    config.module.rules.push({\n      ",{type:"span",props:{className:"hljs-attr"},children:["test"]},": ",{type:"span",props:{className:"hljs-regexp"},children:["/\\.html\\.js$/"]},",\n      ",{type:"span",props:{className:"hljs-attr"},children:["include"]},": ",{type:"span",props:{className:"hljs-string"},children:["'./pages/writing'"]},",\n      ",{type:"span",props:{className:"hljs-attr"},children:["loader"]},": ",{type:"span",props:{className:"hljs-string"},children:["'./src/post-loader'"]},"\n    })\n    ",{type:"span",props:{className:"hljs-keyword"},children:["return"]}," config\n  }\n}"]}]},"\n",{type:"h2",props:{},children:["Building and Deploying"]},"\n",{type:"p",props:{},children:["Unlike in my earlier versions, Next.js 3 supports creating a complete static site from any next app with ",{type:"code",props:{},children:["next export"]},". To tell it what routes and pages to export, you need to add some configuration to ",{type:"code",props:{},children:["next.config.js"]},". Here's what mine looks like:"]},"\n",{type:"pre",props:{},children:[{type:"code",props:{className:"hljs language-js"},children:[{type:"span",props:{className:"hljs-built_in"},children:["module"]},".exports = {\n  exportPathMap() {\n    ",{type:"span",props:{className:"hljs-keyword"},children:["return"]}," {\n      ",{type:"span",props:{className:"hljs-string"},children:['"/"']},": { ",{type:"span",props:{className:"hljs-attr"},children:["page"]},": ",{type:"span",props:{className:"hljs-string"},children:['"/"']}," },\n      ",{type:"span",props:{className:"hljs-string"},children:['"/cv.html"']},": { ",{type:"span",props:{className:"hljs-attr"},children:["page"]},": ",{type:"span",props:{className:"hljs-string"},children:['"/cv.html"']}," },\n      ",{type:"span",props:{className:"hljs-string"},children:['"/writing/2016-reading-list.html"']},": { ",{type:"span",props:{className:"hljs-attr"},children:["page"]},": ",{type:"span",props:{className:"hljs-string"},children:['"/writing/2016-reading-list.html"']}," },\n      ",{type:"span",props:{className:"hljs-string"},children:['"/writing/2017-reading-list.html"']},": { ",{type:"span",props:{className:"hljs-attr"},children:["page"]},": ",{type:"span",props:{className:"hljs-string"},children:['"/writing/2017-reading-list.html"']}," },\n      ",{type:"span",props:{className:"hljs-comment"},children:["// ..."]},"\n    }\n  }\n}"]}]},"\n",{type:"p",props:{},children:["Then I changed my build step to run ",{type:"code",props:{},children:["next build && next export --docs"]}," and I with surprisingly little drama was ready to deploy to Github pages!"]},"\n",{type:"p",props:{},children:["Normally I'd be worried that I'd have missed some minor detail in a major change like swapping out the entire backend of a website, but in essence what I was doing here wasn't all that big of a change: my static HTML, JavaScript, and CSS in the ",{type:"code",props:{},children:["docs/"]}," directory was still there, but was being built by a different tool chain. I pushed the first commit with the switch to Next.js and waited patiently while the build ran on Travis CI."]},"\n",{type:"p",props:{},children:["...And that was it. I had more or less completely moved my static site into a totally modern React app with Next.js. The whole thing is ",{type:"a",props:{href:"https://github.com/wookiehangover/wookiehangover.com"},children:["open source"]},", so feel free to kick the tires and ask questions if you have any 😊"]},"\n",{type:"p",props:{},children:["Here are the relevant parts of the app:"]},"\n",{type:"ul",props:{},children:["\n",{type:"li",props:{},children:[{type:"strong",props:{},children:["post-loader.js"]}," – ",{type:"a",props:{href:"https://github.com/wookiehangover/wookiehangover.com/blob/master/src/post-loader.js"},children:["webpack loader"]}]},"\n",{type:"li",props:{},children:[{type:"strong",props:{},children:["static-sites-with-next-js.html.js"]}," – ",{type:"a",props:{href:"https://github.com/wookiehangover/wookiehangover.com/blob/master/pages/writing/static-sites-with-next-js.html.js"},children:["a markdown post with embedded HTML"]}]},"\n",{type:"li",props:{},children:[{type:"strong",props:{},children:["react-to-hast.js"]}," – ",{type:"a",props:{href:"https://github.com/wookiehangover/wookiehangover.com/blob/master/src/react-to-hast.js"},children:["markdown compiler with Unified.js"]}]},"\n",{type:"li",props:{},children:[{type:"strong",props:{},children:["component-tree.js"]}," – ",{type:"a",props:{href:"https://github.com/wookiehangover/wookiehangover.com/blob/master/src/components/component-tree.js"},children:["React component for rendering JSON AST"]}]},"\n"]},"\n",{type:"h3",props:{},children:["Gotcha's! 😝"]},"\n",{type:"p",props:{},children:["A few snags I ran into:"]},"\n",{type:"ul",props:{},children:["\n",{type:"li",props:{},children:["\n",{type:"p",props:{},children:["Github pages still perversely retains some of it's Jekyll roots, and ignores file and directory names that start with an underscore 🙄"]},"\n",{type:"ul",props:{},children:["\n",{type:"li",props:{},children:[{type:"strong",props:{},children:["Fix:"]}," add ",{type:"code",props:{},children:[".nojekyll"]}," to your ",{type:"code",props:{},children:["docs/"]},' directory (or whatever is configured in the "Pages" portion of your repo config in Github)']},"\n"]},"\n"]},"\n",{type:"li",props:{},children:["\n",{type:"p",props:{},children:["The ",{type:"code",props:{},children:[".html.js"]}," file extension on the posts was because I wanted backwards compatabilty with my static html version, which used plain old html files"]},"\n",{type:"ul",props:{},children:["\n",{type:"li",props:{},children:[{type:"em",props:{},children:["Minor annoyance:"]}," ",{type:"code",props:{},children:["next export"]}," adds directories for every static file to avoid the .html extension showing up in the path, but now I have urls with trailing slashes."]},"\n",{type:"li",props:{},children:["If I ever want to change a URL (like to drop the ",{type:"code",props:{},children:[".html"]}," extension because it's not 1998), I'll need to figure out how to manage the redirects."]},"\n"]},"\n"]},"\n",{type:"li",props:{},children:["I need to remember to add new posts to ",{type:"code",props:{},children:["next.config.js"]},", which I seem pathologically incapable of. I'll probably make the webpack plugin emit a JSON file with all the post metadata, but I haven't done that yet."]},"\n"]},"\n",{type:"p",props:{},children:[{type:"marquee",props:{},children:["And here's that ",{type:"code",props:{},children:["<marquee>"]}," tag to prove I wasn't joking about supporting arbitraty HTML in posts. And thanks ",{type:"a",props:{href:"https://twitter.com/ddtrejo"},children:["@ddtrejo"]}," for feedback and edits!"]}]}]};return a.default.createElement(l.default,t,a.default.createElement(d.default,(0,o.default)({},s,{components:y.default})))}}},[504]);
            return { page: comp.default }
          })
        