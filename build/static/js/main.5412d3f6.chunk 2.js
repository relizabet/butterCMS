(this.webpackJsonpbutter_blog=this.webpackJsonpbutter_blog||[]).push([[0],{80:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n(33),i=n.n(a),r=n(5),o=n(23),j=n(10),d=n(11),l=n(13),p=n(12),b=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"App-header",children:Object(c.jsx)("h2",{children:"My blog"})}),Object(c.jsx)("div",{children:this.props.children})]})}}]),n}(s.Component),h=n(18),u=n.n(h),O=u()("f97fe920e02ef96c54289b5b72ee04d1a8821449"),v=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={loaded:!1},c}return Object(d.a)(n,[{key:"fetchPosts",value:function(e){var t=this;O.post.list({page:e,page_size:10}).then((function(e){t.setState({loaded:!0,resp:e.data})}))}},{key:"componentWillMount",value:function(){var e=this.props.params.page||1;this.fetchPosts(e)}},{key:"componentWillReceiveProps",value:function(e){this.setState({loaded:!1});var t=e.params.page||1;this.fetchPosts(t)}},{key:"render",value:function(){if(this.state.loaded){var e=this.state.resp.meta,t=e.next_page,n=e.previous_page;return Object(c.jsxs)("div",{children:[this.state.resp.data.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(r.b,{to:"/post/".concat(e.slug),children:e.title})},e.slug)})),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{children:[n&&Object(c.jsx)(r.b,{to:"/p/".concat(n),children:"Prev"}),t&&Object(c.jsx)(r.b,{to:"/p/".concat(t),children:"Next"})]})]})}return Object(c.jsx)("div",{children:"Loading..."})}}]),n}(s.Component),f=n(38),x=u()("f97fe920e02ef96c54289b5b72ee04d1a8821449"),m=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={loaded:!1},c}return Object(d.a)(n,[{key:"componentWillMount",value:function(){var e=this,t=this.props.params.slug;x.post.retrieve(t).then((function(t){e.setState({loaded:!0,post:t.data.data})}))}},{key:"render",value:function(){if(this.state.loaded){var e=this.state.post;return Object(c.jsxs)("div",{children:[Object(c.jsxs)(f.a,{children:[Object(c.jsx)("title",{children:e.seo_title}),Object(c.jsx)("meta",{name:"description",content:e.meta_description}),Object(c.jsx)("meta",{name:"og:image",content:e.featured_image})]}),Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}return Object(c.jsx)("div",{children:"Loading..."})}}]),n}(s.Component),g=function(e){return Object(c.jsx)(r.d,Object(o.a)(Object(o.a)({},e),{},{children:Object(c.jsxs)(r.c,{path:"/",component:b,children:[Object(c.jsx)(r.a,{component:v}),Object(c.jsx)(r.c,{path:"/p/:page",component:v}),Object(c.jsx)(r.c,{path:"/post/:slug",component:m})]})}))};i.a.render(Object(c.jsx)(g,{history:r.e}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.5412d3f6.chunk.js.map