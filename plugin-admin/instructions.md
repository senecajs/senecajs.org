# Instructions and notes for parsing plugin data generation

Three data sources:
- badgeData.js (data gathered from various sources by hand - pattern-agnostic badge urls and list of valid badges)
- familyData.js (data on each family, written by hand and stored here - short description, long description, list of member plugins, and empty plugins object for populating with data in generate-include-plugins.js (original file unchanged))
- plugin-admin/node_modules folder (dependencies installed via install_deps.sh script - loops `npm install` over space-separated hand-written list of plugins gathered from github)

Things to improve upon/change:
- empty plugins object in familyData.js - worth the extra lines in generate-include-plugins.js to move it to there? probably
- create txt file with (newline-separated?) list of all published plugins to be read into install_deps.sh - easier maintainance

Steps to generate plugins_gen.ejs data file for plugins-2023 page:
1. [Optional_Update] Update badgeData.js and familyData.js with any new badge or family information
2. [Optional_Update] Add additional package names to DEPS variable in install_deps.sh, run install_deps.sh to update dependencies and install npm information to plugin-admin/node_modules folder
3. Run generate-include-plugins.js from this plugin-admin directory. This script takes data from the aforementioned three sources and writes the output to an EJS file, formatted as an existing JS variable wrapped with EJS tags, as per specifications required for an EJS include file. This file is written to the src/pages/plugins-2023 directory under the name plugins_gen.ejs