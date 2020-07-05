# test_td
Test TD Engine

Tricks:
* on Windows:
    - run `npm install --global --production windows-build-tools` as administrator
    - run `set-executionpolicy RemoteSigned` => `Y` on PowerShell as administrator to enable `gulp`

    - fix docker
        run `SC config trustedinstaller start=auto` and `bcdedit /set HypervisorLaunchType auto` as administrator

