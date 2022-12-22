# NOTES

- [NOTES](#notes)
  - [TODO](#todo)
  - [Articles](#articles)
  - [Snippets](#snippets)
    - [a link to download a file](#a-link-to-download-a-file)

## TODO

Make sure we know how to build/export final build with Parcel

## Articles

JEST with React and Typescript [https://www.codementor.io/@rajjeet/add-jest-to-your-typescript-project-with-4-easy-steps-1do5lhfjb1](https://www.codementor.io/@rajjeet/add-jest-to-your-typescript-project-with-4-easy-steps-1do5lhfjb1)

## Snippets

### a link to download a file

```html
<a download="name_of_downloaded_file" href="path/to/the/download/file"> Clicking on this link will force download the file</a>
```

## Problems

### On parsing LINKED LIST data from the GeekdoAPI

```tsx
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.geekdo.com/api/geekitem/linkeditems?linkdata_index=boardgame&objectid=1013&objecttype=property&showcount=25&sort=rank&subtype=boardgamecategory')}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        var values = Object.values(JSON.parse(data.contents))[0];
        setGameList(values as any);
      });
```
I had a lot of problems parsing the data from the API. Its structure looks roughly like
```json
{
  "contents": {
    "items": [
        { GAME },
        { GAME }
    ],
    "itemdata": [ ... ],
    "linkdata": [ ... ],
    "config": { ... }
  }
}
```

First, JSON.parse turns the JSON text from the API call into its Javascript object

Next, we have to get the games from the object:

I only wanted to get the "items" array from the object.
I had to play around with Object.value, Object.entries and Object.keys to figure out which one was correct-

Object.keys only returns the keys

```
[
  "items",
  "itemdata",
  "linkdata",
  "config
]
```

Object.entries returns an array of key-value pairs. In this case, it returns

```
[
  "items": [blob],
  "itemdata":[blob],
  "linkdata":[blob],
  "config":{blob}
]

```

When I tried to get the items array out of it, it would always say "xxx.items is undefined"

Object.values returns only the values of the key-value pairs, in this case
```
[
  [blob],
  [blob],
  [blob], 
  {blob}
]
```

Since we use Object.values(), we can call Object.values(blob)[0] to get the first array from the output

## 12/21

### Game List

For my linked items lists, I had to switch the CORS proxy I was using, from allorigin to codetabs, because allorigin's service went down, and I couldn't work without grabbing the lists. This gave me the data from the API in a slightly different format.


### Game Detail

I ended up needing to use a BGG API XML -> JSON for accessing the official XML API to get individual game data. The response from this library returns an array with the object inside it, as it can be used to search multiple things (and would contain multiple objects)

When we are using objects with React, you have to be really careful. You can pull properties from the objects, but if the property you're trying to access and render the data of is an object, React will want you to use an array.

I also had issues with my category/slider onclick, you have to make sure you pass the const into a function like `onClick={() => {function(params)}}`

I do think I came up with a clever way to conditinally render each of the linked item lists, even though it means we have to iterate through that property multiple times.
