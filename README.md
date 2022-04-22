101weiqiLocalizer
=================

Source code for the [101weiqiLocalizer Firefox Add-On](https://addons.mozilla.org/en-CA/firefox/addon/101weiqilocalizer/)

[101weiqi.com](https://www.101weiqi.com/) is a Chinese-language web site where you can solve problems for the Go / Weiqi / Baduk board game. Unfortunately, there is no English-language localization of that website. This add-on aims to make it easier for those of us who don't read Chinese to use that site, by adding a script to 101weiqi.com's web pages which translates strings to English. It does not alter the functionality of 101weiqi.com in any way.

This add-on was initially developed as a Chrome extension, and it's available here with permission from the author, who also licenced it as open source with the MIT license. The original GitHub repository is no longer available.

### Translations

Additional translations are welcome. Please create an [issue](https://github.com/bani/101weiqiLocalizer/issues) with the original term in plain text and the correct translation. If it's part of a longer phrase, please include the whole phrase.

Image translation is currently disabled, but you can also send me the image URL (Right-click and select "Copy Image Link") with the translation and I'll start working on those.

### Development

See [Getting started with web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) to learn how to test and package an extension.

The following commands are particularly useful (adding here as a note to myself):
```
web-ext lint
web-ext run
web-ext build
```
