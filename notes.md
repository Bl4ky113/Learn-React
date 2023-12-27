# Learning React By Myself

I though that some day I would have to learn this 'thing'. 
But meh, the laboral market is big for this 'technology', god knows why.

Start: 12/07/2023
End:

Sessions:
- 12/07/2023
- 12/19/2023 Hey
- 12/26/2023 Wordpress looks nice, but is extreamly horrendous
- 12/27/2023 I already touched rock bottom. Hopefully it can only go up now

We are not doing the Quick Start, it's just not helpfull with my learning methods.

## Install

Since it's a web library we can just link the react js link in our html files and everything would be fine.
I'll see if there's any way to do it offline. But later. :)

### In a new project

Hey. React is a Library, if you want to creeate a new project, you can use a framework that uses ReactJS. 
Since you know, ReactJS IS A LIBRARY NOT A FRAMEWORK. Which let us use it in different context, with 
different tools and such.

Some of theese ReactJS based frameworks are:
- Next.js
    Simple ReactJS fullstack framework, perfect from small static webpages to big dynamic websites. 
    Which looks like it'll be my next pick if anything. Maintained by Vercel.
- Remix
    Another Fullstack with nested routing. Maintained by Shopify.
- Gatsby
    Flashing Fast for Content Management Systems, just like the ones used in technical configuration or
    enterprise enviroments. Maintained by Netlifly.
- Expo
    Framework which let us create native UIs for Android and IOs using a SDK for React Native which itself is 
    another thing that let you develop using ReactJS for Android and IOs but not nativily

Yeah, since it's a library you can still just use ReactJS, but React recomends the usage of a Framework, some reasons are:
Well in general the same problem multiple times which could be described with a sentence:
"Don't ReInvent the Wheel"
Some other arguments are the extra stability, community help, resources, tools and more.

### In a old project

Just add the library using the scripts link or add it using npm. Then use it.

## Development

Use generaly stuff like linters made for EmmaScript. Code editors like VSCode.
And shit like Prettier, yeah, right.

## Typescript 

By default Typescript can handle JSX scripts, but they dont throw and show any errors or warnings with types.
The solution to this is using a Typescript Playgorund, which I'll have to check later.

There's a bunch of functions and stuff that React has implemented typescript types. I'll check them later since I don't 
understand anything.

## React Development Tools

Special stuff for developers which let us debug and find performance issues. 
It can be installed as an browser extension. I can't find the extension code licence and 
general stuff like: Is Facebook trying to spy me? But in general, it looks "fine"

You can also install it with npm and link it with some localhost weird port.

## INSTALL REACT WITH NPM

Sooooo. It's been some time since I first started this, but I still have that time constrain soo

First thing, you shouldn't download react all by themself just like we already said before, but since 
I JUST WANT TO LEARN REACT, nothing else (yet) it should be fine.

So we just need npm and npx for a easier install, so we just run:
$ npx create-react-app "your-react-app-name"

And that's it! Internally it creates a NodeJS project with some React libraries and 
local compilier something, then it justs creates a new app with some library command, the difference 
is that it executes them from the command that you send via a remote command stuff.

Or you just executed a make file of react and that's all

Now, just run it with:
$ npm start

There's more commands for react inside the package file

With all of that Said, we can start learning React by themselfs. Although it might have been more usefull to use a framework, but heck.


## Your First React Component

Components are the main part of an UI while using React. 
It could be from a little part of the UI to a main complete wrapper of everything in the website.

Theese are defined as JS Functions returning JSX markup. This could be normal html5 markup or 
JSX which uses components as tags. They must be named using CammelCase otherwise they won't work at all, 
and even if you could do it, it's a good practice in order to differenciate from the normal html tags.
Also, if the returning value is one or more tags, like a list of li tags for filling an ul tag, 
is not supported by JSX, you must return all the tags inside a wrapper or in general just return one tag, 
but this could have all kinds of contents inside. You can use with the return keyword parentheses in order to 
make a multiline return, needed for the nested tags returns.
We can send parameters to these JSX tags, more tags or more components. And if we need to reuse an component we 
can just call it inside another component return just like a normal html tag. Generally depending the parameters and
arguments of the component the syntax could be an inline tag or a block tag.
Internally, React justs finds where the component is beeing used and completes the content using the returned tags 
from that component.
Now we can nest components, that's great! BUT we should never nest the functions themselfs, it's a recipe for hell and bugs.

Generally components in React as told, could be the smallest part of the UI or the root of the hole page. 
Stuff that it's simplified by using frameworks. This root is generally stored in /pages/index.jsx.

The structure of a scalable react project is:
src/
    assets: blobs and CSS
    components: Generic components
        tests/
        forms/
        ui/
    context: context or global info for the project
    data: json stuff, like assets but for jsons
    features: Similar to pages but Hyper reusable and modifiable code
        "section": 
            components/
            hooks/
            services/
    layouts: layout components like sidebars, menus, and such. Optional, all of it's contents could go to components/
    lib: libraries used in the project
    hooks: global react hooks, god knows what is that
    pages: pages for the routing of the project 
        "section": 
            tests/
            component.jsx
    App.js: App start
    index.js: Index or React

There's some packages of pre-made components available some of them are Chakra UI and Material UI.
Which sound a lot lile angular material for the record.

## Import and Export Components

It's just the normal Javascript import usage, generally creating a new file for a couple o section of 
components and nothing else.

In matter of normal export or default export, first make sure that the default export and the file itself 
have a similar or the same name. You can declare multiple elements inside a file to export, mostly usefull in 
general o global components files.
This import functionality works with any kind of weird requirement of components, like a chain of components requiring 
a long line of other components and such.

## JSX Markup

So. JSX is just an extension for JS that let us make HTML-like markup. 
Since now the web was mainly dependant on the HTML and CSS or JS where extras that made the 
site better and more interactive.

But with JSX, JS is the main caracter putting the render and it's logic for JS. So we can write JS and HTML at the same time.
CSS is out of the picture by now.

But JSX markup isn't 1 to 1 with html markup, it's way more strict. Some of the 
strict parts are:
- Always have to use a root or base tag for the markup elements
    - This could be a div or any tag, but it could be a fragment which is just a 'empty' tag \<\> \</\>
- CLOSE ALL THE TAGS, even the inline ones
- softCammelCase ALMOST all of the tags, and there's some changes like class is now 'className'
    the aria or data tags might not have to be cammel case'd

You can use HTML, and SVG, to JSX converters online or somewhere.
