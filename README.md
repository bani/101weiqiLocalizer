101weiqiLocalizer
=================

Source code for the [101weiqiLocalizer Firefox Add-On](https://addons.mozilla.org/en-CA/firefox/addon/101weiqilocalizer/)

[101weiqi.com](https://www.101weiqi.com/) is a Chinese web site where you can solve problems for the Go / Weiqi / Baduk board game. This add-on aims to make it easier for those of us who don't read Chinese to use that site, by adding a script to 101weiqi.com's pages that replaces a list of common words with the English translation. It does not alter the functionality of 101weiqi.com in any way.

This add-on was initially developed as a Chrome extension, and it's distributed here with permission from the author, Marcel Grünauer. The original code is [here](https://github.com/MarcelGruenauer2/101weiqiLocalizer).

### Translations

Additional translations, or improvements for the current ones, are welcome. Please create an [issue](https://github.com/bani/101weiqiLocalizer/issues) with the original term in plain text and the correct translation. If it's part of a longer phrase, please include the whole phrase. If it's already partially translated, disable the add-on in order to get the full phrase.

There is also a [spreadsheet with all translations](https://docs.google.com/spreadsheets/d/1VGGhi-gUZ8tYWNyDaZnRfguxABbh1GESVkJT2pE-PP0/edit?usp=sharing) available where you can leave comments, but please notify me if you leave a comment or I won't see it.

### Development

See [Getting started with web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) to learn how to test and package an extension.

The following commands are particularly useful (adding here as a note to myself):
```
web-ext lint
web-ext run
web-ext build
```
