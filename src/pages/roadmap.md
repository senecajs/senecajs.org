---
template: main.html
title: Seneca Roadmap
---

## Seneca Roadmap

Seneca tries to follow a quarterly release schedule with major changes gated behind subsequent releases.
This is to enforce the continuity of development, and to ensure that semver is properly followed.
These goals may change at any time based on challenges encountered or contributions from the community.

### 3.0.0 - June 2016

* Remove error handling in favor of bubble up methods.
* Fix inconsistencies in err flow through callbacks.
* Add new logging system to support object based logging.
* Announce deprecation of 'old' logging system.

### 4.0 - August 2016
* Plugin seneca-web no longer included by default.
* Transport specification versioned and updated.
* Transport refactored fully into seneca-transport.
* New base Transport layer for preview.
* Full transport pluggability supported.

### 5.0 - November 2016
* Full deprecation of seneca.pin.
* Removal of rarely used default plugins.
* Reworking of seneca plugin system.
* Performance optimisations.
