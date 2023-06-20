# Instructions and notes for parsing plugin data generation

Three data sources:
- badgeData.js (data gathered from various sources by hand - patternless badge urls and list of valid badges)
- familyData.js (data on each family, written by hand and stored here - short description, long description, list of member plugins, and empty plugins object for populating with data in generate-include-plugins.js (original file unchanged))
- plugin-admin/node_modules folder (dependencies installed via install_deps.sh script - loops `npm install` over space-separated hand-written list of plugins gathered from github)

Things to improve upon/change:
- empty plugins object in familyData.js - worth the extra lines in generate-include-plugins.js to move it to there? probably
- create txt file with (newline-separated?) list of all published plugins to be read into install_deps.sh - easier maintainance

Steps to generate plugins_gen.ejs data file for plugins-2023 page:
1. [Optional_Update] Update badgeData.js and familyData.js with any new badge or family information
2. [Optional_Update] Add additional package names to DEPS variable in install_deps.sh, run install_deps.sh *from plugin-admin directory* to update dependencies+install npm information to plugin-admin/node_modules folder
3. Run generate-include-plugins.js from this plugin-admin directory. This script takes data from the aforementioned three sources and writes the output to an EJS file, formatted as an existing JS variable wrapped with EJS tags, as per specifications required for an EJS include file. This file is written to the src/pages/plugins-2023 directory under the name plugins_gen.ejs. No further action needed.

Adding a plugin:
> Refer to existing data if needs be.
1. Add plugin name to the members array in the relevant family in `familyData.js`. If needs be, create a new family with a short description, long desctiption, list of members, and empty plugins object.
2. Add plugin name to the space-separated list in the DEPS variable in `install_deps.sh`.
3. Add new object (key: plugin name) to `badgeData.js`. In the value object, include a list of status badges you want to include, and the deepscan_url, deepscan_badge, and maintainability_badge keys with empty string values. Fill in these values if you require the badge.
4. Run the `install_deps.sh` bash script, followed by the `generate-include-plugins.js` node script. Refresh site. No further action required.
