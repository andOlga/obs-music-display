# obs-music-display

This is a small tool for the OBS Browser Source, meant to play music on a stream, and show the name of the new track and its author as songs change in a small, temporary pop-up.

No external applications or OBS plug-ins are required for this to function. Your music is simply played by obs-music-display itself, via an `<audio>` tag.
Therefore, this does not work with any streaming services, but those are garbage anyway. You will need locally stored music.

A web server is not required to serve `index.html`, you can just point OBS directly to it.
