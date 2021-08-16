## Review

### Misc
- the `README.md` is present, simple and useful
- the `package.json` is not clogged with a lot of useless stuff
- `ESlint` is setup, which is **really** valued
- adding `Prettier` _inside_ of ESlint on top of it, would have been perfect (the code is looking nice without it tho!)
- nothing too scary in the `.gitignore` (like whole `node_modules` commit) but it's part of the scaffold of the project I guess (`package-lock.json` is totally fine committed)
- you're writting your components in the React way, like `<MyComponent />` which is totally okay and valid. People usually write it as `<my-component></my-component>`, it's just a preference. Some things are important tho, I highly recomend giving a read to this [Style guide](https://vuejs.org/v2/style-guide/)
- try to have your commits written in English, and following some kind of convention, I do recommend [this one](https://www.conventionalcommits.org/en/v1.0.0/)

### Code itself

#### General
- the CSS looks clean so far
- the components are properly split and are following Vue's conventions pretty well
- improvement to the vue router: you can use [`lazy imports`](https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk) to not load useless code in your view until you have actually moved to the view itself (eg: `/results`)

#### App.vue

- the use of `@/components` rather than `../../../../components` or so, is appreciated

#### routes
- do not use names with diacritics, like `Résultats` for obvious reasons (code is aimed to be written mostly in english)
- the point above, prevents the use of a cleaner form usage like
```html
<router-link to="{ name: 'results' }"> <!-- name: 'Résultats' is meeh -->
  Resultats
</router-link>
```
- `mode: history` is the modern and prefered approach nowadays


#### Home.vue
- common missconception, but `id="wordToGuess"` is wrong, valid html out of the box would be `id="word-to-guess"`
- I guess you understood [why `data` needs a `return`](https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function), nice! 👍
- this is wrong, but a LOT of people do this mistake
```html
<Letter v-for="(item, index) in hiddenWord"
  :letter="item"
  :key="index" />
```
Same as in React, you **CANNOT** use the `index` of a `v-for` loop for your `:key`, this is actually counter productive. More info can be found in this [blog post](https://michaelnthiessen.com/force-re-render#why-do-we-need-to-use-key-in-vue).

Actually, for your use case you can even pass `:key="item"` or even something static `:key="'yolo-swag'"` but please do not use `index` here.
- `Array.from(Array(26).keys(), i => String.fromCharCode(i + 65))` looks nice, feel free to pass it to a `computed` to clear up the `template`
- `@add-attempt` could be the way of writting (seems logical) but it's actually `@addAtempt`, the `$emit` needs to stay the same tho. Kinda tricky yeah.. (at the end, it's still works this way ofc)
- try to disallow an empty `player` name
- this code
```js
if (!~this.hiddenWord.indexOf('_'))
  return true;
return false;
```
can probably be written in a shorter way, I let you find how. It will reduce the cognitive impact of the next person reading your code
- `this.$store.dispatch("addEntries", { player: this.player, score: this.attempts.length})` is really good because you do use a Vuex action (common missconception is to use a mutation directly), and pass it an object. Destructuring it in `store/index.js` would have been perfect to know what is expected and could allow you to pass defaults at the same time
- `listWord.js` should probably be named `words_list.js` (🐍-case) and not be in `views` but rather `utils` or alike. Also, maybe look into [Faker](https://github.com/marak/Faker.js/) to have it done for you, rather than hardcoding it
- the usage of `mapState` is nice (also it's location, at the start of `computed`)! Feel free to use `mapActions` rather than `$store.dispatch` to use either one or the other, but not to mix-match the writting.
- _stylistic feedback_: some shorcuts that you can apply by using the JS coercien `v-if="results.length > 0"` equals `v-if="results.length"`
- _UX feedback_: what about adding some logic to reduce the amount of total letters? The whole alphabet is pretty huge and very fun 😱
- _futureproof feedback_: try to use relative units as much as you can, like `rem` for your CSS, will cause less headache. The end result is still good! 💪

### Results.vue
- nothing too special, beware of `:key`

### store/index.js
- working solution, feel free to destructure `{ commit }` to not have to use `context.commit` (_stylistic feedback_)
- you can do a lot of things with Vuex: enums, advanced dynamic loading of modules, naming conventions, splitting the whole thing properly **BUT** since Vuex is updated and some alternatives are available, I don't think that you should sweat it too much. Keep it functional and simple if your use-case is not more complex.
- maybe enable [`strict mode`](https://vuex.vuejs.org/guide/strict.html) and you're gucci
- remember that [`sort` mutates](https://doesitmutate.xyz/sort/) This is not a deal-breaker in your situation tho, more of a reminder. Your use-case is not really a blocker here.

### components
- all of your components are named, which is a really good habit!
- if you install the [Vue devtools for Vue 2.x](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en), you could notice that the devtools are not as chaotic as the React ones and are baked with Vuex out of the box. The Vue 3.x devtools are available [here](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en). You can download it too, there are not working together but you can have them installed side-by-side wo/ any issues!
