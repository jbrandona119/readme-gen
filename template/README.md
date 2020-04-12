# TOP LINE

<%= moduleName %>
<% if (badge) { %> standard-readme compliant<% } %><% if (badges) { %> TODO: Put more badges here.<% } %>

<%= description %>

<% } %>## Table of Contents

<% if (background) { %>- Background <% } %>- Install

<% } %><% if (background) { %>## Background

<% } %>## Install

Usage

<% } %>## Maintainers

[@<%= maintainers %>](https://github.com/<%= maintainers %>)
Contributing

Small note: If editing the README, please conform to the standard-readme specification.
License

<% if (mit) { %>MIT<% } %><% if (!mit && license) { %><%= license %><% } %> © <% if (year) { %><%= new Date().getFullYear() %><% } else { %><%= diffYear %><% } %> <%= licensee %>