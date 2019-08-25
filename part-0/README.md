## 0.4 New Note

```
title 0.4 New note
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server-->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: main.js
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: data.json
browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_post
note over browser:
HTTP POST request to the address new_note. 
end note
server-->browser: HTTP status 302
note over browser:
The Server creates a new note object, and adds it to an array in json-format
end note
```

## 0.5 Single Page App

```
title 0.4 New note
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
server-->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
server-->browser: main.js
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: data.json
browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_post
note over browser:
HTTP POST request to the address new_note. 
end note
server-->browser: HTTP status 302
note over browser:
The Server creates a new note object, and adds it to an array in json-format
end note
```

## 0.6 New note
![alt text](https://raw.githubusercontent.com/gabrielamuller/fullstack_react/master/part-0/img/0.6_new_note.png "0.6 New Note")

```
title 0.6 New note
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
server-->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
server-->browser: main.js
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: data.json
browser->server: HTTP POST fullstack-exampleapp.herokuapp.com/new_note_spa
note over browser:
HTTP POST request to the address new_note_spa. 
end note
server-->browser: HTTP status 201, new note created
```