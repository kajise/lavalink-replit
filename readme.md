### ⚠️ FORKER'S MESSAGE
This repository is originally from [DarrenOfficial](https://github.com/DarrenOfficial), we just decided to alter the code to use a different Lavalink build.
> The original repository uses [melike2d's](https://github.com/melike2d) Lavalink release while this fork uses [davidffa's](https://github.com/davidffa) release.

|               Features                | melike2d | davidffa |
|---------------------------------------|----------|----------|
| Getyarn support                       |    ❌    |    ✅   |
| Reddit support                        |    ❌    |    ✅   |
| Yandex Music (Яндекс Музыка) support  |    ❌    |    ✅   |
| Memory usage                          |    ???   |   ???   |

### ℹ  Installation

Fork this github repository. then create a new replit project. \
or [click me](https://replit.com/github/kajise/lavalink-replit) to install it automatically.

### How to use
```
* Run the replit
* copy the replit url and put it to your bot
⚠ Make sure you remove `https://` and always connect with the port 443 
```

### Ignore authentication fail from 172.X.X.X
It's normal, especially when you ping it with UptimeRobot or Freshworks. \
it might show multiple times when you refresh the repl.it window.

![](https://cdn.discordapp.com/attachments/855346696590589976/947185882056777818/unknown.png) \

Example `bot config`

![botconfreplit](https://cdn.darrennathanael.com/assets/discord/lavalinkconfigbot.jpeg) \
Test bot from https://github.com/SudhanPlayz/Discord-MusicBot

- - -

## Note & such
The default port to connect is `443` and the default password is `maybeiwasboring` \
You can’t change the lavalink port since replit makes it a default PORT to receive connections from.

### How to keep the replit on with [freshping](https://www.freshworks.com/website-monitoring/)
Go to [freshping](https://www.freshworks.com/website-monitoring/), and set HTTP request to your app I.e. `https://lavalink-replit.sexsells.repl.co/metrics`
and it should show that it's online. if it's show offline, go to your application.yml and make sure metrics is set to on

![freshpingisbetterthanuptimerobot](https://darrennathanael.com/cdn/873E3AB4-8862-49A2-B5F6-5A0B97E3BCF1.jpeg)

- - -
These are only mandatory if the Run button doesn't work.
```bash
chmod +x start.sh
```
```bash
./start.sh
```


## Additional info

The [lavalink server](https://github.com/davidffa/lavalink) is based on https://github.com/davidffa/lavalink and the download URL is always refreshed when a new GitHub release is pushed so everytime theres a new update it will auto grabs it from their repository.
