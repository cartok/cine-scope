# TODOs

## 1. Base

- [x] create layout
  - [x] header
    - [x] logo/name
    - [x] nav
    - [x] searchbar
  - [x] content area
- [x] create empty pages
  - [x] /
    - [x] redirect from `/` to `/filter` for now
  - [x] /filter
  - [x] /details

## 2. Searchbar Functionality

- [ ] implement plain text search (first page results are enough).

## 3. Movie-Detail Page

- [ ] create movie detail page content

## 4. Base Filtering & Sorting

Don't know how to filter and sort at all, as the `/search/movie` api has no options for that. Could request all pages, but the API is limited to 40 requests per 10s (4/1s), page size is 20.

The `/discover/movie` has many filter and sorting options but not a text query filter. There is the `with_keywords` filter but it lead to 0 results when testing it.

This means to keep it simple I would only **allow to either search by text or filter and sort**.
Could create a minimalistic search UI in the header, which would redirect to the details page. _(will go this way)_

**Otherwise:** If search field and a filter or the sorting has a value i'd have to request all pages of `/search/movie` and all pages of `/discover/movie` and filter out every result of `/search/movie`, which is not included in every result of `/discover/movie`.

- [ ] create categories filter ui (table vs dropdowns?)
- [ ] prev-next pagination
- [ ] add sort ui
  - [ ] title (asc)
  - [ ] title (desc)
  - [ ] release_date
  - [ ] ... others

## 5. Advanced Filtering

- [ ] add more filters
- [ ] maybe dropdown UI instead of table UI

## 6. Improve UI

- [ ] general
  - [ ] font(s): https://google-fonts.nuxtjs.org/getting-started/setup
        use `fontaine`?
  - [ ] style
  - [ ] (optional) animations
  - [ ] (optional) logo
  - [ ] (optional) dark/light mode
- [ ] tablet
- [ ] mobile

## 7. Improve Quality

- [x] prettier
- [ ] vue-axe-next
- [ ] check and improve on web vitals
- [ ] (optional) i18n
- [ ] (optional) git commit and push hooks

## x. Add start page content

Not a part of the task.

- Current Cinema Program -> /movie/now_playing
- Popular -> /movie/popular
- Top Rated -> /movie/top_rated
